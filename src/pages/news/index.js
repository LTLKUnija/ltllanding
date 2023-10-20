import IndexLayout from "@/Layouts/IndexLayout";
import styles from "@/styles/news.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function News() {
  const router = useRouter();

  const t = router.locale === "lt" ? lt : en;

  const [allNewsData, setAllNewsData] = useState([]);
  const [currentYearNewsData, setCurrentYearNewsData] = useState({});
  const [yearsLinksVocab, setYearsLinksVocab] = useState([
    { year: "2023", selected: true },
    { year: "2022", selected: false },
    { year: "2021", selected: false },
    { year: "2020", selected: false },
    { year: "2019", selected: false },
    { year: "2018", selected: false },
  ]);

  const getCurrentYearNewsData = () => {
    const currentYear = yearsLinksVocab.filter((year) => year.selected)[0];
    const currentYearNews = allNewsData.filter(
      (n) => n.id === currentYear?.year
    )[0];
    setCurrentYearNewsData(currentYearNews);
  };

  const yearSelectedTabHandler = (e) => {
    const idx = parseInt(e.target.dataset.id);
    const updatedYearsLinksVocab = yearsLinksVocab.map((year, index) => {
      return { ...year, selected: index === idx };
    });
    setYearsLinksVocab(updatedYearsLinksVocab);
  };

  useEffect(() => {

    if(!router.query.year) return;

    const {year: prevRouteYear} = router.query;
    const updatedYearsLinksVocab = yearsLinksVocab.map(year => {
      return {...year, selected: year.year === prevRouteYear}
    })

    setYearsLinksVocab(updatedYearsLinksVocab);
  
  }, [router.isReady])

  useEffect(() => {
      const getNewsList = async () => {
      const db = getFirestore();
      const collectionName = "news";
      const colRef = collection(db, collectionName);

      try {
        const snapshot = await getDocs(colRef);
        const allData = snapshot.docs.map((doc) => {
          const data = doc.data();
          const newsData = data.news.map((newsItem) => {
            return {
              title: newsItem.title,
              text: newsItem.text,
              date: newsItem.date,
            };
          });
          return {
            ...data,
            id: doc.id,
            news: newsData,
          };
        });
        setAllNewsData(allData.reverse());
      } catch (error) {
        console.error(
          `Error fetching data from ${collectionName}:`,
          error.message
        );
      }
    };

    getNewsList();
  }, []);

  useEffect(() => {
    getCurrentYearNewsData();
  }, [allNewsData]);

  useEffect(() => {
    getCurrentYearNewsData();

  }, [yearsLinksVocab]);

  return (
    <>
      <IndexLayout>
        <main className={styles.newsListBlock}>
          <div className={styles.newsListWrapper}>
            <h1 className="page-title">{t.news.title}</h1>
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
                {currentYearNewsData?.news?.reverse().map((item, idx) => {
                  return (
                    <div className={styles.singleNewsPreviewBlock} key={idx}>
                      <div className={styles.newsDate}>{item.date}</div>
                      <div className={styles.newsTitle}>{item.title}</div>
                      <div className={styles.newsPreviewText}>{item.text}</div>
                      <div>
                        <Link
                          className={styles.readMoreLink}
                          href={`news/${currentYearNewsData?.id}-${idx}`}
                        >
                          {t.news.readMore} &#x3e;
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
    </>
  );
}
