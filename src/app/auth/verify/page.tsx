'use client';

import {useEffect, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Box} from '@mui/material';
import {verifyMagicLinkAction} from './actions';
import {useTranslation} from "react-i18next";
import {VerificationLoading} from './components/VerificationLoading';
import {VerificationSuccess} from './components/VerificationSuccess';
import {VerificationError} from './components/VerificationError';

const VerifyPage = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();
    const {t} = useTranslation();

    useEffect(() => {
        const token = searchParams.get('token');

        if (!token) {
            setStatus('error');
            setMessage(t('validation.token.missing') || 'Chýbajúci token pre overenie');
            return;
        }

        const verifyToken = async () => {
            try {
                const result = await verifyMagicLinkAction(token);

                if (result.success) {
                    setStatus('success');
                    setMessage(t('auth.login.success') || 'Úspešne ste sa prihlásili');
                    // Redirect to dashboard after 2 seconds
                    setTimeout(() => {
                        router.push('/dashboard');
                    }, 2000);
                } else {
                    setStatus('error');
                    setMessage(result.error || t('validation.token.invalid') || 'Neplatný alebo vypršaný token');
                }
            } catch (error) {
                console.error('Verification error:', error);
                setStatus('error');
                setMessage(t('auth.verification.error') || 'Chyba pri overovaní tokenu');
            }
        };

        verifyToken();
    }, [searchParams, router, t]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: 2
            }}
        >
            {status === 'loading' && <VerificationLoading/>}
            {status === 'success' && <VerificationSuccess message={message}/>}
            {status === 'error' && <VerificationError message={message}/>}
        </Box>
    );
};

export default VerifyPage;
