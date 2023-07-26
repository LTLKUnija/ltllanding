import styles from "@/styles/equity-loan.module.scss";
import businessStyle from "@/styles/business.investment-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { investmentLoanSteperData } from "@/pages/api/data/stepersData";
import Link from "next/link";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/investmentLoan_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";

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
                {t.business.investmentLoan.heroBlock.title}
              </h1>
              <div className={businessStyle.description}>
                <p>{t.business.investmentLoan.heroBlock.description}</p>
                <ul>
                  <li>{t.business.investmentLoan.heroBlock.bullet1}</li>
                  <li>{t.business.investmentLoan.heroBlock.bullet2}</li>
                  <li>{t.business.investmentLoan.heroBlock.bullet3}</li>
                  <li>{t.business.investmentLoan.heroBlock.bullet4}</li>
                  <li>{t.business.investmentLoan.heroBlock.bullet5}</li>
                  <li>{t.business.investmentLoan.heroBlock.bullet6}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <div className={styles.innerNavigationLinkList}>
            <Link className={styles.innerNavLink} href="#benefits">
              {t.business.investmentLoan.innerLinkBlock.benefits}
            </Link>
            <Link className={styles.innerNavLink} href="#process">
              {t.business.investmentLoan.innerLinkBlock.process}
            </Link>
            <Link className={styles.innerNavLink} href="/pricelist">
              {t.business.investmentLoan.innerLinkBlock.priceList}
            </Link>
            <Link className={styles.innerNavLink} href="#clientSuport">
              {t.business.investmentLoan.innerLinkBlock.clientSuport}
            </Link>
            <Link className={styles.innerNavLink} href="#faq">
              {t.business.investmentLoan.innerLinkBlock.faq}
            </Link>
          </div>
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.investmentLoan.benefitsArticle.article1.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.investmentLoan.benefitsArticle.article1.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.investmentLoan.benefitsArticle.article2.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.investmentLoan.benefitsArticle.article2.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.investmentLoan.benefitsArticle.article3.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.investmentLoan.benefitsArticle.article3.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.business.investmentLoan.benefitsArticle.article4.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.business.investmentLoan.benefitsArticle.article4.description}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t.business.investmentLoan.stepProcess.title}</h3>
            </div>
            <Steper steperData={investmentLoanSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <div className={styles.clientSuportWrapper}>
            <h3 className={styles.clientSuportHeader}>
              {t.business.investmentLoan.clientSuport.title}
            </h3>
            <div className={styles.clientSuportDescription}>
              {t.business.investmentLoan.clientSuport.description}
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>
              {t.business.investmentLoan.faq}
            </h3>
            <div className={styles.faqList}>
              <Accordion accId="1" singleLevel="true" />
            </div>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}
