'use server';

import isEmail from 'validator/lib/isEmail';
import {sendEmail} from "@/app/libs/services/sendEmail";


type FormState = {
    error?: string;
    message?: string;
};

export async function sendLoginEmailAction(
    previousState: FormState,
    formData: FormData
): Promise<FormState> {
    const email = String(formData.get('email'));

    if (!email || !isEmail(email)) {
        return {error: 'InvalidEmail'};
    }

    try {
        await sendEmail(email, 'Your login link', `<p>Click <a href="${process.env.NEXTAUTH_URL}/login?email=${encodeURIComponent(email)}">here</a> to login.</p>`);

        return {message: 'Success'};
    } catch (error) {
        console.error('Server Action Error:', error);
        return {error: 'InternalServerError'};
    }
}

