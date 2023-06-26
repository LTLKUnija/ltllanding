import styles from "@/styles/mortgage.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Steper from "@/components/Steper"
import { mortgageSteperData } from "@/pages/api/data/stepersData"
import Link from "next/link"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Mortgage() {
  
    const router = useRouter();
    const t = router.locale === 'lt' ? lt : en

    

    return (
      <IndexLayout>
        <main>
          <section className={styles.mortgagePageWrapper}>
            <div className={styles.mortgagePageList}>
              <div className={styles.mortgageHeroItem}>
                <h1 className={styles.mortgageTitle}>
                  {t.mortgageLoan.heroBlock.title}
                </h1>
                <div className={styles.mortgagePageDescription}>
                  <p>{t.mortgageLoan.heroBlock.description}</p>
                  <ul>
                    <li>{t.mortgageLoan.heroBlock.bullet1}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet2}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet3}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet4}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet5}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">
                {t.mortgageLoan.innerLinkBlock.benefits}
              </Link>
              <Link className={styles.innerNavLink} href="#process">
                {t.mortgageLoan.innerLinkBlock.process}
              </Link>
              <Link className={styles.innerNavLink} href="/pricelist">
                {t.mortgageLoan.innerLinkBlock.priceList}
              </Link>
              <Link className={styles.innerNavLink} href="#clientSuport">
                {t.mortgageLoan.innerLinkBlock.clientSuport}
              </Link>
              <Link className={styles.innerNavLink} href="#faq">
                {t.mortgageLoan.innerLinkBlock.faq}
              </Link>
            </div>
          </section>
          <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article1.title}
                </h3>
                <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article1.text}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article2.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article2.text} 
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article3.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article3.text}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article4.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article4.text}
                </div>
              </div>
            </div>
          </section>
          <section id="process" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.mortgageLoan.stepProcess.title}</h3>
                </div>
                <Steper steperData={mortgageSteperData}/>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.privetCurrentAccount.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.privetCurrentAccount.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.termDeposit.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    );
}