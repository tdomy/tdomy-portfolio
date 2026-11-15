"use server";

import { contactContent } from "@/data/contact";
import { getContactEnv } from "@/lib/env";
import type { ContactField, ContactFormState } from "@/types/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const REQUEST_TIMEOUT_MS = 10_000;

function readText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validate(values: Record<ContactField, string>) {
  const { errors } = contactContent;
  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!values.name) {
    fieldErrors.name = errors.nameRequired;
  } else if (values.name.length > 100) {
    fieldErrors.name = errors.nameTooLong;
  }

  if (values.email.length > 254 || !EMAIL_PATTERN.test(values.email)) {
    fieldErrors.email = errors.emailInvalid;
  }

  if (values.message.length < 10) {
    fieldErrors.message = errors.messageTooShort;
  } else if (values.message.length > 5000) {
    fieldErrors.message = errors.messageTooLong;
  }

  return fieldErrors;
}

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const { messages } = contactContent;
  const success: ContactFormState = {
    status: "success",
    message: messages.success,
    fieldErrors: {},
    values: {},
  };

  // honeypot: ボットが埋めた場合は送信したふりをして何もしない
  if (readText(formData, "website")) {
    return success;
  }

  const values: Record<ContactField, string> = {
    // メールヘッダーに入るため改行を除去する
    name: readText(formData, "name").replace(/[\r\n]+/g, " "),
    email: readText(formData, "email"),
    message: readText(formData, "message"),
  };

  const fieldErrors = validate(values);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: messages.invalid, fieldErrors, values };
  }

  try {
    const { resendApiKey, toEmail, fromEmail } = getContactEnv();

    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: values.email,
        subject: `[Portfolio] お問い合わせ: ${values.name}`,
        text: [
          `お名前: ${values.name}`,
          `メールアドレス: ${values.email}`,
          "",
          values.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      throw new Error(
        `Resend API responded with ${response.status}: ${await response.text()}`,
      );
    }
  } catch (error) {
    console.error("Failed to send contact message.", error);
    return {
      status: "error",
      message: messages.failure,
      fieldErrors: {},
      values,
    };
  }

  return success;
}
