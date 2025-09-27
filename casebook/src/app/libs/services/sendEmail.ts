'use server';

import { Resend } from 'resend';

export async function sendEmail(to: string, subject: string, html: string) {

    const resend = new Resend('re_CURc8zuF_AzMXS6V8ppygnvbQMT6fJPtK');

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to,
        subject,
        html
    });

    // const transporter = nodemailer.createTransport({
    //     host: 'mail.websupport.sk',
    //     port: 25,
    //     secure: false, // true for port 465
    //     auth: {
    //         user: process.env.SMTP_USER,
    //         pass: process.env.SMTP_PASS,
    //     },
    //     requireTLS: false
    //     // Remove TLS config for secure connection
    // });
    //
    // try {
    //     await transporter.sendMail({
    //         from: process.env.SMTP_FROM,
    //         to,
    //         bcc: 'info@donatio.sk',
    //         subject,
    //         html,
    //     });
    // } catch (error) {
    //     console.error('Failed to send email:', error);
    //     throw error;
    // }
}
