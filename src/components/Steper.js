import React from "react";
import styles from "@/styles/Steper.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Steper = ({ steperData }) => {
  const { t } = useTranslation("common");

  const showSteper = steperData.map((step, idx) => {
    const arr = step.title.split(".");
    return (
      <div className={styles.stepsItem} key={idx}>
        <div className={styles.stepsNumber}>{step.number}</div>
        <div className={styles.stepsText}>
          <h2 className={styles.stepsTitle}>{t(step.title)}</h2>
          <div className={styles.stepsDescription}>
            {t(step.description)}
            {step.showOnStep4 && (
              <Link href="/contacts" className="readMoreLink">
                ( {t("headerNavLinks.contacts")} )
              </Link>
            )}
            {t(step.restOfDescription)}
            {step.bulletBlock && (
              <ul>
                {step.bulletBlock?.map((bullet, idx) => {
                  return <li key={idx}>{t(bullet)}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  });
  return <div className={styles.stepsList}>{showSteper}</div>;
};

export default Steper;
