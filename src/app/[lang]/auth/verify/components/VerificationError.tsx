import {Box, Button, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useRouter, useParams} from 'next/navigation';
import Logo from "@/components/Logo";

export const VerificationError = ({message}: { message: string }) => {
    const {t} = useTranslation();
    const router = useRouter();
    const params = useParams();
    const lang = params.lang;

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
            <Logo/>
            <Typography variant="h4" component="h2" sx={{color: '#ef4444'}} gutterBottom>
                {t('auth.verification.failed') || 'Chyba overenia'}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{color: '#ef4444', textAlign: 'center'}}>
                {message}
            </Typography>
            <Button
                variant="contained"
                onClick={() => router.push(`/${lang}/login`)}
                sx={{
                    backgroundColor: '#4814A7',
                    '&:hover': {
                        backgroundColor: '#3a1085'
                    },
                    padding: '12px 24px',
                    marginTop: 2
                }}
            >
                {t('auth.back.login') || 'Späť na prihlásenie'}
            </Button>
        </Box>
    );
};
