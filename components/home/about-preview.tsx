import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="pt-12 pb-24 lg:pt-16 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image section */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-accent shadow-xl md:shadow-2xl">
                <Image
                  src="/Headshot 1_edited_edited.avif"
                  alt="Dr. Stephanie Clark Rhoe - Christian Life Coach & Author"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating accent card - repositioned on mobile */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-xl max-w-[160px] md:max-w-[200px]">
                <Quote className="w-5 h-5 md:w-6 md:h-6 mb-2 md:mb-3 opacity-50" />
                <p className="text-xs md:text-sm font-medium leading-relaxed">
                  "Your calling is waiting. Let's discover it together."
                </p>
              </div>

              {/* Decorative shapes - hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full -z-10" />
              <div className="hidden md:block absolute top-1/2 -right-12 w-16 h-16 border-2 border-primary/20 rounded-full -z-10" />
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-7 lg:pl-8">
            <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Dr. Stephanie</span>
            </h2>

            <p className="text-sm uppercase tracking-widest text-muted-foreground mt-3 mb-8">
              Christian Life Coach, Expert & Author
            </p>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                For over 30 years, I've dedicated my life to helping individuals embrace
                self-acceptance, set meaningful goals, and unlock their full potential.
              </p>
              <p>
                With a PhD in Public Policy and Administration and a Master's in Social Work,
                I combine expertise in forensic mental health with deep spiritual understanding.
                My faith in Jesus Christ remains at the core of my worldview.
              </p>
              <p>
                My book delves into the heart of human connections:{" "}
                <span className="text-foreground font-medium">guiding you to embrace your true self with all its strengths, weaknesses, and imperfections.</span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button asChild className="group bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Read My Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Quick credentials */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">PhD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">MSW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
