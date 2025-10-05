export function applyPageCspHeaders(res) {
  // Generate a per-request nonce and set CSP headers on the response
  const nonce = crypto.randomUUID().replace(/-/g, "");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://cdn-cookieyes.com https://www.gstatic.com https://www.google.com https://firestore.googleapis.com`,
      `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self' https://firestore.googleapis.com",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ")
  );
  res.setHeader("x-csp-nonce", nonce);
  return nonce;
}

