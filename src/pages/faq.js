import styles from "@/styles/faq.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { DepositFAQ } from "@/common/AccordionSchemas";
import { CurrentAccFAQ } from "@/common/AccordionSchemas";
import { LoanForPrivates } from "@/common/AccordionSchemas";
import { LoanForBusiness } from "@/common/AccordionSchemas";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Deposit() {
  const {t} = useTranslation('common');

  return (
    <>
      <IndexLayout>
        <main>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t('faq.pageTitle')}</h3>
              <div className={styles.faqList}>
                <h1>{t('common.deposit')}</h1>
                <Accordion faqData={DepositFAQ} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t('common.currentAccount')}</h1>
                <Accordion faqData={CurrentAccFAQ} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t('common.loanForPrivates')}</h1>
                <Accordion faqData={LoanForPrivates} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t('common.loanForBusiness')}</h1>
                <Accordion faqData={LoanForBusiness} singleLevel="true" />
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