import styles from "@/styles/esg.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/esg_img1.png";
import Img2 from "@../../../public/assets/images/esg_img2.png";
import Img3 from "@../../../public/assets/images/esg_img3.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function Esg() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

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

  return (
    <IndexLayout>
      <main>
        <section className={styles.esgHeroPage}>
          <div className={styles.esgPageList}>
            <div className={styles.esgHeroItem}>
              <h1 className={styles.esgTitle}>{t.esg.heroBlock.title}</h1>
              <div className={styles.description}>
                <p>{t.esg.heroBlock.description} aaaaaa</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <div className={styles.innerNavigationLinkList}>
            <Link
              className={styles.innerNavLink}
              href="#enviromentalProtection"
            >
              {t.esg.innerLinkBlock.link1}
            </Link>
            <Link className={styles.innerNavLink} href="#socialPolitics">
              {t.esg.innerLinkBlock.link2}
            </Link>
            <Link className={styles.innerNavLink} href="#esgPolicy">
              {t.esg.innerLinkBlock.link3}
            </Link>
            <Link className={styles.innerNavLink} href="#reports">
              {t.esg.innerLinkBlock.link4}
            </Link>
          </div>
        </section>
        <section className={styles.enviromentalProtectionSection}>
          <div className={styles.container}>
            <div
              id="enviromentalProtection"
              className={styles.enviromentalProtectionBlock}
            >
              <div
                className={[
                  styles.enviromentalProtectionImg,
                  styles.imgMargin,
                ].join(" ")}
              >
                <Image
                  src="/assets/images/article1.svg"
                  width={429}
                  height={429}
                  alt="Image"
                />
              </div>
              <div className={styles.enviromentalProtectionArticle}>
                <h3>{t.esg.articleBlock.article1.title}</h3>
                <p>{t.esg.articleBlock.article1.text}</p>
                <div className="actionButtonBlock">
                  <Link href="/" className="light-green-action-button">
                    {t.esg.learnMoreButton}
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="socialPolitics"
              className={styles.enviromentalProtectionBlock}
            >
              <div className={styles.enviromentalProtectionArticle}>
                <h3>{t.esg.articleBlock.article2.title}</h3>
                <p>{t.esg.articleBlock.article2.text}</p>
                <div className="actionButtonBlock">
                  <Link href="/" className="light-green-action-button">
                    {t.esg.learnMoreButton}
                  </Link>
                </div>
              </div>
              <div className={styles.enviromentalProtectionImg}>
                <Image
                  src="/assets/images/article2.svg"
                  width={429}
                  height={429}
                  alt="Image"
                />
              </div>
            </div>
            <div id="esgPolicy" className={styles.enviromentalProtectionBlock}>
              <div
                className={[
                  styles.enviromentalProtectionImg,
                  styles.imgMargin,
                ].join(" ")}
              >
                <Image
                  src="/assets/images/article3.svg"
                  width={429}
                  height={429}
                  alt="Image"
                />
              </div>
              <div className={styles.enviromentalProtectionArticle}>
                <h3>{t.esg.articleBlock.article3.title}</h3>
                <p>{t.esg.articleBlock.article3.text}</p>
                <div className="actionButtonBlock">
                  <Link href="/" className="light-green-action-button">
                    {t.esg.learnMoreButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            id="socialPolitics"
            className={styles.enviromentalProtectionBlock}
          >
            <div className={styles.enviromentalProtectionArticle}>
              <h3>{t.esg.articleBlock.article2.title}</h3>
              <p>{t.esg.articleBlock.article2.text}</p>
              <div className="actionButtonBlock">
                <Link href="/" className="outlinedBtn">
                  {t.esg.learnMoreButton}
                </Link>
              </div>
            </div>

            <Image
              src={Img2}
              alt="Available Jobs"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div id="esgPolicy" className={styles.enviromentalProtectionBlock}>
            <Image
              src={Img3}
              alt="Available Jobs"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
            <div className={styles.enviromentalProtectionArticle}>
              <h3>{t.esg.articleBlock.article3.title}</h3>
              <p>{t.esg.articleBlock.article3.text}</p>
              <div className="actionButtonBlock">
                <Link href="/" className="outlinedBtn">
                  {t.esg.learnMoreButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="reports" className={styles.annualReportsSection}>
          <div className={styles.annualReportsWrapper}>
            <h3>{t.esg.annualEsgReport.title}</h3>
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
