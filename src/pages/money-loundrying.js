import styles from "@/styles/money-loundrying.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function MoneyLoundrying() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <IndexLayout>
      <main>
        <section className={styles.pageWrapper}>
          <div className={styles.pageList}>
            <div className={styles.heroItem}>
              <h1 className={styles.title}>{t.moneyLoundering.title}</h1>
            </div>
          </div>
        </section>
        <section className={styles.articlesSection}>
          <div className={styles.articlesWrapper}>
            <div className={styles.articlesBlock}>
              <p>{t.moneyLoundering.articleBlock.article1}</p>
            </div>
            <div className={styles.articlesBlock}>
              <p>{t.moneyLoundering.articleBlock.article2}</p>
            </div>
          </div>
          <p className={styles.articleParagraph}>
            {t.moneyLoundering.articleBlock.article3}
          </p>
        </section>
      </main>
    </IndexLayout>
  );
}
