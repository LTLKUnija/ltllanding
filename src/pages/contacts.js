import styles from "@/styles/contacts.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import ContactForm from "@/components/ContactForm";
import Gmap from "@/components/Gmap";
import { useJsApiLoader } from "@react-google-maps/api";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

export default function Contacts() {
  const { t } = useTranslation("common");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const defaultCenter = {
    lat: 54.6947,
    lng: 25.29819,
  };

  const { isLoaded: gmapIsLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  return (
    <IndexLayout>
      <main>
        <section className={styles.contactsPageWrapper}>
          <div className={styles.contactsPageList}>
            <div className={styles.contactsHeroItem}>
              <h3 className={styles.contactsTitle}>
                {t("contacts.heroBlock.contactsTitle")}
              </h3>
              <div className={styles.contactsPageDescription}>
                <p>{t("contacts.heroBlock.directorName")}</p>
                <p>
                  <Link
                    href="mailto:ruslanas.telnovas@ltlku.lt"
                    className="readMoreLink"
                  >
                    ruslanas.telnovas@ltlku.lt
                  </Link>
                </p>
                <p>
                  <Link href="tel:+370 5 205 5240" className="readMoreLink">
                    +370 5 205 5240
                  </Link>
                </p>
                <p>
                  <Link href="tel:+370 5 205 5241" className="readMoreLink">
                    +370 5 205 5241
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.contactsHeroItem}>
              <h3 className={styles.contactsTitle}>
                {t("contacts.heroBlock.companyDetails")}
              </h3>
              <div className={styles.contactsPageDescription}>
                <p>{t("contacts.heroBlock.companyDetailsDescription")}</p>
                <p>
                  <Link href="tel:+370 5 205 5240" className="readMoreLink">
                    +370 5 205 5240
                  </Link>
                </p>
                <p>
                  <Link href="mailto:info@ltlku.lt" className="readMoreLink">
                    info@ltlku.lt
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {gmapIsLoaded ? <Gmap center={defaultCenter} /> : <h2>Is Loading</h2>}
        </section>
        <section className={styles.contactsCustomerServiceSection}>
          <div className={styles.contactsCustomerServiceWrapper}>
            <h3>{t("contacts.articleBlock.title")}</h3>
            <div className={styles.contactsCustomerServiceWorkingDays}>
              <div className={styles.contactsCustomerServiceSimpleDays}>
                <p className={styles.workDays}>
                  {t("contacts.articleBlock.mondayThursday")}
                </p>
                <p className={styles.workHours}>9:30 – 16:30</p>
              </div>
              <div className={styles.contactsCustomerServiceDescription}>
                <p className={styles.workDays}>
                  {t("contacts.articleBlock.friday")}
                </p>
                <p className={styles.workHours}>9:30 - 15:00</p>
              </div>
            </div>
            <p className={styles.contactsCustomerServiceCredentials}>
              {t("contacts.articleBlock.description")}
            </p>
          </div>
        </section>
        <section className={styles.contactsForm}>
          <ContactForm formTitle={true} />
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
