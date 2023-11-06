import styles from "@/styles/equity-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { equityLoanSteperData } from "@/common/stepersData";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/equity_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { equityLoanInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { LoanForPrivates } from "@/common/AccordionSchemas";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Mortgage() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.pageWrapper}>
          <div className={styles.pageList}>
            <div className={styles.heroItem}>
              <div className={styles.imgBlock}>
                <Image
                  src={BackBtn}
                  alt={"Hero Mobile"}
                  style={{ width: "24", height: "12" }}
                  className={[styles.heroImage, styles.backBtn].join(" ")}
                  onClick={handleBack}
                />
                <Image
                  src={HeroMobile}
                  alt={"Hero Mobile"}
                  style={{ width: "70%", height: "auto" }}
                  className={styles.heroImage}
                />
              </div>
              <h1 className={styles.title}>
                {t("equityLoan.heroBlock.title")}
              </h1>
              <div className={styles.description}>
                <p>{t("equityLoan.heroBlock.description")}</p>
                <ul>
                  <li>{t("equityLoan.heroBlock.bullet1")}</li>
                  <li>{t("equityLoan.heroBlock.bullet2")}</li>
                  <li>{t("equityLoan.heroBlock.bullet3")}</li>
                  <li>{t("equityLoan.heroBlock.bullet4")}</li>
                  <li>{t("equityLoan.heroBlock.bullet5")}</li>
                  <li>{t("equityLoan.heroBlock.bullet6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={equityLoanInnerLinkList} />
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("equityLoan.benefitsArticle.article1.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("equityLoan.benefitsArticle.article1.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("equityLoan.benefitsArticle.article2.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("equityLoan.benefitsArticle.article2.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("equityLoan.benefitsArticle.article3.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("equityLoan.benefitsArticle.article3.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("equityLoan.benefitsArticle.article4.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("equityLoan.benefitsArticle.article4.description")}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t("equityLoan.stepProcess.title")}</h3>
            </div>
            <Steper steperData={equityLoanSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <div className={styles.clientSuportWrapper}>
            <h3 className={styles.clientSuportHeader}>
              {t("equityLoan.clientSuport.title")}
            </h3>
            <div className={styles.clientSuportDescription}>
              {t("equityLoan.clientSuport.description")}
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>{t("equityLoan.faq")}</h3>
            <div className={styles.faqList}>
              <Accordion faqData={LoanForPrivates} singleLevel="true" />
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
