import Link from "next/link";
import styles from '@/styles/IndexNews.module.scss';
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'
import { getNewsList } from "@/common/dataGetters";
import { previewTextMaker } from "@/utils/helpers"; 


export default function IndexNews() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  const [newsList, setNewsList] = useState([]);


  const getLastSixNews = (newsData) => {
    const lastSix = []
    newsData.forEach(year => {
      year.news.forEach((news, idx) => {
        if (lastSix.length > 5)  return
        lastSix.push({id: year.id, text: news.text, textEn: news.textEn, title: news.title, titleEn: news.titleEn, idx, date: news.date }) 
      })
    })
    return lastSix
  }

  useEffect(() => {
    const getNews = async() => {
      const news = await getNewsList()
      setNewsList(getLastSixNews(news));
    }
    getNews()
  }, []);

  const elNewsList = newsList.map((news, idx) => {
    return (      
        <div className={styles.newsItem}  key={idx}>
          <h3>{router.locale === 'lt' ? news.title : news.titleEn}</h3>
          <div className={styles.newsDate}>{news.date}</div>
          <p>{previewTextMaker(router.locale === 'lt' ? news.text: news.textEn, 20) + '...'}</p>
          <Link href={`news/${news.id}-${news.idx}`}>{t.news.readMore} &#x3e;</Link>
        </div>
    )
  })

  return (
    <div className="container">
      <h2 className={styles.newsTitle}>{t.news.title}</h2>
      <div className={styles.newsBlock}>
        {elNewsList}
      </div>
    </div>    
  )
}