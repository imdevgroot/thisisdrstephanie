import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckoutButton } from "@/components/checkout-button"
import { StoreNotification } from "@/components/store-notification"
import { Check, Star, Sparkles, ShoppingBag, Shield, Zap, ExternalLink } from "lucide-react"
import { getBraveData, getProducts } from "@/lib/data"

export const metadata = {
  title: "Store | This Is Dr. Stephanie",
  description: "Shop the BRAVE Series and faith-centered resources to help you live boldly in your purpose.",
}

const braveData = getBraveData()
const productsData = getProducts()

const featuredProduct = braveData.completeSeries

const moduleColors: Record<string, string> = {
  believe: "from-primary to-primary/80",
  release: "from-rose-400 to-rose-500",
  activate: "from-amber-400 to-amber-500",
  visualize: "from-emerald-400 to-emerald-500",
  endure: "from-primary to-primary/80",
}

const products = braveData.modules.map((module) => ({
  id: module.id,
  name: `Module: ${module.title}`,
  description: module.description,
  price: module.price,
  type: "Individual Module",
  letter: module.letter,
  color: moduleColors[module.id] || "from-primary to-primary/80",
}))

const additionalResources = productsData.additionalResources

export default function StorePage() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <StoreNotification />
      </Suspense>
      <main>
        {/* Hero Section */}
        <section className="min-h-[50vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-background to-background" />
          <div className="hidden md:block absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-8">
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm font-medium">Shop Resources</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.1]">
                Tools for <span className="text-primary">Transformation</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Faith-centered programs and resources to help you live boldly
                in your God-given purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-24 bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 text-white relative overflow-hidden">
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 mb-8">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">{featuredProduct.badge}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    {featuredProduct.name}
                  </h2>
                  <p className="mt-6 text-white/70 text-lg leading-relaxed">
                    {featuredProduct.description}
                  </p>

                  <ul className="mt-10 space-y-4">
                    {featuredProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-4">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-primary" />
                        </span>
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:pl-8">
                  <div className="bg-white rounded-3xl p-8 text-center shadow-2xl">
                    <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-2">
                      <span className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        ${featuredProduct.price}
                      </span>
                      <span className="text-lg md:text-xl text-muted-foreground line-through">
                        ${featuredProduct.originalPrice}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-8">
                      Save ${featuredProduct.originalPrice - featuredProduct.price}
                    </p>

                    <CheckoutButton
                      productId={featuredProduct.id}
                      productName={featuredProduct.name}
                      price={featuredProduct.price}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-lg h-14"
                    >
                      Get the Complete Series
                    </CheckoutButton>

                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>30-Day Guarantee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        <span>Instant Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Modules */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                Individual <span className="text-primary">Modules</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Purchase individual modules to focus on specific areas of growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group bg-card rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                      <span className="font-serif text-2xl font-bold text-white">
                        {product.letter}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-1 bg-accent rounded-full">
                      {product.type}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">
                    {product.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-foreground">
                      ${product.price}
                    </span>
                    <CheckoutButton
                      productId={product.id}
                      productName={product.name}
                      price={product.price}
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      Buy Now
                    </CheckoutButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-24 bg-gradient-to-b from-accent/30 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <span className="inline-block w-12 h-1 bg-primary rounded-full mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
                Additional <span className="text-primary">Resources</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Complement your journey with these powerful tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalResources.map((resource) => (
                <div
                  key={resource.name}
                  className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {resource.type}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {resource.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3">
                    {resource.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-foreground">
                      ${resource.price}
                    </span>
                    {resource.externalLink ? (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <a href={resource.externalLink} target="_blank" rel="noopener noreferrer">
                          Get Book <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    ) : (
                      <CheckoutButton
                        productId={resource.id}
                        productName={resource.name}
                        price={resource.price}
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        Buy Now
                      </CheckoutButton>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-16">
              <div className="flex items-center gap-2 md:gap-3 col-span-2 justify-center md:justify-start">
                <div className="flex -space-x-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground">500+ Five-Star Reviews</span>
              </div>
              <div className="h-8 w-px bg-border hidden lg:block" />
              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                <Shield className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-xs md:text-sm">Secure Checkout</span>
              </div>
              <div className="h-8 w-px bg-border hidden lg:block" />
              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                <Check className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-xs md:text-sm">30-Day Guarantee</span>
              </div>
              <div className="h-8 w-px bg-border hidden lg:block" />
              <div className="flex items-center gap-2 text-muted-foreground col-span-2 justify-center md:col-span-1">
                <Zap className="h-4 w-4 md:h-5 md:w-5" />
                <span className="text-xs md:text-sm">Instant Digital Access</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
