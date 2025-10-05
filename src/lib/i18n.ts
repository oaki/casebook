import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {i18nConfig} from "@/lib/i18n-config";

i18n
    .use(initReactI18next)
    .init({
        ...i18nConfig,
        lng: 'sk',
        fallbackLng: 'sk',
        interpolation: {
            escapeValue: false
        },
        keySeparator: '.',
        nsSeparator: false,
    });

export default i18n;
