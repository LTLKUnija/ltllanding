import { createClient } from "contentful";
import IndexLayout from "@/Layouts/IndexLayout";
import SimpleSlider from "@/components/IndexHeroSlider";
import IndexNews from "@/components/IndexNews";
import LandingArticle from "@/components/LandingArticle";
import styles from "@/styles/Home.module.scss";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({ landingArticles }) {
  console.log(landingArticles);
  const { t } = useTranslation("common");

  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.heroblock}>
            <SimpleSlider />
          </section>
          <section className={styles.beneficialArticles}>
            <div className="container">
              {landingArticles.map((article) => {
                return (
                  <LandingArticle
                    key={article.sys.id}
                    title={article.fields.articleTitle}
                    text={article.fields.articleText}
                    image={article.fields.articleImage}
                    side={article.fields.imageOnRightSide}
                  />
                );
              })}
              {/* <article className={styles.beneficialArticle}>
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
                  <h2>{t("indexPage.articleBlock.article1.title")}</h2>
                  <p>{t("indexPage.articleBlock.article1.description")}</p>
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
                  <h2>{t("indexPage.articleBlock.article2.title")}</h2>
                  <p>{t("indexPage.articleBlock.article2.description")}</p>
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
                  <h2>{t("indexPage.articleBlock.article3.title")}</h2>
                  <p>{t("indexPage.articleBlock.article3.description")}</p>
                </div>
              </article> */}
            </div>
          </section>

          <section className={styles.bulletPoints}>
            <div className="container">
              <h2>{t("indexPage.bulletsBlock.title")}</h2>
              <ul>
                <li>{t("indexPage.bulletsBlock.bullet1")}</li>
                <li>{t("indexPage.bulletsBlock.bullet2")}</li>
                <li>{t("indexPage.bulletsBlock.bullet3")}</li>
                <li>{t("indexPage.bulletsBlock.bullet4")}</li>
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

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API,
  });

  const res = await client.getEntries({
    content_type: "mainPageArticle",
    locale: locale === "lt" ? "lt-LT" : "en-US",
  });

  return {
    props: {
      landingArticles: res.items.reverse(),
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
