"use server";

import FormData from "form-data";
import Mailgun from "mailgun.js";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_REGION = process.env.MAILGUN_REGION;
const TO_EMAIL = "nipa.ojala@gmail.com";
const TO_NAME = "Niilo Ojala";
const FROM_NAME = "Ojala Solutions";
const FROM_LOCAL = "yhteydenotto";

export type SendContactResult =
  | { success: true }
  | { success: false; error: string };

function getClient() {
  const mailgun = new Mailgun(FormData);
  return mailgun.client({
    username: "api",
    key: MAILGUN_API_KEY!,
    ...(MAILGUN_REGION === "eu" && { url: "https://api.eu.mailgun.net" }),
  });
}

export async function sendContact(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<SendContactResult> {
  const { name, email, message } = formData;

  if (
    !name ||
    typeof name !== "string" ||
    !email ||
    typeof email !== "string" ||
    !message ||
    typeof message !== "string"
  ) {
    return {
      success: false,
      error: "Missing or invalid name, email, or message",
    };
  }

  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
    return { success: false, error: "Mailgun not configured" };
  }

  const from = `${FROM_NAME} <${FROM_LOCAL}@${MAILGUN_DOMAIN}>`;
  const to = [`${TO_NAME} <${TO_EMAIL}>`];
  const subject = `Ojala Solutions – uusi viesti: ${name}`;
  const text = [
    `Nimi: ${name}`,
    `Sähköposti: ${email}`,
    "",
    "Viesti:",
    message,
  ].join("\n");

  try {
    await getClient().messages.create(MAILGUN_DOMAIN, {
      from,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (e) {
    console.error("Mailgun send failed:", e);
    return { success: false, error: "Failed to send email" };
  }
}
