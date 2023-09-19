import { createI18n } from "vue-i18n";
import { watch } from "vue";

const locales = ["ko", "cz", "en", "de", "kz", "pt", "es"];
const messages = {};

// locales.forEach((locale) => {
//   const menu = require(`@/locales/${locale}/menu.json`);
//   const label = require(`@/locales/${locale}/label.json`);
//   const message = require(`@/locales/${locale}/message.json`);

//   messages[locale] = {
//     ...menu,
//     ...label,
//     ...message,
//   };
// });

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "ko",
  messages,
});

const initialLanguage = getLanguageSetting();
if (initialLanguage && locales.includes(initialLanguage)) {
  i18n.global.locale.value = initialLanguage;
}

function saveLanguageSetting(language) {
  localStorage.setItem("dot-locale-code", language);
}

function getLanguageSetting() {
  return localStorage.getItem("dot-locale-code");
}

watch(
  () => i18n.global.locale.value,
  (newLocale) => {
    saveLanguageSetting(newLocale);
  }
);

export default i18n;
