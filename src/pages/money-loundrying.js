import styles from "@/styles/money-loundrying.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function MoneyLoundrying() {
  const {t} = useTranslation('common');

  return (
    <IndexLayout>
      <main>
        <section className={styles.pageWrapper}>
          <div className={styles.pageList}>
            <div className={styles.heroItem}>
              <h1 className={styles.title}>{t('moneyLoundering.title')}</h1>
            </div>
          </div>
        </section>
        <section className={styles.articlesSection}>
          <div className={styles.articlesWrapper}>
            <div className={styles.articlesBlock}>
              <p>{t('moneyLoundering.articleBlock.article1')}</p>
            </div>
            <div className={styles.articlesBlock}>
              <p>{t('moneyLoundering.articleBlock.article2')}</p>
            </div>
          </div>
          <p className={styles.articleParagraph}>
            {t('moneyLoundering.articleBlock.article3')}
          </p>
        </section>
      </main>
    </IndexLayout>
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
