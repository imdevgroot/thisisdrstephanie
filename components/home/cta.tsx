import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary hidden lg:block" />
      </div>

      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="hidden md:block absolute bottom-10 left-1/4 w-20 h-20 bg-white/5 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Start Your Journey Today</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Ready to Step Into
              <br />
              <span className="text-primary lg:text-white/80">Your Calling?</span>
            </h2>

            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              Join thousands of women who have discovered their purpose and learned
              to live boldly through faith. Your transformation begins with one step.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 px-8 group"
              >
                <Link href="/brave">
                  Begin the BRAVE Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Schedule a Free Call
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm">30-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm">Community Access</span>
              </div>
            </div>
          </div>

          {/* Right side - visual element */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative">
              {/* Stacked cards visual */}
              <div className="w-64 h-80 bg-white/10 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 w-64 h-80 bg-white/20 rounded-3xl transform -rotate-3" />
              <div className="absolute inset-0 w-64 h-80 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl font-bold text-primary">B</span>
                </div>
                <span className="font-serif text-4xl font-bold text-foreground">BRAVE</span>
                <span className="text-sm uppercase tracking-widest text-muted-foreground mt-2">Series</span>
                <p className="text-muted-foreground text-sm mt-4">5 Modules to Transform Your Life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

