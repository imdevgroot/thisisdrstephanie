import braveModulesData from "@/data/brave-modules.json"
import productsData from "@/data/products.json"
import siteConfigData from "@/data/site-config.json"
import testimonialsData from "@/data/testimonials.json"
import type {
  BraveData,
  ProductsData,
  SiteConfig,
  TestimonialsData,
} from "./types"

export function getBraveData(): BraveData {
  return braveModulesData as BraveData
}

export function getProducts(): ProductsData {
  return productsData as ProductsData
}

export function getSiteConfig(): SiteConfig {
  return siteConfigData as SiteConfig
}

export function getTestimonials(): TestimonialsData {
  return testimonialsData as TestimonialsData
}

// Helper to get all purchasable products (for Stripe)
export function getAllProducts() {
  const brave = getBraveData()
  const products = getProducts()

  const moduleProducts = brave.modules.map((m) => ({
    id: m.id,
    name: `Module: ${m.title}`,
    description: m.description,
    price: m.price,
    type: "Individual Module",
  }))

  const completeSeriesProduct = {
    id: brave.completeSeries.id,
    name: brave.completeSeries.name,
    description: brave.completeSeries.description,
    price: brave.completeSeries.price,
    type: "Complete Series",
  }

  return [
    completeSeriesProduct,
    ...moduleProducts,
    ...products.additionalResources,
  ]
}

export function getProductById(id: string) {
  const allProducts = getAllProducts()
  return allProducts.find((p) => p.id === id)
}
