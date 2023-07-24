import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/financial-reporting.module.scss";
import Link from "next/link";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function FinacialReportsData() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const [annualLink, setAnnualLinks] = useState([]);
  const [activeAnnualLinks, setActiveLinks] = useState([]);

  useEffect(() => {
    const getAnnualLinks = async () => {
      const db = getFirestore();
      const collectionNames = ["financialReports"];

      const allData = [];

      for (const collectionName of collectionNames) {
        const colRef = collection(db, collectionName);
        try {
          const snapshot = await getDocs(colRef);
          snapshot.docs.forEach((doc) => {
            allData.push({ ...doc.data(), id: doc.id });
          });
          console.log(allData);
        } catch (error) {
          console.error(
            `Error fetching data from ${collectionName}:`,
            error.message
          );
        }
      }

      setAnnualLinks(allData.reverse());
      setActiveLinks(allData[0].links);
    };

    getAnnualLinks();
  }, []);

  function AnnualTabHandler(e) {
    let idx = annualLink.findIndex((tab) => tab.id == e.target.dataset.id);
    let temp = [...annualLink];
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setAnnualLinks(temp);
    setActiveLinks(temp[idx].links);
  }

  return (
    <div className={styles.presentationsWrapper}>
      <h3 className={styles.sectionTitle}>
        {t.finacialReporting.annualReporting}
      </h3>
      <div className={styles.tabsList}>
        {annualLink.map((year, idx) => {
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
      <div className={styles.reporstBlockList}>
        {activeAnnualLinks.map((link, index) => (
          <div key={index} className={styles.reportItem}>
            <img src="/assets/images/Pdficon.svg" alt="Pdf File" />
            <Link href={link.linkUrl} className={styles.linkStyle}>
              {link.linkName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
