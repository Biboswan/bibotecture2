import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { EMAIL_REGEX } from "@/lib/email"

interface ContactPayload {
  name?: string
  fullName?: string
  email?: string
  company?: string
  message?: string
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    )
  }

  const name = (payload.fullName ?? payload.name ?? "").trim()
  const email = (payload.email ?? "").trim()
  const message = (payload.message ?? "").trim()
  const company = (payload.company ?? "").trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email and message are required" },
      { status: 400 }
    )
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address" },
      { status: 400 }
    )
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Missing email credentials in environment variables")
    return NextResponse.json(
      { message: "Email service is not configured" },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.verify()
  } catch (error) {
    console.error("SMTP verification failed:", error)
    return NextResponse.json(
      { message: "Email service is unavailable" },
      { status: 502 }
    )
  }

  const toAddress = process.env.CONTACT_EMAIL ?? process.env.GMAIL_USER

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toAddress,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\n${message}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${company ? escapeHtml(company) : "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    )
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
