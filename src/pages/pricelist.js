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
          {/* <section id="rates" className={styles.priceListRates}>
            <div className={styles.priceWrapper}>
              <h3 className={styles.priceHeader}>
                Terminuotųjų indėlių palūkanų normos
              </h3>
              <ul className={styles.priceList}>
                <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
                  <div className={styles.priceTitle}>Accounts</div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Opening an account
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Maintaining the account
                  </div>
                  <div className={styles.priceDescription}>100 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Closing the account
                  </div>
                  <div className={styles.priceDescription}>100 €</div>
                </li>
                <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
                  <div className={styles.priceTitle}>Cash pooling account</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Agreement signing
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Agreement signing
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
                  <div className={styles.priceTitle}>Entrepreneur account</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Opening an account
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={[styles.priceItem, styles.priceTitle].join(" ")}>
                  <div className={styles.priceTitle}>
                    Lorem ipsum dolar sit amet
                  </div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Opening an account
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>200 €</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
                <li className={styles.priceItem}>
                  <div className={styles.priceDescriptionLeft}>
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className={styles.priceDescription}>free of charge</div>
                </li>
              </ul>
            </div>
          </section> */}
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
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
