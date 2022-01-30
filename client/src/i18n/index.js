import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });

  i18n.t('hello');


export default i18n;
