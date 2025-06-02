import styles from "@/styles/client-suport.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ClientSupportLoanLegal() {
  const { t } = useTranslation("common");
  return (
    <section id="clientSuportLoanLegal" className={styles.clientSuportSection}>
      <div className={styles.clientSuportWrapper}>
        <h3 className={styles.clientSuportHeader}>{t("clientSuportLoanLegal.title")}</h3>
        <p className={styles.clientSuportDescription}>{t("clientSuportLoanLegal.description1")}</p>
        <p className={styles.clientSuportDescription}>{t("clientSuportLoanLegal.description2")}</p>
        <p className={styles.clientSuportDescription}>{t("clientSuportLoanLegal.description3")}</p>
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
