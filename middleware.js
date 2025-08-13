import { NextResponse } from "next/server";

const defaultLocale = "lt";
const locales = ["en", "lt"];

const ALLOWED_ORIGINS = new Set([
  "https://www.ltlku.lt",
]);

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin") || "";

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
      return res;
    // For non-OPTIONS API requests: just continue (no locale redirect)
    return NextResponse.next();
  }

  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    // Non-API, already localized: continue, but add anti-clickjacking headers
    const res = NextResponse.next();
    addAntiClickjackingHeaders(res);
    return res;
  }

  const cookieLocale = request.cookies["NEXT_LOCALE"];

  if (cookieLocale && locales.includes(cookieLocale)) {
    url.pathname = `/${cookieLocale}${pathname}`;
    const res = NextResponse.redirect(url);
    addAntiClickjackingHeaders(res);
    return res;
  }

  url.pathname = `/${defaultLocale}${pathname}`;
  const res = NextResponse.redirect(url);
  addAntiClickjackingHeaders(res);
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
