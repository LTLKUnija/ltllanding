import styles from "@/styles/news[id].module.scss";
import { useRouter } from "next/router";
import IndexLayout from "@/Layouts/IndexLayout";
import { findNewsBySlug, formatText } from "@/utils/helpers";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { applyPageCspHeaders } from "@/lib/csp";
import { getNewsList } from "@/common/dataGetters";
import { useSelector } from "react-redux";
import { getNewsState } from "@/store/news/news.slice";

export default function NewsPage() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [selectedNews, setSelectedNews] = useState();
  const [currentYear, setCurrentYear] = useState("");

  const newsData = useSelector(getNewsState);

  const backToYearHandler = (e) => {
    localStorage.setItem("backToYearIdx", e.target.dataset.idx);
    router.push({
      pathname: `/news`,
      query: { year: currentYear },
    });
  };

  useEffect(() => {
    if (newsData.length < 1) return;

    const found = findNewsBySlug(newsData, router.query.id);
    setSelectedNews(found?.item);
    setCurrentYear(found?.year ?? "");

    // Old /news/<year>-<idx> links: show the date-based URL instead.
    if (found && found.slug !== router.query.id) {
      router.replace(`/news/${found.slug}`, undefined, { shallow: true });
    }
  }, [newsData, router.query.id]);

  return (
    <IndexLayout>
      <main className={styles.newsPageMain}>
        <div className={styles.silngleNewsWrapper}>
          <h1 className="page-title">{t("footerNavLinks.news")}</h1>

          {selectedNews && (
            <div>
              <div className={styles.newsDate}>{selectedNews.date}</div>
              <div className={styles.newsTitle}>
                {router.locale === "lt"
                  ? selectedNews.title
                  : selectedNews.titleEn}
              </div>
              <div className={styles.newsText}>
                {router.locale === "lt"
                  ? formatText(selectedNews.text)
                  : formatText(selectedNews.textEn)}
              </div>
            </div>
          )}
          <span
            style={{ cursor: "pointer" }}
            className={styles.backToNewsLink}
            onClick={backToYearHandler}
          >
            &#x3c; {t("news.backToNews")}
          </span>
        </div>
      </main>
    </IndexLayout>
  );
}

export async function getServerSideProps({ locale, res }) {
  applyPageCspHeaders(res);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
