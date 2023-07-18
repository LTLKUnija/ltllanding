import styles from "@/styles/open-banking.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function OpenBanking() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <IndexLayout>
      <main>
        <section className={styles.pageWrapper}>
          <div className={styles.pageList}>
            <div className={styles.heroItem}>
              <h1 className={styles.title}>{t.openBanking.pageTitle}</h1>
              <div className={styles.description}>
                <p>{t.openBanking.heroBlock.description}</p>
                <ul>
                  <li>{t.openBanking.heroBlock.bullet1}</li>
                  <li>{t.openBanking.heroBlock.bullet2}</li>
                  <li>{t.openBanking.heroBlock.bullet3}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.articlesSection}>
          <div className={styles.articlesWrapper}>
            <div className={styles.articlesBlock}>
              <h4>{t.openBanking.articleBlock.article1.title}</h4>
              <p>{t.openBanking.articleBlock.article1.text}</p>
            </div>
            <div className={styles.articlesBlock}>
              <h4>{t.openBanking.articleBlock.article2.title}</h4>
              <p>{t.openBanking.articleBlock.article2.text}</p>
            </div>
            <div className={styles.articlesBlock}>
              <h4>{t.openBanking.articleBlock.article3.title}</h4>
              <p>{t.openBanking.articleBlock.article3.text}</p>
            </div>
          </div>
        </section>
        <section className={styles.contactsSection}>
          <div className={styles.contactsWrapper}>
            <h4>{t.openBanking.contactBlock.title}</h4>
            <p>
              {t.openBanking.contactBlock.text}
              <Link href="/">openbanking@ltlku.lt.</Link>
            </p>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}
