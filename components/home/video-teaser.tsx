"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoTeaser() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Subtle background accent */}
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
              In her own words — what the BRAVE Series is, who it's for,
              and why it was built to transform your life from the inside out.
            </p>
            <Button asChild size="lg" className="group mt-8 bg-primary hover:bg-primary/90">
              <Link href="/brave">
                Explore the Full Program
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right: video */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-primary/10 rounded-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground aspect-video">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="/videos/brave-intro.mp4" type="video/mp4" />
              </video>

              {/* Subtle overlay with play hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                <span className="text-white text-xs font-medium tracking-wide">
                  The BRAVE Series
                </span>
              </div>
            </div>

            {/* Sound off note */}
            <p className="mt-3 text-xs text-muted-foreground text-right">
              🔇 Playing muted — visit the{" "}
              <Link href="/brave" className="text-primary hover:underline">
                BRAVE page
              </Link>{" "}
              for the full experience
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
