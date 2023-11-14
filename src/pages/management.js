import styles from "@/styles/management.module.scss";
import Link from "next/link";
import IndexLayout from "@/Layouts/IndexLayout";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/managment_img1.png";
import Img2 from "@../../../public/assets/images/managment_img2.png";
import HeroMobile from "../../public/assets/images/managmentPage_heroBlock-mobile.png";
import BackBtn from "../../public/assets/images/backBtn.png";
import { useRouter } from "next/router";
import { aboutUsInnerLinkList } from "@/common/innerLinksData";
import InnerLinks from "@/components/InnerLinks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ModalImage from "react-modal-image";

export default function About() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleBack = () => {
    router.back();
  };

  return (
    <IndexLayout>
      <main>
        <section className={styles.aboutUsSection}>
          <div className={styles.aboutUsWrapper}>
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
          </div>
          <h1 className={styles.title}>{t("aboutUs.heroBlock.title")}</h1>
          <div className={styles.aboutUsHeroBlock}>
            <div className={styles.aboutUsHeroMission}>
              <h4 className={styles.missionTitle}>
                {t("aboutUs.heroBlock.description.missionTitle")}
              </h4>
              <div className={styles.missionDescription}>
                {t("aboutUs.heroBlock.description.missionDescription")}
              </div>
            </div>
            <div className={styles.aboutUsHeroVision}>
              <h4 className={styles.visionTitle}>
                {t("aboutUs.heroBlock.description.visionTitle")}
              </h4>
              <div className={styles.visionDescription}>
                {t("aboutUs.heroBlock.description.visionDescription")}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationBlock}>
          <InnerLinks innerLinksData={aboutUsInnerLinkList} />
        </section>
        <section id="people" className={styles.teamSection}>
          <div className={styles.teamWrapper}>
            <h3>{t("aboutUs.team.title")}</h3>
            <span className={styles.teamDescription}>
              {t("aboutUs.team.description")}
            </span>
            <div className={styles.teamBlock}>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t("aboutUs.team.duties")} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t("aboutUs.team.duties")} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t("aboutUs.team.duties")} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t("aboutUs.team.duties")} : </p>
              </div>
            </div>
          </div>
        </section>

        <section id="jobs" className={styles.jobsSection}>
          <h3>{t("aboutUs.companyManagementScheme.title")}</h3>
          <ModalImage
            small={"/assets/images/112.png"}
            large={"/assets/images/org_structure.png"}
          />
        </section>
        <section id="values" className={styles.valuesSection}>
          <div className={styles.valuesWrapper}>
            <div className={styles.valuesBlock}>
              <h3>{t("aboutUs.benefitsArticle.article1.title")}</h3>
              <p>{t("aboutUs.benefitsArticle.article1.description")}</p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>{t("aboutUs.benefitsArticle.article2.title")}</h3>
              <p>{t("aboutUs.benefitsArticle.article2.description")}</p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>{t("aboutUs.benefitsArticle.article3.title")}</h3>
              <p>{t("aboutUs.benefitsArticle.article3.description")}</p>
            </div>
          </div>
        </section>
        <section id="sponsorship" className={styles.sponsorshipMirror}>
          <div className={styles.jobsWrapper}>
            <div className={styles.img}></div>
            <div className={styles.jobsCrediantials}>
              <h3>{t("aboutUs.sponsorshipSection.title")}</h3>
              <p>{t("aboutUs.sponsorshipSection.description")}</p>
              <Link href="/partnership" className={styles.readMore}>
                {t("aboutUs.sponsorshipSection.readMore")} &gt;
              </Link>
            </div>
            <Image
              src={Img2}
              alt="Available Jobs"
              style={{
                width: "30%",
                height: "auto",
              }}
            />
          </div>
        </section>
        <section id="history" className={styles.historySection}>
          <div className={styles.historyWrapper}>
            <h3>{t("aboutUs.history.title")}</h3>
            <p className={styles.historyDescription}>
              {t("aboutUs.history.description")}
            </p>
            <div className={styles.historyYearList}>
              <div className={styles.historyYearItem}>
                <h4>1999</h4>
                <p className={styles.description}>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
              <div className={styles.historyYearItem}>
                <h4>2005</h4>
                <p>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
              <div className={styles.historyYearItem}>
                <h4>2008</h4>
                <p>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
              <div className={styles.historyYearItem}>
                <h4>1999</h4>
                <p>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
              <div className={styles.historyYearItem}>
                <h4>2005</h4>
                <p>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
              <div className={styles.historyYearItem}>
                <h4>2008</h4>
                <p>
                  Ever since the Etruscans dropped by to party and stayed,
                  Tuscany has seduced.
                </p>
              </div>
            </div>
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
