"use client";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(138, 43, 226, 0.5)',
  borderRadius: '20px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(2),
  width: `calc(100% - ${theme.spacing(4)})`,
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: `calc(${theme.breakpoints.values.lg}px - ${theme.spacing(4)})`,
}));

