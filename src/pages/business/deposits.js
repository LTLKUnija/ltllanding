import styles from "@/styles/deposits.module.scss"
import busynessStyle from "@/styles/business.deposits.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Deposit() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  const [calc, setCalc] = useState({
    amount: 10000,
    term: 3,
    selectedRate: 1.75
  })
  let ratesList = [
    {
      term: 1,
      rate: 1.00,
    },
    {
      term: 3,
      rate: 1.75,
    },
    {
      term: 6,
      rate: 2.00,
    },
    {
      term: 12,
      rate: 2.50,
    },
    {
      term: 18,
      rate: 3.10,
    },            
  ]
  function createSelectOptions() {
    return ratesList.map((el, idx) => <option data-rate={el.rate} key={idx}>{el.term}</option>)
  }

  function selectTerm(e) {
    let selectedRate = +Array.from(e.target.options).filter(opt => opt.value == e.target.value)[0].getAttribute('data-rate')
    setCalc({ ...calc, term: +e.target.value, selectedRate: selectedRate })
  }

  function amountHandler(e) {
    var digits = e.target.value.replace(/\D/g, "");
    setCalc({ ...calc, amount: +digits }) 
  }
  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.depositPageWrapper}>
            <div className={styles.depositPageList}>
              <div className={styles.depositHeroItem}>
                <h1 className={styles.depositTitle}>{t.business.termDeposit.heroBlock.title}</h1>
                <div className={styles.depositPageDescription}>
                  <p>
                    {t.business.termDeposit.heroBlock.description}
                  </p>
                  <ul>
                    <li>{t.business.termDeposit.heroBlock.bullet1}</li>
                    <li>{t.business.termDeposit.heroBlock.bullet2}</li>
                    <li>{t.business.termDeposit.heroBlock.bullet3}</li>
                    <li>{t.business.termDeposit.heroBlock.bullet4}</li>
                    <li>{t.business.termDeposit.heroBlock.bullet5}</li>
                    <li>{t.business.termDeposit.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">{t.business.termDeposit.innerLinkBlock.benefits}</Link>
              <Link className={styles.innerNavLink} href="#process">{t.business.termDeposit.innerLinkBlock.process}</Link>
              <Link className={styles.innerNavLink} href="#calculator">{t.business.termDeposit.innerLinkBlock.calculator}</Link>
              <Link className={styles.innerNavLink} href="#clientSuport">{t.business.termDeposit.innerLinkBlock.clientSuport}</Link>
              <Link className={styles.innerNavLink} href="#faq">{t.business.termDeposit.faq}</Link>
            </div>
          </section>
          <section id="benefits" className={busynessStyle.benefitsSection}>
            <div className={busynessStyle.benefitsWrapper}>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t.business.termDeposit.benefitsArticle.article1.title}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t.business.termDeposit.benefitsArticle.article1.description}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t.business.termDeposit.benefitsArticle.article2.title}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t.business.termDeposit.benefitsArticle.article2.description}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t.business.termDeposit.benefitsArticle.article3.title}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t.business.termDeposit.benefitsArticle.article3.description}
                </div>
              </div>
              <div className={busynessStyle.benefitsBlock}>
                <h3 className={busynessStyle.benefitsTitle}>
                  {t.business.termDeposit.benefitsArticle.article4.title}
                </h3>
                <div className={busynessStyle.benefitsDescription}>
                  {t.business.termDeposit.benefitsArticle.article4.description}
                </div>
              </div>
            </div>
          </section>
          <section id="calculator" className={busynessStyle.calculatorSection}>
            <h2>{t.business.termDeposit.calcBlock.title}</h2>
            <p>{t.business.termDeposit.calcBlock.subTitle}</p>
            <div className={busynessStyle.calculatorWrapper}>
              <div className={busynessStyle.calculatorBlock}>
                <div className={busynessStyle.borderCorner}></div>
                <div className={busynessStyle.calculatorLine}>
                  <div className={busynessStyle.label}>{t.business.termDeposit.calcBlock.ammoutOfDeposit}</div>
                  <input type="text" value={calc.amount} pattern="[0-9\.\-]*"  onChange={(e) => {amountHandler(e)}} placeholder="Enter amount" />
                </div>
                <div className={busynessStyle.calculatorLine}>
                  <div className={busynessStyle.label}>{t.business.termDeposit.calcBlock.term}</div>
                  <div className={busynessStyle.select}>
                    <select value={calc.term} onChange={(e) => { selectTerm(e) }}>{createSelectOptions()}</select>
                  </div>
                </div>
              </div>
              <div className={busynessStyle.resultBlock}>
                <div className={busynessStyle.resultBlockList}>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>{t.business.termDeposit.calcBlock.interestRate}:</div>
                    <div className={busynessStyle.right}>{calc.selectedRate}%</div>
                  </div>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>{t.business.termDeposit.calcBlock.altogether}:</div>
                    <div className={busynessStyle.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term + calc.amount).toFixed(2)}€</div>
                  </div>
                  <div className={busynessStyle.resultBlockItem}>
                    <div className={busynessStyle.left}>{t.business.termDeposit.calcBlock.amountOfInterest}:</div>
                    <div className={busynessStyle.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term).toFixed(2)}€</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={busynessStyle.depositSectionButton}>
              <Link className="light-green-action-button long" href="/">{t.business.termDeposit.calcBlock.button}</Link>
            </div>
          </section>
          <section id="process" className={styles.depositsStepsSection}>
            <div className={styles.depositsStepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.business.termDeposit.stepProcess.title}</h3>
                </div>
                <div className={styles.stepsList}>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>1</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.termDeposit.stepProcess.step1.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.termDeposit.stepProcess.step1.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>2</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.termDeposit.stepProcess.step2.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.termDeposit.stepProcess.step2.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>3</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.termDeposit.stepProcess.step3.title}</h2>
                        <p>{t.business.termDeposit.stepProcess.step3.subTitle}</p>
                        <div className={styles.stepsDescription}>
                            <ul>
                              <li>{t.termDeposit.stepProcess.step3.bulletBlock.bullet1}</li>
                              <li>{t.business.termDeposit.stepProcess.step3.bulletBlock.bullet2}</li>
                              <li>{t.business.termDeposit.stepProcess.step3.bulletBlock.bullet3}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>4</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.termDeposit.stepProcess.step4.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.termDeposit.stepProcess.step4.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>5</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.termDeposit.stepProcess.step5.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.termDeposit.stepProcess.step5.text}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.business.termDeposit.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.business.termDeposit.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.business.termDeposit.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  )
}
