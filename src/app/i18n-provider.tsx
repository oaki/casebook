'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { ReactNode, useEffect } from 'react';

interface I18nProviderProps {
    children: ReactNode;
    lang: string;
}

export default function I18nProvider({ children, lang }: I18nProviderProps) {
    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

