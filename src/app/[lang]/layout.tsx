import {ReactNode} from 'react';
import {notFound} from 'next/navigation';
import {isSupportedLocale} from '@/lib/locales';

export default async function LangLayout({
                                       children,
                                       params,
                                   }: {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}) {

    const { lang } = await params;

    if (!isSupportedLocale(lang)) {
        notFound();
    }

    return (
        <html lang={lang}>
        <body>
        {children}
        </body>
        </html>
    );
}
