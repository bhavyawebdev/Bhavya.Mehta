import type { VercelRequest, VercelResponse } from "@vercel/node";

type Body = {
  name?: unknown;
  email?: unknown;
  org?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function envOrThrow(name: string): string {
  const v = process.env[name];
  if (!v || v.trim() === "") {
    throw new Error(`Missing required env var: ${name}`);
  }
  return v;
}

function asString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

const AMP = String.fromCharCode(38);
const LT = String.fromCharCode(60);
const GT = String.fromCharCode(62);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, AMP + "amp;")
    .replace(/</g, AMP + "lt;")
    .replace(/>/g, AMP + "gt;")
    .replace(/"/g, AMP + "quot;")
    .replace(/'/g, AMP + "#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body ?? {}) as Body;
  const name = asString(body.name);
  const email = asString(body.email);
  const org = asString(body.org);
  const message = asString(body.message);

  if (name.length < 1 || name.length > 120) {
    return res.status(400).json({ ok: false, error: "Invalid name" });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }
  if (message.length < 5 || message.length > 4000) {
    return res.status(400).json({ ok: false, error: "Message must be 5-4000 chars" });
  }
  if (org.length > 120) {
    return res.status(400).json({ ok: false, error: "Org too long" });
  }

  let resendKey: string;
  let toEmail: string;
  let fromEmail: string;
  try {
    resendKey = envOrThrow("RESEND_API_KEY");
    toEmail = envOrThrow("CONTACT_TO_EMAIL");
    fromEmail = envOrThrow("CONTACT_FROM_EMAIL");
  } catch (err) {
    console.error("[contact] env error:", (err as Error).message);
    return res.status(500).json({ ok: false, error: "Server misconfigured" });
  }

  const subject = `New portfolio message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Org: ${org || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOrg = escapeHtml(org);
  const safeMsg = escapeHtml(message);

  const html =
    LT + "div style=\"font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.55;color:#0d0c0b\"" + GT +
    LT + "h2 style=\"margin:0 0 12px;font-size:18px\"" + GT + "New portfolio message" + LT + "/h2" + GT +
    LT + "table style=\"border-collapse:collapse;font-size:14px\"" + GT +
    LT + "tr" + GT + LT + "td style=\"padding:4px 12px 4px 0;color:#57534e\"" + GT + "Name" + LT + "/td" + GT + LT + "td" + GT + safeName + LT + "/td" + GT + LT + "/tr" + GT +
    LT + "tr" + GT + LT + "td style=\"padding:4px 12px 4px 0;color:#57534e\"" + GT + "Email" + LT + "/td" + GT + LT + "td" + GT + safeEmail + LT + "/td" + GT + LT + "/tr" + GT +
    LT + "tr" + GT + LT + "td style=\"padding:4px 12px 4px 0;color:#57534e\"" + GT + "Org" + LT + "/td" + GT + LT + "td" + GT + (safeOrg || "-") + LT + "/td" + GT + LT + "/tr" + GT +
    LT + "/table" + GT +
    LT + "hr style=\"border:none;border-top:1px solid #e7e5e4;margin:16px 0\" /" + GT +
    LT + "p style=\"white-space:pre-wrap;margin:0\"" + GT + safeMsg + LT + "/p" + GT +
    LT + "/div" + GT;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("[contact] resend error", r.status, detail);
      return res.status(502).json({ ok: false, error: "Email service rejected the request" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] fetch threw:", (err as Error).message);
    return res.status(502).json({ ok: false, error: "Email service unavailable" });
  }
}
