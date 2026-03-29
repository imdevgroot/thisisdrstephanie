"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { checkoutSingleItem } from "@/lib/checkout"

interface CheckoutButtonProps {
  productId: string
  productName: string
  price: number
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  children: React.ReactNode
}

export function CheckoutButton({
  productId,
  productName,
  price,
  variant = "default",
  size = "default",
  className,
  children,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      await checkoutSingleItem(productId, productName, price)
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
