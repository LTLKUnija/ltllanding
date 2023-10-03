import styles from "@/styles/deposits.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { depositSteperData } from "@/pages/api/data/stepersData";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Image from "next/image";
import HeroMobile from "../../public/assets/images/deposit_Hero_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { termDepositInnerLinkList } from "@/pages/api/data/innerLinksData";
import InnerLinks from "@/components/InnerLinks";

export default function Deposit() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const handleBack = () => {
    router.back();
  };

  const [calc, setCalc] = useState({
    amount: 10000,
    term: 3,
    selectedRate: 1.75,
  });

  let ratesList = [
    {
      term: 1,
      rate: 1.0,
    },
    {
      term: 3,
      rate: 1.75,
    },
    {
      term: 6,
      rate: 2.0,
    },
    {
      term: 12,
      rate: 2.5,
    },
    {
      term: 18,
      rate: 3.1,
    },
  ];

  function createSelectOptions() {
    return ratesList.map((el, idx) => (
      <option data-rate={el.rate} key={idx}>
        {el.term}
      </option>
    ));
  }

  function selectTerm(e) {
    let selectedRate = +Array.from(e.target.options)
      .filter((opt) => opt.value == e.target.value)[0]
      .getAttribute("data-rate");
    setCalc({ ...calc, term: +e.target.value, selectedRate: selectedRate });
  }

  function amountHandler(e) {
    var digits = e.target.value.replace(/\D/g, "");
    setCalc({ ...calc, amount: +digits });
  }
  return (
    <>
      <IndexLayout>
        <main>
        <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.faq.pageTitle}</h3>
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
