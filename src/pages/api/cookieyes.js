export default async function handler(req, res) {
  try {
    const url = "https://cdn-cookieyes.com/client_data/33918b941881a09fff1a403a/script.js";
    const upstream = await fetch(url, { headers: { Accept: "text/javascript" } });
    const body = await upstream.text();
    res.status(upstream.status);
    res.setHeader("Content-Type", "application/javascript; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=300, s-maxage=600");
    res.setHeader("X-Content-Type-Options", "nosniff");
    // Explicitly avoid sending permissive CORS headers on this proxied resource
    res.removeHeader?.("Access-Control-Allow-Origin");
    res.send(body);
  } catch (e) {
    res.status(502).json({ error: "Failed to fetch CookieYes script" });
  }
}

