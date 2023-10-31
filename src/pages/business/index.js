import IndexLayout from "@/Layouts/IndexLayout";
import SimpleSlider from "@/components/IndexHeroSlider";
import IndexNews from "@/components/IndexNews";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import ArticleImg1 from "@../../../public/assets/images/article1.png";
import ArticleImg2 from "@../../../public/assets/images/article2.png";
import ArticleImg3 from "@../../../public/assets/images/article3.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.heroblock}>
            <SimpleSlider />
          </section>
          <section className={styles.beneficialArticles}>
            <div className="container">
              <article className={styles.beneficialArticle}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg1}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>Pabodo laiką leisti banko skyriuose?</h2>
                  <p>
                    Ever since the Etruscans dropped by to party and stayed,
                    Tuscany has seduced. The Romans stocked their grain silos
                    here, Christians walked stages of a medieval pilgrimage
                    route, and Napoleon plundered art (and suffered terribly in
                    exile in a beautiful neoclassical villa with fig trees and
                    sea view on the paradisiacal island of Elba).
                  </p>
                  <div className="actionButtonBlock">
                    <Link className="outlinedBtn" href="/">
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>

              <article className={styles.beneficialArticleMirror}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg2}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>Pabodo laiką leisti banko skyriuose?</h2>
                  <p>
                    Ever since the Etruscans dropped by to party and stayed,
                    Tuscany has seduced. The Romans stocked their grain silos
                    here, Christians walked stages of a medieval pilgrimage
                    route, and Napoleon plundered art (and suffered terribly in
                    exile in a beautiful neoclassical villa with fig trees and
                    sea view on the paradisiacal island of Elba).
                  </p>
                  <div className="actionButtonBlock">
                    <Link className="outlinedBtn" href="/">
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
              <article className={styles.beneficialArticle}>
                <div className={styles.imageBlock}>
                  <Image
                    src={ArticleImg3}
                    alt="Available Jobs"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </div>
                <div className={styles.articleBlock}>
                  <h2>Pabodo laiką leisti banko skyriuose?</h2>
                  <p>
                    Ever since the Etruscans dropped by to party and stayed,
                    Tuscany has seduced. The Romans stocked their grain silos
                    here, Christians walked stages of a medieval pilgrimage
                    route, and Napoleon plundered art (and suffered terribly in
                    exile in a beautiful neoclassical villa with fig trees and
                    sea view on the paradisiacal island of Elba).
                  </p>
                  <div className="actionButtonBlock">
                    <Link className="outlinedBtn" href="/">
                      Learn More
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </section>
          <section className={styles.bulletPoints}>
            <div className="container">
              <h2>The LTL makes banking easy</h2>
              <ul>
                <li>An exquisite home that you could not afford otherwise</li>
                <li>Potential appreciation in value</li>
                <li>Potential rental income if you so desire</li>
                <li>Renting facilitated and managed by a third party</li>
              </ul>
            </div>
          </section>
          <section id="news" className={styles.newsSection}>
            <IndexNews />
          </section>
        </main>
      </IndexLayout>
    </>
  );
}
