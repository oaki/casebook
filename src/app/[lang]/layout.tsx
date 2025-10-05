import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {isSupportedLocale} from '@/lib/locales';
import I18nProvider from "@/app/i18n-provider";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "NUTRICIA Casebook",
    description: "Secure healthcare case management platform",
};

export default async function LangLayout({
                                       children,
                                       params,
                                   }: {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}) {

    console.log('LangLayout');
    const { lang } = await params;

    if (!isSupportedLocale(lang)) {
        notFound();
    }

    return (
        <I18nProvider lang={lang}>
            {children}
        </I18nProvider>
    );
}
