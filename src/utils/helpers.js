export const previewTextMaker = (str, limit) => {
  const cleaner = str.replace(/<br\/>/g, "");
  const wordsArray = cleaner.split(" ");
  if (wordsArray.length > limit) {
    return wordsArray.slice(0, limit).join(" ");
  }
  return cleaner;
};

export const formatText = (text) => {
  return text.split("<br/>").map((paragraph, idx) => {
    const parts = paragraph
      .split(/(<b>.*?<\/b>|<u>.*?<\/u>|<i>.*?<\/i>)/)
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
        return part;
      });

    return <p key={idx}>{parts}</p>;
  });
};
