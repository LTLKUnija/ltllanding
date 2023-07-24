import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import styles from "@/styles/termsAndConditions.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import lt from "@/locales/lt";
import en from "@/locales/en";
import FinacialReportsData from "@/components/FinacialReportsData";

export default function TemrsAndConditions() {
  // const db = getFirestore();
  // const colRef = collection(db, "financialReports");
  // getDocs(colRef)
  //   .then((snapshot) => {
  //     let List = [];
  //     snapshot.docs.forEach((tab) => {
  //       List.push({ ...tab.data(), id: tab.id });
  //     });
  //     console.log(List);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

  const [financialData, setFinancialData] = useState([]);

  useEffect(() => {
    const fetchFinancialReports = async () => {
      const db = getFirestore();
      const collectionNames = ["financialReports"];

      const allData = [];

      for (const collectionName of collectionNames) {
        const colRef = collection(db, collectionName);
        try {
          const snapshot = await getDocs(colRef);
          snapshot.docs.forEach((doc) => {
            allData.push({ ...doc.data(), id: doc.id });
          });
          // console.log(allData);
        } catch (error) {
          console.error(
            `Error fetching data from ${collectionName}:`,
            error.message
          );
        }
      }

      setFinancialData(allData);
    };

    fetchFinancialReports();
  }, []);

  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const [links, setLinks] = useState([]);
  const [activeTabLinks, setActiveTabLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/tnc`);
      const data = await resp.json();
      setLinks(data);
      setActiveTabLinks(data[0].links);
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
            <h1>{t.termConditions.pageTitle}</h1>
            <p>{t.termConditions.description}</p>
          </div>
          {/* <FinacialReportsData /> */}
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
                  {t.termConditions.innerLinkBlock[tab.tabName]}
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
                      {link.linkName}
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
