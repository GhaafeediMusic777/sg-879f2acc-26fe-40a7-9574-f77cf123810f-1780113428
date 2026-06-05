'use client'

import { useState, useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PageTransition } from '@/components/PageTransition'
import { ScrollReveal } from '@/components/ScrollReveal'
import { staggerContainer, staggerItem, luxuryFadeInUp } from '@/utils/motionDesign'
import {
  getAllProducts,
  getProductsByCategory,
  getAllCategories,
  formatPrice,
} from '@/config/products-14-v2'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'price-low' | 'price-high'>(
    'popular'
  )

  const categories = getAllCategories()
  const allProducts = getAllProducts()

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let products = selectedCategory
      ? getProductsByCategory(selectedCategory)
      : allProducts

    switch (sortBy) {
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating)
      case 'price-low':
        return products.sort((a, b) => a.price - b.price)
      case 'price-high':
        return products.sort((a, b) => b.price - a.price)
      default:
        return products
    }
  }, [selectedCategory, sortBy])

  return (
    <>
      <Head>
        <title>All Products - Ghaafeedi Music</title>
        <meta
          name="description"
          content="Explore all 14 premium products from Ghaafeedi Music. Transform your emotional stories into cinematic masterpieces."
        />
      </Head>

      <PageTransition>
        <div className="min-h-screen bg-luxury-dark">
          <LuxuryHeader />

          {/* Hero Section */}
          <motion.section
            className="relative z-10 px-4 py-20 pt-32"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-6xl mx-auto">
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-4 text-center"
                variants={staggerItem}
              >
                All Products
              </motion.h1>

              <motion.p
                className="text-xl text-luxury-gray-light text-center mb-12"
                variants={staggerItem}
              >
                Transform your emotional stories into cinematic masterpieces
              </motion.p>
            </div>
          </motion.section>

          {/* Filters Section */}
          <ScrollReveal className="relative z-10 px-4 py-12">
            <div className="max-w-6xl mx-auto">
              {/* Category Filter */}
              <motion.div
                className="mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-luxury-gold mb-4 font-semibold">Categories</p>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    variants={staggerItem}
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === null
                        ? 'bg-luxury-gold text-luxury-dark'
                        : 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 text-luxury-gold hover:border-opacity-50'
                    }`}
                  >
                    All Products
                  </motion.button>
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      variants={staggerItem}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-luxury-gold text-luxury-dark'
                          : 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 text-luxury-gold hover:border-opacity-50'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Sort Filter */}
              <motion.div
                className="mb-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-luxury-gold mb-4 font-semibold">Sort By</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'popular', label: 'Popular' },
                    { value: 'rating', label: 'Rating' },
                    { value: 'price-low', label: 'Price: Low to High' },
                    { value: 'price-high', label: 'Price: High to Low' },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      variants={staggerItem}
                      onClick={() => setSortBy(option.value as any)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        sortBy === option.value
                          ? 'bg-luxury-gold text-luxury-dark'
                          : 'bg-luxury-dark-secondary border border-luxury-gold border-opacity-30 text-luxury-gold hover:border-opacity-50'
                      }`}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <ScrollReveal className="relative z-10 px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {filteredProducts.map((product) => (
                  <motion.div key={product.id} variants={staggerItem}>
                    <Link href={`/products/${product.id}`}>
                      <div className="group relative rounded-2xl overflow-hidden bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:shadow-luxury-lg cursor-pointer h-full flex flex-col">
                        {/* Product Image - NO EMOJI FALLBACK */}
                        <div className="relative w-full h-56 overflow-hidden bg-luxury-dark">
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

              {filteredProducts.length === 0 && (
                <motion.div
                  className="text-center py-12"
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-luxury-gray-light text-lg">No products found in this category.</p>
                </motion.div>
              )}
            </div>
          </ScrollReveal>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
