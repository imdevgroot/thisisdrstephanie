import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Dr. Stephanie Clark Rhoe",
  description: "Privacy Policy for This Is Dr. Stephanie.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[30vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-12 lg:pt-32 lg:pb-14">
            <span className="inline-block w-10 h-1 bg-primary rounded-full mb-5" />
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground">Privacy Policy</h1>
            <p className="mt-3 text-muted-foreground">Last updated: March 31, 2026</p>
          </div>
        </section>
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 space-y-10 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>When you visit, purchase, or contact us, we may collect your name, email address, payment information (processed securely via Stripe), and usage data via analytics.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use your information to process orders, respond to inquiries, send purchase-related updates, and improve the site. You may opt out of marketing emails at any time.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">3. Sharing Your Information</h2>
              <p>We do not sell or rent your personal information. We share data only with trusted service providers (Stripe for payments, Resend for email) as needed to operate our services.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">4. Cookies</h2>
              <p>This site may use cookies to enhance browsing and analyze traffic. You can control cookie preferences through your browser settings.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>All payment transactions are encrypted and processed through Stripe, a PCI-compliant processor. We take reasonable measures to protect your data, though no internet transmission is 100% secure.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:Stephanie@ThisIsDrStephanie.com" className="text-primary hover:underline">Stephanie@ThisIsDrStephanie.com</a>.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">7. Contact</h2>
              <p>Questions? Email us at <a href="mailto:Stephanie@ThisIsDrStephanie.com" className="text-primary hover:underline">Stephanie@ThisIsDrStephanie.com</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
