import styles from "@/styles/partnership.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Partnership() {
   const {t} = useTranslation('common');

   return (
      <IndexLayout>
         <main>
            <section className={styles.partnershipSection}>
               <div className={styles.partnershipWrapper}>
                  <h1>{t('partnership.pageTitle')}</h1>
                     <p>{t('partnership.description')}</p>
               </div>
            </section>
            <section className={styles.articleSection}>
               <div className={styles.articleBlock}>
                  <p>{t('partnership.articleBlock.article1')}</p>
                  <p>{t('partnership.articleBlock.article2')}</p>
                  <p>{t('partnership.articleBlock.article3')}</p>
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
 