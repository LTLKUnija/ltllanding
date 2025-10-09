export function applyPageCspHeaders(res) {
  // Generate a per-request nonce and set CSP headers on the response
  const nonce = crypto.randomUUID().replace(/-/g, "");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      // Scripts (allow GTM/GA, CookieYes, Maps/Recaptcha, Firebase)
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://cdn-cookieyes.com https://www.gstatic.com https://www.google.com https://firestore.googleapis.com https://www.gstatic.com/firebasejs https://maps.googleapis.com https://maps.gstatic.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
      // Some scanners/browsers look at *-elem specifically
      `script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://cdn-cookieyes.com https://www.gstatic.com https://www.google.com https://firestore.googleapis.com https://www.gstatic.com/firebasejs https://maps.googleapis.com https://maps.gstatic.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
      // Stylesheets and inline style elements
      `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com 'unsafe-inline'`,
      `style-src-elem 'self' 'nonce-${nonce}' https://fonts.googleapis.com 'unsafe-inline'`,
      // Allow style attributes (React inline style attributes, vendor widgets)
      `style-src-attr 'unsafe-inline'`,
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images (Contentful, GCS, Maps assets, CookieYes)
      "img-src 'self' data: https://images.ctfassets.net https://storage.googleapis.com https://maps.gstatic.com https://maps.googleapis.com https://cdn-cookieyes.com",
      // XHR/fetch endpoints
      "connect-src 'self' https://firestore.googleapis.com https://www.google-analytics.com https://region1.google-analytics.com https://maps.googleapis.com https://www.google.com https://cdn-cookieyes.com https://directory.cookieyes.com https://log.cookieyes.com https://submit-form.com https://docs.google.com",
      // Frames (Recaptcha)
      "frame-src 'self' https://www.google.com",
      // Hardening
      "object-src 'none'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; ")
  );
  res.setHeader("x-csp-nonce", nonce);
  return nonce;
}
