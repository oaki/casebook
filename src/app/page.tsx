'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {getBrowserLocale, isSupportedLocale, PREFERRED_LANG_KEY} from '@/lib/locales';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const preferredLang = localStorage.getItem(PREFERRED_LANG_KEY);

        if (preferredLang && isSupportedLocale(preferredLang)) {
            router.replace(`/${preferredLang}`);
        } else {
            const acceptLanguage = navigator.language || navigator.languages?.[0];
            const locale = getBrowserLocale(acceptLanguage);
            router.replace(`/${locale}`);
        }
    }, [router]);

    return null;
}
