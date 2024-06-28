/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  react: { useSuspense: false },
  i18n: {
    defaultLocale: "lt",
    locales: ["en", "lt"],
    localePath: path.resolve("./public/locales"),
  },
};
