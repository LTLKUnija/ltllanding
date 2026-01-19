import styles from "@/styles/current-account.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Steper from "@/components/Steper";
import { openAccountSteperData } from "@/common/stepersData";
import Accordion from "@/components/Accordion";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../public/assets/images/product_Hero_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { openAccountInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { applyPageCspHeaders } from "@/lib/csp";
import ClientSupport from "@/components/ClientSupport";
import { useSelector } from "react-redux";
import { getCurrentAccFAQ } from "@/store/faqList/faqList.slice";
import Breadcrumbs from "@/components/Breadcrumbs";
import LoanApplicationForm from "@/components/LoanApplicationForm";

export default function Product() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const faqData = useSelector(getCurrentAccFAQ);

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <IndexLayout>
        <main className={styles.currentAccountPage}>
          <section className={styles.currentAccountPageWrapper}>
            <div className={styles.currentAccountPageList}>
              <div className="breadcrumbs_Wrapper">
                <Breadcrumbs
                  business={false}
                  area={`${t("headerNavLinks.payments")}`}
                  page={`${t("headerNavLinks.currentAccount")}`}
                />
              </div>
              <div className={styles.formWrapper}>
                <LoanApplicationForm type="business" />
              </div>

              <div className={styles.currentAccountHeroItem}>
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
                  {t("openAccount.pageTitle")}
                </h1>
                <div className={styles.description}>
                  <p>{t("openAccount.heroBlock.description")}</p>
                  <ul>
                    <li>{t("openAccount.heroBlock.bullet1")}</li>
                    <li>{t("openAccount.heroBlock.bullet2")}</li>
                    <li>{t("openAccount.heroBlock.bullet3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <InnerLinks innerLinksData={openAccountInnerLinkList} />
          </section>
          <section id="info" className={styles.articleSection}>
            <div className={styles.articleWrapper}>
              <div className={styles.articleList}>
                <div className={styles.articleItem}>
                  <h2 className={styles.articleItemTitle}>
                    {t("openAccount.articleBlock.article1.title")}
                  </h2>
                  <div className={styles.articleItemDescription}>
                    {t("openAccount.articleBlock.article1.text")}
                  </div>
                </div>
                <div className={styles.articleItem}>
                  <h2 className={styles.articleItemTitle}>
                    {t("openAccount.articleBlock.article2.title")}
                  </h2>
                  <div className={styles.articleItemDescription}>
                    {t("openAccount.articleBlock.article2.text")}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="steps" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepsHeader}>
                <h3>{t("openAccount.stepProcess.blockTitle")}</h3>
              </div>
              <Steper steperData={openAccountSteperData} />
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <ClientSupport />
          </section>
          <section id="faq" className={styles.faqSection}>
            {!!faqData.data && (
              <div className={styles.faqWrapper}>
                <h3 className={styles.faqHeader}>
                  {t("openAccount.faq")}
                </h3>
                <div className={styles.faqList}>
                  <Accordion faqData={faqData.data} singleLevel="true" />
                </div>
              </div>
            )}
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
