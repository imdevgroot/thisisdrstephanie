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
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              The <span className="text-primary">BRAVE</span> Series
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              A transformational 5-module journey designed to help you break free from fear
              and step boldly into your God-given purpose.
            </p>
          </div>
          <div className="shrink-0">
            <Button asChild size="lg" className="group bg-primary hover:bg-primary/90">
              <Link href="/brave">
                Explore Full Program
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <div key={module.letter} className="bg-card rounded-2xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                  Module {index + 1}
                </span>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-md`}>
                  <span className="font-serif text-lg font-bold text-white">{module.letter}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{module.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1">{module.description}</p>
              <div className="mt-5 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Video + Workbook</span>
                  <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "5", label: "In-Depth Modules" },
              { stat: "10+", label: "Hours of Content" },
              { stat: "50+", label: "Practical Exercises" },
              { stat: "Lifetime", label: "Access Included" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <span className="font-serif text-3xl font-bold text-foreground">{stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
