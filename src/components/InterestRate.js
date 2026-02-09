import React from "react";
import styles from "@/styles/InterestRate.module.scss";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import DepositCampaign from "../../public/assets/images/consumer_depositPage_campaign.jpg";

export default function InterestRate({ rateList }) {
  const { t } = useTranslation("common");

  const getTermLabel = (term) => {
    let label = t("termDeposit.interestRatesArticle.month");
    if (term % 10 === 1 && term % 100 !== 11) {
      label = t("termDeposit.interestRatesArticle.month");
    } else if (
      term % 10 >= 2 &&
      term % 10 <= 4 &&
      (term % 100 < 10 || term % 100 >= 20)
    ) {
      label = t("termDeposit.interestRatesArticle.month");
    } else {
      label = t("termDeposit.interestRatesArticle.months");
    }
    return `${term} ${label}`;
  };

  return (
    <div className={styles.ratesTableWrapper}>
      <Image
        src={DepositCampaign}
        alt="Deposits campaign"
        className={styles.headerImage}
        priority
      />  
      <h3>{t("termDeposit.interestRatesArticle.title")}</h3>
      <p>{t("termDeposit.interestRatesArticle.description")}</p>
      <div className={styles.ratesNotesWrapper}>
        <h1>{t("termDeposit.interestRatesArticle.note1")}</h1>
        <p>{t("termDeposit.interestRatesArticle.note2")}</p>
      </div>
      <div className={styles.ratesContainer}>
        <div className={styles.tableHeading}>
          <div className={[styles.tableHeadingCell, styles.column1].join(" ")}>
            {t("termDeposit.interestRatesArticle.period")}
          </div>
          <div className={[styles.tableHeadingCell, styles.column2].join(" ")}>
            {t("termDeposit.interestRatesArticle.interestRate")} (EUR)
          </div>
        </div>
        {rateList.map((rate) => (
          <div key={rate.term} className={styles.tableDataLine}>
            <div className={[styles.tableDataCell, styles.column1].join(" ")}>
              {getTermLabel(rate.term)}
            </div>
            <div className={[styles.tableDataCell, styles.column2].join(" ")}>
              {rate.rate}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
