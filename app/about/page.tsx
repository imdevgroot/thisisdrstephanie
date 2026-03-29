import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, GraduationCap, Heart, Award, Cross, Users } from "lucide-react"

export const metadata = {
  title: "About | Dr. Stephanie Clark Rhoe",
  description: "Meet Dr. Stephanie Clark Rhoe - Christian Life Coach, Expert, and Author with over 30 years of experience in mental health and social emotional learning.",
}

const timeline = [
  {
    year: "1990s",
    title: "The Beginning",
    description: "Began my journey in governmental forensic mental health, working closely with struggling youth and their families.",
  },
  {
    year: "2000s",
    title: "Policy Advocate",
    description: "Became a trailblazer advocating for public policy reform and social emotional learning in secondary education.",
  },
  {
    year: "2010s",
    title: "SEL Expert",
    description: "Established expertise in Social Emotional Learning, empowering individuals to embrace self-acceptance and set meaningful goals.",
  },
  {
    year: "2023",
    title: "Published Author",
    description: "Released 'Finally Good Enough: Overcoming Lifelong Disappointments in Relationships Through Self-Acceptance.'",
  },
  {
    year: "Present",
    title: "Expanding Impact",
    description: "Continuing to coach, write, and speak as a Christian influencer, guiding women on leadership and discipleship.",
  },
]

const values = [
  {
    icon: Cross,
    title: "Faith-Centered",
    description: "Everything I do is rooted in biblical truth and guided by the Holy Spirit.",
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "I meet you where you are with grace, understanding, and genuine love.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We were never meant to walk alone. Together, we grow stronger.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="hidden md:block absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
                  Hi, I'm{" "}
                  <span className="text-primary">Dr. Stephanie</span>
                </h1>
                <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                  Christian Life Coach, Expert, and Author with over 30 years of experience
                  helping individuals embrace self-acceptance and unlock their full potential.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2.5 shadow-sm">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">PhD Public Policy</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2.5 shadow-sm">
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">MSW Social Work</span>
                  </div>
                  <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full px-4 py-2.5 shadow-sm">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">SEL Expert</span>
                  </div>
                </div>
              </div>

              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="relative z-10">
                  <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-accent shadow-xl md:shadow-2xl">
                    <Image
                      src="/Headshot 1_edited_edited.avif"
                      alt="Dr. Stephanie Clark Rhoe"
                      width={600}
                      height={750}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Decorative elements - hidden on mobile */}
                <div className="hidden md:block absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-3xl -z-10" />
                <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full" />

                {/* Stats card - adjusted positioning on mobile */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-xl">
                  <span className="font-serif text-3xl md:text-4xl font-bold">30+</span>
                  <p className="text-xs md:text-sm text-primary-foreground/80 mt-1">Years Empowering Others</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="hidden md:block absolute top-0 left-0 font-serif text-[15rem] text-primary/[0.02] leading-none select-none">
            Story
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight sticky top-32">
                  My{" "}
                  <span className="text-primary">Story</span>
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p className="text-xl text-foreground">
                  With an incredible journey spanning over thirty years in governmental forensic mental health,
                  clinical therapy, and the mental health fields, I've witnessed firsthand the unique challenges
                  faced by individuals from all walks of life.
                </p>
                <p>
                  Throughout my career, I worked closely with struggling youth and their families,
                  identifying a common thread among their challenges—the crucial need for social and emotional skills.
                  This drove me to become a trailblazer advocating for public policy reform.
                </p>
                <p>
                  As a Social Emotional Learning (SEL) expert, I have touched countless lives, empowering
                  individuals to embrace self-acceptance, set meaningful goals, and unlock their full potential.
                  Beyond my professional achievements, I am also an accomplished author, Bible counselor, and teacher.
                </p>
                <p>
                  My faith in Jesus Christ has grown and remains at the core of my worldview, infusing my work,
                  volunteerism, and personal life with moral values and ethics drawn from
                  <span className="text-foreground font-medium"> the teachings of the Word of God.</span>
                </p>
                <p>
                  In the heart of Southern California, my husband and I reside, continuing to inspire others
                  through our actions and unwavering faith. With five cherished grandchildren whom I describe
                  as my pieces of Heaven on Earth, I remain a devoted wife, loving mother, and doting grandmother.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                The <span className="text-primary">Journey</span>
              </h2>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:-translate-x-0.5" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-2 shadow-lg shadow-primary/20" />

                    {/* Content */}
                    <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                      <div className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-b from-accent/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                My Core <span className="text-primary">Values</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                The principles that guide everything I do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-foreground" />
          <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-3xl" />
          <div className="hidden md:block absolute bottom-0 left-0 w-32 h-32 border border-white/10 rounded-full" />

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center text-white">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Let's Work Together
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              I'd love to hear your story and explore how we can partner together
              on your journey to living boldly.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 px-8 group">
                <Link href="/contact">
                  Schedule a Free Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/brave">Explore the BRAVE Series</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
