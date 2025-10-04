"use client";
import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

import "@/lib/i18n";
import Logo from "@/components/Logo"; // Import i18n config

export default function VerifyRequest() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 3,
        py: 6,
      }}
    >
      <Logo />

      <Box sx={{ width: "100%", maxWidth: 680, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {t('verifyRequest.title')}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, mx: "auto", mb: 5 }}>
          {t('verifyRequest.subtitle')}
        </Typography>
      </Box>
    </Box>
  );
}
