import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { PRODUCTS, COLLECTIONS } from '@/data/products'

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'cinema'>('grid')
  const [activeCollection, setActiveCollection] = useState<string>('storytelling')

  const signatureProduct = PRODUCTS.find((p) => p.id === 'signature-masterpiece')
  const currentCollection = COLLECTIONS[activeCollection as keyof typeof COLLECTIONS]
  const collectionProducts = PRODUCTS.filter((p) =>
    currentCollection.products.includes(p.id)
  )

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Layered Cinematic Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #0a0e27 0%, #05070f 50%, #000000 100%)`,
          zIndex: 0,
        }}
      />

      {/* Atmospheric Glows */}
      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
          zIndex: 1,
        }}
      />

      {/* Brand Watermark */}
      <motion.div
        className="fixed inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 2 }}
      >
        <div
          className="text-center"
          style={{
            fontSize: 'clamp(120px, 35vw, 500px)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'rgba(212, 175, 55, 0.06)',
            textShadow: '0 0 100px rgba(212, 175, 55, 0.15)',
            filter: 'blur(3px)',
            whiteSpace: 'nowrap',
            fontFamily: 'Georgia, serif',
            textTransform: 'uppercase',
          }}
        >
          GHAAFEEDI MUSIC
        </div>
      </motion.div>

      <div className="relative z-10">
        <LuxuryHeader />

        {/* Hero Section */}
        <motion.section
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-luxury-gold via-luxury-pearl to-luxury-gold bg-clip-text text-transparent">
                  All 14 Premium Products
                </h1>
                <p className="text-xl text-luxury-gray-light mb-8 max-w-2xl">
                  Explore our complete collection of cinematic experiences
                </p>
              </div>

              {/* View Toggle */}
              <motion.div
                className="flex gap-4 p-2 rounded-full"
                style={{
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-luxury-gold text-luxury-dark'
                      : 'text-luxury-gray-light hover:text-luxury-pearl'
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setViewMode('cinema')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    viewMode === 'cinema'
                      ? 'bg-luxury-gold text-luxury-dark'
                      : 'text-luxury-gray-light hover:text-luxury-pearl'
                  }`}
                >
                  Cinema View
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Signature Product Spotlight */}
        {signatureProduct && (
          <motion.section
            className="relative px-4 sm:px-6 lg:px-8 pb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: signatureProduct.accentColor }}
                >
                  The Crown Jewel Experience
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-luxury-pearl">
                  {signatureProduct.name}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-transparent" />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="relative rounded-3xl overflow-hidden h-96 lg:h-[600px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div
                    className="absolute -inset-8 rounded-3xl pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 50%, ${signatureProduct.accentColor}40 0%, transparent 70%)`,
                      filter: 'blur(60px)',
                      zIndex: -1,
                    }}
                  />

                  <img
                    src={signatureProduct.image}
                    alt={signatureProduct.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />

                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-xl text-luxury-gray-light mb-8 leading-relaxed">
                    {signatureProduct.outcomeDescription}
                  </p>

                  <div className="mb-8 pb-8 border-b border-opacity-20" style={{ borderColor: signatureProduct.accentColor }}>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span
                        className="text-5xl font-bold"
                        style={{ color: signatureProduct.accentColor }}
                      >
                        {signatureProduct.price}
                      </span>
                      <span className="text-lg text-luxury-gray-light">
                        {signatureProduct.rating} / 5
                      </span>
                    </div>
                  </div>

                  <Link href={`/products/${signatureProduct.id}`}>
                    <button
                      className="px-8 py-4 rounded-full font-semibold transition-all duration-300"
                      style={{
                        background: signatureProduct.accentColor,
                        color: '#000',
                      }}
                    >
                      Explore Signature Masterpiece
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        </div>

        {/* Collection Selector */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(COLLECTIONS).map(([key, collection]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveCollection(key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCollection === key
                      ? 'bg-luxury-gold text-luxury-dark'
                      : 'text-luxury-gray-light hover:text-luxury-pearl'
                  }`}
                  style={
                    activeCollection !== key
                      ? {
                          background: 'rgba(212, 175, 55, 0.1)',
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                        }
                      : {}
                  }
                >
                  {collection.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Products Display */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 pb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-luxury-pearl">
                {currentCollection.name}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-transparent mb-4" />
              <p className="text-lg text-luxury-gray-light max-w-2xl">
                {currentCollection.description}
              </p>
            </motion.div>

            {/* Grid View */}
            {viewMode === 'grid' && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {collectionProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href={`/products/${product.id}`}>
                      <motion.div
                        className="group relative rounded-2xl overflow-hidden h-[500px] cursor-pointer"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="absolute -inset-8 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(ellipse at 50% 50%, ${product.accentColor}40 0%, transparent 70%)`,
                            filter: 'blur(40px)',
                            zIndex: -1,
                          }}
                        />

                        <div
                          className="relative h-full rounded-2xl overflow-hidden border border-opacity-30 transition-all duration-300 group-hover:border-opacity-60"
                          style={{
                            background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)`,
                            borderColor: product.accentColor,
                            backdropFilter: 'blur(20px)',
                          }}
                        >
                          {/* Image Section */}
                          <div className="relative h-[55%] overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            <div
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)`,
                              }}
                            />

                            <div
                              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                              style={{
                                background: `${product.accentColor}30`,
                                color: product.accentColor,
                              }}
                            >
                              {product.badgeText}
                            </div>

                            <div
                              className="absolute top-4 left-4 text-sm font-bold px-2 py-1 rounded-full"
                              style={{
                                background: `${product.accentColor}30`,
                                color: product.accentColor,
                              }}
                            >
                              {product.rating}
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="relative h-[45%] p-5 sm:p-6 flex flex-col justify-between">
                            <div className="mb-4">
                              <h3 className="text-lg sm:text-xl font-bold text-luxury-pearl mb-1 line-clamp-2">
                                {product.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-luxury-gray-light line-clamp-1">
                                {product.tagline}
                              </p>
                            </div>

                            <div className="mb-4 space-y-2 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="text-luxury-gray-light">Genre:</span>
                                <span className="text-luxury-pearl font-semibold">{product.genre}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-luxury-gray-light">Delivery:</span>
                                <span className="text-luxury-pearl font-semibold">{product.deliveryTime}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-luxury-gray-light">Level:</span>
                                <span
                                  className="font-semibold px-2 py-0.5 rounded text-xs"
                                  style={{
                                    background: `${product.accentColor}20`,
                                    color: product.accentColor,
                                  }}
                                >
                                  {product.experienceLevel}
                                </span>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-opacity-20" style={{ borderColor: product.accentColor }}>
                              <span
                                className="text-lg sm:text-xl font-bold"
                                style={{ color: product.accentColor }}
                              >
                                {product.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Cinema View */}
            {viewMode === 'cinema' && (
              <motion.div
                className="flex gap-6 overflow-x-auto pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {collectionProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="flex-shrink-0 w-full sm:w-96 lg:w-[500px]"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href={`/products/${product.id}`}>
                      <motion.div
                        className="group relative rounded-3xl overflow-hidden cursor-pointer h-96 sm:h-[500px]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)`,
                          }}
                        />

                        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                          <div>
                            <span
                              className="inline-block px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                              style={{
                                background: `${product.accentColor}30`,
                                color: product.accentColor,
                              }}
                            >
                              {product.badgeText}
                            </span>
                          </div>

                          <div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-luxury-pearl mb-3">
                              {product.name}
                            </h3>
                            <p className="text-lg text-luxury-gray-light mb-6 max-w-2xl">
                              {product.outcomeDescription}
                            </p>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-luxury-gray-light mb-1">Starting at</p>
                                <p
                                  className="text-3xl font-bold"
                                  style={{ color: product.accentColor }}
                                >
                                  {product.price}
                                </p>
                              </div>
                              <div
                                className="px-6 py-3 rounded-full font-semibold"
                                style={{
                                  background: `${product.accentColor}30`,
                                  color: product.accentColor,
                                  border: `2px solid ${product.accentColor}`,
                                }}
                              >
                                Explore
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
