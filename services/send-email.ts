'use server';

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email');
  const message = formData.get('message');

  if (!validateString(email, 500)) {
    return {
      error: 'Invalid email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid Message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'hei.fiantso@gmail.com',
      subject: email as string,
      text: message as string,
    });
    return { success: 'Email sent successfully!' };
  } catch (error) {
    return { error: 'Failed to send email.' };
  }
};
