'use server';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_REGION = process.env.MAILGUN_REGION;
const TO_EMAIL = 'nipa.ojala@gmail.com';
const FROM_EMAIL = 'nipa.ojala';

const MAILGUN_API_BASE =
  MAILGUN_REGION === 'eu'
    ? 'https://api.eu.mailgun.net'
    : 'https://api.mailgun.net';

export type SendContactResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContact(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<SendContactResult> {
  const { name, email, message } = formData;

  if (!name || typeof name !== 'string' || !email || typeof email !== 'string' || !message || typeof message !== 'string') {
    return { success: false, error: 'Missing or invalid name, email, or message' };
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    return { success: false, error: 'Mailgun not configured' };
  }

  const from = `${FROM_EMAIL}@${MAILGUN_DOMAIN}`;
  const subject = `Ojala Solutions – uusi viesti: ${name}`;
  const text = [
    `Nimi: ${name}`,
    `Sähköposti: ${email}`,
    '',
    'Viesti:',
    message,
  ].join('\n');

  const params = new URLSearchParams();
  params.set('from', from);
  params.set('to', TO_EMAIL);
  params.set('subject', subject);
  params.set('text', text);

  const auth = Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64');

  try {
    const res = await fetch(
      `${MAILGUN_API_BASE}/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Mailgun error:', res.status, err);
      return { success: false, error: 'Failed to send email' };
    }

    return { success: true };
  } catch (e) {
    console.error('Mailgun request failed:', e);
    return { success: false, error: 'Failed to send email' };
  }
}
