import type { CheckoutItem } from "./types"

export async function createCheckoutSession(items: CheckoutItem[]) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items,
      successUrl: `${window.location.origin}/store?success=true`,
      cancelUrl: `${window.location.origin}/store?canceled=true`,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Failed to create checkout session")
  }

  // Redirect to Stripe Checkout
  if (data.url) {
    window.location.href = data.url
  }

  return data
}

export async function checkoutSingleItem(productId: string, name: string, price: number) {
  return createCheckoutSession([
    { productId, name, price, quantity: 1 }
  ])
}
