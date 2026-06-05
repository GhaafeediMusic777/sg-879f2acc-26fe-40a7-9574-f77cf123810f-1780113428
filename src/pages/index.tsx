import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CinematicBackground } from '@/components/CinematicBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'
import { getAllProducts, getPopularProducts } from '@/config/products-14-v2'

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<'consumer' | 'label' | 'partner' | null>(null)
  const allProducts = getAllProducts()
  const popularProducts = getPopularProducts()

  return (
    <>
      <Head>
        <title>Ghaafeedi Music - Premium AI Music Platform</title>
        <meta
          name="description"
          content="Experience premium AI music creation with cinematic animations, emotional storytelling, and luxury design. Transform your stories into cinematic masterpieces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark relative overflow-hidden">
          {/* Cinematic Background */}
          <CinematicBackground />

          <LuxuryHeader />

          {/* Hero Section */}
          <motion.section
            className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Headline */}
              <motion.h1
                className="text-7xl md:text-8xl font-bold text-luxury-pearl mb-6"
                variants={staggerItem}
                style={{
                  background: 'linear-gradient(135deg, rgb(212, 175, 55), rgb(245, 242, 235))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                }}
              >
                Ghaafeedi Music
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-2xl md:text-3xl text-luxury-gold mb-8 font-light tracking-widest"
                variants={staggerItem}
              >
                Premium AI Music Creation Platform
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-luxury-gray-light mb-12 max-w-2xl mx-auto leading-relaxed"
                variants={staggerItem}
              >
                Experience the future of music creation with cinematic animations, emotional storytelling, and luxury design. Create, collaborate, and share your musical legacy.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-6 justify-center flex-wrap mb-16"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem}>
                  <Link href="/auth/signup">
                    <LuxuryButton variant="primary" size="lg">
                      Get Started
                    </LuxuryButton>
                  </Link>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <Link href="/products-complete-v2">
                    <LuxuryButton variant="secondary" size="lg">
                      Explore All Products
                    </LuxuryButton>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex justify-center gap-8 text-sm text-luxury-gray-light flex-wrap"
                variants={staggerContainer}
              >
                <motion.div variants={staggerItem} className="flex items-center gap-2">
                  <span className="text-luxury-gold">✓</span> SSL Encrypted
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-center gap-2">
                  <span className="text-luxury-gold">✓</span> PCI Compliant
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-center gap-2">
                  <span className="text-luxury-gold">✓</span> Money-Back Guarantee
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* All 14 Products Showcase */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-4"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                All 14 Premium Products
              </motion.h2>

              <motion.p
                className="text-xl text-luxury-gray-light text-center mb-16"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Transform your emotional stories into cinematic masterpieces
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {allProducts.map((product) => (
                  <motion.div key={product.id} variants={staggerItem}>
                    <Link href={`/products/${product.id}`}>
                      <LuxuryCard variant="glass">
                        {product.image && (
                          <div className="mb-4 -mx-4 -mt-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-t-lg"
                            />
                          </div>
                        )}
                        {product.popular && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-luxury-gold bg-opacity-90 text-luxury-dark text-xs font-bold rounded-full">
                              Popular
                            </span>
                          </div>
                        )}

                        <h3 className="text-lg font-bold text-luxury-pearl mb-2">
                          {product.name}
                        </h3>

                        <p className="text-luxury-gray-light text-sm mb-3">
                          {product.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-luxury-gold">
                            ${product.price}{product.period ? `/${product.period}` : ''}
                          </span>
                          <span className="text-sm text-luxury-gray-light">
                            {product.rating} / 5
                          </span>
                        </div>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Button */}
              <motion.div
                className="flex justify-center mt-12"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href="/products-complete-v2">
                  <LuxuryButton variant="primary" size="lg">
                    View All Products with Details
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Features Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Premium Features
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: '🎨',
                    title: 'Cinematic Design',
                    description: 'Luxury animations and visual effects at every touchpoint',
                  },
                  {
                    icon: '🎵',
                    title: 'AI Music Creation',
                    description: 'Generate unlimited original music in any genre or style',
                  },
                  {
                    icon: '🌟',
                    title: 'Artist Worlds',
                    description: 'Explore 6 unique AI artist universes with immersive experiences',
                  },
                  {
                    icon: '🎤',
                    title: 'Voice Cloning',
                    description: 'Hear your story narrated in your own voice',
                  },
                  {
                    icon: '🎬',
                    title: 'Video Creation',
                    description: 'Professional cinematic videos with AI-generated soundtracks',
                  },
                  {
                    icon: '🔐',
                    title: 'Enterprise Security',
                    description: 'SSL encrypted, PCI compliant, and fully secure',
                  },
                ].map((feature, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <LuxuryCard variant="default">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-luxury-pearl mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-luxury-gray-light">{feature.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Role Selection Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Choose Your Path
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: '♥',
                    title: 'Consumer',
                    description: 'Discover, stream and enjoy exclusive music experiences.',
                    href: '/auth/signup?role=consumer',
                  },
                  {
                    icon: '👑',
                    title: 'Music Label/Artist',
                    description: 'Manage your music, artists and releases. Grow your audience.',
                    href: '/auth/signup?role=label',
                  },
                  {
                    icon: '✨',
                    title: 'AI Artist Partner',
                    description: 'Collaborate with Ghaafeedi\'s AI ecosystem and shape the future of music.',
                    href: '/auth/signup?role=partner',
                  },
                ].map((role, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Link href={role.href}>
                      <LuxuryCard variant="elevated">
                        <div className="text-6xl mb-4 text-center">{role.icon}</div>
                        <h3 className="text-2xl font-bold text-luxury-pearl text-center mb-3">
                          {role.title}
                        </h3>
                        <p className="text-luxury-gray-light text-center mb-6">
                          {role.description}
                        </p>
                        <div className="flex justify-center">
                          <LuxuryButton variant="primary" size="sm">
                            Get Started
                          </LuxuryButton>
                        </div>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Stats Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={staggerItem}>
                  <div className="text-5xl font-bold text-luxury-gold mb-2">14</div>
                  <p className="text-luxury-gray-light">Premium Products</p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <div className="text-5xl font-bold text-luxury-gold mb-2">4.8</div>
                  <p className="text-luxury-gray-light">Average Rating</p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <div className="text-5xl font-bold text-luxury-gold mb-2">10K+</div>
                  <p className="text-luxury-gray-light">Happy Customers</p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <div className="text-5xl font-bold text-luxury-gold mb-2">24/7</div>
                  <p className="text-luxury-gray-light">Support Available</p>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
