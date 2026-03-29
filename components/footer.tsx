import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, ArrowUpRight } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "BRAVE Series", href: "/brave" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand section */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full" />
                <span className="font-serif text-xl font-bold text-primary">S</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Dr. Stephanie
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Empowering women to live boldly through faith-centered coaching,
              transformational resources, and a supportive community.
            </p>

            {/* Newsletter signup hint */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                Join our community
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Navigate
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Connect
            </h3>
            <div className="space-y-6">
              {/* Social icons */}
              <div className="flex gap-3">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-accent hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:Stephanie@ThisIsDrStephanie.com"
                    className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors break-all"
                  >
                    Stephanie@ThisIsDrStephanie.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            {new Date().getFullYear()} This Is Dr. Stephanie. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
