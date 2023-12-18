import styles from "@/styles/licence.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import LicenceImg from "@../../../public/assets/images/Licence.png";
import LicenceImgEn from "@../../../public/assets/images/LicenceEn.png";
import { useRouter } from "next/router";

export default function Licence() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <IndexLayout>
      <main>
        <section className={styles.licenceSection}>
          <div className={styles.licenceWrapper}>
            <h3>{t("licence.pageTitle")}</h3>
            <p>{t("licence.description")}</p>
          </div>
        </section>
        <section className={styles.imgSection}>
          <div className={styles.imgWrapper}>
            {router.locale === "en" ? (
              <Image
                src={LicenceImg}
                alt="licence"
                width={1025}
                height={1700}
              />
            ) : (
              <Image
                src={LicenceImgEn}
                alt="licence"
                width={1025}
                height={1700}
              />
            )}
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
