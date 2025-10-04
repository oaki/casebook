"use client";
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { FC } from 'react';

interface HeaderLogoProps {
  width?: number;
  height?: number;
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ width = 185, height = 65 }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Link href="/" style={{ display: 'inline-block' }}>
      <Image
        src="/assets/nutricia-casebook-logo.svg"
        alt="NUTRICIA Casebook"
        width={width}
        height={height}
        priority
      />
    </Link>
  </Box>
);

