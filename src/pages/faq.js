import styles from "@/styles/faq.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { applyPageCspHeaders } from "@/lib/csp";
import { useSelector } from "react-redux";
import {
  getCurrentAccFAQ,
  getDepositFAQ,
  getLoanForBusiness,
  getLoanForPrivatesState,
  getInternetBank,
  getUnionMembership,
} from "@/store/faqList/faqList.slice";

export default function Deposit() {
  const { t } = useTranslation("common");
  const DepositFAQ = useSelector(getDepositFAQ);
  const CurrentAccFAQ = useSelector(getCurrentAccFAQ);
  const LoanForPrivates = useSelector(getLoanForPrivatesState);
  const LoanForBusiness = useSelector(getLoanForBusiness);
  const InternetBank = useSelector(getInternetBank);
  const UnionMembership = useSelector(getUnionMembership);

  return (
    <>
      <IndexLayout>
        <main>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h1 className={styles.faqHeader}>{t("faq.pageTitle")}</h1>
              {!!DepositFAQ.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.deposit")}</h2>
                  <Accordion faqData={DepositFAQ.data} singleLevel="true" />
                </div>
              )}
              {!!CurrentAccFAQ.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.currentAccount")}</h2>
                  <Accordion faqData={CurrentAccFAQ.data} singleLevel="true" />
                </div>
              )}
              {!!UnionMembership.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.unionMembership")}</h2>
                  <Accordion faqData={UnionMembership.data} singleLevel="true" />
                </div>
              )}
              {!!LoanForPrivates.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.loanForPrivates")}</h2>
                  <Accordion
                    faqData={LoanForPrivates.data}
                    singleLevel="true"
                  />
                </div>
              )}
              {!!LoanForBusiness.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.loanForBusiness")}</h2>
                  <Accordion
                    faqData={LoanForBusiness.data}
                    singleLevel="true"
                  />
                </div>
              )}
              {!!InternetBank.data && (
                <div className={styles.faqList}>
                  <h2>{t("common.internetBank")}</h2>
                  <Accordion
                    faqData={InternetBank.data}
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

export async function getServerSideProps({ locale, res }) {
  applyPageCspHeaders(res);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
