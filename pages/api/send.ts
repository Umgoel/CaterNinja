import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/email-templates';
import { EmailTemplate } from '../../components/email-templates';
import { Resend } from 'resend';

const resend = new Resend('re_UvJ1UuVw_9eyuFbH24fDrxbcbiiaXHn8U');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
