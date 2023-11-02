import styles from "@/styles/career.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Partnership() {
   const {t} = useTranslation('common');

   const [links, setLinks] = useState([]);
   const [activeTabLinks, setActiveTabLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/moneyLoundrying`)
         const data = await resp.json();
         setLinks(data)
         setActiveTabLinks(data[0].links)
         console.log(data)
      }
      getLinks()
   }, [])

   function TabHanler(e) {
      let idx = links.findIndex((tab) => tab.uid == e.target.dataset.id)
      let temp = [...links]
      temp.forEach((tab, index) => {
         if (idx == index) tab.active = true
         else tab.active = false
      })
      setLinks(temp)
      setActiveTabLinks(temp[idx].links)
   }

   return (
      <IndexLayout>
         <main>
            <section className={styles.careerSection}>
               <div className={styles.careerWrapper}>
                  <h3>{t('career.title')}</h3>
                  <div className={styles.innerNavigationLinkList}>
                     {links.map((tab, idx) => {
                        return (
                           <div data-id={tab.uid} onClick={(e) => { TabHanler(e) }} key={idx} className={tab.active ? 'active-tnc-tab' : ''}>{tab.tabName}</div>
                        )
                     })}
                  </div>
                  <div className={styles.careerBlock}>
                     <div className={styles.careerLinks}>
                        <ul>
                           {activeTabLinks.map((link, idx) => {
                              return (
                                 <li key={idx}>
                                    <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                                 </li>
                              )
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
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