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

  // Compose CSP value and set override request headers to ensure application even on cached HTML
  const csp = buildCsp(nonce, request);
  const reqHeaders = new Headers(request.headers);
  try {
    reqHeaders.set('x-csp-nonce', nonce);
    reqHeaders.set('x-middleware-cache', 'no-cache');
    reqHeaders.set('x-middleware-override-headers', 'content-security-policy,x-csp-nonce,x-frame-options,x-mw-test');
    reqHeaders.set('x-middleware-override-headers-content-security-policy', csp);
    reqHeaders.set('x-middleware-override-headers-x-csp-nonce', nonce);
    reqHeaders.set('x-middleware-override-headers-x-frame-options', 'DENY');
    reqHeaders.set('x-middleware-override-headers-x-mw-test', 'hit');
  } catch (_) {}

  const res = NextResponse.next({ request: { headers: reqHeaders } });

  // Also set response headers (effective for SSR/non-cached)
  addAntiClickjackingHeaders(res);
  try { res.headers.delete('Content-Security-Policy'); } catch (_) {}
  try { res.headers.set('Content-Security-Policy', csp); } catch (_) {}
  try { res.headers.set('x-csp-nonce', nonce); } catch (_) {}
  try { res.cookies.set('csp-nonce', nonce, { path: '/', httpOnly: false, sameSite: 'strict', secure: true }); } catch (_) {}

  // Temporary diagnostics header: helps verify Middleware hit in prod
  try { res.headers.set('x-mw-test', 'hit'); } catch (_) {}
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
  // Deprecated for override flow. Left for compatibility where response headers are respected.
  const hostname = request?.nextUrl?.hostname || (request?.headers?.get?.("host") || "").split(":")[0];
  const normalizedHost = (hostname || "").toLowerCase();
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(normalizedHost) || normalizedHost.endsWith(".localhost") || normalizedHost.endsWith(".local");
  const isDevEnv = process.env.NODE_ENV !== "production";
  const isDev = isDevEnv || isLocalHost;
  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    // 'strict-dynamic', // removed due to use of nonce
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
    // Mirror for browsers that separate element vs attr contexts
    `script-src-elem ${scriptSrc}`,
    // Allow style elements with nonce; keep attributes handled separately
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

function buildCsp(nonce, request) {
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
  return directives.join('; ');
}

// Ensure middleware runs on HTML routes and skips obvious static assets and Next internals
export const config = {
  matcher: [{
    source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    missing: [
      { type: 'header', key: 'next-router-prefetch' },
      { type: 'header', key: 'purpose', value: 'prefetch' },
    ],
  }],
};
