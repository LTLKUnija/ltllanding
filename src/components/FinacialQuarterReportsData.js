import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/financial-reporting.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { getQuarterReportsState } from "@/store/quarterReports/quarterReports.slice";

export default function FinacialQuartalReportsData() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation("common");

  const quarterData = useSelector(getQuarterReportsState);

  const [quarterYearLink, setquarterYearLink] = useState([]);
  const [activeQuarters, setActiveQuarters] = useState([]);

  useEffect(() => {
    if (quarterData.en.length < 1 || quarterData.en.length < 1) return;
    setquarterYearLink(
      locale === "lt"
        ? [...quarterData.lt].reverse()
        : [...quarterData.en].reverse()
    );
    setActiveQuarters(
      locale === "lt"
        ? [...quarterData.lt].reverse()[0].quarters
        : [...quarterData.en].reverse()[0].quarters
    );
  }, [quarterData]);

  function AnnualTabHandler(e) {
    let idx = quarterYearLink.findIndex((tab) => tab.id == e.target.dataset.id);
    let temp = JSON.parse(JSON.stringify(quarterYearLink));
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
        {t("finacialReporting.quarterlyReports")}
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
