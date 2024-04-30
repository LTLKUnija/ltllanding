import styles from "@/styles/money-loundrying.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeroMobile from "../../public/assets/images/moneyLoundryingPage_heroBlock_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import Image from "next/image";
import Link from "next/link";

export default function MoneyLoundrying() {
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
              <h1 className={styles.title}>{t("moneyLoundering.title")}</h1>
            </div>
          </div>
        </section>
        <section className={styles.articlesSection}>
          <div className={styles.articlesWrapper}>
            <div className={styles.articlesBlock}>
              <p>{t("moneyLoundering.articleBlock.article1")}</p>
            </div>
            <div className={styles.articlesBlock}>
              <p>{t("moneyLoundering.articleBlock.article2")}</p>
            </div>
          </div>
          <p className={styles.articleParagraph}>
            {t("moneyLoundering.articleBlock.article3")}

            <Link
              href="https://storage.googleapis.com/ltlku_web_page/riskAppetiteDeclaration/2023%2001%2031%20Rizikos%20apetito%20deklaracija.pdf"
              target="_blank"
              className="readMoreLink"
            >
              {t("moneyLoundering.articleBlock.link")}
            </Link>
          </p>
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
