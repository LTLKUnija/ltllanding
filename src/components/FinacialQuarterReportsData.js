import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/financial-reporting.module.scss";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function FinacialQuartalReportsData() {
  const router = useRouter();
  const {t} = useTranslation('common');

  const [quarterYearLink, setquarterYearLink] = useState([]);
  const [activeQuarters, setActiveQuarters] = useState([]);

  useEffect(() => {
    const getQuarterlLinks = async () => {
      const db = getFirestore();
      let collectionName =
        router.locale === "lt"
          ? "financialQuartalReportsLT"
          : "financialQuartalReportsENG";
      const colRef = collection(db, collectionName);

      try {
        const snapshot = await getDocs(colRef);
        const allData = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });

        setquarterYearLink(allData.reverse());
        setActiveQuarters(allData[0].quarters);
      } catch (error) {
        console.error(
          `Error fetching data from ${collectionName}:`,
          error.message
        );
      }
    };

    getQuarterlLinks();
  }, [router]);

  function AnnualTabHandler(e) {
    let idx = quarterYearLink.findIndex((tab) => tab.id == e.target.dataset.id);
    let temp = [...quarterYearLink];
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setquarterYearLink(temp);
    setActiveQuarters(temp[idx].quarters);
  }

  return (
    <div className={styles.presentationsWrapper}>
      <h3 className={styles.sectionTitle}>
        {t('finacialReporting.quarterlyReports')}
      </h3>
      <div className={[styles.tabsList, styles.center].join(" ")}>
        {quarterYearLink.map((year, idx) => {
          return (
            <div
              key={idx}
              data-id={year.id}
              onClick={(e) => {
                AnnualTabHandler(e);
              }}
              className={year.active ? "active-year-tab" : ""}
            >
              {year.year}
            </div>
          );
        })}
      </div>
      <div className={styles.quarterList}>
        {activeQuarters.map((quarter, index) => (
          <div key={index} className={styles.quarterItem}>
            <h4>{quarter.quarterName}</h4>
            <div className={styles.linkList}>
              {quarter.quarterLinks.map((link, idx) => {
                return (
                  <div key={idx} className={styles.linksItem} target="_blank">
                    <div className={styles.iconImg}>
                      <img src="/assets/images/Pdficon.svg" alt="Pdf IFile" />
                    </div>
                    <Link href={link.linkUrl} target="_blank">
                      {link.linkName}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
