// BRAVE Series Types
export interface BraveModule {
  id: string
  letter: string
  title: string
  subtitle: string
  description: string
  topics: string[]
  price: number
}

export interface CompleteSeries {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  features: string[]
  badge: string
}

export interface ModuleIncludes {
  icon: string
  title: string
  description: string
}

export interface BraveData {
  modules: BraveModule[]
  completeSeries: CompleteSeries
  includes: ModuleIncludes[]
}

// Products Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  type: string
  stripeProductId: string | null
  externalLink?: string
}

export interface ProductsData {
  additionalResources: Product[]
}

// Site Config Types
export interface SiteInfo {
  name: string
  tagline: string
  description: string
  url: string
}

export interface AuthorInfo {
  name: string
  credentials: string
  title: string
  shortBio: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  responseTime: string
}

export interface SocialLinks {
  instagram: string
  facebook: string
  youtube: string
}

export interface Expertise {
  title: string
  description: string
}

export interface Credential {
  title: string
  description: string
}

export interface SiteConfig {
  site: SiteInfo
  author: AuthorInfo
  contact: ContactInfo
  social: SocialLinks
  expertise: Expertise[]
  credentials: Credential[]
}

// Testimonials Types
export interface BraveTestimonial {
  id: string
  quote: string
  author: string
  module: string | null
}

export interface GeneralTestimonial {
  id: string
  quote: string
  author: string
  role: string
}

export interface TestimonialsData {
  brave: BraveTestimonial[]
  general: GeneralTestimonial[]
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Stripe Checkout Types
export interface CheckoutItem {
  productId: string
  name: string
  price: number
  quantity: number
}

export interface CheckoutRequest {
  items: CheckoutItem[]
  successUrl: string
  cancelUrl: string
}
