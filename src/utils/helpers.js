export const previewTextMaker = (str, limit) => {
  const cleaner = str.replace(/<br\/>/g, "");
  const wordsArray = cleaner.split(" ");
  if (wordsArray.length > limit) {
    return wordsArray.slice(0, limit).join(" ");
  }
  return cleaner;
};
export const formatText = (text) => {
  return text
    .split("<br/>")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
};
