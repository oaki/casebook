"use server";
import { logout } from '@/lib/session';
import { redirect } from 'next/navigation';
import { isSupportedLocale, DEFAULT_LOCALE } from '@/lib/locales';

export async function logoutAction(formData: FormData) {
  await logout();
  const langRaw = formData.get('lang');
  let target = '/';
  if (typeof langRaw === 'string' && isSupportedLocale(langRaw)) {
    target = `/${langRaw}`;
  } else {
    target = `/${DEFAULT_LOCALE}`;
  }
  redirect(target);
}

