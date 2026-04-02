import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image section */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-accent shadow-xl">
                <Image
                  src="/Headshot 1_edited_edited.avif"
                  alt="Dr. Stephanie Clark Rhoe - Christian Life Coach & Author"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-5 rounded-2xl shadow-xl max-w-[155px] md:max-w-[185px]">
                <Quote className="w-4 h-4 md:w-5 md:h-5 mb-2 opacity-50" />
                <p className="text-xs md:text-sm font-medium leading-relaxed">
                  "Your calling is waiting. Let's discover it together."
                </p>
              </div>
              <div className="hidden md:block absolute -top-3 -left-3 w-20 h-20 bg-accent rounded-full -z-10" />
            </div>
          </div>

          {/* Content section */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Dr. Stephanie</span>
            </h2>

            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-3 mb-7">
              Stephanie Clark Rhoe, PhD, MSW
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild className="group bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Read My Full Story
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
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

