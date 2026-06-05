'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CinematicBackground } from '@/components/CinematicBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
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

          {/* Products Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Our Products
              </motion.h2>

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
                      <div className="group relative rounded-2xl overflow-hidden bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-luxury-lg cursor-pointer h-full flex flex-col">
                        {/* Product Image */}
                        {product.image ? (
                          <div className="relative w-full h-48 overflow-hidden bg-luxury-dark">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              priority={false}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                        ) : (
                          <div className="w-full h-48 bg-gradient-to-br from-luxury-gold to-luxury-dark flex items-center justify-center">
                            <span className="text-6xl">{product.icon}</span>
                          </div>
                        )}

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
                        <div className="flex-1 p-4 flex flex-col">
                          <h3 className="text-lg font-bold text-luxury-pearl mb-2 group-hover:text-luxury-gold transition-colors">
                            {product.name}
                          </h3>

                          <p className="text-luxury-gray-light text-sm mb-4 flex-1">
                            {product.description}
                          </p>

                          <div className="flex justify-between items-center pt-4 border-t border-luxury-gold border-opacity-20">
                            <span className="text-lg font-bold text-luxury-gold">
                              ${product.price}{product.period ? `/${product.period}` : ''}
                            </span>
                            <span className="text-sm text-luxury-gray-light">
                              {product.rating} / 5
                            </span>
                          </div>
                        </div>
                      </div>
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
                    title: 'Cinematic Design',
                    description: 'Luxury animations and visual effects at every touchpoint',
                  },
                  {
                    title: 'AI Music Creation',
                    description: 'Generate unlimited original music in any genre or style',
                  },
                  {
                    title: 'Artist Worlds',
                    description: 'Explore 6 unique AI artist universes with immersive experiences',
                  },
                  {
                    title: 'Voice Cloning',
                    description: 'Hear your story narrated in your own voice',
                  },
                  {
                    title: 'Video Creation',
                    description: 'Professional cinematic videos with AI-generated soundtracks',
                  },
                  {
                    title: 'Enterprise Security',
                    description: 'SSL encrypted, PCI compliant, and fully secure',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="p-8 rounded-2xl bg-luxury-dark-secondary bg-opacity-40 backdrop-blur-xl border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-luxury-pearl mb-4">{feature.title}</h3>
                    <p className="text-luxury-gray-light">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Role Selection Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-4xl mx-auto">
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
                    role: 'consumer',
                    title: 'Consumer',
                    description: 'Create personal music and stories',
                    cta: 'Get Started',
                  },
                  {
                    role: 'label',
                    title: 'Independent Label',
                    description: 'Manage artists and distribute music',
                    cta: 'Join Label Program',
                  },
                  {
                    role: 'partner',
                    title: 'Partner',
                    description: 'Integrate with your platform',
                    cta: 'Become a Partner',
                  },
                ].map((item) => (
                  <motion.div
                    key={item.role}
                    variants={staggerItem}
                    className="p-8 rounded-2xl bg-luxury-dark-secondary bg-opacity-40 backdrop-blur-xl border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 text-center"
                  >
                    <h3 className="text-2xl font-bold text-luxury-pearl mb-4">{item.title}</h3>
                    <p className="text-luxury-gray-light mb-8">{item.description}</p>
                    <Link href="/auth/signup">
                      <LuxuryButton variant="primary" size="sm">
                        {item.cta}
                      </LuxuryButton>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
