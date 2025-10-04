import { NavItem } from './types';
import { Locale } from '@/lib/locales';

export const NAV_ITEMS: NavItem[] = [
  { kind: 'link', label: 'Zoznam produktov', href: '/products' },
  { kind: 'dropdown', label: 'Jazyk', id: 'language' },
  { kind: 'action', label: 'Odhlásiť', id: 'logout', icon: '/assets/icons/exit.svg' }
];

// Factory for language-aware navigation (preferred over static NAV_ITEMS when lang is known)
export const getNavItems = (_lang: Locale): NavItem[] => [
  { kind: 'link', label: 'Zoznam produktov', href: '/products' },
  { kind: 'dropdown', label: 'Jazyk', id: 'language' },
  { kind: 'action', label: 'Odhlásiť', id: 'logout', icon: '/assets/icons/exit.svg' }
];
