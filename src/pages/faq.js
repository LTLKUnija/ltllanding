import styles from "@/styles/faq.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import { DepositFAQ } from "@/common/AccordionSchemas";
import { CurrentAccFAQ } from "@/common/AccordionSchemas";
import { LoanForPrivates } from "@/common/AccordionSchemas";
import { LoanForBusiness } from "@/common/AccordionSchemas";

export default function Deposit() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <>
      <IndexLayout>
        <main>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.faq.pageTitle}</h3>
              <div className={styles.faqList}>
                <h1>{t.common.deposit}</h1>
                <Accordion faqData={DepositFAQ} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t.common.currentAccount}</h1>
                <Accordion faqData={CurrentAccFAQ} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t.common.loanForPrivates}</h1>
                <Accordion faqData={LoanForPrivates} singleLevel="true" />
              </div>
              <div className={styles.faqList}>
                <h1>{t.common.loanForBusiness}</h1>
                <Accordion faqData={LoanForBusiness} singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
