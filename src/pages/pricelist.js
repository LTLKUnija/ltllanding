import styles from "@/styles/priceList.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import { priceListInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import PriceListPrivate from "@/components/PriceListPrivate";
import PriceListBusiness from "@/components/PriceListBusiness";
import { basic } from "@/common/AccordionSchemas";

export default function PriceListPage() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.priceListHero}>
            <h3 className={styles.priceHeaderTitle}>{t.priceList.title}</h3>
            <div className={styles.innerNavigationLinkList}>
              <InnerLinks innerLinksData={priceListInnerLinkList} />
            </div>
          </section>
          <section
            id="priceListForIndividuals"
            className={styles.priceListForIndividuals}
          >
            <PriceListPrivate />
          </section>
          <section
            id="priceListForCorparate"
            className={styles.priceListForCorparate}
          >
            <PriceListBusiness />
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>FAQ</h3>
              <div className={styles.faqList}>
                <Accordion faqData={basic} singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
