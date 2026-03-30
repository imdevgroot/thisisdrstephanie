const testimonials = [
  {
    quote: "The BRAVE Series completely transformed my perspective. I went from paralyzed by fear to confidently pursuing my calling. Dr. Stephanie's guidance is truly anointed.",
    author: "Jennifer M.",
    role: "Ministry Leader",
    featured: true,
  },
  {
    quote: "For years, I struggled with self-doubt. Through this program, I discovered my worth in Christ and learned to silence the lies that held me back.",
    author: "Amanda R.",
    role: "Entrepreneur",
    featured: false,
  },
  {
    quote: "Dr. Stephanie's approach is unique - she combines professional expertise with deep faith. Her coaching helped me find clarity in my purpose.",
    author: "Michelle T.",
    role: "Author & Speaker",
    featured: false,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-accent/30 to-background relative overflow-hidden">
      {/* Decorative quote mark - hidden on mobile, smaller on tablet */}
      <div className="hidden md:block absolute top-20 left-10 font-serif text-[10rem] lg:text-[20rem] text-primary/[0.03] leading-none select-none">
        "
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header - left aligned */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
            Stories of
            <br />
            <span className="text-primary">Transformation</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Hear from women who have experienced breakthrough through faith-centered coaching.
          </p>
        </div>

        {/* Testimonials layout - featured + grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured testimonial */}
          <div className="lg:row-span-2 bg-primary rounded-2xl p-6 md:p-9 lg:p-10 text-primary-foreground relative overflow-hidden">
            {/* Decorative shapes - hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="hidden md:block absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              {/* Quote icon */}
              <svg className="w-12 h-12 text-white/20 mb-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>

              <blockquote className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed mb-6 md:mb-10">
                {testimonials[0].quote}
              </blockquote>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-serif text-xl md:text-2xl font-bold">
                    {testimonials[0].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-base md:text-lg">{testimonials[0].author}</p>
                  <p className="text-primary-foreground/70 text-sm md:text-base">{testimonials[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other testimonials */}
          {testimonials.slice(1).map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

