import Link from "next/link";
import styles from "@/styles/IndexNews.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { previewTextMaker } from "@/utils/helpers";
import { formatText } from "@/utils/helpers";
import { useSelector } from "react-redux";
import { getNewsState } from "@/store/news/news.slice";

export default function IndexNews() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const newsData = useSelector(getNewsState);

  const [newsList, setNewsList] = useState([]);

  const getLastSixNews = (newsData) => {
    const lastSix = [];
    newsData.forEach((year) => {
      year.news.forEach((news, idx) => {
        if (lastSix.length > 5) return;
        lastSix.push({
          id: year.id,
          text: news.text,
          textEn: news.textEn,
          title: news.title,
          titleEn: news.titleEn,
          idx: year.news.length - idx - 1,
          date: news.date,
        });
      });
    });
    return lastSix.reverse();
  };

  useEffect(() => {
    setNewsList(getLastSixNews(newsData));
  }, [newsData]);

  const elNewsList = newsList.map((news, idx) => {
    return (
      <div className={styles.newsItem} key={idx}>
        <div className={styles.newsDate}>{news.date}</div>
        <h3>
          <Link href={`news/${news.id}-${news.idx}`}>
            {router.locale === "lt" ? news.title : news.titleEn}
          </Link>
        </h3>
        <p>
          {previewTextMaker(
            router.locale === "lt" ? news.text : news.textEn,
            20
          ) + "..."}
        </p>
        <Link href={`news/${news.id}-${news.idx}`}>
          {t("news.readMore")} &#x3e;
        </Link>
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className={styles.newsTitle}>{t("news.title")}</h2>
      <div className={styles.newsBlock}>{elNewsList}</div>
    </div>
  );
}
