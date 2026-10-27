import { getNewsList } from "@/common/dataGetters";
import { newsSlug } from "@/utils/helpers";
import { localeUrl } from "@/components/Seo";

// Every public page. /credits is left out: it's a leftover copy of
// /credits/consumer-loan and canonicalizes to it.
const PAGES = [
  "/",
  "/business",
  "/business/capital-loan",
  "/business/current-account",
  "/business/deposits",
  "/business/investment-loan",
  "/business/overdraft",
  "/business/payments",
  "/business/pricelist",
  "/career",
  "/contacts",
  "/credits/consumer-loan",
  "/credits/equity-loan",
  "/credits/mortgage",
  "/current-account",
  "/deposits",
  "/esg",
  "/faq",
  "/financial-reporting",
  "/licence",
  "/management",
  "/money-loundrying",
  "/news",
  "/open-account",
  "/open-banking",
  "/partnership",
  "/payments",
  "/pricelist",
  "/privacy-policy",
  "/security",
  "/suport-and-complaints",
  "/terms-and-conditions",
];

const escapeXml = (str) =>
  str.replace(/[<>&'"]/g, (c) => `&#${c.charCodeAt(0)};`);

// One <url> per locale, each listing both language versions.
const urlEntries = (path, lastmod) =>
  ["lt", "en"]
    .map(
      (locale) => `  <url>
    <loc>${escapeXml(localeUrl(locale, path))}</loc>${
        lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""
      }
    <xhtml:link rel="alternate" hreflang="lt" href="${escapeXml(localeUrl("lt", path))}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(localeUrl("en", path))}"/>
  </url>`
    )
    .join("\n");

// News paths from Firestore. The sitemap still works without them if
// Firestore is slow or unavailable.
const getNewsPaths = async () => {
  const timeout = new Promise((resolve) => setTimeout(resolve, 5000, []));
  const newsData = await Promise.race([getNewsList(), timeout]);

  return (newsData || []).flatMap((year) =>
    year.news.map((item, idx) => ({
      path: `/news/${newsSlug(year.news, idx)}`,
      lastmod: /^\d{4}[-/]\d{2}[-/]\d{2}$/.test(item.date || "")
        ? item.date.replaceAll("/", "-")
        : null,
    }))
  );
};

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  let newsPaths = [];
  try {
    newsPaths = await getNewsPaths();
  } catch (error) {
    console.error("Sitemap: could not load news:", error.message);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[
  ...PAGES.map((path) => urlEntries(path)),
  ...newsPaths.map(({ path, lastmod }) => urlEntries(path, lastmod)),
].join("\n")}
</urlset>
`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(xml);
  res.end();

  return { props: {} };
}
