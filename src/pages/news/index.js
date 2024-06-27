import IndexLayout from "@/Layouts/IndexLayout";
import styles from "@/styles/news.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { previewTextMaker } from "../../utils/helpers";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import { getNewsState } from "@/store/news/news.slice";
import { yearsLinksVocabData } from "@/common/Constantas";

export default function News() {
  const router = useRouter();

  const { t } = useTranslation("common");

  const newsData = useSelector(getNewsState);

  const [currentYearNewsData, setCurrentYearNewsData] = useState({
    id: undefined,
    news: [],
  });
  const [yearsLinksVocab, setYearsLinksVocab] = useState(yearsLinksVocabData);

  const getCurrentYearNewsData = (data) => {
    const currentYear = yearsLinksVocab.filter((year) => year.selected)[0];
    let currentYearNews = data?.filter((n) => n.id === currentYear?.year)[0];
    let reverseNews = [...currentYearNews?.news].reverse();
    setCurrentYearNewsData({ ...currentYearNews, news: reverseNews });
  };

  const yearSelectedTabHandler = (e) => {
    const idx = parseInt(e.target.dataset.id);
    const updatedYearsLinksVocab = yearsLinksVocab.map((year, index) => {
      return { ...year, selected: index === idx };
    });
    setYearsLinksVocab(updatedYearsLinksVocab);
  };

  useEffect(() => {
    if (!router.query.year) return;

    const { year: prevRouteYear } = router.query;
    const updatedYearsLinksVocab = yearsLinksVocab.map((year) => {
      return { ...year, selected: year.year === prevRouteYear };
    });

    setYearsLinksVocab(updatedYearsLinksVocab);

    router.push({
      pathname: `/news`,
      query: {},
    });
  }, [router.isReady]);

  useEffect(() => {
    if (newsData.length < 1) return;

    getCurrentYearNewsData(newsData);
  }, [newsData, yearsLinksVocab]);

  return (
    <IndexLayout>
      <main className={styles.newsListBlock}>
        <div className={styles.newsListWrapper}>
          <h1 className="page-title">{t("news.title")}</h1>
          <div className={styles.yearlyLinksBlock}>
            {yearsLinksVocab.map((year, idx) => {
              return (
                <div key={idx}>
                  <span
                    data-id={idx}
                    onClick={(e) => yearSelectedTabHandler(e)}
                    className={[
                      styles.yearlyLink,
                      year.selected ? styles.active : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {year.year}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.newsList}>
            <div className="news">
              {newsData.length > 0 &&
                currentYearNewsData?.news?.map((item, idx) => {
                  return (
                    <div className={styles.singleNewsPreviewBlock} key={idx}>
                      <div className={styles.newsDate}>{item.date}</div>
                      <div className={styles.newsTitle}>
                        {router.locale === "lt" ? item.title : item.titleEn}
                      </div>
                      <div className={styles.newsPreviewText}>
                        {previewTextMaker(
                          router.locale === "lt" ? item.text : item.textEn,
                          50
                        ) + " ..."}
                      </div>
                      <div>
                        <Link
                          className={styles.readMoreLink}
                          href={`news/${currentYearNewsData?.id}-${idx}`}
                        >
                          {t("news.readMore")} &#x3e;
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </IndexLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
