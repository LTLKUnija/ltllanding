import styles from "@/styles/security.module.scss";
import Accordion from "@/components/Accordion";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { basic } from "@/common/AccordionSchemas";

export default function Security() {
  const {t} = useTranslation('common');

  return (
    <IndexLayout>
      <main>
        <section className={styles.securityPage}>
          <div className={styles.securityPageWrapper}>
            <h1 className="page-title">{t('security.title')}</h1>
            <div className={styles.securityPageDescription}>
              {t('security.description')}
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>{t('business.capitalLoan.faq')}</h3>
            <div className={styles.faqList}>
              <Accordion faqData={basic} singleLevel="true" />
            </div>
          </div>
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