import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const modules = [
  {
    letter: "B",
    title: "Believe",
    description: "Anchor your identity in Christ and embrace who He created you to be.",
    color: "from-primary to-primary/80",
  },
  {
    letter: "R",
    title: "Release",
    description: "Let go of fear, doubt, and past hurts that hold you back from your calling.",
    color: "from-rose-400 to-rose-500",
  },
  {
    letter: "A",
    title: "Activate",
    description: "Step into action with confidence, using your unique gifts for God's glory.",
    color: "from-amber-400 to-amber-500",
  },
  {
    letter: "V",
    title: "Visualize",
    description: "See the life God has planned for you and align your steps with His vision.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    letter: "E",
    title: "Endure",
    description: "Build resilience and perseverance to finish the race set before you.",
    color: "from-primary to-primary/80",
  },
]

export function BraveHighlight() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              The{" "}
              <span className="text-primary">BRAVE</span>
              {" "}Series
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              A transformational 5-module journey designed to help you break free from fear
              and step boldly into your God-given purpose.
            </p>
          </div>

          <div className="lg:text-right">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90">
              <Link href="/brave">
                Explore Full Program
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Modules - Grid on all sizes */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {modules.map((module, index) => (
              <div
                key={module.letter}
                className="group"
              >
                <div className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full">
                  {/* Module number and letter */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Module {index + 1}
                    </span>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                      <span className="font-serif text-lg md:text-xl font-bold text-white">
                        {module.letter}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                    {module.title}
                  </h3>

                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {module.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Video + Workbook</span>
                      <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="font-serif text-3xl font-bold text-foreground">5</span>
              <p className="text-sm text-muted-foreground mt-1">In-Depth Modules</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl font-bold text-foreground">10+</span>
              <p className="text-sm text-muted-foreground mt-1">Hours of Content</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl font-bold text-foreground">50+</span>
              <p className="text-sm text-muted-foreground mt-1">Practical Exercises</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl font-bold text-foreground">Lifetime</span>
              <p className="text-sm text-muted-foreground mt-1">Access Included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
