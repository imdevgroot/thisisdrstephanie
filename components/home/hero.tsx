import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero background image with transparent overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-flowers.png"
          alt="Soft pink peonies"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/70" />
      </div>

      <div className="hidden md:block absolute top-1/3 right-[15%] w-64 h-64 bg-primary/5 rounded-full opacity-50 pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 left-[8%] w-40 h-40 bg-accent/30 rounded-full pointer-events-none" />

      <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Faith-Centered Life Coaching</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
              Discover the{" "}
              <span className="text-primary">Courage</span>
              <br />
              to Live Your Calling
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Through faith, science, and heart-led guidance, I help women break free
              from fear and step boldly into the life God designed for them.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 px-8 text-base">
                <Link href="/brave">
                  Start the BRAVE Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-base hover:bg-transparent hover:text-primary">
                <Link href="/about" className="group">
                  <span className="border-b-2 border-transparent group-hover:border-primary transition-colors">
                    Meet Dr. Stephanie
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats cards */}
          <div className="hidden lg:block relative">
            <div className="relative h-[420px]">
              <div className="absolute top-0 right-0 w-60 bg-white/85 backdrop-blur-sm p-7 rounded-3xl shadow-xl border border-white/60">
                <span className="font-serif text-5xl font-bold text-primary">500+</span>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Lives transformed through faith-centered coaching</p>
              </div>
              <div className="absolute top-36 right-28 w-52 bg-primary p-6 rounded-2xl shadow-lg text-primary-foreground">
                <span className="font-serif text-4xl font-bold">30+</span>
                <p className="mt-1 text-primary-foreground/80 text-sm">Years of Experience</p>
              </div>
              <div className="absolute bottom-8 right-4 w-48 bg-white/85 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-serif text-base font-bold text-primary">PhD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Certified Expert</p>
                    <p className="text-xs text-muted-foreground">Public Policy & Admin</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-44 w-16 h-16 bg-accent/70 rounded-full" />
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden mt-8 grid grid-cols-3 gap-3">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-white/60 text-center">
            <span className="font-serif text-2xl font-bold text-primary">500+</span>
            <p className="mt-1 text-xs text-muted-foreground">Lives Transformed</p>
          </div>
          <div className="bg-primary p-4 rounded-2xl shadow-md text-primary-foreground text-center">
            <span className="font-serif text-2xl font-bold">30+</span>
            <p className="mt-1 text-xs text-primary-foreground/80">Years Experience</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-white/60 text-center">
            <span className="font-serif text-2xl font-bold text-primary">PhD</span>
            <p className="mt-1 text-xs text-muted-foreground">Certified Expert</p>
          </div>
        </div>
      </div>
    </section>
  )
}
