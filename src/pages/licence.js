import styles from "@/styles/licence.module.scss"
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Licence() {
   const {t} = useTranslation('common');

   return (
      <IndexLayout>
         <main>
            <section className={styles.licenceSection}>
               <div className={styles.licenceWrapper}>
                  <h3>{t('licence.pageTitle')}</h3>
                  <p>{t('licence.description')}</p>
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

export async function getStaticProps({ locale }) {
   return {
     props: {
       ...(await serverSideTranslations(locale, [
         'common',
       ])),
     },
   }
 }