import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Configure the transporter
    // IMPORTANT: SMTP credentials should be set in environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "beking14@gmail.com",
        pass: process.env.EMAIL_PASS, // This must be an App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "beking14@gmail.com",
      to: "bereketnigussie9@gmail.com",
      subject: `New Project Inquiry from ${email}`,
      text: `User Email: ${email}\n\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111;">
          <h2 style="font-size: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Project Inquiry</h2>
          <p><strong>From:</strong> ${email}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-top: 10px;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
