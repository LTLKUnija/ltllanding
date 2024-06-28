/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  react: { useSuspense: false },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "lt"],
    localePath: path.resolve("./public/locales"),
  },
};
