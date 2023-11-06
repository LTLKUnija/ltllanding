import styles from "@/styles/esg.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/esg_img1.png";
import Img2 from "@../../../public/assets/images/esg_img2.png";
import Img3 from "@../../../public/assets/images/esg_img3.png";
import HeroMobile from "../../public/assets/images/capitalLoan_Hero_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { esgInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Esg() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [annualLink, setAnnualLinks] = useState([]);
  const [activeAnnualLinks, setActiveLinks] = useState([]);

  function tabHandler(e) {
    let idx = annualLink.findIndex((year) => year.uid == e.target.dataset.id);
    let temp = [...annualLink];
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setAnnualLinks(temp);
    setActiveLinks(temp[idx].links);
  }
  useEffect(() => {
    const getLinks = async () => {
      const resp = await fetch(`/api/annualReports`);
      const data = await resp.json();
      setAnnualLinks(data.reverse());
      setActiveLinks(data[0].links);
    };
    getLinks();
  }, []);

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
                <p>{t("esg.heroBlock.description")}</p>
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
              </p>
              <div className="actionButtonBlock">
                <Link href="/" className="outlinedBtn">
                  {t("esg.learnMoreButton")}
                </Link>
              </div>
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
              </p>
              <div className="actionButtonBlock">
                <Link href="/" className="outlinedBtn">
                  {t("esg.learnMoreButton")}
                </Link>
              </div>
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
              </p>
              <div className="actionButtonBlock">
                <Link href="/" className="outlinedBtn">
                  {t("esg.learnMoreButton")}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="reports" className={styles.annualReportsSection}>
          <div className={styles.annualReportsWrapper}>
            <h3>{t("esg.annualEsgReport.title")}</h3>
            <ul className={styles.annualReportsLinks}>
              {annualLink.map((year, idx) => {
                return (
                  <li
                    data-id={year.uid}
                    onClick={(e) => {
                      tabHandler(e);
                    }}
                    key={idx}
                    className={year.active ? "active-year-tab" : ""}
                  >
                    {year.year}
                  </li>
                );
              })}
            </ul>
            <div className={styles.annualLintsReport}>
              {activeAnnualLinks.map((link, idx) => {
                return (
                  <div key={idx} className={styles.reportsBlock}>
                    <div className={styles.annualLintsReportImg}></div>
                    <Link
                      target="_blank"
                      href={link.linkUrl}
                      className={styles.linkStyle}
                    >
                      {link.linkName}
                    </Link>
                  </div>
                );
              })}
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
