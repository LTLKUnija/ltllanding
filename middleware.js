import { NextResponse } from "next/server";

function generateNonce() {
  // Edge-safe nonce: UUID without dashes (sufficiently random for CSP nonces)
  return crypto.randomUUID().replace(/-/g, "");
}

const defaultLocale = "lt";
const locales = ["en", "lt"];

const ALLOWED_ORIGINS = new Set([
  "https://www.ltlku.lt",
]);

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin") || "";
  const nonce = generateNonce(16);

  const isApi = pathname.startsWith("/api/");
  if (isApi) {
    if (request.method === "OPTIONS") {
      const res = new NextResponse(null, { status: 204 });
      if (ALLOWED_ORIGINS.has(origin)) {
        res.headers.set("Access-Control-Allow-Origin", origin);
        res.headers.set("Vary", "Origin");
        res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
        res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.headers.set("Access-Control-Max-Age", "600");
        // res.headers.set("Access-Control-Allow-Credentials", "true"); // only if needed
      }
      res.headers.set("x-csp-nonce", nonce);
      return res;
    }
    // For non-OPTIONS API requests: pass through but add CORS headers when origin is allowed
    const res = NextResponse.next({
      request: {
        headers: new Headers({ ...Object.fromEntries(request.headers), "x-csp-nonce": nonce }),
      },
    });
    if (ALLOWED_ORIGINS.has(origin)) {
      res.headers.set("Access-Control-Allow-Origin", origin);
      res.headers.set("Vary", "Origin");
      res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.headers.set("Access-Control-Max-Age", "600");
      // res.headers.set("Access-Control-Allow-Credentials", "true"); // only if needed
    }
    res.headers.set("x-csp-nonce", nonce);
    return res;
  }

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    // Non-API, already localized: continue, but add anti-clickjacking headers
    const res = NextResponse.next({
      request: {
        headers: new Headers({ ...Object.fromEntries(request.headers), "x-csp-nonce": nonce }),
      },
    });
    addAntiClickjackingHeaders(res);
    applyCsp(res, nonce);
    return res;
  }

  const cookieLocale = request.cookies["NEXT_LOCALE"];

  if (cookieLocale && locales.includes(cookieLocale)) {
    url.pathname = `/${cookieLocale}${pathname}`;
    const res = NextResponse.redirect(url);
    addAntiClickjackingHeaders(res);
    applyCsp(res, nonce);
    return res;
  }

  url.pathname = `/${defaultLocale}${pathname}`;
  const res = NextResponse.redirect(url);
  addAntiClickjackingHeaders(res);
  applyCsp(res, nonce);
  return res;
}

function addAntiClickjackingHeaders(res) {
  res.headers.set("X-Frame-Options", "DENY");
  const existingCSP = res.headers.get("Content-Security-Policy");
  if (existingCSP) {
    if (!/frame-ancestors\s+'none'/.test(existingCSP)) {
      let newCSP = existingCSP.replace(/frame-ancestors\s[^;]+;?/g, "").trim();
      if (!newCSP.endsWith(";") && newCSP.length > 0) newCSP += ";";
      newCSP += " frame-ancestors 'none';";
      res.headers.set("Content-Security-Policy", newCSP);
    }
  } else {
    res.headers.set(
      "Content-Security-Policy",
      "frame-ancestors 'none';"
    );
  }
}

function applyCsp(res, nonce) {
  const isDev = process.env.NODE_ENV !== "production";
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    ...(isDev ? ["'unsafe-eval'"] : []),
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://maps.googleapis.com",
    "https://www.google.com",
    "https://cdn-cookieyes.com",
    "https://www.gstatic.com",
  ].join(" ");
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://firestore.googleapis.com https://www.google-analytics.com https://maps.googleapis.com https://region1.google-analytics.com https://www.google.com https://cdn-cookieyes.com https://submit-form.com https://docs.google.com",
    "img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com",
    "frame-src 'self' https://www.google.com",
    "manifest-src 'self'",
    "media-src 'self'",
    "child-src 'none'",
    "prefetch-src 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "worker-src 'self' blob:",
    "upgrade-insecure-requests",
  ];
  res.headers.set("Content-Security-Policy", directives.join("; "));
  res.headers.set("x-csp-nonce", nonce);
}
