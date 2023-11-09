import { useState, useEffect } from "react";
import styles from "@/styles/financial-reporting.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { getAnnualReportsState } from "@/store/annualReports/annualReports.slice";
import { useRouter } from "next/router";

export default function FinacialReportsData() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [annualLinks, setAnnualLinks] = useState([]);
  const [activeAnnualLinks, setActiveAnnualLinks] = useState([]);

  const annualData = useSelector(getAnnualReportsState);

  function AnnualTabHandler(e) {
    let idx = annualLinks.findIndex((tab) => tab.id == e.target.dataset.id);
    let temp = JSON.parse(JSON.stringify(annualLinks));

    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });

    setAnnualLinks(temp);
    setActiveAnnualLinks(temp[idx].links);
  }

  useEffect(() => {
    if (annualData.length < 1) return;

    setAnnualLinks([...annualData].reverse());
    setActiveAnnualLinks([...annualData].reverse()[0].links);
  }, [annualData]);

  return (
    <div className={styles.presentationsWrapper}>
      <h3 className={styles.sectionTitle}>
        {t("finacialReporting.annualReporting")}
      </h3>
      <div className={styles.tabsList}>
        {annualLinks.map((year, idx) => {
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
            <Link
              href={link.linkUrl}
              className={styles.linkStyle}
              target="_blank"
            >
              {router.locale === "lt" ? link.linkName : link.linkNameEn}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
