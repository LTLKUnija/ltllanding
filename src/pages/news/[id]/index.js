import styles from "@/styles/news[id].module.scss";
import { useRouter } from "next/router";
import IndexLayout from "@/Layouts/IndexLayout";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

    const id = router.asPath.split("/")[2];
    if (id) {
      const [year, idx] = id.split("-");
      const currentNews = newsData?.filter((newsItem) => {
        return newsItem.id === year;
      })[0].news;
      setSelectedNews([...currentNews].reverse()[idx]);

      setCurrentYear(year);
    }
  }, [newsData]);

  const formatText = (text) => {
    return text
      .split("<br/>")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

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

export async function getStaticPaths() {
  const news = await getNewsList();
  const paths = [];
  news.forEach((n) => {
    n.news.forEach((newsItem, i) => {
      paths.push(`/news/${n.id}-${i}`);
    });
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
