import { createServerFn } from "@tanstack/react-start";

const CONTACT_EMAIL = "decond234@gmail.com";

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(
    (data: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      origin: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    const body = new URLSearchParams({
      _subject: data.subject || `New contact message from ${data.name}`,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      _template: "table",
    });

    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Origin: data.origin,
        Referer: `${data.origin}/`,
      },
      body,
    });

    const payload = (await res.json().catch(() => null)) as {
      success?: string | boolean;
      message?: string;
    } | null;

    if (!res.ok || !payload || String(payload.success) !== "true") {
      console.error("FormSubmit error:", res.status, payload);
      throw new Error(payload?.message || "Failed to send message");
    }

    return { success: true as const };
  });
