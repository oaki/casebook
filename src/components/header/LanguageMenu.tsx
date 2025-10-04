"use client";
import { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SUPPORTED_LOCALES } from '@/lib/locales';

interface LanguageMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onSelect: (lang: string) => void;
}

export const LanguageMenu: FC<LanguageMenuProps> = ({ anchorEl, open, onClose, onSelect }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{ 'aria-labelledby': 'language-button' }}
    >
      {SUPPORTED_LOCALES.map(value => (
        <MenuItem
          key={value.code}
          onClick={() => {
            onSelect(value.code);
          }}
        >
          {value.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

