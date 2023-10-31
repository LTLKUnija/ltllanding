import styles from "@/styles/equity-loan.module.scss";
import businessStyle from "@/styles/business.capital-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { capitalLoanSteperData } from "@/pages/api/data/stepersData";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/capitalLoan_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { businessInvestmentLoanInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { LoanForBusiness } from "@/common/AccordionSchemas";
import ClientSupport from "@/components/ClientSupport";

export default function Mortgage() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={businessStyle.pageWrapper}>
          <div className={businessStyle.pageList}>
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
                {t.business.capitalLoan.heroBlock.title}
              </h1>
              <div className={businessStyle.description}>
                <p>{t.business.capitalLoan.heroBlock.description}</p>
                <ul>
                  <li>{t.business.capitalLoan.heroBlock.bullet1}</li>
                  <li>{t.business.capitalLoan.heroBlock.bullet2}</li>
                  <li>{t.business.capitalLoan.heroBlock.bullet3}</li>
                  <li>{t.business.capitalLoan.heroBlock.bullet4}</li>
                  <li>{t.business.capitalLoan.heroBlock.bullet5}</li>
                  <li>{t.business.capitalLoan.heroBlock.bullet6}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={businessInvestmentLoanInnerLinkList} />
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.capitalLoan.benefitsArticle.article1.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.capitalLoan.benefitsArticle.article1.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.capitalLoan.benefitsArticle.article2.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.capitalLoan.benefitsArticle.article2.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.capitalLoan.benefitsArticle.article3.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.capitalLoan.benefitsArticle.article3.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.capitalLoan.benefitsArticle.article4.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.capitalLoan.benefitsArticle.article4.description}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t.business.capitalLoan.stepProcess.title}</h3>
            </div>
            <Steper steperData={capitalLoanSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <ClientSupport />
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>{t.business.capitalLoan.faq}</h3>
            <div className={styles.faqList}>
              <Accordion faqData={LoanForBusiness} singleLevel="true" />
            </div>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}
