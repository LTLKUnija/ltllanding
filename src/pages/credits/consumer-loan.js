import styles from "@/styles/consumer-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { consumerSteperData } from "@/common/stepersData";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/consumer_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { consumerLoanInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClientSupport from "@/components/ClientSupport";
import { useSelector } from "react-redux";
import { getLoanForPrivatesState } from "@/store/faqList/faqList.slice";

export default function Mortgage() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const faqData = useSelector(getLoanForPrivatesState);

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.consumerLoanPageWrapper}>
          <div className={styles.consumerLoanPageList}>
            <div className={styles.consumerLoanHeroItem}>
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
                {t("consumerLoan.heroBlock.title")}
              </h1>
              <div className={styles.description}>
                <p>{t("consumerLoan.heroBlock.description")}</p>
                <ul>
                  <li>{t("consumerLoan.heroBlock.bullet1")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet2")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet3")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet4")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet5")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={consumerLoanInnerLinkList} />
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("consumerLoan.benefitsArticle.article1.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("consumerLoan.benefitsArticle.article1.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("consumerLoan.benefitsArticle.article2.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("consumerLoan.benefitsArticle.article2.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("consumerLoan.benefitsArticle.article3.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("consumerLoan.benefitsArticle.article3.description")}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t("consumerLoan.benefitsArticle.article4.title")}
              </h3>
              <div className={styles.benefitsDescription}>
                {t("consumerLoan.benefitsArticle.article4.description")}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t("consumerLoan.stepProcess.title")}</h3>
            </div>
            <Steper steperData={consumerSteperData} />
          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <ClientSupport />
        </section>
        <section id="faq" className={styles.faqSection}>
          {!!faqData.data && (
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t("consumerLoan.faq")}</h3>
              <div className={styles.faqList}>
                <Accordion faqData={faqData.data} singleLevel="true" />
              </div>
            </div>
          )}
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
