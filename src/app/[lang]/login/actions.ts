'use server';

import isEmail from 'validator/lib/isEmail';
import {sendEmail} from "@/app/libs/services/sendEmail";
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { encrypt, MagicLinkPayload } from '@/lib/jwt';
import { getLoginEmailHtml } from './LoginEmailTemplate';
import {DEFAULT_LOCALE} from "@/lib/locales";

const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    agree: z.string().optional().transform(val => val === 'on'),
    lang: z.string().optional()
});

const LOGIN_TOKEN_PURPOSE = 'login';
const LOGIN_TOKEN_EXPIRY_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function sendLoginEmailAction(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: loginSchema });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const { email, lang = DEFAULT_LOCALE } = submission.value;

    if (!email || !isEmail(email)) {
        return submission.reply({
            fieldErrors: {
                email: ['Prosím zadajte platnú emailovú adresu']
            }
        });
    }

    try {
        const exp = Math.floor(Date.now() / 1000) + LOGIN_TOKEN_EXPIRY_SECONDS;
        const tokenPayload: MagicLinkPayload = {
            type: 'magic-link',
            email,
            purpose: LOGIN_TOKEN_PURPOSE,
            exp
        };
        const token = await encrypt(tokenPayload);
        const magicLinkUrl = `${process.env.NEXTAUTH_URL}/${lang}/auth/verify?token=${token}`;

        const emailHtml = getLoginEmailHtml(magicLinkUrl, 'sk');

        console.log('start sendEmail');
        await sendEmail(
            email,
            'Prístup do Nutricia I CASEBOOK',
            emailHtml
        );

        console.log('end sendEmail');
    } catch (error) {
        console.error('Server Action Error:', error);
        return submission.reply({
            formErrors: ['Nepodarilo sa odoslať email. Prosím skúste znovu.']
        });
    }
    redirect(`/${lang}/verify-request`);
}
