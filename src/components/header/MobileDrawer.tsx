"use client";
import { FC, MouseEvent } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { HeaderLogo } from './HeaderLogo';
import { DesktopNav } from './DesktopNav';

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  onOpenLanguage: (e: MouseEvent<HTMLElement>) => void;
  currentLang: string;
  t: (key: string) => string;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({ open, onClose, onOpenLanguage, currentLang, t }) => {
  const theme = useTheme();
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 240,
          backgroundColor: theme.palette.background.default,
          borderRight: '1px solid rgba(138, 43, 226, 0.5)',
        },
        zIndex: theme.zIndex.drawer + 2,
      }}
    >
      <Box sx={{ textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
          <HeaderLogo width={160} height={56} />
        </Typography>
        {/* Reused unified nav component in mobile mode */}
        <DesktopNav
          mode="mobile"
          currentLang={currentLang}
          onOpenLanguage={onOpenLanguage}
          onNavigate={onClose}
          sx={{ flex: 1 }}
          t={t}
        />
      </Box>
    </Drawer>
  );
};
