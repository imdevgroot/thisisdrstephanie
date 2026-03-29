import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Authority } from "@/components/home/authority"
import { AboutPreview } from "@/components/home/about-preview"
import { BraveHighlight } from "@/components/home/brave-highlight"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <Authority />
        <BraveHighlight />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
