"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { CheckCircle, XCircle, X } from "lucide-react"

export function StoreNotification() {
  const searchParams = useSearchParams()
  const [notification, setNotification] = useState<{
    type: "success" | "canceled"
    message: string
  } | null>(null)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setNotification({
        type: "success",
        message: "Thank you for your purchase! Check your email for access instructions.",
      })
      // Clean up URL
      window.history.replaceState({}, "", "/store")
    } else if (searchParams.get("canceled") === "true") {
      setNotification({
        type: "canceled",
        message: "Your order was canceled. Feel free to continue shopping.",
      })
      // Clean up URL
      window.history.replaceState({}, "", "/store")
    }
  }, [searchParams])

  if (!notification) return null

  return (
    <div
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 max-w-md w-full mx-4 p-4 rounded-2xl shadow-lg border ${
        notification.type === "success"
          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
          : "bg-amber-50 border-amber-200 text-amber-800"
      }`}
    >
      <div className="flex items-start gap-3">
        {notification.type === "success" ? (
          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        ) : (
          <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
        )}
        <p className="flex-1 text-sm">{notification.message}</p>
        <button
          onClick={() => setNotification(null)}
          className="flex-shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
