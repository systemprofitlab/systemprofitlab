import { NextResponse } from "next/server";

type LeadPayload = {
  email?: string;
};

function isEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = payload.email;

  if (!isEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const lead = {
    email: email.trim(),
    source: "systemprofitlab.com",
    leadMagnet: "Free SaaS Growth System Map",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.AFFILIATE_CLICK_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
