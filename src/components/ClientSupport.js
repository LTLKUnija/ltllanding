import styles from "@/styles/client-suport.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ClientSupport() {
  const { t } = useTranslation("common");
  return (
    <section id="clientSuport" className={styles.clientSuportSection}>
      <div className={styles.clientSuportWrapper}>
        <h3 className={styles.clientSuportHeader}>{t("clientSuport.title")}</h3>
        <div className={styles.clientSuportDescription}>
          {t("clientSuport.description")}
          <span>
            <Link href="tel:+370 5 205 5240">+370 5 205 5240</Link> /
            <Link href="tel:+370 5 205 5241">+370 5 205 5241</Link>
          </span>
          {t("clientSuport.or")}
          <span>
            <Link href="mailto:pagalba@ltlku.lt">pagalba@ltlku.lt</Link>
          </span>
        </div>
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
