// next-intl.config.js

const path = require("path");

module.exports = {
  locales: ["en", "es"],
  defaultLocale: "en",
  messages: {
    en: path.resolve(__dirname, "public/messages/en.json"),
    es: path.resolve(__dirname, "public/messages/es.json"),
  },
};
