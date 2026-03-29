"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "BRAVE Series", href: "/brave" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Custom logo mark */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl font-bold text-primary">S</span>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-foreground leading-tight">
              Dr. Stephanie
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-0.5">
              Life Coach & Author
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
            >
              {item.name}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground px-6">
            <Link href="/brave">Begin Your Journey</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground hover:bg-accent rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-all"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/brave" onClick={() => setMobileMenuOpen(false)}>
                Begin Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
