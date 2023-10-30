import styles from "@/styles/payments.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import CurrencyConverter from "@/components/CurrencyConverter";
import Image from "next/image";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function Payments() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;
  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.paymentsHeroSection}>
            <div className={styles.paymentsHeroWrapper}>
              <div className={styles.paymentsHeroList}>
                <div className={styles.paymentsImg}></div>
                <CurrencyConverter />
              </div>
            </div>
          </section>
          <section className={styles.paymentsArticeWrapper}>
            <div className={styles.paymentsArticleBlock}>
              <div className={styles.paymentsArticeBlockList}>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t.payments.benefitsArticle.article1.title}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t.payments.benefitsArticle.article1.description}
                    <ul>
                      <li>{t.payments.benefitsArticle.article1.bullet1}</li>
                      <li>{t.payments.benefitsArticle.article1.bullet2}</li>
                      <li>{t.payments.benefitsArticle.article1.bullet3}</li>
                      <li>{t.payments.benefitsArticle.article1.bullet4}</li>
                      <li>{t.payments.benefitsArticle.article1.bullet5}</li>
                      <li>{t.payments.benefitsArticle.article1.bullet6}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t.payments.benefitsArticle.article2.title}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t.payments.benefitsArticle.article2.description}
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t.payments.benefitsArticle.article3.title}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t.payments.benefitsArticle.article3.description}
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t.payments.benefitsArticle.article4.title}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t.payments.benefitsArticle.article4.description}
                    <ul>
                      <li>{t.payments.benefitsArticle.article4.bullet1}</li>
                      <li>{t.payments.benefitsArticle.article4.bullet2}</li>
                      <li>{t.payments.benefitsArticle.article4.bullet3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
