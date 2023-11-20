import React from "react";
import styles from "@/styles/InterestRate.module.scss";
import { useTranslation } from "next-i18next";

export default function InterestRate() {
  const { t } = useTranslation("common");

  return (
    <div className={styles.ratesTableWrapper}>
      <h3>{t("termDeposit.interestRatesArticle.title")}</h3>
      <p>{t("termDeposit.interestRatesArticle.description")}</p>
      <div className={styles.ratesContainer}>
        <div className={styles.tableHeading}>
          <div className={[styles.tableHeadingCell, styles.column1].join(" ")}>
            {t("termDeposit.interestRatesArticle.period")}
          </div>
          <div className={[styles.tableHeadingCell, styles.column2].join(" ")}>
            {t("termDeposit.interestRatesArticle.interestRate")} (EUR)
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            1 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            -
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            3 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            3.75%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            6 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.00%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            9 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.10%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            12 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.20%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            18 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.25%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            24 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.30%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            36 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.20%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            48 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.00%
          </div>
        </div>
        <div className={styles.tableDataLine}>
          <div className={[styles.tableDataCell, styles.column1].join(" ")}>
            60 {t("termDeposit.interestRatesArticle.month")}
          </div>
          <div className={[styles.tableDataCell, styles.column2].join(" ")}>
            4.00%
          </div>
        </div>
      </div>
    </div>
  );
}
