import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; last: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return true;
  }

  if (now - entry.last > windowMs) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return true;
  }

  if (entry.count >= limit) return false;

  entry.count++;
  return true;
}

type Input = {
  name: string;
  email: string;
}

function validateInput(data: Input) {
  if (!data.name || data.name.length < 2 || data.name.length > 50) return false;
  if (!data.email || !/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) return false;
  return true;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY!;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const data = await req.json();

  // 1. Rate limit
  if (!rateLimit(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
  }

  // 2. Validate input
  if (!validateInput(data)) {
    return NextResponse.json({ success: false, error: "Invalid input" }, { status: 400 });
  }

  // 3. Verify Turnstile
  const token = data.token; // frontend must pass cf-turnstile-response here
  if (!token || !(await verifyTurnstile(token))) {
    return NextResponse.json({ success: false, error: "Captcha failed" }, { status: 403 });
  }

  try {
    await resend.emails.send({
      from: "contact@woodhamssoftware.com",
      to: "woodhamshelp@gmail.com",
      subject: `Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
