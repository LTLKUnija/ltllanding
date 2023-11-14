import styles from "@/styles/payments.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import CurrencyConverter from "@/components/CurrencyConverter";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Payments() {
  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.paymentsHeroSection}>
            <div className={styles.paymentsHeroWrapper}>
              <div className={styles.paymentsHeroList}>
                <div className={styles.paymentsImg}></div>
                <CurrencyConverter />
              </div>
            </div>
          </section>
          <section className={styles.paymentsArticeWrapper}>
            <div className={styles.paymentsArticleBlock}>
              <div className={styles.paymentsArticeBlockList}>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    Nuo ko pradėti
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    Kad galėtumėte vykdyti finansinę veiklą, pirmiausia jums
                    reikės banko sąskaitos mano.bank. Tokią sąskaitą paprastai
                    ir greitai galite atidaryti internetu. Norimus mokėjimus
                    galėsite atlikti internetinėje bankininkystėje ar
                    naudodamiesi aplikacijų programavimo sąsaja (API). Visus
                    mokėjimo paslaugų įkainius ir susijusius mokesčius galite
                    rasti skiltyje Įkainiai.. Savo klientams mano.bank gali
                    pasiūlyti:
                    <ul>
                      <li>Vietinius mokėjimus visoje Lietuvoje</li>
                      <li>
                        Tarptautinius pervedimus visame pasaulyje (tiek SEPA,
                        tiek SWIFT mokėjimus)
                      </li>
                      <li>Valiutų keitimo operacijas</li>
                      <li>
                        Patogų operacijų atlikimą ir valdymą naudojantis
                        mano.bank interneto banku arba API
                      </li>
                      <li>
                        Profesionalias konsultacijas ir individualų dėmesį
                      </li>
                      <li>
                        Jeigu norite saugiai ir patogiai naudotis šiomis
                        paslaugomis – atidarykite sąskaitą mano.bank jau dabar.
                        Tai – labai paprasta!
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    Patogus europinių pinigų pervedimas (SEPA)
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    Naudodamiesi mano.bank paslaugomis galite pasirinkti jums
                    labiausiai tinkantį SEPA mokėjimų iniciavimo būdą:
                    inicijuoti vienkartinius mokėjimus, įkelti didesnį mokėjimų
                    kiekį failu ar pateikti mokėjimų nurodymus, naudojantis
                    aplikacijų programavimo sąsaja (API). Pateikus mokėjimo
                    nurodymą mano.bank darbo dienomis iki 16 val., lėšos
                    įprastai įskaitomos į gavėjo sąskaitą tą pačią darbo dieną.
                    Europinius pinigų pervedimus galite atlikti eurais į bet
                    kurią Lietuvos, Jungtinės Karalystės, Šveicarijos, Monako,
                    San Marino, Andoros, Norvegijos, Islandijos, Lichtenšteino
                    ar Europos Sąjungos valstybės narės finansų instituciją,
                    kuri yra prisijungusi prie SEPA mokėjimų sistemos.
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    Mokėjimų atlikimas visame pasaulyje (SWIFT)
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    Turėdami mano.bank banko sąskaitą mokėjimus galite atlikti
                    ir visame pasaulyje. Be aukščiau nurodytų europinių pinigų
                    pervedimų, pavedimai eurais taip pat gali būti vykdomi į ir
                    iš mano.bank sąskaitos bet kur pasaulyje. Be to, mokėjimus
                    galite inicijuoti ir kitomis valiutomis - AUD, CAD, CHF,
                    DKK, GBP, NOK, PLN, SEK, USD. Savo sąskaitoje turimus
                    pinigus eurais bet kuriuo metu galite konvertuoti į kitą
                    valiutą arba kitą valiutą konvertuoti į eurus bei atlikti
                    mokėjimus pasirinkta valiuta. Valiutų skaičiuoklėje
                    sužinosite norimos valiutos kursą, lėšų gavimo preliminarų
                    terminą ir kitą su mokėjimu susijusią informaciją. Suteikite
                    savo finansams daugiau lankstumo. Valiutų keitimai atliekami
                    be jokių papildomų mokesčių, o kursus atnaujiname ne rečiau
                    kaip kartą per valandą.
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    Saugumas ir pinigų apsauga
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    Esame Europos Sąjungoje licencijuotas bankas, registruotas
                    Lietuvoje ir reguliuojamas Lietuvos banko, ir jūsų pinigų
                    saugumui teikiame didžiausią dėmesį. Sukūrėme patogią
                    savitarnos sistemą bei esame prisijungę prie saugių
                    tarptautinių mokėjimo sistemų - SWIFT, SEPA, TARGET2.
                    Nuolatos tobuliname savo paslaugas, kad mūsų klientams
                    operacijas eurais ar kitomis valiutomis atlikti būtų kuo
                    paprasčiau. Saugus naudojimasis banko paslaugomis priklauso
                    ir nuo jJūsų, primename pagrindines taisykles:
                    <ul>
                      <li>
                        Niekada niekam neatskleiskite savo interneto banko
                        naudotojo ID, interneto banko, „Smart-ID“, mobiliojo
                        elektroninio parašo slaptažodžių. „Mano banko“
                        darbuotojai niekada neprašo tokių duomenų, jų
                        dažniausiai prašo ne kas kitas, o finansiniai sukčiai ir
                        šių duomenų neturite atskleisti jiems, kalbėdami
                        telefonu, siunčiant SMS žinutes, el. paštu ar kitais
                        būdais.
                      </li>
                      <li>
                        Nespauskite jokių el. paštu, pokalbių programėlėse ar
                        SMS žinutėse gautų nuorodų, nevykdykite prašymų suvesti
                        arba padiktuoti prisijungimo prie interneto banko
                        duomenis.
                      </li>
                      <li>
                        Atidžiai perskaitykite gautos internetinės nuorodos
                        adresą – sukčiai dažnai sukuria beveik identišką
                        interneto banko prisijungimo puslapį, bet jo nuoroda nuo
                        tikrojo visada skirsis bent viena raide ar simboliu.
                      </li>
                    </ul>
                  </div>
                </div>
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
