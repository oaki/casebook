"use client";
import { FC, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SxProps, Theme } from '@mui/material/styles';
import { logoutAction } from '@/app/actions/logoutAction';

// Unified nav component usable for both desktop & mobile (mode driven)
export type NavMode = 'desktop' | 'mobile';

type DesktopNavProps = {
  onOpenLanguage: (e: MouseEvent<HTMLElement>) => void;
  sx?: SxProps<Theme>;
  currentLang: string;
  mode?: NavMode;
  onNavigate?: () => void; // invoked after link / logout action (mobile use)
}



export const DesktopNav: FC<DesktopNavProps> = ({ onOpenLanguage, sx, currentLang, mode = 'desktop', onNavigate }) => {
  const mobile = mode === 'mobile';

  const commonBtn = {
    textTransform: 'none',
    gap: 0,
    alignItems: 'center',
    justifyContent: mobile ? 'flex-start' : 'center',
    mx: mobile ? 0 : 1,
    px: mobile ? 2 : undefined,
    width: mobile ? '100%' : 'auto',
    borderRadius: mobile ? 0 : undefined,
  } as const;

  return (
    <Box sx={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: mobile ? 'stretch' : 'center', width: mobile ? '100%' : 'auto', ...(sx || {}) }}>
      {/* Products link */}
      <Button
        color="inherit"
        component={Link}
        href={`/${currentLang}/products`}
        onClick={onNavigate}
        sx={commonBtn}
      >
        Zoznam produktov
      </Button>

      {/* Language dropdown trigger */}
      <Button
        color="inherit"
        endIcon={<KeyboardArrowDownIcon />}
        sx={commonBtn}
        onClick={onOpenLanguage}
      >
        Jazyk
      </Button>

      {/* Logout action */}
      <Box component="form" action={logoutAction} sx={{ mx: mobile ? 0 : 1, width: mobile ? '100%' : 'auto' }}>
        <input type="hidden" name="lang" value={currentLang} />
        <Button
          type="submit"
          color="inherit"
          sx={commonBtn}
          startIcon={(
            <Image
              src={'/assets/icons/exit.svg'}
              alt=""
              width={mobile ? 20 : 16}
              height={mobile ? 20 : 16}
              style={{filter: 'brightness(0) invert(1)'}}
            />
          )}
          onClick={onNavigate}
        >
          Odhlásiť
        </Button>
      </Box>
    </Box>
  );
};
