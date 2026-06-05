import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { CinematicBackground } from '@/components/CinematicBackground'

const PRODUCTS = [
  {
    id: 'emotional-soundtrack',
    name: 'Emotional Soundtrack',
    description: 'Your story as original cinematic music',
    price: '$49',
    rating: 4.8,
    image: '/products/emotional-soundtrack.jpg',
    popular: true,
  },
  {
    id: 'cinematic-story-film',
    name: 'Cinematic Story Film',
    description: 'Song + music video experience',
    price: '$149',
    rating: 4.9,
    image: '/products/cinematic-story-film.jpg',
    popular: true,
  },
  {
    id: 'memorial-legacy-film',
    name: 'Memorial Legacy Film',
    description: 'Preserve forever',
    price: '$299',
    rating: 5,
    image: '/products/memorial-legacy-film.jpg',
    popular: true,
  },
  {
    id: 'signature-masterpiece',
    name: 'Signature Masterpiece',
    description: 'Ultimate cinematic experience',
    price: '$499',
    rating: 5,
    image: '/products/signature-masterpiece.jpg',
    premium: true,
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

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      <CinematicBackground />
      <LuxuryHeader />

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
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
            Transform your emotional stories into cinematic masterpieces
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
          {/* Products Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/products/${product.id}`}>
                  <div className="group relative rounded-2xl overflow-hidden bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-luxury-lg cursor-pointer h-full flex flex-col">
                    {/* Product Image - NO EMOJI */}
                    <div className="relative w-full h-48 overflow-hidden bg-luxury-dark">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex gap-2 z-10">
                      {product.popular && (
                        <span className="px-3 py-1 bg-luxury-gold bg-opacity-90 text-luxury-dark text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                      {product.premium && (
                        <span className="px-3 py-1 bg-purple-500 bg-opacity-90 text-white text-xs font-bold rounded-full">
                          Premium
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-luxury-pearl mb-2 group-hover:text-luxury-gold transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-luxury-gray-light text-sm mb-4 flex-1">
                        {product.description}
                      </p>

                      {/* Price and Rating */}
                      <div className="flex justify-between items-center pt-4 border-t border-luxury-gold border-opacity-20">
                        <span className="text-lg font-bold text-luxury-gold">
                          {product.price}
                        </span>
                        <span className="text-sm text-luxury-gray-light">
                          {product.rating} / 5
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="mt-4">
                        <LuxuryButton variant="primary" size="sm">
                          Learn More
                        </LuxuryButton>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-luxury-pearl">
            Ready to Transform Your Story?
          </h2>
          <p className="text-xl text-luxury-gray-light mb-8">
            Choose your product and start creating your cinematic masterpiece today
          </p>
          <Link href="/auth/signup">
            <LuxuryButton variant="primary" size="lg">
              Get Started Now
            </LuxuryButton>
          </Link>
        </div>
      </motion.section>

      <LuxuryFooter />
    </div>
  )
}
