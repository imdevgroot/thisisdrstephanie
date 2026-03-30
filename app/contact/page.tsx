"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Mail, MapPin, Clock, Phone, Instagram, Facebook, Youtube, Send, MessageCircle, ArrowRight, AlertCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Stephanie@ThisIsDrStephanie.com",
    href: "mailto:Stephanie@ThisIsDrStephanie.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(909) 213-2530",
    href: "tel:+19092132530",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Southern California",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24-48 hours",
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/thisisdrstephanie" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/thisisdrstephanie" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@thisisdrstephanie" },
]

const faqs = [
  {
    question: "What is the best way to get started?",
    answer: "I recommend starting with the complete BRAVE Series for the full transformation experience. If you're unsure, schedule a free discovery call and we can discuss what's right for you.",
  },
  {
    question: "Do you offer 1-on-1 coaching?",
    answer: "Yes! I offer private coaching sessions for those who want personalized guidance. You can book a single session or a coaching package through the store.",
  },
  {
    question: "Is the BRAVE Series faith-based?",
    answer: "Absolutely. Everything I create is grounded in biblical truth and designed to help you grow in your relationship with God while pursuing your purpose.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="hidden md:block absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-14 lg:pt-32 lg:pb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">Get in Touch</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Have questions about the BRAVE Series or coaching? I'd love to hear from you
                and help you take your next step.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-primary/5 border border-primary/20 rounded-3xl p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mt-3 max-w-sm mx-auto">
                      Thank you for reaching out. I'll get back to you within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="mt-8"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/60 focus:border-primary h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/60 focus:border-primary h-12 bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="rounded-xl border-border/60 focus:border-primary h-12 bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me more about how I can help you..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="rounded-xl border-border/60 focus:border-primary resize-none bg-background"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary hover:bg-primary/90 px-8 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Other Ways to Reach Me
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-4">Follow Along</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="w-12 h-12 rounded-2xl bg-background text-muted-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  <div className="hidden md:block absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <h3 className="font-serif text-xl font-semibold mb-3">
                      Book a Free Discovery Call
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-6">
                      Not sure where to start? Let's chat about your goals and find the right path forward.
                    </p>
                    <Button asChild variant="secondary" className="bg-white text-foreground hover:bg-white/90">
                      <a href="#">Schedule a Call</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-card rounded-2xl p-5 md:p-6 border border-border/50 hover:border-primary/30 transition-all hover:shadow-sm"
                >
                  <h3 className="font-semibold text-foreground mb-3 flex items-start gap-3 md:gap-4">
                    <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs md:text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-10 md:pl-12">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

