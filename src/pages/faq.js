import styles from "@/styles/faq.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import {
  getCurrentAccFAQ,
  getDepositFAQ,
  getLoanForBusiness,
  getLoanForPrivatesState,
} from "@/store/faqList/faqList.slice";

export default function Deposit() {
  const { t } = useTranslation("common");
  const DepositFAQ = useSelector(getDepositFAQ);
  const CurrentAccFAQ = useSelector(getCurrentAccFAQ);
  const LoanForPrivates = useSelector(getLoanForPrivatesState);
  const LoanForBusiness = useSelector(getLoanForBusiness);

  return (
    <>
      <IndexLayout>
        <main>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t("faq.pageTitle")}</h3>
              {!!DepositFAQ.data && (
                <div className={styles.faqList}>
                  <h1>{t("common.deposit")}</h1>
                  <Accordion faqData={DepositFAQ.data} singleLevel="true" />
                </div>
              )}
              {!!CurrentAccFAQ.data && (
                <div className={styles.faqList}>
                  <h1>{t("common.currentAccount")}</h1>
                  <Accordion faqData={CurrentAccFAQ.data} singleLevel="true" />
                </div>
              )}
              {!!LoanForPrivates.data && (
                <div className={styles.faqList}>
                  <h1>{t("common.loanForPrivates")}</h1>
                  <Accordion
                    faqData={LoanForPrivates.data}
                    singleLevel="true"
                  />
                </div>
              )}
              {!!LoanForBusiness.data && (
                <div className={styles.faqList}>
                  <h1>{t("common.loanForBusiness")}</h1>
                  <Accordion
                    faqData={LoanForBusiness.data}
                    singleLevel="true"
                  />
                </div>
              )}
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
