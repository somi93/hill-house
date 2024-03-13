
import en from '@/locales/en.json';
import sr from '@/locales/sr.json';
import {createI18n} from "vue-i18n";

const messages = {
  en,
  sr
}
const i18n = createI18n({
  legacy: false,
  locale: 'sr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n;
