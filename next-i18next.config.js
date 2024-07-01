const path = require("path");

module.exports = {
  react: { useSuspense: false },
  i18n: {
    defaultLocale: "lt",
    locales: ["lt", "en"],
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
};
