'use client';

import {useEffect, useState, Suspense} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Box} from '@mui/material';
import {verifyMagicLinkToken} from './actions';
import {VerificationLoading} from './components/VerificationLoading';
import {VerificationSuccess} from './components/VerificationSuccess';
import {VerificationError} from './components/VerificationError';
import {login} from "@/lib/session";

function VerifyContent() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const token = searchParams.get('token');

        const verifyAndSignIn = async () => {
            // 1. Verify the token via server action
            const result = await verifyMagicLinkToken(token || '');
            console.log({result, token})
            if (!result.success || !result.email) {
                setStatus('error');
                setMessage(result.error || 'Verification failed.');
                return;
            }

            // 2. If token is valid, use NextAuth's signIn to create a session
            await login(result.email)

            setStatus('success');
            setMessage('Successfully signed in. Redirecting...');
            setTimeout(() => {
                router.push('/dashboard');

            }, 2000);
        };

        verifyAndSignIn();
    }, [searchParams, router]);

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
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<VerificationLoading/>}>
            <VerifyContent/>
        </Suspense>
    );
}
