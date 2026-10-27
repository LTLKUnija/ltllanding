import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const SITE_URL = "https://www.ltlku.lt";

// Absolute URL of a path in a locale. Lithuanian is the default locale and has
// no prefix; English lives under /en.
export const localeUrl = (locale, path) => {
  if (locale === "en") return `${SITE_URL}/en${path === "/" ? "" : path}`;
  return `${SITE_URL}${path}`;
};

// Route → key in the "seo" block of common.json,
// e.g. "/business/deposits" → "business_deposits".
const seoKey = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname === "/news/[id]") return "news_article";
  return pathname.slice(1).replace(/\//g, "_");
};

const OG_IMAGE = `${SITE_URL}/assets/images/og-image.png`;

const organization = {
  "@context": "https://schema.org",
  "@type": "BankOrCreditUnion",
  name: "LTL kredito unija",
  alternateName: "LTL Credit Union",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/images/ltl-logo.png`,
  image: OG_IMAGE,
  telephone: "+370 5 205 5240",
  email: "info@ltlku.lt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sporto g. 18",
    postalCode: "LT-09238",
    addressLocality: "Vilnius",
    addressCountry: "LT",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "09:30",
      closes: "15:00",
    },
  ],
  sameAs: ["https://www.facebook.com/LTLKreditoUnija"],
};

// Per-page <head> tags: title, description, canonical, hreflang and social
// previews. Texts come from the "seo" block of common.json; pages can override
// them (e.g. a news article uses its own title).
export default function Seo({ title, description, canonicalPath }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { locale, pathname } = router;

  const key = seoKey(pathname);
  const pageTitle =
    title || t(`seo.${key}.title`, { defaultValue: t("seo.default.title") });
  const pageDescription =
    description ||
    t(`seo.${key}.description`, {
      defaultValue: t("seo.default.description"),
    });

  // Query strings and hashes never belong in the canonical URL.
  const path = canonicalPath || router.asPath.split(/[?#]/)[0];
  const canonical = localeUrl(locale, path);

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="lt" href={localeUrl("lt", path)} />
      <link rel="alternate" hrefLang="en" href={localeUrl("en", path)} />
      <link rel="alternate" hrefLang="x-default" href={localeUrl("lt", path)} />

      <meta
        property="og:type"
        content={pathname === "/news/[id]" ? "article" : "website"}
      />
      <meta property="og:site_name" content={t("seo.default.title")} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale === "en" ? "en_GB" : "lt_LT"} />
      <meta name="twitter:card" content="summary_large_image" />

      {pathname === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      )}
    </Head>
  );
}
