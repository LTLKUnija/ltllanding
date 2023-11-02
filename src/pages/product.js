import styles from "@/styles/product.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Steper from "@/components/Steper";
import { privetCurrentAccountSteperData } from "@/pages/api/data/stepersData";
import Accordion from "@/components/Accordion";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../public/assets/images/product_Hero_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { privetCurrentAccountInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { CurrentAccFAQ } from "@/common/AccordionSchemas";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ClientSupport from "@/components/ClientSupport";

export default function Product() {
  const router = useRouter();
  const {t} = useTranslation('common');

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <IndexLayout>
        <main className={styles.currentAccountPage}>
          <section className={styles.currentAccountPageWrapper}>
            <div className={styles.currentAccountPageList}>
              <div className={styles.currentAccountHeroItem}>
                <div className={styles.imgBlock}>
                  <Image
                    src={BackBtn}
                    alt={"Hero Mobile"}
                    style={{ width: "24", height: "12" }}
                    className={[styles.heroImage, styles.backBtn].join(" ")}
                    onClick={handleBack}
                  />
                  <Image
                    src={HeroMobile}
                    alt={"Hero Mobile"}
                    style={{ width: "70%", height: "auto" }}
                    className={styles.heroImage}
                  />
                </div>
                <h1 className={styles.title}>
                  {t('privetCurrentAccount.pageTitle')}
                </h1>
                <div className={styles.description}>
                  <p>{t('privetCurrentAccount.heroBlock.description')}</p>
                  <ul>
                    <li>{t('privetCurrentAccount.heroBlock.bullet1')}</li>
                    <li>{t('privetCurrentAccount.heroBlock.bullet2')}</li>
                    <li>{t('privetCurrentAccount.heroBlock.bullet3')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <InnerLinks innerLinksData={privetCurrentAccountInnerLinkList} />
          </section>
          <section id="privateClient" className={styles.articleSection}>
            <div className={styles.articleWrapper}>
              <div className={styles.articleList}>
                <div className={styles.articleItem}>
                  <h2 className={styles.articleItemTitle}>
                    {t('privetCurrentAccount.articleBlock.article1.title')}
                  </h2>
                  <div className={styles.articleItemDescription}>
                    {t('privetCurrentAccount.articleBlock.article1.text')}
                  </div>
                </div>
                <div className={styles.articleItem}>
                  <h2 className={styles.articleItemTitle}>
                    {t('privetCurrentAccount.articleBlock.article2.title')}
                  </h2>
                  <div className={styles.articleItemDescription}>
                    {t('privetCurrentAccount.articleBlock.article2.text')}
                  </div>
                </div>
                <div className={styles.articleItem}>
                  <h2 className={styles.articleItemTitle}>
                    {t('privetCurrentAccount.articleBlock.article3.title')}
                  </h2>
                  <div className={styles.articleItemDescription}>
                    {t('privetCurrentAccount.articleBlock.article3.text')}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="steps" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepsHeader}>
                <h3>{t('privetCurrentAccount.stepProcess.blockTitle')}</h3>
              </div>
              <Steper steperData={privetCurrentAccountSteperData} />
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <ClientSupport />
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t('privetCurrentAccount.faq')}</h3>
              <div className={styles.faqList}>
                <Accordion faqData={CurrentAccFAQ} singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
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
