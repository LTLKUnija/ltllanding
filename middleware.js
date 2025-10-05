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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin") || "";
  const nonce = generateNonce();

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

  try {
    res.headers.set('x-middleware-cache', 'no-cache');
  } catch (_) {}

  addAntiClickjackingHeaders(res);
  applyCsp(res, nonce, request);

  try {
    res.cookies.set("csp-nonce", nonce, { path: "/", httpOnly: false, sameSite: "strict", secure: true });
  } catch (_) {}

  try {
    const overrideList = [
      'content-security-policy',
      'x-csp-nonce',
      'x-frame-options',
    ].join(',');
    res.headers.set('x-middleware-override-headers', overrideList);
  } catch (_) {}

  try {
    res.headers.set('x-mw-test', 'hit');
  } catch (_) {}

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
  const hostname = request?.nextUrl?.hostname || (request?.headers?.get?.("host") || "").split(":")[0];
  const normalizedHost = (hostname || "").toLowerCase();
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(normalizedHost) || normalizedHost.endsWith(".localhost") || normalizedHost.endsWith(".local");
  const isDevEnv = process.env.NODE_ENV !== "production";
  const isDev = isDevEnv || isLocalHost;
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
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
    `script-src-elem ${scriptSrc}`,
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    `style-src-elem 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    `style-src-attr 'unsafe-inline'`,
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
  try { res.headers.delete("Content-Security-Policy"); } catch (_) {}
  res.headers.set("Content-Security-Policy", directives.join("; "));
  res.headers.set("Cache-Control", "no-store, must-revalidate");
  res.headers.set("Vercel-CDN-Cache-Control", "no-store");
  res.headers.set("x-csp-nonce", nonce);
} 

// Ensure middleware runs on all routes, including localized and root ones
export const config = {
  matcher: '/:path*',
};
