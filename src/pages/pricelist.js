import styles from "@/styles/priceList.module.scss";
import { useEffect } from "react";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import { priceListInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import PriceListPrivate from "@/components/PriceListPrivate";
import PriceListBusiness from "@/components/PriceListBusiness";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import { getPriceListState } from "@/store/priceList/priceList.slice";

import { getCurrentAccFAQ } from "@/store/faqList/faqList.slice";

export default function PriceListPage() {
  const { t } = useTranslation("common");
  const priceListData = useSelector(getPriceListState);
  const faqData = useSelector(getCurrentAccFAQ);

  useEffect(() => {
    console.log(priceListData);
  }, [priceListData]);

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.priceListHero}>
            <h3 className={styles.priceHeaderTitle}>{t("priceList.title")}</h3>
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
            {!!faqData.data && (
              <div className={styles.faqWrapper}>
                <h3 className={styles.faqHeader}>FAQ</h3>
                <div className={styles.faqList}>
                  <Accordion faqData={faqData.data} singleLevel="true" />
                </div>
              </div>
            )}
          </section>
        </main>
      </IndexLayout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
