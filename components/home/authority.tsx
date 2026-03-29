import { GraduationCap, Heart, Award, BookOpen } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    title: "PhD Public Policy",
    description: "Doctoral expertise in public policy and administration with focus on advocacy",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Heart,
    title: "MSW Social Work",
    description: "Over 30 years in forensic mental health and clinical therapy",
    accent: "from-rose-200/50 to-rose-100/20",
  },
  {
    icon: Award,
    title: "SEL Expert",
    description: "Social Emotional Learning specialist empowering individuals to reach their potential",
    accent: "from-amber-200/50 to-amber-100/20",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Author of 'Finally Good Enough' and the BRAVE Series",
    accent: "from-primary/20 to-primary/5",
  },
]

export function Authority() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left side - sticky header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Backed by
              <br />
              <span className="text-primary">Education & Heart</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Years of academic training combined with real-world experience
              and a deep commitment to faith-centered transformation.
            </p>

            {/* Quick stats */}
            <div className="mt-10 flex gap-8">
              <div>
                <span className="font-serif text-4xl font-bold text-foreground">2</span>
                <p className="text-sm text-muted-foreground mt-1">Advanced Degrees</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <span className="font-serif text-4xl font-bold text-foreground">30+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Practice</p>
              </div>
            </div>
          </div>

          {/* Right side - credential cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div
                  key={credential.title}
                  className={`group relative p-8 rounded-3xl bg-gradient-to-br ${credential.accent} border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Icon with unique styling */}
                  <div className="w-14 h-14 rounded-2xl bg-card shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow">
                    <credential.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {credential.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
