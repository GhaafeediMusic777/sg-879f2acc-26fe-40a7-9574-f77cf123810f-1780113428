import React from 'react'
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  const products = [
    {
      id: 'ai-voice-clone',
      title: 'AI Voice Clone',
      description: 'Create a digital clone of your voice in seconds',
      icon: '🎤',
      features: ['Instant cloning', 'Multi-language', 'Studio quality'],
    },
    {
      id: 'ai-music-producer',
      title: 'AI Music Producer',
      description: 'Generate original music in any genre',
      icon: '🎵',
      features: ['50+ genres', 'Custom length', 'Royalty-free'],
    },
    {
      id: 'ai-music-video',
      title: 'AI Music Video',
      description: 'Create cinematic music videos automatically',
      icon: '🎬',
      features: ['4K quality', 'Custom scenes', 'AI effects'],
    },
    {
      id: 'ai-podcast-producer',
      title: 'AI Podcast Producer',
      description: 'Generate full podcast episodes with AI hosts',
      icon: '🎙️',
      features: ['Multi-host', 'Auto-editing', 'Distribution'],
    },
    {
      id: 'ai-artist-label',
      title: 'AI Artist Label',
      description: 'Launch your AI music career',
      icon: '🌟',
      features: ['Distribution', 'Royalties', 'Analytics'],
    },
  ]

  const features = [
    {
      title: 'Enterprise-Grade AI',
      description: 'Powered by the latest AI models for professional results',
      icon: '⚡',
    },
    {
      title: 'Instant Results',
      description: 'Get studio-quality content in minutes, not hours',
      icon: '⏱️',
    },
    {
      title: 'Royalty-Free',
      description: 'Use your creations commercially without restrictions',
      icon: '📜',
    },
    {
      title: '24/7 Support',
      description: 'Dedicated support team ready to help anytime',
      icon: '🤝',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-luxury-purple rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-6 leading-tight"
          >
            Create <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-premium bg-clip-text text-transparent">Premium Music & Content</span> with AI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl text-luxury-gray-light mb-8 max-w-2xl mx-auto"
          >
            Ghaafeedi Music brings enterprise-grade AI tools to creators, artists, and labels. Create voice clones, generate music, produce videos, and build your AI career—all in one platform.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/auth/signup">
              <LuxuryButton variant="primary" size="lg">
                Get Started Free
              </LuxuryButton>
            </Link>
            <Link href="/products">
              <LuxuryButton variant="secondary" size="lg">
                Explore Products
              </LuxuryButton>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-luxury-gray-medium"
          >
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Free tier available
            </div>
            <div className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Enterprise support
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-luxury-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Why Choose Ghaafeedi?
            </h2>
            <p className="text-luxury-gray-light text-lg max-w-2xl mx-auto">
              Enterprise-grade AI tools designed for creators and professionals
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <LuxuryCard variant="glass" padding="md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-luxury-pearl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-luxury-gray-light text-sm">
                    {feature.description}
                  </p>
                </LuxuryCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Our Products
            </h2>
            <p className="text-luxury-gray-light text-lg max-w-2xl mx-auto">
              Five powerful tools to create, produce, and monetize your content
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
              >
                <Link href={`/products/${product.id}`}>
                  <LuxuryCard variant="elevated" padding="lg" hover className="cursor-pointer h-full flex flex-col">
                    <div className="text-5xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-luxury-pearl mb-2">
                      {product.title}
                    </h3>
                    <p className="text-luxury-gray-light mb-6 flex-grow">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-luxury-gray-light">
                          <span className="text-luxury-gold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <LuxuryButton variant="primary" fullWidth size="sm">
                      Learn More
                    </LuxuryButton>
                  </LuxuryCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-luxury-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-6">
              Ready to Create?
            </h2>
            <p className="text-xl text-luxury-gray-light mb-8">
              Join thousands of creators using Ghaafeedi Music to create professional content
            </p>
            <Link href="/auth/signup">
              <LuxuryButton variant="primary" size="lg">
                Start Your Free Trial
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  )
}
