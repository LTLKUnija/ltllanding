import styles from "@/styles/news[id].module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import IndexLayout from "@/Layouts/IndexLayout";
import { useEffect, useState } from "react";
import lt from "@/locales/lt";
import en from "@/locales/en";
import { doc, getFirestore, getDoc } from "firebase/firestore";

export default function NewsPage() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;
  const { id } = router.query;

  const [year, idx] = id;
  const [selectedNews, setSelectedNews] = useState();

  const backToYearHandler = (e) => {
    localStorage.setItem("backToYearIdx", e.target.dataset.idx);
    router.push(`/news`);
  };

  useEffect(() => {
    const getNewsDetails = async () => {
      const db = getFirestore();
      const docRef = doc(db, "news", `${year}`);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const newsData = docSnap.get("news");

          if (newsData.length > 0) {
            setSelectedNews(newsData.reverse()[idx]);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };
    getNewsDetails();
  }, []);

  return (
    <>
      <IndexLayout>
        <main className={styles.newsPageMain}>
          <div className={styles.silngleNewsWrapper}>
            <h1 className="page-title">{t.footerNavLinks.news}</h1>

            <div className={styles.yearlyLinksBlock}>
              <span
                data-idx="0"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2023
              </span>
              <span
                data-idx="1"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2022
              </span>
              <span
                data-idx="2"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2021
              </span>
              <span
                data-idx="3"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2020
              </span>
              <span
                data-idx="4"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2019
              </span>
              <span
                data-idx="5"
                className={styles.yearlyLink}
                onClick={(e) => backToYearHandler(e)}
              >
                2018
              </span>
            </div>

            {selectedNews && (
              <div>
                <div className={styles.newsDate}>{selectedNews.date}</div>
                <div className={styles.newsTitle}>{selectedNews.title}</div>
                <div className={styles.newsText}>{selectedNews.text}</div>
              </div>
            )}
            <Link className={styles.backToNewsLink} href="/news">
              &#x3c; Back to News
            </Link>
          </div>
        </main>
      </IndexLayout>
    </>
  );
}
