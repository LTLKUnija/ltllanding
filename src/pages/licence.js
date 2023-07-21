import styles from "@/styles/licence.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Licence() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   return (
      <IndexLayout>
         <main>
            <section className={styles.licenceSection}>
               <div className={styles.licenceWrapper}>
                  <h3>{t.licence.pageTitle}</h3>
                  <p>{t.licence.description}</p>
               </div>
            </section>
            <section className={styles.imgSection}>
               <div className={styles.imgWrapper}>
                  <div className={styles.img}></div>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}