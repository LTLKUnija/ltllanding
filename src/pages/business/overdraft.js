import styles from "@/styles/equity-loan.module.scss";
import businessStyle from "@/styles/business.investment-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { investmentLoanSteperData } from "@/common/stepersData";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/investmentLoan_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { businessOverdraftInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { applyPageCspHeaders } from "@/lib/csp";
import ClientSupport from "@/components/ClientSupport";
import { useSelector } from "react-redux";
import {
  getLoanForBusiness,
  getOverdraftFAQ,
} from "@/store/faqList/faqList.slice";
import Breadcrumbs from "@/components/Breadcrumbs";
import LoanApplicationForm from "@/components/LoanApplicationForm";

export default function Overdraft() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const loanFaqData = useSelector(getLoanForBusiness);
  const overdraftFaqData = useSelector(getOverdraftFAQ);

  // Accordion expects body/bodyEn as arrays of strings. Normalize here so the
  // OverdraftFAQ Firestore doc can store them as plain strings (easier to enter
  // field-by-field in the console).
  const overdraftFaqItems = overdraftFaqData.data?.map((item) => ({
    ...item,
    body: Array.isArray(item.body) ? item.body : [item.body],
    bodyEn: Array.isArray(item.bodyEn) ? item.bodyEn : [item.bodyEn],
  }));

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={businessStyle.pageWrapper}>
          <div className={businessStyle.pageList}>
            <div className="breadcrumbs_Wrapper">
              <Breadcrumbs
                business={true}
                area={`${t("headerNavLinks.credit")}`}
                page={`${t("headerNavLinks.overdraft")}`}
              />
            </div>
            <LoanApplicationForm type="business" />
            <div className={businessStyle.heroItem}>
              <div className={businessStyle.imgBlock}>
                <Image
                  src={BackBtn}
                  alt={"Hero Mobile"}
                  style={{ width: "24", height: "12" }}
                  className={[
                    businessStyle.heroImage,
                    businessStyle.backBtn,
                  ].join(" ")}
                  onClick={handleBack}
                />
                <Image
                  src={HeroMobile}
                  alt={"Hero Mobile"}
                  style={{ width: "70%", height: "auto" }}
                  className={businessStyle.heroImage}
                />
              </div>
              <h1 className={businessStyle.title}>
                {t("business.overdraft.heroBlock.title")}
              </h1>
              <div className={businessStyle.description}>
                <p>{t("business.overdraft.heroBlock.description")}</p>
                <ul>
                  <li>{t("business.overdraft.heroBlock.bullet1")}</li>
                  <li>{t("business.overdraft.heroBlock.bullet2")}</li>
                  <li>{t("business.overdraft.heroBlock.bullet3")}</li>
                  <li>{t("business.overdraft.heroBlock.bullet4")}</li>
                  <li>{t("business.overdraft.heroBlock.bullet5")}</li>
                  <li>{t("business.overdraft.heroBlock.bullet6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={businessOverdraftInnerLinkList} />
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div
            className={[
              styles.benefitsWrapper,
              router.locale === "lt" ? styles.benefitsWrapperLT : "",
            ].join(" ")}
          >
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("business.overdraft.benefitsArticle.article1.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("business.overdraft.benefitsArticle.article1.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("business.overdraft.benefitsArticle.article2.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("business.overdraft.benefitsArticle.article2.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("business.overdraft.benefitsArticle.article3.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("business.overdraft.benefitsArticle.article3.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("business.overdraft.benefitsArticle.article4.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("business.overdraft.benefitsArticle.article4.description")}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t("business.investmentLoan.stepProcess.title")}</h3>
            </div>
            <Steper steperData={investmentLoanSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <ClientSupport />
        </section>
        <section id="faq" className={styles.faqSection}>
          {(!!loanFaqData.data || !!overdraftFaqItems) && (
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t("business.overdraft.faq")}</h3>
              <div className={styles.faqList}>
                {!!loanFaqData.data && (
                  <Accordion faqData={loanFaqData.data} singleLevel="true" />
                )}
                {!!overdraftFaqItems && (
                  <Accordion faqData={overdraftFaqItems} singleLevel="true" />
                )}
              </div>
            </div>
          )}
        </section>
      </main>
    </IndexLayout>
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
