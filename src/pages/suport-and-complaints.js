import styles from "@/styles/suport-and-complaints.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import Accordion from "@/components/Accordion"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function SuportAndComplaints() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   return (
      <IndexLayout>
         <main>
            <section className={styles.SuportAndComplaintsHeroPage}>
               <div className={styles.SuportAndComplaintsHeroTitle}>
                  <h1>{t.suportsComplaints.pageTitle}</h1>
               </div>
            </section>
            <section className={styles.settlementSection}>
               <div className={styles.settlementsWrapper}>
                  <div className={styles.settlementBlock}>
                     <h3>{t.suportsComplaints.articleBlock.article1.title}</h3>
                     <p>{t.suportsComplaints.articleBlock.article1.description}</p>
                  </div>
                  <div className={styles.settlementBlock}>
                     <h3>{t.suportsComplaints.articleBlock.article2.title}</h3>
                     <p>{t.suportsComplaints.articleBlock.article2.description}<Link href="https://www.lb.lt/lt/vartotoju-ir-finansu-rinkos-dalyviu-gincai"> https://www.lb.lt/lt/vartotoju-ir-finansu-rinkos-dalyviu-gincai</Link></p>
                  </div>
               </div>
            </section>
            <section className={styles.formSection}>
                  <div className={styles.formTitleBlock}>
                     <ContactForm formTitle={true}
                     />
                  </div>
            </section>
         </main>
      </IndexLayout>
   )
}