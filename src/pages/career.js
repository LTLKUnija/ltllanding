import styles from "@/styles/career.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Partnership() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en
 

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
                  <h3>{t.career.title}</h3>
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