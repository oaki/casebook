import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { SUPPORTED_LOCALES } from '@/lib/locales';

function isSupportedLocale(lang: string): lang is typeof SUPPORTED_LOCALES[number] {
  return (SUPPORTED_LOCALES as readonly string[]).includes(lang);
}

// Layout validating locale segment
export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
    const {lang} = params;

    if (!isSupportedLocale(lang)) {
        notFound();
    }

    return children;
}
