import styles from "@/styles/about.module.scss";
import Link from "next/link";
import IndexLayout from "@/Layouts/IndexLayout";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/managment_img1.png";
import Img2 from "@../../../public/assets/images/managment_img2.png";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function About() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  return (
    <IndexLayout>
      <main>
        <section className={styles.aboutUsSection}>
          <div className={styles.aboutUsWrapper}>
            <h1 className={styles.aboutUsHeroTitle}>
              {t.aboutUs.heroBlock.title}
            </h1>
            <div className={styles.aboutUsHeroBlock}>
              <div classNamAe={styles.aboutUsHeroMission}>
                <div className={styles.missionTitle}>
                  {t.aboutUs.heroBlock.description.missionTitle}
                </div>
                <div className={styles.missionDescription}>
                  {t.aboutUs.heroBlock.description.missionDescription}
                </div>
              </div>
              <div className={styles.aboutUsHeroVision}>
                <div className={styles.visionTitle}>
                  {t.aboutUs.heroBlock.description.visionTitle}
                </div>
                <div className={styles.visionDescription}>
                  {t.aboutUs.heroBlock.description.visionDescription}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationBlock}>
          <div className={styles.innerNavigationLinkList}>
            <Link className={styles.innerNavLink} href="#peaople">
              {t.aboutUs.innerLinkBlock.people}
            </Link>
            <Link className={styles.innerNavLink} href="#values">
              {t.aboutUs.innerLinkBlock.values}
            </Link>
            <Link className={styles.innerNavLink} href="#jobs">
              {t.aboutUs.innerLinkBlock.jobs}
            </Link>
            <Link className={styles.innerNavLink} href="#sponsorship">
              {t.aboutUs.innerLinkBlock.sponsorship}
            </Link>
            <Link className={styles.innerNavLink} href="#history">
              {t.aboutUs.innerLinkBlock.history}
            </Link>
            <Link className={styles.innerNavLink} href="/news">
              {t.aboutUs.innerLinkBlock.news}
            </Link>
          </div>
        </section>
        <section id="peaople" className={styles.teamSection}>
          <div className={styles.teamWrapper}>
            <h3>{t.aboutUs.team.title}</h3>
            <span className={styles.teamDescription}>
              {t.aboutUs.team.description}
            </span>
            <div className={styles.teamBlock}>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t.aboutUs.team.duties} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t.aboutUs.team.duties} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t.aboutUs.team.duties} : </p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>{t.aboutUs.team.duties} : </p>
              </div>
            </div>
          </div>
        </section>
        <section id="jobs" className={styles.jobsSection}>
          <div className={styles.jobsWrapper}>
            <Image
              src={Img1}
              alt="Available Jobs"
              style={{
                width: "30%",
                height: "auto",
              }}
            />
            <div className={styles.jobsCrediantials}>
              <h3>{t.aboutUs.jobsSection.title}</h3>
              <p>{t.aboutUs.jobsSection.description}</p>
              <Link href="/">{t.aboutUs.jobsSection.readMore} &gt;</Link>
            </div>
          </div>
        </section>
        <section id="values" className={styles.valuesSection}>
          <div className={styles.valuesWrapper}>
            <div className={styles.valuesBlock}>
              <h3>{t.aboutUs.benefitsArticle.article1.title}</h3>
              <p>{t.aboutUs.benefitsArticle.article1.description}</p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>{t.aboutUs.benefitsArticle.article2.title}</h3>
              <p>{t.aboutUs.benefitsArticle.article2.description}</p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>{t.aboutUs.benefitsArticle.article3.title}</h3>
              <p>{t.aboutUs.benefitsArticle.article3.description}</p>
            </div>
          </div>
        </section>
        <section id="sponsorship" className={styles.sponsorshipMirror}>
          <div className={styles.jobsWrapper}>
            <div className={styles.img}></div>
            <div className={styles.jobsCrediantials}>
              <h3>{t.aboutUs.sponsorshipSection.title}</h3>
              <p>{t.aboutUs.sponsorshipSection.description}</p>
              <Link href="/">{t.aboutUs.sponsorshipSection.readMore} &gt;</Link>
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
            <h3>{t.aboutUs.history.title}</h3>
            <p>{t.aboutUs.history.description}</p>
            <div className={styles.historyYearList}>
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
