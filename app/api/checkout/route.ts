import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getProductById } from "@/lib/data"

// Initialize Stripe lazily to avoid build-time errors
let stripe: Stripe | null = null
function getStripe() {
  if (!stripe && process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-12-15.clover",
    })
  }
  return stripe
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, successUrl, cancelUrl } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      )
    }

    // Build line items for Stripe
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (const item of items) {
      const product = getProductById(item.productId)

      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.productId}` },
          { status: 400 }
        )
      }

      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: Math.round(product.price * 100), // Convert to cents
        },
        quantity: item.quantity || 1,
      })
    }

    const stripeClient = getStripe()
    if (!stripeClient) {
      return NextResponse.json(
        { error: "Payment service not configured. Please try again later." },
        { status: 500 }
      )
    }

    // Create Stripe checkout session
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/store?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/store?canceled=true`,
      metadata: {
        productIds: items.map((i: { productId: string }) => i.productId).join(","),
      },
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    })
  } catch (error) {
    console.error("Checkout error:", error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "An error occurred during checkout" },
      { status: 500 }
    )
  }
}
