import React from "react";

export const previewTextMaker = (text, limit = null) => {
  let wordCount = 0;
  let isLimitReached = false;

  const normalizedText = text
    .replace(/”|“/g, '"')
    .replace(/(<br\/>\s*)+/g, " ");

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

export const formatText = (text) => {
  const normalizedText = text.replace(/”|“/g, '"');

  return normalizedText.split("<br/>").map((paragraph, idx) => {
    const parts = paragraph
      .split(
        /(<b>.*?<\/b>|<u>.*?<\/u>|<i>.*?<\/i>|<link url=".*?">.*?<\/link>)/
      )
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

    return <p key={idx}>{parts}</p>;
  });
};
