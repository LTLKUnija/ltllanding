import IndexLayout from "@/Layouts/IndexLayout"
import SimpleSlider from "@/components/IndexHeroSlider"
import IndexNews from "@/components/IndexNews"
import Link from "next/link"
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Home() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  
  return (
    <>
    <IndexLayout>
      <main>
        <section className={styles.heroblock}>
          <SimpleSlider/>
        </section>
        <section className={styles.beneficialArticles}>
          <div className="container">
            <article className={styles.beneficialArticle}>
              <div className={styles.imageBlock}>
                <Image
                  src="assets/images/article1.svg"
                  width={429}
                  height={429}
                  alt="Image"
                />
              </div>
              <div className={styles.articleBlock}>
                <h2>{t.indexPage.articleBlock.article1.title}</h2>
                <p>
                  {t.indexPage.articleBlock.article1.description} 
                </p>
                <div className="actionButtonBlock">
                  <Link className="light-green-action-button" href="/">{t.indexPage.button.text}</Link>
                </div>
              </div>
            </article>
            <article className={styles.beneficialArticleMirror}>
              <div className={styles.imageBlock}>
                <Image 
                    src="assets/images/article2.svg"
                    width={429}
                    height={429}
                    alt="Image"
                  />
              </div>
              <div className={styles.articleBlock}>
                <h2>{t.indexPage.articleBlock.article2.title}</h2>
                <p>
                  {t.indexPage.articleBlock.article2.description}
                </p>
                <div className="actionButtonBlock">
                  <Link className="light-green-action-button" href="/">Learn More</Link>
                </div>
              </div>
            </article>     
            <article className={styles.beneficialArticle}>
              <div className={styles.imageBlock}>
                <Image 
                    src="assets/images/article3.svg"
                    width={429}
                    height={429}
                    alt="Image"
                  />
              </div>
              <div className={styles.articleBlock}>
                <h2>{t.indexPage.articleBlock.article3.title}</h2>
                <p>
                  {t.indexPage.articleBlock.article3.description} 
                </p>
                <div className="actionButtonBlock">
                  <Link className="light-green-action-button" href="/">Learn More</Link>
                </div>
              </div>
            </article>                   
          </div>
        </section>
        <section className={styles.bulletPoints}>
          <div className="container">
            <h2>{t.indexPage.bulletsBlock.title}</h2>
            <ul>
              <li>{t.indexPage.bulletsBlock.bullet1}</li>
              <li>{t.indexPage.bulletsBlock.bullet2}</li>
              <li>{t.indexPage.bulletsBlock.bullet3}</li>
              <li>{t.indexPage.bulletsBlock.bullet4}</li>
            </ul>
          </div>
        </section>
        <section id='news' className={styles.newsSection}>
          <IndexNews/>
        </section>
      </main>
    </IndexLayout>
    </>
  )
}
