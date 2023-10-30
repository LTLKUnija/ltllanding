import styles from "@/styles/payments.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import CurrencyConverter from "@/components/CurrencyConverter";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Payments() {
  const {t} = useTranslation('common');
  
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
                    {t('payments.benefitsArticle.article1.title')}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t('payments.benefitsArticle.article1.description')}
                    <ul>
                      <li>{t('payments.benefitsArticle.article1.bullet1')}</li>
                      <li>{t('payments.benefitsArticle.article1.bullet2')}</li>
                      <li>{t('payments.benefitsArticle.article1.bullet3')}</li>
                      <li>{t('payments.benefitsArticle.article1.bullet4')}</li>
                      <li>{t('payments.benefitsArticle.article1.bullet5')}</li>
                      <li>{t('payments.benefitsArticle.article1.bullet6')}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t('payments.benefitsArticle.article2.title')}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t('payments.benefitsArticle.article2.description')}
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t('payments.benefitsArticle.article3.title')}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t('payments.benefitsArticle.article3.description')}
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t('payments.benefitsArticle.article4.title')}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t('payments.benefitsArticle.article4.description')}
                    <ul>
                      <li>{t('payments.benefitsArticle.article4.bullet1')}</li>
                      <li>{t('payments.benefitsArticle.article4.bullet2')}</li>
                      <li>{t('payments.benefitsArticle.article4.bullet3')}</li>
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

export async function getStaticProps({ locale }) {
   return {
     props: {
       ...(await serverSideTranslations(locale, [
         'common',
       ])),
     },
   }
 }
 