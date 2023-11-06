import styles from "@/styles/deposits.module.scss";
import busynessStyle from "@/styles/business.deposits.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper";
import { termDepositSteperData } from "@/common/stepersData";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroMobile from "../../../public/assets/images/Business_Hero_mobile.png";
import BackBtn from "../../../public/assets/images/backBtn.png";
import { businessTermDepositInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { DepositFAQ } from "@/common/AccordionSchemas";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ClientSupport from "@/components/ClientSupport";

export default function Deposit() {
  const router = useRouter();
  const { t } = useTranslation("common");

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
          <section className={busynessStyle.depositPageWrapper}>
            <div className={busynessStyle.depositPageList}>
              <div className={busynessStyle.depositHeroItem}>
                <div className={busynessStyle.imgBlock}>
                  <Image
                    src={BackBtn}
                    alt={"Hero Mobile"}
                    style={{ width: "24", height: "12" }}
                    className={[
                      busynessStyle.heroImage,
                      busynessStyle.backBtn,
                    ].join(" ")}
                    onClick={handleBack}
                  />
                  <Image
                    src={HeroMobile}
                    alt={"Hero Mobile"}
                    style={{ width: "70%", height: "auto" }}
                    className={busynessStyle.heroImage}
                  />
                </div>
                <h1 className={busynessStyle.title}>
                  {t("business.termDeposit.heroBlock.title")}
                </h1>
                <div className={busynessStyle.description}>
                  <p>{t("business.termDeposit.heroBlock.description")}</p>
                  <ul>
                    <li>{t("business.termDeposit.heroBlock.bullet1")}</li>
                    <li>{t("business.termDeposit.heroBlock.bullet2")}</li>
                    <li>{t("business.termDeposit.heroBlock.bullet3")}</li>
                    <li>{t("business.termDeposit.heroBlock.bullet4")}</li>
                    <li>{t("business.termDeposit.heroBlock.bullet5")}</li>
                    <li>{t("business.termDeposit.heroBlock.bullet6")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <InnerLinks innerLinksData={businessTermDepositInnerLinkList} />
          </section>
          <section id="benefits" className={busynessStyle.benefitsSection}>
            <div className={busynessStyle.benefitsWrapper}>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t("business.termDeposit.benefitsArticle.article1.title")}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t(
                    "business.termDeposit.benefitsArticle.article1.description"
                  )}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t("business.termDeposit.benefitsArticle.article2.title")}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t(
                    "business.termDeposit.benefitsArticle.article2.description"
                  )}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t("business.termDeposit.benefitsArticle.article3.title")}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t(
                    "business.termDeposit.benefitsArticle.article3.description"
                  )}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t("business.termDeposit.benefitsArticle.article4.title")}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t(
                    "business.termDeposit.benefitsArticle.article4.description"
                  )}
                </div>
              </div>
            </div>
          </section>
          <section id="calculator" className={busynessStyle.calculatorSection}>
            <h2>{t("business.termDeposit.calcBlock.title")}</h2>
            <p>{t("business.termDeposit.calcBlock.subTitle")}</p>
            <div className={busynessStyle.calculatorWrapper}>
              <div className={busynessStyle.calculatorBlock}>
                <div className={busynessStyle.borderCorner}></div>
                <div className={busynessStyle.calculatorLine}>
                  <div className={busynessStyle.label}>
                    {t("business.termDeposit.calcBlock.ammoutOfDeposit")}
                  </div>
                  <input
                    type="text"
                    value={calc.amount}
                    pattern="[0-9\.\-]*"
                    onChange={(e) => {
                      amountHandler(e);
                    }}
                    placeholder="Enter amount"
                  />
                </div>
                <div className={busynessStyle.calculatorLine}>
                  <div className={busynessStyle.label}>
                    {t("business.termDeposit.calcBlock.term")}
                  </div>
                  <div className={busynessStyle.select}>
                    <select
                      value={calc.term}
                      onChange={(e) => {
                        selectTerm(e);
                      }}
                    >
                      {createSelectOptions()}
                    </select>
                  </div>
                </div>
              </div>
              <div className={busynessStyle.resultBlock}>
                <div className={busynessStyle.resultBlockList}>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>
                      {t("business.termDeposit.calcBlock.interestRate")}:
                    </div>
                    <div className={busynessStyle.right}>
                      {calc.selectedRate}%
                    </div>
                  </div>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>
                      {t("business.termDeposit.calcBlock.altogether")}:
                    </div>
                    <div className={busynessStyle.right}>
                      {(
                        (((+calc.amount / 100) * +calc.selectedRate) / 12) *
                          calc.term +
                        calc.amount
                      ).toFixed(2)}
                      €
                    </div>
                  </div>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>
                      {t("business.termDeposit.calcBlock.amountOfInterest")}:
                    </div>
                    <div className={busynessStyle.right}>
                      {(
                        (((+calc.amount / 100) * +calc.selectedRate) / 12) *
                        calc.term
                      ).toFixed(2)}
                      €
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={busynessStyle.depositSectionButton}>
              <Link className="containedBtn long blue" href="/">
                {t("business.termDeposit.calcBlock.button")}
              </Link>
            </div>
          </section>
          <section id="process" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
              <div className={styles.stepsHeader}>
                <h3>{t("business.termDeposit.stepProcess.title")}</h3>
              </div>
              <Steper steperData={termDepositSteperData} />
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <ClientSupport />
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>
                {t("business.termDeposit.faq")}
              </h3>
              <div className={styles.faqList}>
                <Accordion faqData={DepositFAQ} singleLevel="true" />
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
