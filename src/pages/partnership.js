import styles from "@/styles/partnership.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroMobile from "../../public/assets/images/partnershipPage_HeroBlock_mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Partnership() {
  const { t } = useTranslation("common");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.partnershipSection}>
          <div className={styles.partnershipWrapper}>
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
            <h1>{t("partnership.pageTitle")}</h1>
            <p>{t("partnership.description")}</p>
          </div>
        </section>
        <section className={styles.articleSection}>
          <div className={styles.articleBlock}>
            <p>{t("partnership.articleBlock.article1")}</p>
            <p>{t("partnership.articleBlock.article2")}</p>
            <p>
              {t("partnership.articleBlock.article3")}
              <Link href="/contacts" className="readMoreLink">
                {t("partnership.articleBlock.contacts")}
              </Link>
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
