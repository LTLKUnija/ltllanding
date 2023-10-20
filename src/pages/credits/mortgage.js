import styles from "@/styles/mortgage.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { privetCurrentAccountSteperData } from "@/pages/api/data/stepersData";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/mortgageLoan_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { mortgageLoanInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { LoanForPrivates } from "@/common/AccordionSchemas";

export default function Mortgage() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.mortgagePageWrapper}>
          <div className={styles.mortgagePageList}>
            <div className={styles.mortgageHeroItem}>
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
              <h1 className={styles.title}>{t.mortgageLoan.heroBlock.title}</h1>
              <div className={styles.description}>
                <p>{t.mortgageLoan.heroBlock.description}</p>
                <ul>
                  <li>{t.mortgageLoan.heroBlock.bullet1}</li>
                  <li>{t.mortgageLoan.heroBlock.bullet2}</li>
                  <li>{t.mortgageLoan.heroBlock.bullet3}</li>
                  <li>{t.mortgageLoan.heroBlock.bullet4}</li>
                  <li>{t.mortgageLoan.heroBlock.bullet5}</li>
                  <li>{t.mortgageLoan.heroBlock.bullet6}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={mortgageLoanInnerLinkList} />
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.mortgageLoan.articleBlock.article1.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article1.text}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.mortgageLoan.articleBlock.article2.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article2.text}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.mortgageLoan.articleBlock.article3.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article3.text}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.mortgageLoan.articleBlock.article4.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article4.text}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.stepsSection}>
          <div className={styles.stepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t.mortgageLoan.stepProcess.title}</h3>
            </div>
            <Steper steperData={privetCurrentAccountSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <div className={styles.clientSuportWrapper}>
            <h3 className={styles.clientSuportHeader}>
              {t.privetCurrentAccount.clientSuport.title}
            </h3>
            <div className={styles.clientSuportDescription}>
              {t.privetCurrentAccount.clientSuport.description}
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>{t.termDeposit.faq}</h3>
            <div className={styles.faqList}>
              <Accordion faqData={LoanForPrivates} singleLevel="true" />
            </div>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}
