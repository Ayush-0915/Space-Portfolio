import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getRequiredEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = String(body?.fullName ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const mailTo = getRequiredEnv("MAIL_TO");
    const mailFrom = process.env.MAIL_FROM ?? smtpUser;
    const smtpSecure = process.env.SMTP_SECURE === "true";

    if (!Number.isFinite(smtpPort) || smtpPort <= 0) {
      throw new Error("Invalid SMTP_PORT value. Use a numeric port like 587 or 465.");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: `${fullName} <${email}>`,
      subject: `Portfolio Contact: ${fullName}`,
      text: [
        "You received a new message from your portfolio form.",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <p>You received a new message from your portfolio form.</p>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    const defaultMessage = "Unable to send message right now. Please try again later.";

    if (error instanceof Error && process.env.NODE_ENV !== "production") {
      return NextResponse.json(
        { message: `Contact form setup issue: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: defaultMessage },
      { status: 500 }
    );
  }
}