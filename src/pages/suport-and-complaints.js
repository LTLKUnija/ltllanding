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
{/* changing 2 blocks to one block                 
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
*/}
        <section className={styles.settlementSection}>
          <div className={styles.settlementsWrapper}>
            <p>{t("suportsComplaints.articleBlock.article3.description1")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description2")}</p>
            <ol>
              <li>{t("suportsComplaints.articleBlock.article3.bullet1")}</li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet2")}</li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet3")}</li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet4")}</li>
            </ol>
            <p>{t("suportsComplaints.articleBlock.article3.description3")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description4")}</p>
            <ul>
              <li>{t("suportsComplaints.articleBlock.article3.bullet5")}</li>
              <li>
                {t("suportsComplaints.articleBlock.article3.description6")}{" "}
                <Link
                  href="https://storage.googleapis.com/ltlku_web_page/forms/Skundo_forma.docx"
                  target="_blank"
                  className="readMoreLink"
                >
                  Skundo_forma.docx
                </Link>
              </li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet7")}</li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet8")}</li>
              <li>{t("suportsComplaints.articleBlock.article3.bullet9")}</li>
            </ul>
            <p>{t("suportsComplaints.articleBlock.article3.description5")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description6")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description7")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description8")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description9")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description10")}</p>                
            <p>{t("suportsComplaints.articleBlock.article3.description11")}</p>
            <p>{t("suportsComplaints.articleBlock.article3.description12")}</p>                
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
