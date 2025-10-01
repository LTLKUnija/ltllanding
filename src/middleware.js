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
    // Skip redirect for static files and Next.js internals
    if (
      pathname.includes('.') || // has file extension
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api')
    ) {
      const response = NextResponse.next({
        request: { headers: request.headers }
      });
      addAntiClickjackingHeaders(response);
      applyCsp(response, nonce, request);
      return response;
    }

    // Non-API, already localized: continue, but add anti-clickjacking headers
    const res = NextResponse.next({
      request: {
        headers: new Headers({ ...Object.fromEntries(request.headers), "x-csp-nonce": nonce }),
      },
    });
    addAntiClickjackingHeaders(res);
    res.headers.set("x-csp-nonce", nonce);
    applyCsp(res, nonce, request);
    return res;
  } else {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

    const changeLocaleLogic = false // todo: remove and fix redirect loop
    if (changeLocaleLogic && cookieLocale && locales.includes(cookieLocale)) {
      const { pathname, search } = request.nextUrl;

      const newUrl = new URL(`/${cookieLocale}${pathname}${search}`, request.url);

      const res =  NextResponse.redirect(newUrl);
      addAntiClickjackingHeaders(res);
      applyCsp(res, nonce, request);
      return res;
    }
  }

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  addAntiClickjackingHeaders(response);
  applyCsp(response, nonce, request)
  return response
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
  const hostname = request?.nextUrl?.hostname || (request?.headers?.get?.("host") || "").split(":")[0];
  const normalizedHost = (hostname || "").toLowerCase();
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(normalizedHost) || normalizedHost.endsWith(".localhost") || normalizedHost.endsWith(".local");
  const isDevEnv = process.env.NODE_ENV !== "production";
  const isDev = isDevEnv || isLocalHost;
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    // "'strict-dynamic'",
    // 'unsafe-inline',  // removed for CSP hardening; nonce is used instead
    ...(isDev ? ["'unsafe-eval'"] : []),
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://maps.googleapis.com",
    "https://www.google.com",
    "https://cdn-cookieyes.com",
    "https://www.gstatic.com",
    "https://firestore.googleapis.com",
    "https://www.gstatic.com/firebasejs",
    "https://maps.googleapis.com",
    "https://maps.gstatic.com",
    "https://www.google.com/recaptcha/",
    "https://www.gstatic.com/recaptcha/",
  ].join(" ");
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    `script-src ${scriptSrc}`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://firestore.googleapis.com https://www.google-analytics.com https://maps.googleapis.com https://region1.google-analytics.com https://www.google.com https://cdn-cookieyes.com https://submit-form.com https://docs.google.com https://log.cookieyes.com",
    "img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com https://cdn-cookieyes.com https://images.ctfassets.net https://storage.googleapis.com",
    "frame-src 'self' https://www.google.com",
    "manifest-src 'self'",
    "media-src 'self'",
    "child-src 'none'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "worker-src 'self' blob:",
    "upgrade-insecure-requests",
  ];
  res.headers.set("Content-Security-Policy", directives.join("; "));
  res.headers.set("x-csp-nonce", nonce);
}

// Ensure middleware runs on HTML routes and skips obvious static assets and Next internals
export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|_next/data|api|favicon.ico|robots.txt|sitemap.xml|assets/|.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webmanifest|json|xml|txt|map)).*)",
  ],
};
