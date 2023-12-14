import { useState, useEffect } from "react";
import styles from "@/styles/financial-reporting.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { getFactsheetsState } from "@/store/factsheets/factsheets.slice";

export const FactSheetsData = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const factsheetsData = useSelector(getFactsheetsState);

  const [factSheetList, setFactSheetList] = useState([]);
  const [activeFactSheetList, setActiveFactSheetList] = useState([]);

  const factsheetTabHandler = (e) => {
    let idx = factSheetList.findIndex(
      (year) => year.uid == e.target.dataset.id
    );
    let temp = JSON.parse(JSON.stringify(factSheetList));
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setFactSheetList(temp);
    setActiveFactSheetList(temp[idx].quarters);
  };

  useEffect(() => {
    if (factsheetsData.length < 1) return;

    setFactSheetList([...factsheetsData].reverse());
    setActiveFactSheetList([...factsheetsData].reverse()[0].quarters);
  }, [factsheetsData]);

  return (
    <div className={styles.ReportsWrapper}>
      <h3 className={styles.sectionTitle}>
        {t("finacialReporting.factsheets")}
      </h3>
      <div className={[styles.tabsList, styles.center].join(" ")}>
        {factSheetList.map((year, idx) => {
          return (
            <div
              key={idx}
              data-id={year.uid}
              onClick={(e) => {
                factsheetTabHandler(e);
              }}
              className={year.active ? "active-year-tab" : ""}
            >
              {year.year}
            </div>
          );
        })}
      </div>
      <div className={styles.quarterList}>
        {activeFactSheetList.map((quater, idx) => {
          return (
            <div key={idx} className={styles.quarterItem}>
              <h4>{quater.quarterName}</h4>
              <div className={styles.linkList}>
                {quater.quarterLinks.map((link, index) => {
                  return (
                    <div className={styles.linksItem} key={index}>
                      <img
                        className={styles.iconImg}
                        src="/assets/images/Pdficon.svg"
                        alt="Pdf File"
                      />
                      <Link
                        href={
                          router.locale === "lt" ? link.linkUrl : link.linkUrlEn
                        }
                      >
                        {router.locale === "lt"
                          ? link.linkName
                          : link.linkNameEn}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
