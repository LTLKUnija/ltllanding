import styles from "@/styles/open-banking.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroMobile from "../../public/assets/images/operBankingPage_HeroBlock_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { useRouter } from "next/router";
import Image from "next/image";

export default function OpenBanking() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.pageWrapper}>
          <div className={styles.pageList}>
            <div className={styles.heroItem}>
              <div className={styles.imgBlock}>
                <Image
                  src={BackBtn}
                  alt={"Hero Mobile"}
                  style={{ width: "24", height: "12" }}
                  className={[styles.heroImage, styles.backBtn].join(" ")}
                  onClick={handleBack}
                />
                <Image
                  src={HeroMobile}
                  alt={"Hero Mobile"}
                  style={{ width: "70%", height: "auto" }}
                  className={styles.heroImage}
                />
              </div>
              <h1 className={styles.title}>{t("openBanking.pageTitle")}</h1>
              <div className={styles.description}>
                <p>{t("openBanking.heroBlock.description")}</p>
                <ul>
                  <li>{t("openBanking.heroBlock.bullet1")}</li>
                  <li>{t("openBanking.heroBlock.bullet2")}</li>
                  <li>{t("openBanking.heroBlock.bullet3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.articlesSection}>
          <div className={styles.articlesWrapper}>
            <div className={styles.articlesBlock}>
              <h4>{t("openBanking.articleBlock.article1.title")}</h4>
              <p>{t("openBanking.articleBlock.article1.text")}</p>
            </div>
            <div className={styles.articlesBlock}>
              <h4>{t("openBanking.articleBlock.article2.title")}</h4>
              <p>{t("openBanking.articleBlock.article2.text")}</p>
            </div>
            <div className={styles.articlesBlock}>
              <h4>{t("openBanking.articleBlock.article3.title")}</h4>
              <p>{t("openBanking.articleBlock.article3.text")}</p>
            </div>
          </div>
        </section>
        <section className={styles.contactsSection}>
          <div className={styles.contactsWrapper}>
            <h4>{t("openBanking.contactBlock.title")}</h4>
            <p>
              {t("openBanking.contactBlock.text")}
              <Link href="/">openbanking@ltlku.lt.</Link>
            </p>
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
