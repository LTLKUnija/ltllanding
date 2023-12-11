import React from "react";
import styles from "@/styles/Steper.module.scss";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

const Steper = ({ steperData }) => {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const stepperTConverter = (path) => {
    if (!!path) {
      const pathArr = path.split(".");
      const length = pathArr.length;
      let result = t;
      for (let i = 0; i < length; i++) {
        result = result[pathArr[0]];
        pathArr.splice(0, 1);
      }
      return result;
    }
  };

  const showSteper = steperData.map((step, idx) => {
    const arr = step.title.split(".");
    const bulletList = stepperTConverter(step.bulletBlock);
    return (
      <div className={styles.stepsItem} key={idx}>
        <div className={styles.stepsNumber}>{step.number}</div>
        <div className={styles.stepsText}>
          <h2 className={styles.stepsTitle}>{stepperTConverter(step.title)}</h2>
          <div className={styles.stepsDescription}>
            {stepperTConverter(step.description)}
            {bulletList && (
              <ul>
                {bulletList.map((bullet, idx) => {
                  return <li key={idx}>{bullet}</li>;
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
