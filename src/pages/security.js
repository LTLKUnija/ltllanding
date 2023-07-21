import styles from "@/styles/security.module.scss";
import Accordion from "@/components/Accordion";
import IndexLayout from "@/Layouts/IndexLayout";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function Security() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.securityPage}>
            <div className={styles.securityPageWrapper}>
              <h1 className="page-title">{t.security.title}</h1>
              <div className={styles.securityPageDescription}></div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.business.capitalLoan.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
