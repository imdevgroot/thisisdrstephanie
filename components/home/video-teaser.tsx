import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Hear It From{" "}
              <span className="text-primary">Dr. Stephanie</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Watch Dr. Stephanie walk you through the BRAVE Series — what it is,
              who it's for, and how it can transform your life from the inside out.
            </p>
            <Button asChild size="lg" className="group mt-8 bg-primary hover:bg-primary/90">
              <Link href="/brave">
                Visit the BRAVE Page to Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right: video */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-full h-full bg-primary/10 rounded-2xl pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground aspect-video">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/videos/brave-intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

