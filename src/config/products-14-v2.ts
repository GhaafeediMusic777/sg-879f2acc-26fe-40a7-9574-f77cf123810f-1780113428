// Complete 14 Products Configuration for Ghaafeedi Music Platform

export interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  period?: string
  rating: number
  features: string[]
  image?: string
  popular?: boolean
  premium?: boolean
}

export const PRODUCTS_14: Record<string, Product> = {
  'emotional-soundtrack': {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    description: 'Your story as original cinematic music',
    image: '/products/emotional-soundtrack.jpg',
    category: 'Music',
    price: 49,
    rating: 4.8,
    features: [
      'Original cinematic music',
      'Emotional storytelling',
      'Professional production',
      'Royalty-free',
      'Download included',
    ],
    popular: true,
  },
  'cinematic-story-film': {
    id: 'cinematic-story-film',
    name: 'Cinematic Story Film',
    description: 'Song + music video experience',
    image: '/products/cinematic-story-film.jpg',
    category: 'Video',
    price: 149,
    rating: 4.9,
    features: [
      'Music + video',
      '4K resolution',
      'Professional editing',
      'Cinematic effects',
      'Social media ready',
    ],
    popular: true,
  },
  'memorial-legacy-film': {
    id: 'memorial-legacy-film',
    name: 'Memorial Legacy Film',
    description: 'Preserve forever',
    image: '/products/memorial-legacy-film.jpg',
    category: 'Legacy',
    price: 299,
    rating: 5,
    features: [
      'Lifetime preservation',
      'High resolution',
      'Professional production',
      'Family sharing',
      'Cloud storage forever',
    ],
    popular: true,
  },
  'signature-masterpiece': {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    description: 'Ultimate cinematic experience',
    image: '/products/signature-masterpiece.jpg',
    category: 'Premium',
    price: 499,
    rating: 5,
    features: [
      'Premium production',
      '8K resolution',
      'Custom editing',
      'Director consultation',
      'VIP support',
    ],
    premium: true,
  },
  'future-self-vision': {
    id: 'future-self-vision',
    name: 'Future Self Vision',
    description: 'Visualize yourself successful, happy, peaceful',
    image: '/products/future-self-vision.jpg',
    category: 'Vision',
    price: 125,
    rating: 4.7,
    features: [
      'AI visualization',
      'Personal transformation',
      'Motivational content',
      'Guided meditation',
      'Progress tracking',
    ],
  },
  'dream-ai-visualization': {
    id: 'dream-ai-visualization',
    name: 'Dream AI Visualization',
    description: 'Subconscious cinema',
    image: '/products/dream-ai-visualization.jpg',
    category: 'Vision',
    price: 79,
    rating: 4.6,
    features: [
      'Dream analysis',
      'AI interpretation',
      'Visual representation',
      'Personal insights',
      'Journaling tools',
    ],
  },
  'relationship-healing': {
    id: 'relationship-healing',
    name: 'Relationship Healing',
    description: 'Transform pain to purpose',
    image: '/products/relationship-healing.jpg',
    category: 'Healing',
    price: 119,
    rating: 4.7,
    features: [
      'Emotional healing',
      'Story transformation',
      'Therapeutic content',
      'Support resources',
      'Wellness tracking',
    ],
  },
  'cinematic-life-story': {
    id: 'cinematic-life-story',
    name: 'Cinematic Life Story',
    description: 'Biography as cinema',
    image: '/products/cinematic-life-story.jpg',
    category: 'Biography',
    price: 249,
    rating: 4.8,
    features: [
      'Life story production',
      'Professional cinematography',
      'Narrative editing',
      'Family involvement',
      'Lifetime access',
    ],
  },
  'couples-journey-film': {
    id: 'couples-journey-film',
    name: 'Couples Journey Film',
    description: 'Your love story',
    image: '/products/couples-journey-film.jpg',
    category: 'Relationships',
    price: 199,
    rating: 4.9,
    features: [
      'Love story production',
      'Romantic cinematography',
      'Emotional narrative',
      'Anniversary ready',
      'Shareable format',
    ],
  },
  'sophia-ai-membership': {
    id: 'sophia-ai-membership',
    name: 'Sophia AI Membership',
    description: '24/7 emotional support & wellness companion',
    image: '/products/sophia-ai-membership.jpg',
    category: 'AI Companion',
    price: 19,
    period: 'month',
    rating: 4.8,
    features: [
      '24/7 AI support',
      'Emotional wellness',
      'Daily check-ins',
      'Personalized guidance',
      'Crisis support',
    ],
  },
  'voice-cloning-studio': {
    id: 'voice-cloning-studio',
    name: 'Voice Cloning Studio',
    description: 'Hear your story in your own voice',
    image: '/products/voice-cloning-studio.jpg',
    category: 'Audio',
    price: 99,
    rating: 4.7,
    features: [
      'Voice cloning',
      'Professional narration',
      'Multiple languages',
      'Commercial use',
      'High quality audio',
    ],
  },
  'social-ready-clips': {
    id: 'social-ready-clips',
    name: 'Social-Ready Clips',
    description: 'Auto-generated clips for TikTok & Instagram',
    image: '/products/social-ready-clips.jpg',
    category: 'Social',
    price: 39,
    rating: 4.6,
    features: [
      'Auto-generated clips',
      'TikTok optimized',
      'Instagram ready',
      'Trending sounds',
      'Hashtag suggestions',
    ],
  },
  'family-vault': {
    id: 'family-vault',
    name: 'Family Vault',
    description: 'Preserve family stories forever',
    image: '/products/family-vault.jpg',
    category: 'Family',
    price: 149,
    rating: 4.8,
    features: [
      'Family storage',
      'Multi-user access',
      'Lifetime preservation',
      'Sharing controls',
      'Legacy planning',
    ],
  },
  'nft-collection': {
    id: 'nft-collection',
    name: 'NFT Collection',
    description: 'Own your story as an NFT',
    image: '/products/nft-collection.jpg',
    category: 'Web3',
    price: 199,
    rating: 4.5,
    features: [
      'NFT minting',
      'Blockchain ownership',
      'Resale rights',
      'Certificate of authenticity',
      'Web3 integration',
    ],
  },
}

