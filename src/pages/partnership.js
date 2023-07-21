import styles from "@/styles/partnership.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Partnership() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   return (
      <IndexLayout>
         <main>
            <section className={styles.partnershipSection}>
               <div className={styles.partnershipWrapper}>
                  <h1>{t.partnership.pageTitle}</h1>
                     <p>{t.partnership.description}</p>
               </div>
            </section>
            <section className={styles.articleSection}>
               <div className={styles.articleBlock}>
                  <p>{t.partnership.articleBlock.article1}</p>
                  <p>{t.partnership.articleBlock.article2}</p>
                  <p>{t.partnership.articleBlock.article3}</p>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}