'use server';

import isEmail from 'validator/lib/isEmail';
import {sendEmail} from "@/app/libs/services/sendEmail";
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import { getLoginEmailHtml } from './LoginEmailTemplate';

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    agree: z.string().optional().transform(val => val === 'on')
});

// JWT
const generateLoginToken = (email: string): string => {
    const payload = {
        email,
        purpose: 'login',
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7) // 7 days expiry
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { algorithm: 'HS256' });
};


export async function sendLoginEmailAction(prevState: any, formData: FormData) {
    const submission = parseWithZod(formData, { schema: loginSchema });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const { email } = submission.value;

    if (!email || !isEmail(email)) {
        return submission.reply({
            fieldErrors: {
                email: ['Prosím zadajte platnú emailovú adresu'] // Using direct Slovak text for validation
            }
        });
    }

    try {
        const token = generateLoginToken(email);
        const magicLinkUrl = `${process.env.NEXTAUTH_URL}/auth/verify?token=${token}`;

        const emailHtml = getLoginEmailHtml(magicLinkUrl, 'sk');

        await sendEmail(
            email,
            'Prístup do Nutricia I CASEBOOK',
            emailHtml
        );

    } catch (error) {
        console.error('Server Action Error:', error);
        return submission.reply({
            formErrors: ['Nepodarilo sa odoslať email. Prosím skúste znovu.'] // Slovak error message
        });
    }
    redirect('/verify-request');
}

