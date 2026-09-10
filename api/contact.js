// /api/contact.js
//
// Serverless contact-form handler for the executive inquiries desk.
// Compatible with Vercel Serverless Functions out of the box.
// For Netlify Functions or AWS Lambda, wrap the exported `handler`
// per that platform's request/response shape (see SETUP.md).
//
// Required environment variables:
//   SMTP_HOST
//   SMTP_PORT
//   SMTP_USER
//   SMTP_PASS
//   CONTACT_RECEIVER_EMAIL

import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ENGAGEMENT_TYPES = [
  "Board Appointment / Directorship",
  "Keynote / Speaking",
  "Governance Advisory",
  "Media / Press",
];
const MAX_LENGTHS = {
  fullName: 120,
  titleOrg: 200,
  email: 200,
  message: 4000,
};

// Strips characters that could be used for SMTP header injection
// (newlines/carriage returns) and neutralizes basic HTML/script tags.
function sanitize(value) {
  return String(value)
    .replace(/[\r\n]+/g, " ")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

function validatePayload(body) {
  const errors = [];
  const { fullName, titleOrg, email, engagementType, message } = body || {};

  if (!fullName || !fullName.trim()) errors.push("Full name is required.");
  if (fullName && fullName.length > MAX_LENGTHS.fullName)
    errors.push("Full name is too long.");

  if (!titleOrg || !titleOrg.trim())
    errors.push("Professional title & organization is required.");
  if (titleOrg && titleOrg.length > MAX_LENGTHS.titleOrg)
    errors.push("Title & organization is too long.");

  if (!email || !EMAIL_PATTERN.test(email))
    errors.push("A valid email address is required.");
  if (email && email.length > MAX_LENGTHS.email)
    errors.push("Email address is too long.");

  if (!ALLOWED_ENGAGEMENT_TYPES.includes(engagementType))
    errors.push("Invalid engagement type selected.");

  if (!message || message.trim().length < 10)
    errors.push("Message must be at least 10 characters.");
  if (message && message.length > MAX_LENGTHS.message)
    errors.push("Message is too long.");

  return errors;
}

function buildEmailHtml({ fullName, titleOrg, email, engagementType, message }) {
  return `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color:#0B132B; padding: 24px 32px;">
        <h1 style="color:#ffffff; font-size: 18px; margin: 0; font-family: Georgia, serif;">
          Executive Inquiry Received
        </h1>
      </div>
      <div style="padding: 24px 32px; background-color:#F8F9FA;">
        <table style="width:100%; border-collapse: collapse; font-size: 14px; color:#1E293B;">
          <tr>
            <td style="padding: 8px 0; color:#64748B; width: 160px;">Full Name</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color:#64748B;">Title & Organization</td>
            <td style="padding: 8px 0;">${titleOrg}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color:#64748B;">Email</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color:#64748B;">Engagement Type</td>
            <td style="padding: 8px 0;">${engagementType}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
          <p style="color:#64748B; font-size: 13px; margin-bottom: 6px;">Strategic Brief</p>
          <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const validationErrors = validatePayload(req.body);
  if (validationErrors.length > 0) {
    return res.status(400).json({ error: validationErrors.join(" ") });
  }

  const fullName = sanitize(req.body.fullName);
  const titleOrg = sanitize(req.body.titleOrg);
  const email = sanitize(req.body.email);
  const engagementType = sanitize(req.body.engagementType);
  const message = sanitize(req.body.message);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Executive Inquiries Desk" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Executive Inquiry — ${engagementType}`,
      html: buildEmailHtml({ fullName, titleOrg, email, engagementType, message }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form dispatch failed:", err);
    return res.status(500).json({
      error: "We couldn't send your inquiry right now. Please try again shortly.",
    });
  }
}
