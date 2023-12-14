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
          titleEn: newsItem.titleEn,
          text: newsItem.text,
          textEn: newsItem.textEn,
          date: newsItem.date,
        };
      });
      return {
        ...data,
        id: doc.id,
        news: newsData,
      };
    });
    return allData.reverse();
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};

export const getAnnualReports = async () => {
  const db = getFirestore();
  const collectionName = "financialReports";
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return allData;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};

export const getQuarterlReports = async (locale) => {
  const db = getFirestore();
  let collectionName =
    locale === "lt"
      ? "financialQuartalReportsLT"
      : "financialQuartalReportsENG";
  ("financialQuartalReportsENG");
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return allData;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};

export const getPriceList = async () => {
  const db = getFirestore();
  const collectionName = "pricelist";
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return allData;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};

export const getFaqList = async () => {
  const db = getFirestore();
  const collectionName = "faq";
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return allData;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};

export const getFactsheets = async () => {
  const db = getFirestore();
  const collectionName = "factsheets";
  const colRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(colRef);
    const allData = snapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return allData;
  } catch (error) {
    console.error(`Error fetching data from ${collectionName}:`, error.message);
  }
};
