const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = typeof body.email === "string" ? body.email.trim() : "";

    if (!email || !emailPattern.test(email)) {
      return Response.json(
        { error: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.LEAD_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "systemprofitlab",
          capturedAt: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        return Response.json(
          { error: "Lead service is unavailable. Please try again." },
          { status: 502 },
        );
      }
    } else {
      console.info("New SystemProfitLab lead:", email);
    }

    return Response.json({
      success: true,
      message: "You are in. Opening the next step now.",
    });
  } catch {
    return Response.json(
      { error: "We could not capture that lead. Please try again." },
      { status: 500 },
    );
  }
}
