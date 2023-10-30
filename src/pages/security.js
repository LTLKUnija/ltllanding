import styles from "@/styles/security.module.scss";
import Accordion from "@/components/Accordion";
import IndexLayout from "@/Layouts/IndexLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import lt from "@/locales/lt";
import en from "@/locales/en";
import { basic } from "@/common/AccordionSchemas";

export default function Security() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.securityPage}>
            <div className={styles.securityPageWrapper}>
              <h1>{t.security.title}</h1>
              <div className={styles.securityPageDescription}>
                {t.security.description}
              </div>
              <ol>
                <li>{t.security.bullet1}</li>
                <li>
                  {t.security.bullet2}{" "}
                  <Link href="http://www.iidraudimas.lt" target="_blank">
                    www.iidraudimas.lt
                  </Link>
                </li>
                <li>{t.security.bullet3}</li>
                <li>{t.security.bullet4}</li>
                <li>{t.security.bullet5}</li>
                <li>{t.security.bullet6}</li>
                <li>{t.security.bullet7}</li>
              </ol>
              <p className={styles.subDescription}>
                {t.security.subDescription}
              </p>
              <p>{t.security.credits}</p>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.business.capitalLoan.faq}</h3>
              <div className={styles.faqList}>
                <Accordion faqData={basic} singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
