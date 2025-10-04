"use client";
import { useState, useCallback } from 'react';
import { PREFERRED_LANG_KEY } from '@/lib/locales';

export const useLanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const selectLanguage = useCallback((lang: string) => {
    // Persist + redirect to lang root
    try {
      localStorage.setItem(PREFERRED_LANG_KEY, lang);
    } catch (_) {
      // ignore write errors (private mode, etc.)
    }
    window.location.href = `/${lang}`;
  }, []);

  return {
    anchorEl,
    open: Boolean(anchorEl),
    openMenu,
    closeMenu,
    selectLanguage,
  };
};

