import { NextResponse } from "next/server"
import {
  type WaitlistRequest,
  validateEmail,
  validateEmailCredentials,
  getSignupType,
  createEmailTransporter,
  verifyTransporter,
  sendWaitlistEmails,
} from "@/lib/email"

// Main Handler
export async function POST(request: Request) {
  try {
    const { email, name, type }: WaitlistRequest = await request.json()

    // Validate input
    if (!validateEmail(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 }
      )
    }

    // Validate environment variables
    if (!validateEmailCredentials()) {
      console.error("Missing email credentials in environment variables")
      return NextResponse.json(
        { message: "Email service configuration error" },
        { status: 500 }
      )
    }

    // Setup email transporter
    const transporter = createEmailTransporter()
    await verifyTransporter(transporter)

    // Prepare and send emails
    const signupType = getSignupType(type)
    await sendWaitlistEmails(transporter, email, name, signupType)

    return NextResponse.json(
      { message: "Successfully added to waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return NextResponse.json(
      { message: "Failed to add to waitlist" },
      { status: 500 }
    )
  }
}
