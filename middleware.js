import { NextResponse } from "next/server";
import { isLocalhost } from "@/utils/helpers";

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
    applyCsp(res, nonce, request);
    try { res.cookies.set("csp-nonce", nonce, { path: "/", httpOnly: false, sameSite: "strict", secure: true }); } catch (_) {}
    return res;
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const cookieLocaleMatch = cookieHeader.match(/(?:^|;\s*)NEXT_LOCALE=([^;]+)/);
  const cookieLocale = cookieLocaleMatch ? decodeURIComponent(cookieLocaleMatch[1]) : undefined;

  if (cookieLocale && locales.includes(cookieLocale)) {
    url.pathname = `/${cookieLocale}${pathname}`;
    const res = NextResponse.rewrite(url, {
      request: {
        headers: new Headers({
          ...Object.fromEntries(request.headers),
          "x-csp-nonce": nonce,
        }),
      },
    });
    addAntiClickjackingHeaders(res);
    applyCsp(res, nonce, request);
    try { res.cookies.set("csp-nonce", nonce, { path: "/", httpOnly: false, sameSite: "strict", secure: true }); } catch (_) {}
    return res;
  }

  url.pathname = `/${defaultLocale}${pathname}`;
  const res = NextResponse.rewrite(url, {
    request: {
      headers: new Headers({
        ...Object.fromEntries(request.headers),
        "x-csp-nonce": nonce,
      }),
    },
  });
  addAntiClickjackingHeaders(res);
  applyCsp(res, nonce, request);
  try { res.cookies.set("csp-nonce", nonce, { path: "/", httpOnly: false, sameSite: "strict", secure: true }); } catch (_) {}
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

function applyCsp(res, nonce, request) {
  const isDevEnv = process.env.NODE_ENV !== "production";
  const isDev = isDevEnv || isLocalhost(request);

  const cspHeader = `
    default-src 'self';
    ${isDev ? "'unsafe-eval';" : ""}
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://cdn-cookieyes.com https://www.gstatic.com/firebasejs https://www.gstatic.com/recaptcha/;
    style-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com https://www.google.com;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com https://firestore.googleapis.com https://www.google.com;
    frame-src 'self' https://www.google.com https://www.recaptcha.net;
    worker-src 'self' blob:;
    child-src 'self' blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  res.headers.set('Content-Security-Policy', cspHeader);
  res.headers.set('X-Content-Security-Policy', cspHeader);
  res.headers.set("x-csp-nonce", nonce);
  res.headers.set('X-Nonce', nonce);
}

// Ensure middleware runs on HTML routes and skips obvious static assets and Next internals
export const config = {
  // Run on all routes except obvious static and API. Keep pattern simple to avoid matcher quirks.
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|assets).*)",
  ],
};
