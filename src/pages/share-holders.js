import styles from "@/styles/share-holders.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { shareHoldersMeetingData } from "@/common/shareHoldersMeetingsLink";

export default function ShareHolders() {
  const { t } = useTranslation("common");

  const [links, setLinks] = useState([]);
  const [activeTabLinks, setActiveTabLinks] = useState([]);
  const [activeAgendaList, setActiveAgendaList] = useState([]);

  useEffect(() => {
    const getLinks = async () => {
      setLinks(shareHoldersMeetingData.reverse());
      setActiveTabLinks(shareHoldersMeetingData[0].links);
      setActiveAgendaList(shareHoldersMeetingData[0].agenda);
    };
    getLinks();
  }, []);

  function tabHandler(e) {
    let idx = links.findIndex((tab) => tab.uid == e.target.dataset.id);
    let temp = [...links];
    temp.forEach((tab, index) => {
      if (idx == index) tab.active = true;
      else tab.active = false;
    });
    setLinks(temp);
    setActiveTabLinks(temp[idx].links);
    setActiveAgendaList(temp[idx].agenda);
  }

  return (
    <IndexLayout>
      <main>
        <section className={styles.shareHoldersSection}>
          <div className={styles.shareHoldersWrapper}>
            <h2>{t("shareholders.title")}</h2>
            <p>{t("shareholders.description")}</p>
            <h3>{t("shareholders.subTitle")}</h3>
            <ul className={styles.tabsList}>
              {links.map((tab, idx) => {
                return (
                  <li
                    data-id={tab.uid}
                    onClick={(e) => {
                      tabHandler(e);
                    }}
                    key={idx}
                    className={tab.active ? "active-tnc-tab" : ""}
                  >
                    {tab.year}
                  </li>
                );
              })}
            </ul>
            <div className={styles.agendaBlock}>
              <h4>{t("shareholders.agenda")}</h4>
              <ul>
                {activeAgendaList.map((agenda, idx) => {
                  return <li key={idx}>{agenda.agendaName}</li>;
                })}
              </ul>
            </div>
            <div className={styles.pdfBlock}>
              <ul className={styles.reportsList}>
                {activeTabLinks.map((link, idx) => {
                  return (
                    <li key={idx}>
                      <Link
                        target="_blank"
                        href={link.linkUrl}
                        className={styles.linkStyle}
                      >
                        {link.linkName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.contactsSection}>
          <div className={styles.contactsWrapper}>
            <h3>{t("shareholders.contacts.title")}</h3>
            <div className={styles.contactsBlock}>
              <div className={styles.img}></div>
              <div className={styles.contactsInfo}>
                <h4>{t("shareholders.contacts.director")}</h4>
                <p>
                  Ruslanas Telnovas ruslanas.telnovas@ltlku.lt
                  <p>+370 615 51 001</p>
                  <p>(8 5) 205 5241</p>
                </p>
              </div>
              <div className={styles.contactsInfo}>
                <h4>{t("shareholders.contacts.companyName")}</h4>
                <p>
                  Sporto g. 18, LT-09238, Vilnius Įmonės kodas 302791356
                  <p>(8 5) 205 5240</p>
                  <p>info@ltlku.lt</p>
                </p>
              </div>
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
