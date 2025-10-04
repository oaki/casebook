"use client";
import { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { NavItem } from './types';
import { HeaderLogo } from './HeaderLogo';
import { logoutAction } from '@/app/actions/logoutAction';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  onOpenLanguage: (e: React.MouseEvent<HTMLElement>) => void;
  currentLang: string;
}

const ICON_FILTER = { filter: 'brightness(0) invert(1)' } as const;

export const MobileDrawer: FC<MobileDrawerProps> = ({ open, onClose, items, onOpenLanguage, currentLang }) => {
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
        <List sx={{ flex: 1 }}>
          {items.map(item => (
            <ListItem key={item.label} disablePadding>
              {item.kind === 'dropdown' ? (
                <ListItemButton
                  sx={{ justifyContent: 'flex-start', textAlign: 'left', px: 2 }}
                  onClick={onOpenLanguage}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ) : item.kind === 'action' && item.id === 'logout' ? (
                <Box component="form" action={logoutAction} sx={{ flex: 1 }}>
                  <input type="hidden" name="lang" value={currentLang} />
                  <ListItemButton
                    sx={{ justifyContent: 'flex-start', textAlign: 'left', px: 2 }}
                    type="submit"
                    onClick={onClose}
                  >
                    {item.icon && (
                      <Image src={item.icon} alt="" width={24} height={24} style={ICON_FILTER as any} />
                    )}
                    <Box component="span" sx={{ ml: item.icon ? 0.5 : 0 }}>{item.label}</Box>
                  </ListItemButton>
                </Box>
              ) : (
                <ListItemButton
                  sx={{ justifyContent: 'flex-start', textAlign: 'left', px: 2 }}
                  component={Link}
                  href={item.href}
                  onClick={onClose}
                >
                  {item.icon && (
                    <Image src={item.icon} alt="" width={24} height={24} style={ICON_FILTER as any} />
                  )}
                  <Box component="span" sx={{ ml: item.icon ? 0.5 : 0 }}>{item.label}</Box>
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
