import React from 'react'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { PremiumProductCard } from '@/components/PremiumProductCard'

const ALL_PRODUCTS = [
  {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    description: 'Your story as original cinematic music',
    price: '$49',
    rating: 4.8,
    image: '/products/emotional-soundtrack.jpg',
    featured: true,
  },
  {
    id: 'cinematic-story-film',
    name: 'Cinematic Story Film',
    description: 'Song + music video experience',
    price: '$149',
    rating: 4.9,
    image: '/products/cinematic-story-film.jpg',
    featured: true,
  },
  {
    id: 'memorial-legacy-film',
    name: 'Memorial Legacy Film',
    description: 'Preserve forever',
    price: '$299',
    rating: 5,
    image: '/products/memorial-legacy-film.jpg',
    featured: true,
  },
  {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    description: 'Ultimate cinematic experience',
    price: '$499',
    rating: 5,
    image: '/products/signature-masterpiece.jpg',
    featured: true,
  },
  {
    id: 'future-self-vision',
    name: 'Future Self Vision',
    description: 'Visualize yourself, successful, happy, peaceful',
    price: '$125',
    rating: 4.7,
    image: '/products/future-self-vision.jpg',
  },
  {
    id: 'dream-ai-visualization',
    name: 'Dream AI Visualization',
    description: 'Subconscious cinema',
    price: '$79',
    rating: 4.6,
    image: '/products/dream-ai-visualization.jpg',
  },
  {
    id: 'relationship-healing',
    name: 'Relationship Healing',
    description: 'Transform pain to purpose',
    price: '$119',
    rating: 4.7,
    image: '/products/relationship-healing.jpg',
  },
  {
    id: 'cinematic-life-story',
    name: 'Cinematic Life Story',
    description: 'Biography as cinema',
    price: '$249',
    rating: 4.8,
    image: '/products/cinematic-life-story.jpg',
  },
  {
    id: 'couples-journey-film',
    name: 'Couples Journey Film',
    description: 'Your love story',
    price: '$199',
    rating: 4.9,
    image: '/products/couples-journey-film.jpg',
  },
  {
    id: 'sophia-ai-membership',
    name: 'Sophia AI Membership',
    description: '24/7 emotional support & wellness companion',
    price: '$19/month',
    rating: 4.8,
    image: '/products/sophia-ai-membership.jpg',
  },
  {
    id: 'voice-cloning-studio',
    name: 'Voice Cloning Studio',
    description: 'Hear your story in your own voice',
    price: '$99',
    rating: 4.7,
    image: '/products/voice-cloning-studio.jpg',
  },
  {
    id: 'social-ready-clips',
    name: 'Social-Ready Clips',
    description: 'Auto-generated clips for TikTok & Instagram',
    price: '$39',
    rating: 4.6,
    image: '/products/social-ready-clips.jpg',
  },
  {
    id: 'family-vault',
    name: 'Family Vault',
    description: 'Precious memories preserved',
    price: '$149',
    rating: 4.8,
    image: '/products/family-vault.jpg',
  },
  {
    id: 'nft-collection',
    name: 'NFT Collection',
    description: 'Your story as blockchain legacy',
    price: '$199',
    rating: 4.7,
    image: '/products/nft-collection.jpg',
  },
]

export default function ProductsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Fixed Background Gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #03051a 0%, #090d2b 30%, #050511 100%)`,
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <LuxuryHeader />

        {/* Hero Section */}
        <motion.section
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              All 14 Premium Products
            </motion.h1>
            <motion.p
              className="text-xl text-luxury-gray-light mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our complete collection of cinematic experiences
            </motion.p>
          </div>
        </motion.section>

        {/* Products Grid */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Products Grid - Responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ALL_PRODUCTS.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <PremiumProductCard
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    featured={product.featured}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
