import styles from "@/styles/deposits.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Steper from "@/components/Steper"
import { depositSteperData } from "@/pages/api/data/stepersData"
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
                <h1 className={styles.depositTitle}>{t.termDeposit.heroBlock.title}</h1>
                <div className={styles.depositPageDescription}>
                  <p>
                    {t.termDeposit.heroBlock.description}
                  </p>
                  <ul>
                    <li>{t.termDeposit.heroBlock.bullet1}</li>
                    <li>{t.termDeposit.heroBlock.bullet2}</li>
                    <li>{t.termDeposit.heroBlock.bullet3}</li>
                    <li>{t.termDeposit.heroBlock.bullet4}</li>
                    <li>{t.termDeposit.heroBlock.bullet5}</li>
                    <li>{t.termDeposit.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">{t.termDeposit.innerLinkBlock.benefits}</Link>
              <Link className={styles.innerNavLink} href="#interestRate">{t.termDeposit.innerLinkBlock.interestRates}</Link>
              <Link className={styles.innerNavLink} href="#calculator">{t.termDeposit.innerLinkBlock.calculator}</Link>
              <Link className={styles.innerNavLink} href="#process">{t.termDeposit.innerLinkBlock.process}</Link>
              <Link className={styles.innerNavLink} href="#clientSuport">{t.termDeposit.innerLinkBlock.clientSuport}</Link>
              <Link className={styles.innerNavLink} href="#faq">{t.termDeposit.faq}</Link>
            </div>
          </section>
          <section id="benefits" className={styles.depositBenefitsSection}>
            <div className={styles.depositBenefitsWrapper}>
              <div className={styles.depositBenefitsBlock}>
                <h2>{t.termDeposit.benefitsArticle.article1.title}</h2>
                <p>{t.termDeposit.benefitsArticle.article1.description}</p>
              </div>
              <div className={styles.depositBenefitsBlock}>
                <h2>{t.termDeposit.benefitsArticle.article2.title}</h2>
                <p>{t.termDeposit.benefitsArticle.article2.description}</p>
              </div>
              <div className={styles.depositBenefitsBlock}>
                <h2>{t.termDeposit.benefitsArticle.article3.title}</h2>
                <p>{t.termDeposit.benefitsArticle.article3.description}</p>
              </div>
            </div>
          </section>
          <section id="interestRate" className={styles.ratesTableSection}>
            <div className={styles.ratesTableWrapper}>
              <h3>{t.termDeposit.interestRatesArticle.title}</h3>
              <p>{t.termDeposit.interestRatesArticle.description}</p>
              <div className={styles.tableHeading}>
                <div className={[styles.tableHeadingCell, styles.column1].join(' ')}>{t.termDeposit.interestRatesArticle.period}</div>
                <div className={[styles.tableHeadingCell, styles.column2].join(' ')}>{t.termDeposit.interestRatesArticle.interestRate} (EUR)</div>
                <div className={[styles.tableHeadingCell, styles.column3].join(' ')}>{t.termDeposit.interestRatesArticle.interestRate} (USD)</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>1 {t.termDeposit.interestRatesArticle.month}</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>1.00%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>1.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>3 {t.termDeposit.interestRatesArticle.month}</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>1.75%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>1.75%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>6 {t.termDeposit.interestRatesArticle.month}</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>2.00%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>2.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>12 {t.termDeposit.interestRatesArticle.month}</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>2.50%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>3.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>18 {t.termDeposit.interestRatesArticle.month}</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>3.10%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>3.00%</div>
              </div>
            </div>
          </section>
          <section id="calculator" className={styles.calculatorSection}>
            <h2>{t.termDeposit.calcBlock.title}</h2>
            <div className={styles.calculatorWrapper}>
              <div className={styles.calculatorBlock}>
                <div className={styles.borderCorner}></div>
                <div className={styles.calculatorLine}>
                  <div className={styles.label}>{t.termDeposit.calcBlock.ammoutOfDeposit}</div>
                  <input type="text" value={calc.amount} pattern="[0-9\.\-]*"  onChange={(e) => {amountHandler(e)}} placeholder="Enter amount" />
                </div>
                <div className={styles.calculatorLine}>
                  <div className={styles.label}>{t.termDeposit.calcBlock.term}</div>
                  <div className={styles.select}>
                    <select value={calc.term} onChange={(e) => { selectTerm(e) }}>{createSelectOptions()}</select>
                  </div>
                </div>
              </div>
              <div className={styles.resultBlock}>
                <div className={styles.resultBlockList}>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>{t.termDeposit.calcBlock.interestRate}:</div>
                    <div className={styles.right}>{calc.selectedRate}%</div>
                  </div>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>{t.termDeposit.calcBlock.altogether}:</div>
                    <div className={styles.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term + calc.amount).toFixed(2)}€</div>
                  </div>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>{t.termDeposit.calcBlock.amountOfInterest}:</div>
                    <div className={styles.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term).toFixed(2)}€</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depositSectionButton}>
              <Link className="light-green-action-button long" href="/">{t.termDeposit.calcBlock.button}</Link>
            </div>
          </section>
          <section id="process" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.termDeposit.stepProcess.title}</h3>
                </div>
                <Steper steperData={depositSteperData}/>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.termDeposit.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.termDeposit.clientSuport.description}
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
    </>
  )
}
