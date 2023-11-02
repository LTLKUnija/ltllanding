import { useEffect, useState } from "react";
import styles from "@/styles/termsAndConditions.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { tncLinks } from "@/common/tnclinks";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function TemrsAndConditions() {
  const {t} = useTranslation('common');

  const [links, setLinks] = useState(tncLinks);
  const [activeTabLinks, setActiveTabLinks] = useState([]);
  useEffect(() => {
    (async () => {
      setLinks(tncLinks);
      setActiveTabLinks(tncLinks[0].links);
    })();
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
  }

  return (
    <IndexLayout>
      <main>
        <section className={styles.termsAndConditionsSection}>
          <div className={styles.termsAndConditionsBlock}>
            <h1>{t('termConditions.pageTitle')}</h1>
            <p>{t('termConditions.description')}</p>
          </div>
          <div className={styles.innerNavigationLinkList}>
            {links.map((tab, idx) => {
              return (
                <div
                  data-id={tab.uid}
                  onClick={(e) => {
                    tabHandler(e);
                  }}
                  key={idx}
                  className={tab.active ? "active-tnc-tab" : ""}
                >
                  {t(`termConditions.innerLinkBlock.${tab.tabName}`)}
                </div>
              );
            })}
          </div>
          <div className={styles.termsAndConditionsLinks}>
            <ul>
              {activeTabLinks.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      target="_blank"
                      href={link.linkUrl}
                      className={styles.linkStyle}
                    >
                      {t(`termConditions.innerTabLinks.${link.linkName}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}