// Helper functions

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return Object.values(PRODUCTS_14)
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS_14[id]
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return Object.values(PRODUCTS_14).filter((p) => p.category === category)
}

/**
 * Get popular products
 */
export function getPopularProducts(): Product[] {
  return Object.values(PRODUCTS_14).filter((p) => p.popular)
}

/**
 * Get premium products
 */
export function getPremiumProducts(): Product[] {
  return Object.values(PRODUCTS_14).filter((p) => p.premium)
}

/**
 * Get all categories
 */
export function getAllCategories(): string[] {
  const categories = new Set(Object.values(PRODUCTS_14).map((p) => p.category))
  return Array.from(categories).sort()
}

/**
 * Sort products by rating
 */
export function sortByRating(): Product[] {
  return Object.values(PRODUCTS_14).sort((a, b) => b.rating - a.rating)
}

/**
 * Sort products by price (low to high)
 */
export function sortByPriceLow(): Product[] {
  return Object.values(PRODUCTS_14).sort((a, b) => a.price - b.price)
}

/**
 * Sort products by price (high to low)
 */
export function sortByPriceHigh(): Product[] {
  return Object.values(PRODUCTS_14).sort((a, b) => b.price - a.price)
}

/**
 * Search products
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return Object.values(PRODUCTS_14).filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  )
}

/**
 * Format price
 */
export function formatPrice(product: Product): string {
  if (product.period) {
    return `$${product.price}/${product.period}`
  }
  return `$${product.price}`
}

/**
 * Get featured products (popular + premium)
 */
export function getFeaturedProducts(): Product[] {
  return Object.values(PRODUCTS_14).filter((p) => p.popular || p.premium)
}

/**
 * Get products by price range
 */
export function getProductsByPriceRange(min: number, max: number): Product[] {
  return Object.values(PRODUCTS_14).filter((p) => p.price >= min && p.price <= max)
}
