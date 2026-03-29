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
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-0 w-80 h-80 bg-accent/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 right-0 w-56 h-56 bg-primary/5 rounded-full blur-2xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Backed by
              <br />
              <span className="text-primary">Education & Heart</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Years of academic training combined with real-world experience
              and a deep commitment to faith-centered transformation.
            </p>
            <div className="mt-8 flex gap-8">
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

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className={`group relative p-7 rounded-2xl bg-gradient-to-br ${credential.accent} border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className="w-12 h-12 rounded-xl bg-card shadow-sm flex items-center justify-center mb-5 group-hover:shadow-md transition-shadow">
                    <credential.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {credential.description}
                  </p>
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
