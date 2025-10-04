'use client';

import {useEffect, useState, Suspense} from 'react';
import {useRouter, useSearchParams, useParams} from 'next/navigation';
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
    const params = useParams();
    const lang = params.lang;

    useEffect(() => {
        const token = searchParams.get('token');

        const verifyAndSignIn = async () => {
            // 1. Verify the token via server action
            const result = await verifyMagicLinkToken(token || '');

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
                router.push(`/${lang}/dashboard`);
            }, 2000);
        };

        verifyAndSignIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (status === 'loading') {
        return <VerificationLoading/>;
    }
    if (status === 'success') {
        return <VerificationSuccess message={message}/>;
    }
    return <VerificationError message={message}/>;
}

export default function VerifyPage() {
    return (
        <Suspense fallback={<VerificationLoading/>}>
            <VerifyContent/>
        </Suspense>
    );
}
