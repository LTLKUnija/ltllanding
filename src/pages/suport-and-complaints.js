import styles from "@/styles/suport-and-complaints.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SuportAndComplaints() {
  const { t } = useTranslation("common");

  return (
    <IndexLayout>
      <main>
        <section className={styles.SuportAndComplaintsHeroPage}>
          <div className={styles.SuportAndComplaintsHeroTitle}>
            <h1>{t("suportsComplaints.pageTitle")}</h1>
          </div>
        </section>
        <section className={styles.settlementSection}>
          <div className={styles.settlementsWrapper}>
            <div className={styles.settlementBlock}>
              <h3>{t("suportsComplaints.articleBlock.article1.title")}</h3>
              <p>{t("suportsComplaints.articleBlock.article1.description")}</p>
            </div>
            <div className={styles.settlementBlock}>
              <h3>{t("suportsComplaints.articleBlock.article2.title")}</h3>
              <p>
                {t("suportsComplaints.articleBlock.article2.description")}
                <Link
                  href="https://www.lb.lt/lt/vartotoju-ir-finansu-rinkos-dalyviu-gincai"
                  className="readMoreLink"
                >
                  {" "}
                  https://www.lb.lt/lt/vartotoju-ir-finansu-rinkos-dalyviu-gincai
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className={styles.formSection}>
          <div className={styles.formTitleBlock}>
            <ContactForm formTitle={true} />
          </div>
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
