import styles from "@/styles/payments.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import HeroMobile from "../../public/assets/images/product_Hero_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import Link from "next/link";

export default function Payments() {
  const { t } = useTranslation("common");

  const handleBack = () => {
    router.back();
  };

  return (
    <>
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
                <h1 className={styles.title}>{t("payments.title")}</h1>
                <div className={styles.description}>
                  <p>{t("payments.heroBlock.description")}</p>
                  <ul>
                    <li>{t("payments.heroBlock.bullet1")}</li>
                    <li>{t("payments.heroBlock.bullet2")}</li>
                    <li>{t("payments.heroBlock.bullet3")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.paymentsArticeWrapper}>
            <div className={styles.paymentsArticleBlock}>
              <div className={styles.paymentsArticeBlockList}>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t("payments.benefitsArticle.article1.title")}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t("payments.benefitsArticle.article1.description")}
                    <Link className="readMoreLink" href="/pricelist">
                      {t("payments.benefitsArticle.article1.link")}
                    </Link>
                    {t("payments.benefitsArticle.article1.restDescription")}

                    <ul>
                      <li>{t("payments.benefitsArticle.article1.bullet1")}</li>
                      <li>{t("payments.benefitsArticle.article1.bullet2")}</li>
                      <li>{t("payments.benefitsArticle.article1.bullet3")}</li>
                      <li>{t("payments.benefitsArticle.article1.bullet4")}</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t("payments.benefitsArticle.article2.title")}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t("payments.benefitsArticle.article2.description")}
                  </div>
                </div>
                {/* <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t("payments.benefitsArticle.article3.title")}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t("payments.benefitsArticle.article3.description")}
                  </div>
                </div>
                <div className={styles.paymentsArticeBlockItem}>
                  <h1 className={styles.paymentsArticleTitle}>
                    {t("payments.benefitsArticle.article4.title")}
                  </h1>
                  <div className={styles.paymentsArticleDescription}>
                    {t("payments.benefitsArticle.article4.description")}
                    <ul>
                      <li>{t("payments.benefitsArticle.article4.bullet1")}</li>
                      <li>{t("payments.benefitsArticle.article4.bullet2")}</li>
                      <li>{t("payments.benefitsArticle.article4.bullet3")}</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
