import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check, Sparkles, Clock, BookOpen, Users, Video } from "lucide-react"

export const metadata = {
  title: "BRAVE Series | Dr. Stephanie Clark Rhoe",
  description: "Discover the BRAVE Series - an empowering program designed to inspire and motivate you on your personal growth journey. Explore modules dedicated to each letter in BRAVE.",
}

const modules = [
  {
    letter: "B",
    title: "Believe",
    subtitle: "Know Who You Are",
    description: "Anchor your identity in Christ and embrace who He created you to be. Discover the lies you've believed and replace them with God's truth about your worth and calling.",
    topics: [
      "Understanding your identity in Christ",
      "Breaking free from comparison",
      "Embracing your unique design",
      "Building unshakeable confidence",
    ],
    color: "from-primary to-primary/80",
  },
  {
    letter: "R",
    title: "Release",
    subtitle: "Let Go of What Holds You Back",
    description: "Let go of fear, doubt, past hurts, and limiting beliefs that hold you back from your calling. Experience the freedom of surrender and forgiveness.",
    topics: [
      "Identifying fear patterns",
      "Processing past wounds",
      "Practicing forgiveness",
      "Releasing control to God",
    ],
    color: "from-rose-400 to-rose-500",
  },
  {
    letter: "A",
    title: "Activate",
    subtitle: "Step Into Action",
    description: "Step into action with confidence, using your unique gifts for God's glory. Learn to take bold steps even when you don't have all the answers.",
    topics: [
      "Discovering your spiritual gifts",
      "Taking imperfect action",
      "Building holy habits",
      "Creating momentum",
    ],
    color: "from-amber-400 to-amber-500",
  },
  {
    letter: "V",
    title: "Visualize",
    subtitle: "See God's Vision",
    description: "See the life God has planned for you and align your steps with His vision. Dream with God and create a roadmap for your purpose.",
    topics: [
      "Casting vision with God",
      "Setting faith-filled goals",
      "Creating action plans",
      "Overcoming obstacles",
    ],
    color: "from-emerald-400 to-emerald-500",
  },
  {
    letter: "E",
    title: "Endure",
    subtitle: "Finish Strong",
    description: "Build resilience and perseverance to finish the race set before you. Develop the grit and grace needed for the long journey.",
    topics: [
      "Building spiritual resilience",
      "Navigating setbacks",
      "Finding joy in the journey",
      "Creating lasting change",
    ],
    color: "from-primary to-primary/80",
  },
]

const includes = [
  {
    icon: Video,
    title: "5 Video Modules",
    description: "In-depth teaching sessions with practical application",
  },
  {
    icon: BookOpen,
    title: "Workbook & Exercises",
    description: "Reflection prompts and actionable exercises for each module",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join a private community of like-minded women",
  },
  {
    icon: Clock,
    title: "Lifetime Access",
    description: "Return to the content whenever you need a refresh",
  },
]

const testimonials = [
  {
    quote: "Module 2 (Release) was life-changing. I finally let go of pain I'd been carrying for decades.",
    author: "Rachel K.",
  },
  {
    quote: "The BRAVE Series gave me a framework for pursuing my dreams with confidence.",
    author: "Lisa M.",
  },
  {
    quote: "I've done many programs, but this one actually led to lasting transformation.",
    author: "Patricia H.",
  },
]

export default function BravePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="hidden md:block absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          {/* Floating letters - hidden on mobile */}
          <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
            <span className="absolute top-20 left-[10%] font-serif text-8xl font-bold text-primary/5">B</span>
            <span className="absolute top-40 right-[15%] font-serif text-6xl font-bold text-primary/5">R</span>
            <span className="absolute bottom-32 left-[20%] font-serif text-7xl font-bold text-primary/5">A</span>
            <span className="absolute bottom-20 right-[25%] font-serif text-9xl font-bold text-primary/5">V</span>
            <span className="absolute top-1/2 right-[5%] font-serif text-8xl font-bold text-primary/5">E</span>
          </div>

          <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Flagship Program</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-foreground leading-[1.1]">
                The{" "}
                <span className="text-primary">BRAVE</span>
                {" "}Series
              </h1>

              <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A transformational 5-module journey by Stephanie Clark Rhoe, PhD, MSW — designed to help you break free from fear and step boldly into your God-given purpose.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg" className="group bg-primary hover:bg-primary/90 px-8">
                  <Link href="/store">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="hover:bg-transparent hover:text-primary">
                  <Link href="#modules" className="group">
                    <span className="border-b-2 border-transparent group-hover:border-primary transition-colors">
                      Explore Modules
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Introduction */}
        <section className="py-14 bg-card">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                Watch: What is the BRAVE Series?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Hear directly from Dr. Stephanie about this transformative program.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-foreground/5">
              <video
                controls
                className="w-full aspect-video"
                poster="/Headshot 1_edited_edited.avif"
              >
                <source src="/videos/brave-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/30 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
                  Everything You Need for
                  <br />
                  <span className="text-primary">Complete Transformation</span>
                </h2>
                <p className="mt-6 text-muted-foreground text-lg">
                  The BRAVE Series is more than a courseâ€”it's a comprehensive journey
                  with all the tools and support you need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includes.map((item) => (
                  <div
                    key={item.title}
                    className="bg-background rounded-2xl p-5 md:p-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                The 5 <span className="text-primary">Modules</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Each letter in BRAVE represents a crucial step in your transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              {modules.map((module, index) => (
                <div
                  key={module.letter}
                  className="group bg-card rounded-2xl p-7 lg:p-9 border border-border/50 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Letter badge */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg`}>
                          <span className="font-serif text-3xl lg:text-4xl font-bold text-white">
                            {module.letter}
                          </span>
                        </div>
                        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground lg:mt-3">
                          Module {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5">
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {module.title}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {module.subtitle}
                      </p>
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {module.description}
                      </p>
                    </div>

                    {/* Topics */}
                    <div className="lg:col-span-5 bg-accent/30 rounded-2xl p-6">
                      <p className="text-sm font-semibold text-foreground mb-4">
                        What you'll learn:
                      </p>
                      <ul className="space-y-3">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-primary" />
                            </span>
                            <span className="text-muted-foreground text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-accent/30 to-background relative overflow-hidden">
          <div className="hidden md:block absolute top-10 left-10 font-serif text-[10rem] lg:text-[15rem] text-primary/[0.02] leading-none select-none">
            "
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                What Others Are <span className="text-primary">Saying</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <p className="font-semibold text-foreground">
                    â€” {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground" />
          <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full bg-primary" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-white">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  Ready to Start Your
                  <br />
                  <span className="text-primary lg:text-white/80">BRAVE Journey?</span>
                </h2>
                <p className="mt-6 text-white/70 text-lg max-w-xl">
                  Join thousands of women who have transformed their lives through the BRAVE Series.
                  Your breakthrough is waiting.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 px-8 group">
                    <Link href="/store">
                      Get the BRAVE Series
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 bg-white/10 rounded-3xl transform rotate-6" />
                  <div className="absolute inset-0 w-64 h-80 bg-white/20 rounded-3xl transform -rotate-3" />
                  <div className="absolute inset-0 w-64 h-80 bg-white rounded-3xl flex flex-col items-center justify-center p-8">
                    <div className="flex gap-1 mb-4">
                      {['B', 'R', 'A', 'V', 'E'].map((letter, i) => (
                        <span
                          key={letter}
                          className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-serif font-bold text-primary"
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Series</span>
                    <div className="mt-6 text-center">
                      <span className="text-3xl font-bold text-foreground">$297</span>
                      <p className="text-sm text-muted-foreground">one-time payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



