import Link from "next/link";
import styles from '@/styles/IndexNews.module.scss';
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function IndexNews() {
  const router = useRouter();
  const t = router.locale === 'lt' ? lt : en

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch(`/api/news`)
    .then(response => response.json())
    .then(data => {
      setNewsList(data.filter(news => news.year == 2023).splice(0,6))
    })
  },[])

  const elNewsList = newsList.map((news, idx) => {
    return (      
        <div className={styles.newsItem}  key={idx}>
          <h3>{news.title}</h3>
          <p>{news.previewText}</p>
          <Link href={`/news/${news.id}`}>{t.news.readMore} &gt;</Link>
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