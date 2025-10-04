import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await resend.emails.send({
      from: "contact@woodhamssoftware.com",
      to: "woodhamshelp@gmail.com",
      subject: `TradeFlow Message from ${data.name || "Unknown"}`,
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
