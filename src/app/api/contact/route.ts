import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name = "",
      email,
      company = "",
      projectType = "",
      budget = "",
      message,
    } = body as {
      name?: string;
      email?: string;
      company?: string;
      projectType?: string;
      budget?: string;
      message?: string;
    };

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const textLines = [
      `New contact form submission from Zyphron website:`,
      "",
      `Name: ${name || "—"}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Project type: ${projectType || "—"}`,
      `Budget range: ${budget || "—"}`,
      "",
      "Message:",
      message,
    ];

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Zyphron Contact <onboarding@resend.dev>",
        to: [process.env.CONTACT_EMAIL],
        subject: "New contact form submission - Zyphron.in",
        text: textLines.join("\n"),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error("Resend API error:", errorText);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 },
    );
  }
}

