import styles from "@/styles/esg.module.scss";
import stylesESG from "@/styles/financial-reporting.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/esg_img1.svg";
import Img2 from "@../../../public/assets/images/esg_img2.svg";
import Img3 from "@../../../public/assets/images/esg_img3.svg";
import HeroMobile from "../../public/assets/images/esgPage_HeroBlock_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { useRouter } from "next/router";
import { esgInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FinancialReporting from "../components/FinacialReportsData";

export default function Esg() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.esgHeroPage}>
          <div className={styles.esgPageList}>
            <div className={styles.esgHeroItem}>
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
              <h1 className={styles.title}>{t("esg.heroBlock.title")}</h1>
              <div className={styles.description}>
                <p>
                  {t("esg.heroBlock.description")}
                  <Link href="/" className="readMoreLink">
                    {t("esg.heroBlock.restOfDescription")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={esgInnerLinkList} />
        </section>

        <section
          id="enviromentalProtection"
          className={styles.enviromentalProtectionSection}
        >
          <div id="esgPolicy" className={styles.enviromentalProtectionBlock}>
            <Image
              src={Img1}
              alt="Available Jobs"
              style={{
                width: 430,
                height: 375,
              }}
            />
            <div className={styles.enviromentalProtectionArticle}>
              <h3 className={styles.title}>
                {t("esg.articleBlock.article1.title")}
              </h3>
              <p className={styles.description}>
                {t("esg.articleBlock.article1.text")}
                <Link href="/" className="readMoreLink">
                  {t("esg.articleBlock.article1.link")}
                </Link>
              </p>
            </div>
          </div>
          <div
            id="socialPrinciples"
            className={styles.enviromentalProtectionBlock}
          >
            <div
              className={[
                styles.enviromentalProtectionArticle,
                styles.mirror,
              ].join(" ")}
            >
              <h3 className={styles.title}>
                {t("esg.articleBlock.article2.title")}
              </h3>
              <p className={styles.description}>
                {t("esg.articleBlock.article2.text")}
                <Link href="/" className="readMoreLink">
                  {t("esg.articleBlock.article2.link")}
                </Link>
              </p>
            </div>
            <Image
              src={Img2}
              alt="Available Jobs"
              style={{
                width: 430,
                height: 375,
              }}
            />
          </div>
          <div id="enviromental" className={styles.enviromentalProtectionBlock}>
            <Image
              src={Img3}
              alt="Available Jobs"
              style={{
                width: 430,
                height: 375,
              }}
            />
            <div className={styles.enviromentalProtectionArticle}>
              <h3 className={styles.title}>
                {t("esg.articleBlock.article3.title")}
              </h3>
              <p className={styles.description}>
                {t("esg.articleBlock.article3.text")}
                <Link href="/" className="readMoreLink">
                  {t("esg.articleBlock.article3.link")}
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="reports" className={stylesESG.annualReportsSection}>
          {/* <FinancialReporting
            name={t("finacialReporting.annualESGReporting")}
          /> */}
          <h3 className={stylesESG.separateTitle}>
            {t("finacialReporting.annualESGReporting")}
          </h3>

          <div className={stylesESG.policyList}>
            <div className={stylesESG.reportItem}>
              <img src="/assets/images/Pdficon.svg" alt="Pdf File" />
              <Link
                href="https://storage.googleapis.com/ltl-storage/AnnualESGReports/ESG%20Policy%20LTL%202024_ENG.pdf"
                className={stylesESG.linkStyle}
                target="_blank"
              >
                {router.locale === "lt"
                  ? "ESG politika LTL 2024"
                  : "ESG Policy LTL 2024"}
              </Link>
            </div>

            <div className={stylesESG.reportItem}>
              <img src="/assets/images/Pdficon.svg" alt="Pdf File" />
              <Link
                href="https://storage.googleapis.com/ltl-storage/AnnualESGReports/Environmental%20Policy%20LTL%202024_ENG.pdf"
                className={stylesESG.linkStyle}
                target="_blank"
              >
                {router.locale === "lt"
                  ? "Aplinkos politika LTL 2024"
                  : "Environmental Policy LTL 2024"}
              </Link>
            </div>

            <div className={stylesESG.reportItem}>
              <img src="/assets/images/Pdficon.svg" alt="Pdf File" />
              <Link
                href="https://storage.googleapis.com/ltl-storage/AnnualESGReports/Equal%20Opportunities%20Policy%20LTL%202024_ENG.pdf"
                className={stylesESG.linkStyle}
                target="_blank"
              >
                {router.locale === "lt"
                  ? "Lygių galimybių politika LTL 2024"
                  : "Equal Opportunities Policy LTL 2024"}
              </Link>
            </div>

            <div className={stylesESG.reportItem}>
              <img src="/assets/images/Pdficon.svg" alt="Pdf File" />
              <Link
                href="https://storage.googleapis.com/ltl-storage/AnnualESGReports/Etikos%20kodeksas%20LTL%202024_LT.pdf"
                className={stylesESG.linkStyle}
                target="_blank"
              >
                {router.locale === "lt"
                  ? "Etikos kodeksas LTL 2024"
                  : "Code of Ethics LTL 2024"}
              </Link>
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
