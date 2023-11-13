// Make sure this page is not needed anymore

import styles from "@/styles/credits.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";
import { getLoanForPrivatesState } from "@/store/faqList/faqList.slice";

export default function Credits() {
  const { t } = useTranslation("common");

  const faqData = useSelector(getLoanForPrivatesState);

  function createSelectOptions(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) arr.push(i);
    return arr.map((el, idx) => <option key={idx}>{el}</option>);
  }
  return (
    <IndexLayout>
      <main className={styles.creditsPage}>
        <section className={styles.creditsPageWrapper}>
          <div className={styles.creditsPageList}>
            <div className={styles.creditsHeroItem}>
              <h2>{t("consumerLoan.heroBlock.title")}</h2>
              <div className={styles.creditsPageDescription}>
                <p>{t("consumerLoan.heroBlock.description")}</p>
                <ul>
                  <li>{t("consumerLoan.heroBlock.bullet1")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet2")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet3")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet4")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet5")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet6")}</li>
                  <li>{t("consumerLoan.heroBlock.bullet7")}</li>
                </ul>
              </div>
              <div>
                <Link className="outlinedBtn long" href="/">
                  Pateikti indėlio paraišką
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.monthlyPaymentSection}>
          <div className={styles.calculatorWrapper}>
            <div className={styles.calculatorBlock}>
              <div className={styles.borderCorner}></div>
              <div className={styles.calculatorLine}>
                <div className={styles.label}>Kokią sumą skolinatės?</div>
                <input type="text" placeholder="10000" />
              </div>
              <div className={styles.calculatorLine}>
                <div className={styles.label}>Pradine imoka</div>
                <input type="text" placeholder="0" />
              </div>
              <div className={styles.calculatorLine}>
                <div className={styles.label}></div>
                <input type="text" placeholder="0" className={styles.procent} />
              </div>
              <div className={styles.calculatorLine}>
                <div className={styles.label}>Laikotarpis</div>
                <div className={styles.select}>
                  <select>{createSelectOptions(30)}</select>
                  <span>mėn.</span>
                </div>
              </div>
              <div className={styles.calculatorLine}>
                <div className={styles.label}>Palukanu norma</div>
                <input type="text" placeholder="5" />
              </div>
            </div>
            <div className={styles.resultBlock}>
              <h3>Mėnesinė įmoka</h3>
              <div className={styles.resultBlockTitle}>27.76€</div>
              <div className="outlinedBtn">
                <Link className="outlinedBtn" href="/">
                  Pasiskolinti
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.monthlyPaymentCrediancials}>
          <div className={styles.monthlyPaymentCrediancialsList}>
            <ul>
              <li>Paskola internetu*</li>
              <li>Nuo 500 € iki 25 000 €</li>
              <li>Grąžink per 3–84 mėnesius</li>
              <li>Palūkanos nuo 9%</li>
            </ul>
            <ul>
              <li>Fiksuotos mėnesinės įmokos</li>
              <li>Nereikia atsiskaityti už išlaidas</li>
              <li>Nereikia užstato ar draudimo</li>
              <li>Galima grąžinti anksčiau be jokių mokesčių</li>
            </ul>
          </div>
        </section>
        <section className={styles.monthlyPaymentDescription}>
          <div className={styles.monthlyPaymentDescriptionList}>
            <div className={styles.monthlyPaymentDescriptionItem}>
              <h3 className={styles.monthlyPaymentTitle}>
                Pamiršk laikus, kai skolintis buvo sudėtinga
              </h3>
              <div className={styles.monthlyPaymentDesc}>
                Banko skyriams laiko randa tik bankininkai. Mes patys skolinamės
                internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar
                nesi mūsų klientas! Nors veikiame pagal bankinius standartus,
                pinigai tavo sąskaitoje atsidurs kur kas greičiau nei tikiesi.
                Nuo paraiškos teikimo iki tapatybės nustatymo bei paskolos
                sutarčių pasirašymo – visas procesas vyksta internetu.
              </div>
            </div>
            <div className={styles.monthlyPaymentDescriptionItem}>
              <h3 className={styles.monthlyPaymentTitle}>
                Padedame įgyvendinti tavo tikslus
              </h3>
              <div className={styles.monthlyPaymentDesc}>
                Gyvenimas kupinas didelių užmojų bei netikėtumų. Finansų
                trūkumas neturėtų trukdyti pasiekti tikslų. Protingas ir gerai
                suplanuotas vartojimo kreditas padeda įgyvendinti planus
                neatsisakant įpročių ar gyvenimo būdo!Nuo netikėtai sudužusio
                telefono iki povestuvinės kelionės. Suteiktas kreditas yra tavo,
                todėl jį panaudoti gali taip, kaip tik nori!
              </div>
            </div>
            <div className={styles.monthlyPaymentDescriptionItem}>
              <h3 className={styles.monthlyPaymentTitle}>
                3 sutarties pasirašymo būdai
              </h3>
              <div className={styles.monthlyPaymentDesc}>
                Pasirink būdą, kuriuo pasirašyti sutartį tau patogiausia:
                <ul>
                  <li>
                    Mobiliuoju parašu arba išplėstiniu „Smart-ID“. Procesas
                    užtruks vos kelias minutes tau net nepakilus nuo sofos!
                    Pinigus pervesime pasirašius sutartį
                  </li>
                  <li>
                    Per pašto kurjerį, kuris tau patogiu laiku atvyks į
                    pasirinktą vietą. Pinigus perversime per 48 val. po
                    sutarties pasirašymo
                  </li>
                  <li>
                    Aplankyk mus Vilniuje ir pasirašyk sutartį tau patogiu
                    laiku. Paskolą išmokėsime kitą darbo dieną
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.monthlyPaymentDescriptionItem}>
              <h3 className={styles.monthlyPaymentTitle}>
                Skolinkis atsakingai
              </h3>
              <div className={styles.monthlyPaymentDesc}>
                Jei gali, dar nereiškia, kad turėtum. Šie klausimai padės
                apsispręsti ar vartojimo kreditas išties gera mintis: Kaip
                skubiai reikia įsigyti norimą daiktą / paslaugą?
                <ul>
                  <li>Kaip skubiai reikia įsigyti norimą daiktą / paslaugą?</li>
                  <li>
                    Ar to, ką pirksi, vertė tau yra didesnė už palūkanas, kurias
                    reikės sumokėti?
                  </li>
                  <li>Ar mėnesinės įmokos nepaveiks tavo gyvenimo kokybės?</li>
                  <li>
                    Ar yra tikimybė, kad ateityje gali pasikeisti tavo
                    situacija: darbo keitimas, papildomos išlaidos?
                  </li>
                </ul>
                Jei atsakęs į šiuos klausimus vis dar manai, kad nori
                pasiskolinti, pirmyn, mes padėsime, kuo galėsime!
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          {!!faqData.data && (
            <div className={styles.faqWrapper}>
              <div className={styles.faqList}>
                <Accordion faqData={faqData.data} singleLevel="true" />
              </div>
            </div>
          )}
        </section>
      </main>
    </IndexLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
