import {createInstance} from 'i18next';
import {i18nConfig} from "@/lib/i18n-config";

export async function getTranslations(lang: string, ns: string | string[] = 'translation') {
    const i18n = createInstance();
    await i18n.init({
            ...i18nConfig,
            lng: lang,
            ns,
        });

    return {
        t: i18n.getFixedT(lang, ns),
        i18n,
    };
}
