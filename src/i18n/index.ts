import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'it',
    supportedLngs: ['it', 'en', 'es', 'fr', 'de', 'ru'],
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'navigator', 'path', 'subdomain'],
      lookupQuerystring: 'lang',
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
      allowMultiLoading: false,
      crossDomain: false
    }
  });

export default i18n;