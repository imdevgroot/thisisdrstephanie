import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { getSiteConfig } from "@/lib/data"

// Initialize Resend lazily to avoid build-time errors
let resend: Resend | null = null
function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const siteConfig = getSiteConfig()
    const toEmail = siteConfig.contact.email

    const resendClient = getResend()
    if (!resendClient) {
      console.error("Resend API key not configured")
      return NextResponse.json(
        { error: "Email service not configured. Please contact us directly." },
        { status: 500 }
      )
    }

    // Send email via Resend
    const { data, error } = await resendClient.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[Website Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <h3 style="color: #333; margin-top: 24px;">Message:</h3>
          <div style="background: #f9f9f9; padding: 16px; border-radius: 8px;">
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <hr style="border: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #666; font-size: 12px;">
            This message was sent from the contact form at ${siteConfig.site.url}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    await resendClient.emails.send({
      from: `${siteConfig.author.name} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [email],
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thank you for contacting me! I received your message and will get back to you within 24-48 hours.</p>
          <p>In the meantime, feel free to explore the <a href="${siteConfig.site.url}/brave">BRAVE Series</a> or check out the <a href="${siteConfig.site.url}/store">Store</a> for resources to help you on your journey.</p>
          <p>Blessings,</p>
          <p><strong>${siteConfig.author.name}</strong><br/>
          ${siteConfig.author.title}</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!"
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
