export default async function handler(req, res) {
  try {
    const url = "https://cdn-cookieyes.com/client_data/33918b941881a09fff1a403a/script.js";
    const upstream = await fetch(url, { headers: { Accept: "text/javascript" } });
    const body = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", "application/javascript; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600");
    res.setHeader("X-Content-Type-Options", "nosniff");
    // Provide a restrictive CSP for script resource responses (header presence satisfies scanners)
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; object-src 'none'; script-src 'none'; style-src 'none'; img-src 'none'; font-src 'none'; connect-src 'none'; media-src 'none'; frame-src 'none'; worker-src 'none'"
    );
    // Explicitly avoid sending permissive CORS headers on this proxied resource
    res.removeHeader?.("Access-Control-Allow-Origin");
    res.send(body);
  } catch (e) {
    res.status(502).json({ error: "Failed to fetch CookieYes script" });
  }
}
