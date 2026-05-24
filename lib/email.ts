import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"

// Constants
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const GMAIL_SERVICE = "gmail"

// Types
export interface WaitlistRequest {
  email: string
  name?: string
  type?: string
}

// Validation Functions
export function validateEmail(email: string): boolean {
  return !!email && EMAIL_REGEX.test(email)
}

export function validateEmailCredentials(): boolean {
  return !!(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
}

// Utility Functions
export function getSignupType(type?: string): string {
  return type === "early-access" ? "Early Access" : "Waitlist"
}

// Email Transporter Functions
export function createEmailTransporter(): Transporter {
  return nodemailer.createTransport({
    service: GMAIL_SERVICE,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export async function verifyTransporter(
  transporter: Transporter
): Promise<void> {
  try {
    await transporter.verify()
    console.log("SMTP connection verified successfully")
  } catch (error) {
    console.error("SMTP verification failed:", error)
    throw new Error("Email service configuration error", { cause: error })
  }
}

// Email Template Functions
export function createAdminNotificationEmail(
  email: string,
  name: string | undefined,
  signupType: string
) {
  const adminEmail = process.env.WAITLIST_EMAIL || process.env.CONTACT_EMAIL
  const userName = name || "Not provided"

  return {
    from: process.env.GMAIL_USER,
    to: adminEmail,
    subject: `New ${signupType} Signup - Chat Coach`,
    text: `
New ${signupType} Signup for Chat Coach

Email: ${email}
Name: ${userName}
Type: ${signupType}
    `.trim(),
    html: `
<h2>New ${signupType} Signup for Chat Coach</h2>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Name:</strong> ${userName}</p>
<p><strong>Type:</strong> ${signupType}</p>
    `.trim(),
  }
}

export function createUserConfirmationEmail(
  email: string,
  name: string | undefined,
  signupType: string
) {
  const userName = name || "there"

  return {
    from: process.env.GMAIL_USER,
    to: email,
    subject: `Welcome to Chat Coach ${signupType}!`,
    text: `
Hi ${userName},

Thank you for joining the Chat Coach ${signupType}!

We're excited to have you on board. We'll keep you updated on our progress and notify you as soon as Chat Coach is available.

Stay tuned!

Best regards,
The Chat Coach Team
    `.trim(),
    html: `
<h2>Welcome to Chat Coach ${signupType}!</h2>
<p>Hi ${userName},</p>
<p>Thank you for joining the Chat Coach ${signupType}!</p>
<p>We're excited to have you on board. We'll keep you updated on our progress and notify you as soon as Chat Coach is available.</p>
<p>Stay tuned!</p>
<p>Best regards,<br>The Chat Coach Team</p>
    `.trim(),
  }
}

// Email Sending Functions
export async function sendWaitlistEmails(
  transporter: Transporter,
  email: string,
  name: string | undefined,
  signupType: string
): Promise<void> {
  const adminEmail = createAdminNotificationEmail(email, name, signupType)
  const userEmail = createUserConfirmationEmail(email, name, signupType)

  await Promise.all([
    transporter.sendMail(adminEmail),
    transporter.sendMail(userEmail),
  ])

  console.log("Waitlist signup email and confirmation email sent successfully")
}
