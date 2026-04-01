import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Dr. Stephanie Clark Rhoe",
  description: "Terms of Service for This Is Dr. Stephanie.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[30vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-14">
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground">Terms of Service</h1>
            <p className="mt-3 text-muted-foreground">Last updated: March 31, 2026</p>
          </div>
        </section>
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using thisisdrstephanie.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. Products and Services</h2>
              <p>All digital products (courses, modules, workbooks) are delivered electronically. Upon purchase, you will receive access details via email. All sales are final unless otherwise stated.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Refund Policy</h2>
              <p>We offer a 30-day satisfaction guarantee on all digital products. If you are not satisfied, contact us within 30 days of purchase at <a href="mailto:Stephanie@ThisIsDrStephanie.com" className="text-primary hover:underline">Stephanie@ThisIsDrStephanie.com</a> for a full refund.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>All content on this site — including course materials, videos, written content, and graphics — is the intellectual property of Dr. Stephanie Clark Rhoe. You may not reproduce, distribute, or create derivative works without written permission.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Disclaimer</h2>
              <p>The content provided on this site is for educational and informational purposes only. It does not constitute professional medical, psychological, legal, or financial advice. Results from coaching programs vary by individual.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>Dr. Stephanie Clark Rhoe and This Is Dr. Stephanie shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or its products.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Governing Law</h2>
              <p>These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of California.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">8. Contact</h2>
              <p>Questions about these terms? Email us at <a href="mailto:Stephanie@ThisIsDrStephanie.com" className="text-primary hover:underline">Stephanie@ThisIsDrStephanie.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
