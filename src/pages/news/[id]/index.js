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


  const [selectedNews, setSelectedNews] = useState();
  const [currentYear, setCurrentYear] = useState('');

  const backToYearHandler = (e) => {
    localStorage.setItem("backToYearIdx", e.target.dataset.idx);
    router.push({
      pathname:`/news`,
      query: {year: currentYear}
    });
  };

  useEffect(() => {

  }, []);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const [year, idx] = id.split('-')
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
      setCurrentYear(year)
    }
  }, [router.isReady])

  return (
    <>
      <IndexLayout>
        <main className={styles.newsPageMain}>
          <div className={styles.silngleNewsWrapper}>
            <h1 className="page-title">{t.footerNavLinks.news}</h1>

            {selectedNews && (
              <div>
                <div className={styles.newsDate}>{selectedNews.date}</div>
                <div className={styles.newsTitle}>{selectedNews.title}</div>
                <div className={styles.newsText}>{selectedNews.text}</div>
              </div>
            )}
            <span style={{cursor: "pointer"}} className={styles.backToNewsLink} onClick={backToYearHandler}>
              &#x3c; Back to News
            </span>
          </div>
        </main>
      </IndexLayout>
    </>
  );
}
