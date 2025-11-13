import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmailHTML, buildContactEmailText } from "@/lib/email";

// Simple in-memory rate limiter: 3 requests per IP per hour
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 3;
const ipHits = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  // NextRequest may provide ip in some runtimes
  // @ts-ignore
  if ((req as any).ip) return String((req as any).ip);
  return "unknown";
}

function withinLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const hits = ipHits.get(ip) || [];
  const recent = hits.filter((t) => t > windowStart);
  if (recent.length >= MAX_REQUESTS) {
    ipHits.set(ip, recent); // prune
    return false;
  }
  recent.push(now);
  ipHits.set(ip, recent);
  return true;
}

function sanitize(input: string, { maxLen = 5000 } = {}): string {
  let s = (input || "").toString();
  s = s.replace(/[\0\u0008\u0009\u001a\n\r\t]/g, " "); // control chars
  s = s.replace(/[<>"'`]/g, ""); // strip angle quotes to avoid HTML/JS injection
  s = s.trim();
  if (s.length > maxLen) s = s.slice(0, maxLen);
  return s;
}

export const runtime = "nodejs"; // ensure Node runtime for SMTP

// Configure Nodemailer transporter for TransIP SMTP using environment variables
const smtpHost = process.env.TRANSIP_SMTP_HOST;
const smtpPort = Number(process.env.TRANSIP_SMTP_PORT || 465);
const smtpUser = process.env.TRANSIP_SMTP_USER;
const smtpPass = process.env.TRANSIP_SMTP_PASSWORD;

const transporter = (smtpHost && smtpUser && smtpPass)
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Ensure we use TLS; keep default CA, but require valid certs
        rejectUnauthorized: true,
      },
    })
  : null;

export async function POST(req: NextRequest) {
  // Enforce JSON only
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: "Ongeldig verzoek." }, { status: 400 });
  }

  // Honeypot: if filled, silently ignore (no feedback)
  if (typeof body.company === "string" && body.company.trim() !== "") {
    // Intentionally no email send; return 204 No Content to keep UI unchanged
    return new NextResponse(null, { status: 204 });
  }

  // Rate limit per IP
  const ip = getClientIp(req);
  if (!withinLimit(ip)) {
    return NextResponse.json(
      { success: false, message: "Te veel pogingen. Probeer het later opnieuw." },
      { status: 429 }
    );
  }

  // Validate + sanitize
  const name = sanitize(String(body.name || body.naam || ""), { maxLen: 200 });
  const email = sanitize(String(body.email || ""), { maxLen: 320 });
  const message = sanitize(String(body.message || body.bericht || ""), { maxLen: 5000 });
  // Phone: allow +, digits, spaces, hyphens, parentheses, and dots
  const rawPhone = String(body.phone || body.telefoon || "");
  const phone = sanitize(rawPhone, { maxLen: 32 }).replace(/[^+\d\s().-]/g, "");

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "Alle verplichte velden moeten ingevuld zijn." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { success: false, message: "Voer een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { success: false, message: "Bericht moet minimaal 10 tekens bevatten." },
      { status: 400 }
    );
  }

  // Phone validation when provided: 6-20 of allowed characters and at least 6 digits
  if (phone) {
    const phoneAllowed = /^[+\d\s().-]{6,20}$/;
    const digitCount = (phone.match(/\d/g) || []).length;
    if (!phoneAllowed.test(phone) || digitCount < 6) {
      return NextResponse.json(
        { success: false, message: "Voer een geldig telefoonnummer in." },
        { status: 400 }
      );
    }
  }

  if (!transporter) {
    console.error("SMTP niet geconfigureerd: controleer TRANSIP_SMTP_* omgevingsvariabelen");
    return NextResponse.json(
      { success: false, message: "Er ging iets mis, probeer het later opnieuw." },
      { status: 500 }
    );
  }

  try {
    const fromAddress = smtpUser!; // send from the authenticated mailbox
    const toAddress = process.env.CONTACT_TO_EMAIL || "contact@jordybreur.nl";

    const siteName = "jordybreur.nl";
    const siteUrl = "https://jordybreur.nl";

    await transporter.sendMail({
      from: `${siteName} Contact <${fromAddress}>`,
      to: toAddress,
      subject: `Nieuw bericht via ${siteName}: ${name}`,
      text: buildContactEmailText({ name, email, phone, message, ip, siteName, siteUrl }),
      html: buildContactEmailHTML({ name, email, phone, message, ip, siteName, siteUrl }),
    });
    return NextResponse.json({ success: true, message: "Bedankt voor je bericht! Ik neem spoedig contact met je op." });
  } catch (err) {
    console.error("TransIP SMTP/Nodemailer error:", err);
    return NextResponse.json(
      { success: false, message: "Er ging iets mis bij het verzenden. Probeer het later opnieuw." },
      { status: 502 }
    );
  }
}
