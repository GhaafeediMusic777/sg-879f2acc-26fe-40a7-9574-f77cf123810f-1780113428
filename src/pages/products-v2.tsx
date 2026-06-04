import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 'ai-voice-clone',
      title: 'AI Voice Clone',
      description: 'Create a digital clone of your voice in seconds. Perfect for voiceovers, narration, and content creation.',
      icon: '🎤',
      category: 'voice',
      price: 'From $9.99',
      features: [
        'Instant voice cloning',
        'Multi-language support',
        'Studio-quality output',
        'Commercial use rights',
        'Unlimited exports',
      ],
      image: '🎙️',
      badge: 'Popular',
    },
    {
      id: 'ai-music-producer',
      title: 'AI Music Producer',
      description: 'Generate original, royalty-free music in any genre. From lo-fi beats to orchestral symphonies.',
      icon: '🎵',
      category: 'music',
      price: 'From $14.99',
      features: [
        '50+ music genres',
        'Custom length (2-20 mins)',
        'Royalty-free forever',
        'Unlimited downloads',
        'Commercial license included',
      ],
      image: '🎼',
      badge: 'Best Seller',
    },
    {
      id: 'ai-music-video',
      title: 'AI Music Video',
      description: 'Create cinematic music videos with AI-generated visuals. Perfect for music releases and social media.',
      icon: '🎬',
      category: 'video',
      price: 'From $29.99',
      features: [
        '4K video quality',
        'Custom scenes & effects',
        'AI-generated visuals',
        'Multiple styles available',
        'Fast rendering',
      ],
      image: '🎥',
      badge: 'Premium',
    },
    {
      id: 'ai-podcast-producer',
      title: 'AI Podcast Producer',
      description: 'Generate full podcast episodes with AI hosts. Perfect for solo podcasters and content creators.',
      icon: '🎙️',
      category: 'podcast',
      price: 'From $19.99',
      features: [
        'Multi-host conversations',
        'Auto-editing & mastering',
        'Distribution to all platforms',
        'Transcript generation',
        'SEO optimization',
      ],
      image: '🎧',
      badge: 'New',
    },
    {
      id: 'ai-artist-label',
      title: 'AI Artist Label',
      description: 'Launch your AI music career. Distribute, monetize, and grow your AI-generated music catalog.',
      icon: '🌟',
      category: 'label',
      price: 'From $49.99',
      features: [
        'Global distribution',
        'Royalty tracking',
        'Analytics dashboard',
        'Artist portfolio',
        'Playlist pitching',
      ],
      image: '🏷️',
      badge: 'Enterprise',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'voice', label: 'Voice' },
    { id: 'music', label: 'Music' },
    { id: 'video', label: 'Video' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'label', label: 'Label' },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-6">
            Our <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-premium bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            Five powerful tools to create, produce, and monetize your content
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-premium text-luxury-dark'
                    : 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 text-luxury-pearl hover:border-luxury-gold hover:border-opacity-60'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <Link href={`/products/${product.id}`}>
                  <LuxuryCard variant="elevated" padding="lg" hover className="cursor-pointer h-full flex flex-col relative overflow-hidden">
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-luxury-gold text-luxury-dark text-xs font-bold rounded-full">
                        {product.badge}
                      </div>
                    )}

                    {/* Icon */}
                    <div className="text-6xl mb-6">{product.icon}</div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-luxury-pearl mb-2">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-luxury-gray-light mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-luxury-gold border-opacity-20">
                      <p className="text-luxury-gold font-semibold text-lg">
                        {product.price}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-luxury-gray-light">
                          <span className="text-luxury-gold mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <LuxuryButton variant="primary" fullWidth>
                      Explore Product
                    </LuxuryButton>
                  </LuxuryCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-luxury-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-6">
              Not sure which product to start with?
            </h2>
            <p className="text-xl text-luxury-gray-light mb-8">
              Try all products free for 7 days. No credit card required.
            </p>
            <Link href="/auth/signup">
              <LuxuryButton variant="primary" size="lg">
                Start Free Trial
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  )
}
