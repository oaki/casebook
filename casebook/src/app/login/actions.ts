'use server';

import isEmail from 'validator/lib/isEmail';
import {sendEmail} from "@/app/libs/services/sendEmail";
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';
import { z } from 'zod';


// Simple schema for server-side validation
const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    agree: z.string().optional().transform(val => val === 'on')
});

export async function sendLoginEmailAction(prevState: any, formData: FormData) {
    const submission = parseWithZod(formData, { schema: loginSchema });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const { email } = submission.value;

    if (!email || !isEmail(email)) {
        return submission.reply({
            fieldErrors: {
                email: ['Please enter a valid email address']
            }
        });
    }

    try {
        await sendEmail(
            email,
            'Your login link',
            `<p>Click <a href="${process.env.NEXTAUTH_URL}/login?email=${encodeURIComponent(email)}">here</a> to login.</p>`
        );

        // On success, redirect to verify-request page
        redirect('/verify-request');
    } catch (error) {
        console.error('Server Action Error:', error);
        return submission.reply({
            formErrors: ['Failed to send email. Please try again.']
        });
    }
}
