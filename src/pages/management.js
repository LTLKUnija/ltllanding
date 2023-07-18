import styles from "@/styles/about.module.scss";
import Link from "next/link";
import IndexLayout from "@/Layouts/IndexLayout";
import Image from "next/image";
import Img1 from "@../../../public/assets/images/managment_img1.png";
import Img2 from "@../../../public/assets/images/managment_img2.png";

export default function About() {
  return (
    <IndexLayout>
      <main>
        <section className={styles.aboutUsSection}>
          <div className={styles.aboutUsWrapper}>
            <h1 className={styles.aboutUsHeroTitle}>About Us</h1>
            <div className={styles.aboutUsHeroBlock}>
              <div classNamAe={styles.aboutUsHeroMission}>
                <div className={styles.missionTitle}>Mission</div>
                <div className={styles.missionDescription}>
                  Unlocking Financial Inclusion - Our Mission, Your Future.
                </div>
              </div>
              <div className={styles.aboutUsHeroVision}>
                <div className={styles.visionTitle}>Vision</div>
                <div className={styles.visionDescription}>
                  Our vision is to create a world where everyone has access to
                  financial services, enabling them to build a brighter future
                  for themselves and their communities. We strive to unlock
                  financial inclusion by empowering individuals to make informed
                  decisions about their financial wellbeing.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationBlock}>
          <div className={styles.innerNavigationLinkList}>
            <Link className={styles.innerNavLink} href="#peaople">
              People
            </Link>
            <Link className={styles.innerNavLink} href="#values">
              Values
            </Link>
            <Link className={styles.innerNavLink} href="#jobs">
              Jobs/Career
            </Link>
            <Link className={styles.innerNavLink} href="#sponsorship">
              Sponsorship
            </Link>
            <Link className={styles.innerNavLink} href="#history">
              History
            </Link>
            <Link className={styles.innerNavLink} href="/news">
              News
            </Link>
          </div>
        </section>
        <section id="peaople" className={styles.teamSection}>
          <div className={styles.teamWrapper}>
            <h3>LTL Team</h3>
            <span className={styles.teamDescription}>
              Our vision is to create a world where everyone has access to
              financial services, enabling them to build a brighter future for
              themselves and their communities. We strive to unlock financial
              inclusion by empowering individuals to make informed decisions
              about their financial wellbeing.
            </span>
            <div className={styles.teamBlock}>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>Pareigos pareigos pareigos pareigos</p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>Pareigos pareigos pareigos pareigos</p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>Pareigos pareigos pareigos pareigos</p>
              </div>
              <div className={styles.teamMembers}>
                <div className={styles.membersPhoto}></div>
                <h4 className={styles.membersName}>Vardas Pavardė</h4>
                <p>Pareigos pareigos pareigos pareigos</p>
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
              <h3>Available jobs</h3>
              <p>
                We offer you the opportunity to work in a rapidly developing
                domestic enterprise, where you can feel the impact of your
                decisions and work with the top specialists in their respective
                fields. We have clear goals and a modern working environment.
                LHV Pank is the “Dream Employer 2015”. Come and contribute to
                the success story of an Estonian bank.
              </p>
              <Link href="/">Available Jobs &gt;</Link>
            </div>
          </div>
        </section>
        <section id="values" className={styles.valuesSection}>
          <div className={styles.valuesWrapper}>
            <div className={styles.valuesBlock}>
              <h3>Transparency & accountability</h3>
              <p>
                We are aiming to provide access to fair and affordable banking
                services. We are transparent and accountable in our decisions,
                and take into account the impact of our actions on people&apos;s
                daily lives.
              </p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>Balancing interests and empowering people</h3>
              <p>
                We are striving to create a more equitable financial system that
                balances the interests of our company, our customers and our
                society. We allocate resources and provide education to empower
                customers to understand the banking system and make informed
                decisions.
              </p>
            </div>
            <div className={styles.valuesBlock}>
              <h3>Human-centric approach to banking</h3>
              <p>
                Finally, we apply a more human-centric approach to banking,
                ensuring that customers are treated with respect and dignity,
                and respecting the emotional and psychological needs of
                customers.
              </p>
            </div>
          </div>
        </section>
        <section id="sponsorship" className={styles.sponsorshipMirror}>
          <div className={styles.jobsWrapper}>
            <div className={styles.img}></div>
            <div className={styles.jobsCrediantials}>
              <h3>Sponsorship</h3>
              <p>
                We offer you the opportunity to work in a rapidly developing
                domestic enterprise, where you can feel the impact of your
                decisions and work with the top specialists in their respective
                fields. We have clear goals and a modern working environment.
                LHV Pank is the “Dream Employer 2015”. Come and contribute to
                the success story of an Estonian bank.
              </p>
              <Link href="/">Read More &gt;</Link>
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
            <h3>LTL History</h3>
            <p>
              Our vision is to create a world where everyone has access to
              financial services, enabling them to build a brighter future for
              themselves and their communities. We strive to unlock financial
              inclusion by empowering individuals to make informed decisions
              about their financial wellbeing.
            </p>
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
