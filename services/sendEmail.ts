import { email } from 'ra-core';
import { Resend } from 'resend';

import { validateString } from '@/utils/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email address',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: 'harenafiantso@gmail.com',
      subject: 'Contact form submission',
      reply_to: email as unknown as string,
      text: message as string,
    });
  } catch (error) {
    return {
      error: error,
    };
  }
};
