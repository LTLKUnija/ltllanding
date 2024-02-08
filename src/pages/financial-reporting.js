import styles from "@/styles/financial-reporting.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import FinacialReportsData from "@/components/FinacialReportsData";
import FinancialQuarterReportsData from "@/components/FinacialQuarterReportsData";
import { finacialReportingInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { presentationsLinksData } from "@/common/presentationsLinks";
import { FactSheetsData } from "@/components/FactSheetsData";
import { useRouter } from "next/router";
import financialCalendarData from "@/common/finacialCalendarData";

export default function FinancialReporting() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [presentationsList, setPresentationsList] = useState([]);
  const [activePresentationsList, setActivePresentationsList] = useState([]);

  const presentationsTabHandler = (e) => {
    let idx = presentationsList.findIndex(
      (year) => year.uid == e.target.dataset.id
    );
    let temp = [...presentationsList];
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setPresentationsList(temp);
    setActivePresentationsList(temp[idx].links);
  };

  useEffect(() => {
    const getPresentationsList = async () => {
      setPresentationsList(presentationsLinksData);
      setActivePresentationsList(presentationsLinksData[0].links);
    };

    getPresentationsList();
  }, []);
  return (
    <IndexLayout>
      <main>
        <section className={styles.financialReportingSection}>
          <h3 className={styles.financialReportingTitle}>
            {t("finacialReporting.title")}
          </h3>
        </section>
        <section className={styles.innerNavigationSection}>
          <InnerLinks innerLinksData={finacialReportingInnerLinkList} />
        </section>
        <section id="quarterlyReports" className={styles.ReportsSection}>
          <FinancialQuarterReportsData />
        </section>
        <section id="annualReporting" className={styles.presentationsSection}>
          <FinacialReportsData />
        </section>
        <section
          id="factsheets"
          className={[styles.ReportsSection, styles.factsheetsSection].join(
            " "
          )}
        >
          <FactSheetsData />
        </section>
        <section id="presentations" className={styles.presentationsSection}>
          <div className={styles.presentationsWrapper}>
            <h3 className={styles.sectionTitle}>
              {t("finacialReporting.presentations")}
            </h3>
            {/* client asked to hide date's, im lieving this for future reference, becus its not final theys desition  */}

            {/* <ul className={[styles.tabsList, styles.center].join(" ")}>
              {presentationsList.map((year, idx) => {
                return (
                  <li
                    data-id={year.uid}
                    onClick={(e) => {
                      presentationsTabHandler(e);
                    }}
                    key={idx}
                    className={year.active ? "active-year-tab" : ""}
                  >
                    {year.year}
                  </li>
                );
              })}
            </ul> */}
            <div className={styles.reporstBlockList}>
              {activePresentationsList.map((link, idx) => {
                return (
                  <div key={idx} className={styles.reportItem}>
                    <img src="assets/images/Pdficon.svg" alt="Pdf File" />
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
        <section id="contacts" className={styles.contactsSection}>
          <div className={styles.contactsWrapper}>
            <h3>{t("finacialReporting.contacts.title")}</h3>
            <div className={styles.contactsBlock}>
              <div className={styles.img}></div>
              <div className={styles.contactsInfo}>
                <h4>{t("finacialReporting.contacts.director")}</h4>
                <p>
                  Ruslanas Telnovas{" "}
                  <Link
                    href="mailto:ruslanas.telnovas@ltlku.lt"
                    className="readMoreLink"
                  >
                    ruslanas.telnovas@ltlku.lt
                  </Link>
                </p>
                <p>
                  <Link href="tel:+370 5 205 5240" className="readMoreLink">
                    +370 5 205 5240
                  </Link>
                </p>
                <p>
                  <Link href="tel:+370 5 205 5241" className="readMoreLink">
                    +370 5 205 5241
                  </Link>
                </p>
              </div>
              <div className={styles.contactsInfo}>
                <h4>{t("finacialReporting.contacts.companyName")}</h4>
                <p>Sporto g. 18, LT-09238, Vilnius Įmonės kodas 302791356</p>
                <p>
                  <Link href="tel:+370 5 205 5240" className="readMoreLink">
                    +370 5 205 5240
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="mailto:info@ltlku.lt" className="readMoreLink">
                    info@ltlku.lt
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="finacialCalendar" className={styles.calendarSection}>
          <div className={styles.calendarWrapper}>
            <h3>{t("finacialReporting.finacialCalendar.title")}</h3>
            <div className={styles.calendarBlock}>
              {financialCalendarData.map((date, idx) => {
                return (
                  <p className={styles.date} key={idx}>
                    {router.locale == "en" ? date.dateEn : date.date}
                    <span>
                      {router.locale == "en" ? date.eventEn : date.event}
                    </span>
                  </p>
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
