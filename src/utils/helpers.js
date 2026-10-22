import React from "react";

export const previewTextMaker = (text, limit = null) => {
  let wordCount = 0;
  let isLimitReached = false;

  const normalizedText = text
    .replace(/(<br\/>\s*)+/g, " ")
    .replace(/<\/?(h2|ul|ol|li)>/g, " ");

  const addWords = (text) => {
    const words = text.split(" ");
    let wordsToAdd = [];
    for (let word of words) {
      if (word.trim() === "") continue;
      if (limit && wordCount >= limit) {
        isLimitReached = true;
        break;
      }
      wordsToAdd.push(word);
      wordCount++;
    }
    return wordsToAdd.join(" ");
  };

  const plainText = normalizedText.replace(/<\/?[^>]+(>|$)/g, "");
  return addWords(plainText);
};

// Inline markup: <b>, <u>, <i>, <link url="...">. Tags cannot be nested.
const formatInline = (text) =>
  text
    .split(/(<b>.*?<\/b>|<u>.*?<\/u>|<i>.*?<\/i>|<link url=".*?">.*?<\/link>)/)
    .map((part, partIdx) => {
      if (/<b>(.*?)<\/b>/.test(part)) {
        const match = part.match(/<b>(.*?)<\/b>/);
        return <b key={partIdx}>{match[1]}</b>;
      }
      if (/<u>(.*?)<\/u>/.test(part)) {
        const match = part.match(/<u>(.*?)<\/u>/);
        return <u key={partIdx}>{match[1]}</u>;
      }
      if (/<i>(.*?)<\/i>/.test(part)) {
        const match = part.match(/<i>(.*?)<\/i>/);
        return <i key={partIdx}>{match[1]}</i>;
      }
      if (/<link url="(.*?)">(.*?)<\/link>/.test(part)) {
        const match = part.match(/<link url="(.*?)">(.*?)<\/link>/);
        return (
          <a
            href={match[1]}
            key={partIdx}
            target="_blank"
            rel="noopener noreferrer"
          >
            {match[2]}
          </a>
        );
      }
      return part;
    });

// Block markup: <h2>, <ul>/<ol> with <li> items. Text between blocks is split
// into paragraphs on <br/>. Inline markup works inside headings and list items.
export const formatText = (text) => {
  // Word-style quotes break the url attribute; leave quotes in the text alone.
  const normalizedText = text.replace(/url=[”“"](.*?)[”“"]>/g, 'url="$1">');
  const chunks = normalizedText.split(
    /(<h2>.*?<\/h2>|<ul>.*?<\/ul>|<ol>.*?<\/ol>)/s
  );

  return chunks.flatMap((chunk, chunkIdx) => {
    const heading = chunk.match(/^<h2>(.*?)<\/h2>$/s);
    if (heading) {
      return <h2 key={chunkIdx}>{formatInline(heading[1])}</h2>;
    }

    const list = chunk.match(/^<(ul|ol)>(.*?)<\/\1>$/s);
    if (list) {
      const ListTag = list[1];
      const items = [...list[2].matchAll(/<li>(.*?)<\/li>/gs)];
      return (
        <ListTag key={chunkIdx}>
          {items.map((item, itemIdx) => (
            <li key={itemIdx}>{formatInline(item[1])}</li>
          ))}
        </ListTag>
      );
    }

    let paragraphs = chunk.split("<br/>");
    // Drop the empty paragraphs left over next to a heading or list.
    if (chunkIdx > 0 && paragraphs[0].trim() === "") {
      paragraphs = paragraphs.slice(1);
    }
    if (
      chunkIdx < chunks.length - 1 &&
      paragraphs.length > 0 &&
      paragraphs[paragraphs.length - 1].trim() === ""
    ) {
      paragraphs = paragraphs.slice(0, -1);
    }

    return paragraphs.map((paragraph, idx) => (
      <p key={`${chunkIdx}-${idx}`}>{formatInline(paragraph)}</p>
    ));
  });
};

// URL slug for a news item: its date as YYYY-MM-DD, plus -2, -3… when several
// items in the year share a date (numbered in Firestore array order, so adding
// news at the end never changes an existing slug).
export const newsSlug = (yearNews, idx) => {
  const toDate = (date) => (date || "").replaceAll("/", "-");
  const date = toDate(yearNews[idx].date) || "news";
  const sameDateBefore = yearNews
    .slice(0, idx)
    .filter((item) => (toDate(item.date) || "news") === date).length;

  return sameDateBefore === 0 ? date : `${date}-${sameDateBefore + 1}`;
};

// Finds a news item by slug. Also accepts old /news/<year>-<idx> links, where
// idx counts from the newest item of that year.
export const findNewsBySlug = (newsData, slug) => {
  const legacy = slug?.match(/^(\d{4})-(\d+)$/);

  for (const year of newsData) {
    if (legacy) {
      if (year.id !== legacy[1]) continue;
      const idx = year.news.length - 1 - Number(legacy[2]);
      if (!year.news[idx]) return null;
      return {
        year: year.id,
        item: year.news[idx],
        slug: newsSlug(year.news, idx),
      };
    }

    const idx = year.news.findIndex((_, i) => newsSlug(year.news, i) === slug);
    if (idx !== -1) return { year: year.id, item: year.news[idx], slug };
  }

  return null;
};

export const loanFormDataMaker = (inputs) => {
  const formData = new FormData();

  const keys = {
    loanAmount: process.env.NEXT_PUBLIC_LOANFORM_LOANAMOUNT,
    loanTerm: process.env.NEXT_PUBLIC_LOANFORM_LOANTERM,
    firstName: process.env.NEXT_PUBLIC_LOANFORM_FIRSTNAME,
    lastName: process.env.NEXT_PUBLIC_LOANFORM_LASTNAME,
    email: process.env.NEXT_PUBLIC_LOANFORM_EMAIL,
    companyName: process.env.NEXT_PUBLIC_LOANFORM_COMPANYNAME,
    phone: process.env.NEXT_PUBLIC_LOANFORM_PHONE,
  };

  if (Object.values(keys).some((v) => !v)) {
    console.warn("Some env keys are missing!");
  }

  formData.append(keys.loanAmount, inputs.loanAmount);
  formData.append(keys.loanTerm, inputs.loanTerm);
  formData.append(keys.firstName, inputs.firstName);
  formData.append(keys.lastName, inputs.lastName);
  formData.append(keys.email, inputs.email);
  formData.append(keys.phone, inputs.phoneNumber);
  if (inputs.companyName === "") {
    formData.append(keys.companyName, "private");
  } else {
    formData.append(keys.companyName, inputs.companyName);
  }

  return formData;
};
