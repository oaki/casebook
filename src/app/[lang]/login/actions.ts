'use server';

import { sendEmail } from "@/app/libs/services/sendEmail";
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { encrypt, MagicLinkPayload } from '@/lib/jwt';
import { getLoginEmailHtml } from './LoginEmailTemplate';
import { DEFAULT_LOCALE } from "@/lib/locales";
import { getTranslations } from "@/lib/i18n-server";
import { createLoginSchema } from "./validation";

const LOGIN_TOKEN_PURPOSE = 'login';
const LOGIN_TOKEN_EXPIRY_SECONDS = 60 * 60 * 24 * 7; // 7 days

export async function sendLoginEmailAction(prevState: unknown, formData: FormData) {
    const lang = (formData.get('lang') as string) || DEFAULT_LOCALE;
    const { t } = await getTranslations(lang);

    const submission = parseWithZod(formData, { schema: createLoginSchema(t) });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const { email } = submission.value;

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

        const emailHtml = getLoginEmailHtml(magicLinkUrl, t);

        await sendEmail(
            email,
            t('email.subject'),
            emailHtml
        );

    } catch (error) {
        console.error('Server Action Error:', error);
        return submission.reply({
            formErrors: [t('form.errors.sendFailed')] // You may need to add this key to your translations
        });
    }
    redirect(`/${lang}/verify-request`);
}
