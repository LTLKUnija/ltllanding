export const previewTextMaker = (str, limit) => {
  const wordsArray = str.split(" ");
  if (wordsArray.length > limit) {
    return wordsArray.slice(0, limit).join(' ');
  }
  return str
}