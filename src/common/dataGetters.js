import { collection, getDocs, getFirestore } from "firebase/firestore";

export const getNewsList = async () => {
  const db = getFirestore();
  const collectionName = "news";
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      const data = doc.data();
      const newsData = data.news.map((newsItem) => {
        return {
          title: newsItem.title,
          text: newsItem.text,
          date: newsItem.date,
        };
      });
      return {
        ...data,
        id: doc.id,
        news: newsData,
      };
    });
    return allData.reverse()
  } catch (error) {
    console.error(
      `Error fetching data from ${collectionName}:`,
      error.message
    );
  }
};