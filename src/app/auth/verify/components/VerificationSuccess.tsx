import { Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export const VerificationSuccess = ({ message }: { message: string }) => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 200,
                gap: 2
            }}
        >
            <CheckCircle sx={{ fontSize: 80, color: '#22c55e', marginBottom: 2 }} />
            <Typography variant="h4" component="h2" sx={{ color: '#22c55e' }} gutterBottom>
                {t('auth.login.successful') || 'Úspešné prihlásenie'}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                {message}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                {t('auth.redirect.message') || 'Presmerúvame vás na hlavnú stránku...'}
            </Typography>
        </Box>
    );
};
