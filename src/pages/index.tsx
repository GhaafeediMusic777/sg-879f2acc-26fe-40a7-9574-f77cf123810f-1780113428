'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CinematicBackground } from '@/components/CinematicBackground'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'
import { getAllProducts, formatPrice } from '@/config/products-14-v2'

export default function HomePage() {
  const products = getAllProducts().slice(0, 6)

  return (
    <>
      <Head>
        <title>Ghaafeedi Music - Transform Your Story into Cinematic Masterpieces</title>
        <meta
          name="description"
          content="Create cinematic music, films, and legacy projects powered by AI. Transform your emotional stories into professional masterpieces."
        />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark relative overflow-hidden">
          <CinematicBackground />
          <LuxuryHeader />

          {/* Hero Section */}
          <motion.section
            className="relative z-10 px-4 py-20 pt-32"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                variants={staggerItem}
              >
                <span className="bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
                  Transform Your Story
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-luxury-gray-light mb-12 max-w-3xl mx-auto"
                variants={staggerItem}
              >
                Create cinematic music, films, and legacy projects powered by AI. Your emotional stories deserve to be masterpieces.
              </motion.p>

              <motion.div className="flex gap-4 justify-center" variants={staggerItem}>
                <LuxuryButton variant="primary" size="lg">
                  Get Started
                </LuxuryButton>
                <LuxuryButton variant="secondary" size="lg">
                  Watch Demo
                </LuxuryButton>
              </motion.div>
            </div>
          </motion.section>

          {/* Featured Products Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-4"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Our Products
              </motion.h2>

              <motion.p
                className="text-center text-luxury-gray-light mb-16"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Choose the perfect product for your creative vision
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {products.map((product) => (
                  <motion.div key={product.id} variants={staggerItem}>
                    <Link href={`/products/${product.id}`}>
                      <div className="group relative rounded-2xl overflow-hidden bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-luxury-lg cursor-pointer h-full flex flex-col">
                        {/* Product Image - NO EMOJI FALLBACK */}
                        <div className="relative w-full h-48 overflow-hidden bg-luxury-dark">
                          <img
                            src={product.image || '/products/placeholder.jpg'}
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
                          <h3 className="text-2xl font-bold text-luxury-pearl mb-2 group-hover:text-luxury-gold transition-colors">
                            {product.name}
                          </h3>

                          <p className="text-luxury-gray-light text-sm mb-4 flex-1">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {product.features.slice(0, 3).map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm text-luxury-gray-light">
                                <span className="text-luxury-gold font-bold">•</span>
                                {feature}
                              </div>
                            ))}
                          </div>

                          {/* Price and Rating */}
                          <div className="flex justify-between items-center pt-4 border-t border-luxury-gold border-opacity-20 mb-4">
                            <span className="text-xl font-bold text-luxury-gold">
                              {formatPrice(product)}
                            </span>
                            <span className="text-sm text-luxury-gray-light">
                              {product.rating} / 5
                            </span>
                          </div>

                          {/* CTA */}
                          <LuxuryButton variant="primary" size="sm">
                            Learn More
                          </LuxuryButton>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Products Button */}
              <motion.div
                className="text-center mt-12"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href="/products-complete-v2">
                  <LuxuryButton variant="secondary" size="lg">
                    View All 14 Products
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
