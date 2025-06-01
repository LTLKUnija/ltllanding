import styles from "@/styles/client-suport.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ClientSupportLoanPrivate() {
  const { t } = useTranslation("common");
  return (
    <section id="clientSuportLoanPrivate" className={styles.clientSuportSection}>
      <div className={styles.clientSuportWrapper}>
        <h3 className={styles.clientSuportHeader}>{t("clientSuportLoanPrivate.title")}</h3>
        <p className={styles.clientSuportDescription}>{t("clientSuportLoanPrivate.description1")}</p>
        <p className={styles.clientSuportDescription}>{t("clientSuportLoanPrivate.description2")}</p>
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
