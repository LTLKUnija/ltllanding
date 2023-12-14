import styles from "@/styles/client-suport.module.scss";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";
import Link from "next/link";

export default function ClientSupport() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;
  return (
    <section id="clientSuport" className={styles.clientSuportSection}>
      <div className={styles.clientSuportWrapper}>
        <h3 className={styles.clientSuportHeader}>{t.clientSuport.title}</h3>
        <div className={styles.clientSuportDescription}>
          {t.clientSuport.description}
          <span>
            <a href="tel:+370 5 205 5240">+370 5 205 5240</a> /{" "}
            <a href="tel:+370 5 205 5241">+370 5 205 5241</a>
          </span>
          {t.clientSuport.or}
          <span>
            <Link href="mailto:pagalba@ltlku.lt">pagalba@ltlku.lt</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
