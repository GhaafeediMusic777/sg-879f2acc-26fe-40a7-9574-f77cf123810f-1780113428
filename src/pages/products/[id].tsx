import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'

const PRODUCTS: Record<string, any> = {
  'emotional-soundtrack': {
    name: 'Emotional Soundtrack',
    description: 'Your story as original cinematic music',
    price: '$49',
    rating: 4.8,
    image: '/products/emotional-soundtrack.jpg',
    features: [
      'Original cinematic music',
      'Emotional storytelling',
      'Professional production',
      'Royalty-free',
      'Download included',
    ],
    longDescription:
      'Transform your emotional story into an original cinematic soundtrack. Our AI analyzes your narrative and creates a unique musical composition that perfectly captures the essence of your story.',
  },
  'cinematic-story-film': {
    name: 'Cinematic Story Film',
    description: 'Song + music video experience',
    price: '$149',
    rating: 4.9,
    image: '/products/cinematic-story-film.jpg',
    features: [
      'Music + video',
      '4K resolution',
      'Professional editing',
      'Cinematic effects',
      'Full HD download',
    ],
    longDescription:
      'Get both the original soundtrack AND a professional music video. Perfect for sharing your story with the world.',
  },
  'memorial-legacy-film': {
    name: 'Memorial Legacy Film',
    description: 'Preserve forever',
    price: '$299',
    rating: 5,
    image: '/products/memorial-legacy-film.jpg',
    features: [
      'Lifetime preservation',
      'High resolution',
      'Professional production',
      'Family sharing',
      'Legacy archive',
    ],
    longDescription:
      'Create a permanent, high-quality memorial that preserves your loved ones\' stories for generations to come.',
  },
  'signature-masterpiece': {
    name: 'Signature Masterpiece',
    description: 'Ultimate cinematic experience',
    price: '$499',
    rating: 5,
    image: '/products/signature-masterpiece.jpg',
    features: [
      'Premium production',
      '8K resolution',
      'Custom editing',
      'Professional team',
      'Unlimited revisions',
    ],
    longDescription:
      'Our most premium offering. Get white-glove service with our professional team creating your ultimate cinematic masterpiece.',
  },
  'future-self-vision': {
    name: 'Future Self Vision',
    description: 'Visualize yourself, successful, happy, peaceful',
    price: '$125',
    rating: 4.7,
    image: '/products/future-self-vision.jpg',
    features: [
      'AI visualization',
      'Personal transformation',
      'Motivational content',
      'Visual representation',
      'Download included',
    ],
    longDescription:
      'Visualize your best future self through AI-generated cinematic content. Perfect for motivation and goal-setting.',
  },
  'dream-ai-visualization': {
    name: 'Dream AI Visualization',
    description: 'Subconscious cinema',
    price: '$79',
    rating: 4.6,
    image: '/products/dream-ai-visualization.jpg',
    features: [
      'Dream analysis',
      'AI interpretation',
      'Visual representation',
      'Subconscious insights',
      'HD quality',
    ],
    longDescription:
      'Transform your dreams into visual art. Our AI analyzes your dream descriptions and creates surreal, beautiful visualizations.',
  },
  'relationship-healing': {
    name: 'Relationship Healing',
    description: 'Transform pain to purpose',
    price: '$119',
    rating: 4.7,
    image: '/products/relationship-healing.jpg',
    features: [
      'Emotional healing',
      'Therapeutic content',
      'Professional guidance',
      'Personal growth',
      'Support resources',
    ],
    longDescription:
      'Process relationship experiences through creative expression. Create meaningful content that transforms pain into purpose.',
  },
  'cinematic-life-story': {
    name: 'Cinematic Life Story',
    description: 'Biography as cinema',
    price: '$249',
    rating: 4.8,
    image: '/products/cinematic-life-story.jpg',
    features: [
      'Full biography',
      'Cinematic treatment',
      '4K quality',
      'Professional editing',
      'Family edition',
    ],
    longDescription:
      'Turn your entire life story into a cinematic biography. Perfect for preserving your legacy and sharing with family.',
  },
  'couples-journey-film': {
    name: 'Couples Journey Film',
    description: 'Your love story',
    price: '$199',
    rating: 4.9,
    image: '/products/couples-journey-film.jpg',
    features: [
      'Love story cinema',
      'Romantic music',
      'Professional production',
      '4K quality',
      'Shareable format',
    ],
    longDescription:
      'Celebrate your relationship journey with a professionally produced cinematic film of your love story.',
  },
  'sophia-ai-membership': {
    name: 'Sophia AI Membership',
    description: '24/7 emotional support & wellness companion',
    price: '$19/month',
    rating: 4.8,
    image: '/products/sophia-ai-membership.jpg',
    features: [
      '24/7 availability',
      'Emotional support',
      'Wellness guidance',
      'Personal insights',
      'Monthly updates',
    ],
    longDescription:
      'Get ongoing emotional support and wellness guidance from our AI companion. Available whenever you need to talk.',
  },
  'voice-cloning-studio': {
    name: 'Voice Cloning Studio',
    description: 'Hear your story in your own voice',
    price: '$99',
    rating: 4.7,
    image: '/products/voice-cloning-studio.jpg',
    features: [
      'Voice cloning',
      'Professional narration',
      'Multiple formats',
      'High quality audio',
      'Download included',
    ],
    longDescription:
      'Clone your voice and hear your story narrated in your own voice. Perfect for audiobooks and personal projects.',
  },
  'social-ready-clips': {
    name: 'Social-Ready Clips',
    description: 'Auto-generated clips for TikTok & Instagram',
    price: '$39',
    rating: 4.6,
    image: '/products/social-ready-clips.jpg',
    features: [
      'Auto-generated clips',
      'TikTok optimized',
      'Instagram ready',
      'Multiple formats',
      'Trending music',
    ],
    longDescription:
      'Get ready-to-share clips optimized for social media. Perfect for going viral with your story.',
  },
  'family-vault': {
    name: 'Family Vault',
    description: 'Precious memories preserved',
    price: '$149',
    rating: 4.8,
    image: '/products/family-vault.jpg',
    features: [
      'Family storage',
      'Secure backup',
      'Multi-user access',
      'Lifetime storage',
      'Privacy protected',
    ],
    longDescription:
      'Create a secure family archive. Store and share precious memories with family members safely and securely.',
  },
  'nft-collection': {
    name: 'NFT Collection',
    description: 'Your story as blockchain legacy',
    price: '$199',
    rating: 4.7,
    image: '/products/nft-collection.jpg',
    features: [
      'NFT minting',
      'Blockchain storage',
      'Ownership verified',
      'Resale capability',
      'Digital legacy',
    ],
    longDescription:
      'Mint your story as an NFT. Create a permanent, verifiable digital asset on the blockchain.',
  },
}

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') {
    return null
  }

  const product = PRODUCTS[id]

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-dark text-luxury-pearl flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/">
            <LuxuryButton variant="primary">Back to Home</LuxuryButton>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl">
      <LuxuryHeader />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-luxury-pearl">
              {product.name}
            </h1>
            <p className="text-xl text-luxury-gray-light mb-6">
              {product.longDescription}
            </p>

            {/* Price and Rating */}
            <div className="flex items-center gap-8 mb-8 pb-8 border-b border-luxury-gold border-opacity-20">
              <div>
                <p className="text-sm text-luxury-gray-light mb-2">Price</p>
                <p className="text-4xl font-bold text-luxury-gold">
                  {product.price}
                </p>
              </div>
              <div>
                <p className="text-sm text-luxury-gray-light mb-2">Rating</p>
                <p className="text-3xl font-bold text-luxury-pearl">
                  {product.rating} / 5
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-luxury-pearl">
                Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-luxury-gray-light">
                    <span className="text-luxury-gold font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Link href="/auth/signup">
              <LuxuryButton variant="primary" size="lg">
                Get Started Now
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <LuxuryFooter />
    </div>
  )
}
