import styles from "@/styles/privacy-policy.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { privacyLinks } from "@/common/privacyLinks";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function PrivacyPolicy() {
  const {t} = useTranslation('common');

  return (
    <IndexLayout>
      <main>
        <section className={styles.privacyPolicySection}>
          <div className={styles.privacyPolicyBlock}>
            <h1>{t('privacyPolicy.title')}</h1>
            <p>{t('privacyPolicy.description')}</p>
          </div>
          <div className={styles.privacyPolicyLinks}>
            <ul>
              {privacyLinks.map((link, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      target="_blank"
                      href={link.linkUrl}
                      className={styles.linkStyle}
                    >
                      {t(`privacyPolicy.innerTabLinks.${link.linkName}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
