import IndexLayout from "@/Layouts/IndexLayout";
import styles from '@/styles/news.module.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function News() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  const [thisYearNews, setThisYearNews] = useState([{}]);

  const [yearVocab, setYearVocab] = useState( [
    {year: 2023, selected: true},
    {year: 2022, selected: false},
    {year: 2021, selected: false},
    {year: 2020, selected: false},
    {year: 2019, selected: false},
    {year: 2018, selected: false},
  ])

  const thisYearGetter = () => {
    return yearVocab.filter(year => year.selected)[0].year
  };

  const yearSelectHandler = (e) => {
    let idx = e.target.dataset.id
    let temp = [...yearVocab]
    temp.forEach(year => {
      year.selected = false
    })
    temp[idx].selected = true
    setYearVocab(temp)
  };

  useEffect(() => {
    let idx = localStorage.getItem('backToYearIdx');
    
    if (idx) {
      let temp = [...yearVocab]
      temp.forEach(year => {
        year.selected = false
      })
      temp[idx].selected = true
      setYearVocab(temp)
      localStorage.removeItem('backToYearIdx')
    }
    
    else {
      const getThisYearNews = async () => {
        const resp = await fetch(`/api/news`)
        const data = await resp.json()
        const thisYear = data.filter(news => {
          return news.year == thisYearGetter()
        })
        setThisYearNews(thisYear)
      }
  
      getThisYearNews()
    }
  }, [yearVocab])

  return (
    <>
      <IndexLayout>
        <main className={styles.newsListBlock}>
          <div className={styles.newsListWrapper}>
            <h1 className='page-title'>{t.news.title}</h1>
            <div className={styles.yearlyLinksBlock}>
              {yearVocab.map((link, idx) => {
                return (
                  <span 
                    data-id={idx} 
                    key={idx}
                    onClick={(e)=> yearSelectHandler(e)}
                    className={[styles.yearlyLink, link.selected ? styles.active : ''].join(" ")}
                  >
                    {link.year}
                  </span>
                )
              })}
            </div>
            <div className={styles.newsList}>
              <div className="news">
                {thisYearNews.map((news, idx) => {
                  return (
                    <div className={styles.singleNewsPreviewBlock} key={idx}>
                      <div className={styles.newsDate}>{news.date}</div>
                      <div className={styles.newsTitle}>{news.title}</div>
                      <div className={styles.newsPreviewText}>{news.previewText}</div>
                      <div>
                        <Link className={styles.readMoreLink} href={`news/${news.id}`}>{t.news.readMore} &#x3e;</Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </main>
      </IndexLayout>
    </>
  )
}