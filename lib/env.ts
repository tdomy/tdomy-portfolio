import "server-only";

function parseAppUrl(value: string): string {
  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error("APP_URL must be a valid absolute URL.");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("APP_URL must use http or https.");
  }

  if (
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("APP_URL must contain only the site origin.");
  }

  return url.origin;
}

export function getAppUrl(): string {
  const appUrl = process.env.APP_URL;

  if (appUrl) {
    return parseAppUrl(appUrl);
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  throw new Error("APP_URL is required in production.");
}

export type ContactEnv = {
  resendApiKey: string;
  toEmail: string;
  fromEmail: string;
};

export function getContactEnv(): ContactEnv {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    throw new Error(
      "RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are required to send contact messages.",
    );
  }

  return { resendApiKey, toEmail, fromEmail };
}
