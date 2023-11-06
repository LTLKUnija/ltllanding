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
import { factsheetsData } from "@/common/factsheetsLinks";
import { presentationsLinksData } from "@/common/presentationsLinks";
export default function FinancialReporting() {
  const { t } = useTranslation("common");

  const [factSheetList, setFactSheetList] = useState([]);
  const [activeFactSheetList, setActiveFactSheetList] = useState([]);
  const [presentationsList, setPresentationsList] = useState([]);
  const [activePresentationsList, setActivePresentationsList] = useState([]);
  useEffect(() => {
    const getFactsheetsList = async () => {
      setFactSheetList(factsheetsData);
      setActiveFactSheetList(factsheetsData[0].factsheets);
    };
    const getPresentationsList = async () => {
      setPresentationsList(presentationsLinksData);
      setActivePresentationsList(presentationsLinksData[0].links);
    };

    getFactsheetsList();
    getPresentationsList();
  }, []);

  function factsheetTabHandler(e) {
    let idx = factSheetList.findIndex(
      (year) => year.uid == e.target.dataset.id
    );
    let temp = [...factSheetList];
    temp.forEach((year, index) => {
      if (idx == index) year.active = true;
      else year.active = false;
    });
    setFactSheetList(temp);
    setActiveFactSheetList(temp[idx].factsheets);
  }

  function presentationsTabHandler(e) {
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
  }

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
          <div className={styles.ReportsWrapper}>
            <h3 className={styles.sectionTitle}>
              {t("finacialReporting.factsheets")}
            </h3>
            <div className={[styles.tabsList, styles.center].join(" ")}>
              {factSheetList.map((tab, idx) => {
                return (
                  <div
                    data-id={tab.uid}
                    onClick={(e) => {
                      factsheetTabHandler(e);
                    }}
                    key={idx}
                    className={tab.active ? "active-tnc-tab" : ""}
                  >
                    {tab.year}
                  </div>
                );
              })}
            </div>
            <div className={styles.quarterList}>
              {activeFactSheetList.map((quater, idx) => {
                return (
                  <div key={idx} className={styles.quarterItem}>
                    <h4>{quater.quarterName}</h4>
                    <div className={styles.linkList}>
                      {quater.quarterLinks.map((link, index) => {
                        return (
                          <div className={styles.linksItem} key={index}>
                            <img
                              className={styles.iconImg}
                              src="/assets/images/Pdficon.svg"
                              alt="Pdf File"
                            />
                            <Link href={link.linkUrl}>{link.linkName}</Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="presentations" className={styles.presentationsSection}>
          <div className={styles.presentationsWrapper}>
            <h3 className={styles.sectionTitle}>
              {t("finacialReporting.presentations")}
            </h3>
            <ul className={[styles.tabsList, styles.center].join(" ")}>
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
            </ul>
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
                <p>Ruslanas Telnovas ruslanas.telnovas@ltlku.lt </p>
                <p>(8 5) 205 5240</p>
                <p>(8 5) 205 5241</p>
              </div>
              <div className={styles.contactsInfo}>
                <h4>{t("finacialReporting.contacts.companyName")}</h4>
                <p>Sporto g. 18, LT-09238, Vilnius Įmonės kodas 302791356</p>
                <p>(8 5) 205 5240</p>
                <p>info@ltlku.lt</p>
              </div>
            </div>
          </div>
        </section>
        <section id="finacialCalendar" className={styles.calendarSection}>
          <div className={styles.calendarWrapper}>
            <h3>{t("finacialReporting.finacialCalendar.title")}</h3>
            <p className={styles.calendarDescription}>
              {t("finacialReporting.finacialCalendar.description")}
            </p>
            <div className={styles.calendarBlock}>
              <p className={styles.date}>
                15.08.2023 <span>Ex-dividend date (ex-date)</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>Q1 interim results</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>April results</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>May results</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>Q2 interim results</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>July results</span>
              </p>
              <p className={styles.date}>
                15.08.2023 <span>August results</span>
              </p>
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
