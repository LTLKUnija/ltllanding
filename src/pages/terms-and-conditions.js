import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getFirestore, collection, getDocs } from "firebase/firestore";
import styles from "@/styles/termsAndConditions.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function TemrsAndConditions() {

   const db = getFirestore();
   const colRef = collection(db, "ltl-test")
   getDocs(colRef)
   .then((snapshot) => {
      let tncList = []
      snapshot.docs.forEach((tab) => {
         tncList.push({ ...tab.data(), id: tab.id })
      })
      console.log(tncList)
   })
   .catch((err) => {
      console.log(err.message)
   })

   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   const [links, setLinks] = useState([]);
   const [activeTabLinks, setActiveTabLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/tnc`)
         const data = await resp.json();
         setLinks(data)
         setActiveTabLinks(data[0].links)
      }
      getLinks()
   }, [])

   function tabHandler(e) {
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
            <section className={styles.termsAndConditionsSection}>
               <div className={styles.termsAndConditionsBlock}>
                  <h1>{t.termConditions.pageTitle}</h1>
                  <p>{t.termConditions.description}</p>
               </div>
               <div className={styles.innerNavigationLinkList}>
                  {links.map((tab, idx) => {
                     return (
                        <div data-id={tab.uid} onClick={(e) => { tabHandler(e) }} key={idx} className={tab.active ? 'active-tnc-tab' : ''}>
                           {t.termConditions.innerLinkBlock[tab.tabName]}
                        </div>
                     )
                  })}
               </div>
               <div className={styles.termsAndConditionsLinks}>
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
            </section>
         </main>
      </IndexLayout>
   )
}