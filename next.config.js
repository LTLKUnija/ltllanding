const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ["images.ctfassets.net", "storage.googleapis.com"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=()" },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://firestore.googleapis.com https://www.gstatic.com/firebasejs https://maps.googleapis.com https://maps.gstatic.com https://cdn-cookieyes.com https://www.google.com/recaptcha/; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; connect-src 'self' https://www.google-analytics.com https://firestore.googleapis.com https://region1.google-analytics.com https://maps.googleapis.com https://www.google.com https://cdn-cookieyes.com https://submit-form.com https://docs.google.com; frame-src 'self' https://www.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; media-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests;"
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.ltlku.lt"
          },
          {
            key: "Vary",
            value: "Origin"
          }
        ],
      },
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://firestore.googleapis.com https://www.gstatic.com/firebasejs https://maps.googleapis.com https://maps.gstatic.com https://cdn-cookieyes.com https://www.google.com/recaptcha/; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; connect-src 'self' https://www.google-analytics.com https://firestore.googleapis.com https://region1.google-analytics.com https://maps.googleapis.com https://www.google.com https://cdn-cookieyes.com https://submit-form.com https://docs.google.com; frame-src 'self' https://www.google.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; manifest-src 'self'; media-src 'self'; worker-src 'self' blob:; upgrade-insecure-requests;"
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.ltlku.lt"
          },
          {
            key: "Vary",
            value: "Origin"
          }
        ]
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
