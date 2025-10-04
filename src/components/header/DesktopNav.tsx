"use client";
import { FC } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavItem } from './types';
import { SxProps, Theme } from '@mui/material/styles';
import { logoutAction } from '@/app/actions/logoutAction';

interface DesktopNavProps {
  items: NavItem[];
  onOpenLanguage: (e: React.MouseEvent<HTMLElement>) => void;
  sx?: SxProps<Theme>;
  currentLang: string;
}

const ICON_FILTER = { filter: 'brightness(0) invert(1)' } as const;

export const DesktopNav: FC<DesktopNavProps> = ({ items, onOpenLanguage, sx, currentLang }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', ...(sx || {}) }}>
      {items.map(item => {
        if (item.kind === 'dropdown' && item.id === 'language') {
          return (
            <Button
              key={item.label}
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ textTransform: 'none', mx: 1 }}
              onClick={onOpenLanguage}
            >
              {item.label}
            </Button>
          );
        }
        if (item.kind === 'action' && item.id === 'logout') {
          return (
            <Box key={item.id} component="form" action={logoutAction} sx={{ mx: 1 }}>
              <input type="hidden" name="lang" value={currentLang} />
              <Button
                type="submit"
                color="inherit"
                sx={{ textTransform: 'none', display: 'flex', alignItems: 'center', gap: 0 }}
                startIcon={item.icon ? (
                  <Image
                    src={item.icon}
                    alt=""
                    width={16}
                    height={16}
                    style={ICON_FILTER as any}
                  />
                ) : undefined}
              >
                {item.label}
              </Button>
            </Box>
          );
        }
        if (item.kind === 'link') {
          return (
            <Button
              key={item.label}
              color="inherit"
              sx={{
                textTransform: 'none',
                mx: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 0,
              }}
              component={Link}
              href={item.href}
              startIcon={item.icon ? (
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  style={ICON_FILTER as any}
                />
              ) : undefined}
            >
              {item.label}
            </Button>
          );
        }
        return null;
      })}
    </Box>
  );
};
