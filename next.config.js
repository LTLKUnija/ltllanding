const { i18n } = require("./next-i18next.config");

// CSP is applied dynamically via middleware with a per-request nonce.
// To avoid conflicts and remove 'unsafe-inline' in script-src, we omit CSP here.

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ["images.ctfassets.net", "storage.googleapis.com"],
  },
  async headers() {
    return [
      // Harden CSP for static assets to satisfy scanners without affecting HTML
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'self' data:; font-src 'self'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      {
        source: "/_next/data/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'none'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'self' data:; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      // Some scanners request a mis-encoded path where the value of the image URL is placed into the pathname
      // e.g. "/%2F_next%2Fstatic%2Fmedia%2F...&w=640&q=75". Provide a strict CSP for those requests too.
      {
        source: "/%2F_next%2Fstatic/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'self'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      {
        source: "/:locale/%2F_next%2Fstatic/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'self'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'self' data:; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; img-src 'none'; script-src 'none'; style-src 'none'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; img-src 'none'; script-src 'none'; style-src 'none'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; img-src 'none'; script-src 'none'; style-src 'none'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Access-Control-Allow-Origin", value: "https://www.ltlku.lt" },
          { key: "Vary", value: "Origin" },
        ],
      },
      {
        source: "/_next/:path*",
        headers: [
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
