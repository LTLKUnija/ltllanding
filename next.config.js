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
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com https://www.google.com https://cdn-cookieyes.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://firestore.googleapis.com https://www.google-analytics.com https://maps.googleapis.com https://region1.google-analytics.com; img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com; frame-src 'self' https://www.google.com; object-src 'none'; frame-ancestors 'none';"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.ltlku.lt"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET"
          }
        ]
      }
    ];
  },
};

module.exports = nextConfig;
