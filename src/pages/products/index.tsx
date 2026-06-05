import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { CinematicProductCard, FeaturedCinematicCard } from '@/components/CinematicProductCard'
import { CinemaGallery } from '@/components/CinemaGallery'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PRODUCTS, COLLECTIONS } from '@/data/products'
import Link from 'next/link'

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'cinema'>('grid')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Get signature masterpiece product
  const signatureProduct = PRODUCTS.find((p) => p.id === 'signature-masterpiece')

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

      <div
        className="fixed bottom-0 left-0 right-0 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 150%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      />

      {/* Brand Watermark */}
      <motion.div
        className="fixed inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 2 }}
        initial={{ y: 0 }}
        animate={{ y: -30 }}
        transition={{ duration: 0.5 }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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

              {/* Spotlight Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden h-96 lg:h-[600px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Glow */}
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

                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 60px ${signatureProduct.accentColor}30, 0 0 60px ${signatureProduct.accentColor}20`,
                    }}
                  />
                </motion.div>

                {/* Content */}
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
                        {signatureProduct.rating} / 5 rating
                      </span>
                    </div>
                    <p className="text-luxury-gray-light">
                      {signatureProduct.productionTimeline} production time
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-luxury-pearl mb-4">Premium Features</h3>
                    <ul className="space-y-3">
                      {signatureProduct.premiumFeatures.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-luxury-gray-light">
                          <span className="mr-3 mt-1" style={{ color: signatureProduct.accentColor }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/products/${signatureProduct.id}`}>
                    <LuxuryButton variant="primary" size="lg">
                      Explore Signature Masterpiece
                    </LuxuryButton>
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

        {/* Products View */}
        {viewMode === 'cinema' ? (
          // Cinema View - Horizontal Galleries
          <>
            {Object.entries(COLLECTIONS).map(([key, collection]) => {
              const collectionProducts = PRODUCTS.filter((p) =>
                collection.products.includes(p.id)
              )

              return (
                <motion.div
                  key={key}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: collection.backgroundGradient,
                  }}
                >
                  <CinemaGallery
                    products={collectionProducts}
                    title={collection.name}
                    description={collection.description}
                  />

                  {/* Collection Divider */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
                  </div>
                </motion.div>
              )
            })}
          </>
        ) : (
          // Grid View - Collections with Alternating Layouts
          <>
            {Object.entries(COLLECTIONS).map(([key, collection], collectionIdx) => {
              const collectionProducts = PRODUCTS.filter((p) =>
                collection.products.includes(p.id)
              )

              return (
                <motion.section
                  key={key}
                  className="relative px-4 sm:px-6 lg:px-8 pb-24"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{
                    background: collection.backgroundGradient,
                  }}
                >
                  <div className="max-w-7xl mx-auto">
                    {/* Collection Header */}
                    <motion.div
                      className="mb-16"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-luxury-pearl">
                        {collection.name}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-luxury-gold to-transparent mb-4" />
                      <p className="text-lg text-luxury-gray-light max-w-2xl">
                        {collection.description}
                      </p>
                    </motion.div>

                    {/* Products Grid */}
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {collectionProducts.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                          <CinematicProductCard
                            id={product.id}
                            name={product.name}
                            tagline={product.tagline}
                            price={product.price}
                            rating={product.rating}
                            image={product.image}
                            accentColor={product.accentColor}
                            badgeStyle={product.badgeStyle}
                            badgeText={product.badgeText}
                            outcomeDescription={product.outcomeDescription}
                            genre={product.genre}
                            deliveryTime={product.deliveryTime}
                            experienceLevel={product.experienceLevel}
                            format={product.format}
                            deliverables={product.deliverables}
                            featured={false}
                          />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Alternating Feature Section (every collection) */}
                    {collectionProducts.length > 0 && (
                      <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        {/* Image on left for even, right for odd */}
                        {collectionIdx % 2 === 0 ? (
                          <>
                            <motion.div
                              className="relative rounded-3xl overflow-hidden h-80 lg:h-[500px]"
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                            >
                              <div
                                className="absolute -inset-8 rounded-3xl pointer-events-none"
                                style={{
                                  background: `radial-gradient(ellipse at 50% 50%, ${collectionProducts[0].accentColor}40 0%, transparent 70%)`,
                                  filter: 'blur(40px)',
                                  zIndex: -1,
                                }}
                              />
                              <img
                                src={collectionProducts[0].image}
                                alt={collectionProducts[0].name}
                                className="w-full h-full object-cover rounded-3xl"
                              />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            >
                              <h3 className="text-3xl font-bold text-luxury-pearl mb-4">
                                {collectionProducts[0].name}
                              </h3>
                              <p className="text-lg text-luxury-gray-light mb-6 leading-relaxed">
                                {collectionProducts[0].outcomeDescription}
                              </p>
                              <Link href={`/products/${collectionProducts[0].id}`}>
                                <LuxuryButton variant="primary">
                                  Explore Experience
                                </LuxuryButton>
                              </Link>
                            </motion.div>
                          </>
                        ) : (
                          <>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            >
                              <h3 className="text-3xl font-bold text-luxury-pearl mb-4">
                                {collectionProducts[0].name}
                              </h3>
                              <p className="text-lg text-luxury-gray-light mb-6 leading-relaxed">
                                {collectionProducts[0].outcomeDescription}
                              </p>
                              <Link href={`/products/${collectionProducts[0].id}`}>
                                <LuxuryButton variant="primary">
                                  Explore Experience
                                </LuxuryButton>
                              </Link>
                            </motion.div>
                            <motion.div
                              className="relative rounded-3xl overflow-hidden h-80 lg:h-[500px]"
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                            >
                              <div
                                className="absolute -inset-8 rounded-3xl pointer-events-none"
                                style={{
                                  background: `radial-gradient(ellipse at 50% 50%, ${collectionProducts[0].accentColor}40 0%, transparent 70%)`,
                                  filter: 'blur(40px)',
                                  zIndex: -1,
                                }}
                              />
                              <img
                                src={collectionProducts[0].image}
                                alt={collectionProducts[0].name}
                                className="w-full h-full object-cover rounded-3xl"
                              />
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Collection Divider */}
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
                  </div>
                </motion.section>
              )
            })}
          </>
        )}

        {/* CTA Section */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto relative">
            <div
              className="absolute -inset-12 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1,
              }}
            />

            <div
              className="rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)`,
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-6 text-luxury-pearl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Begin Your Journey?
              </motion.h2>
              <motion.p
                className="text-xl text-luxury-gray-light mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Choose your legacy path and start creating your cinematic masterpiece today
              </motion.p>
            </div>
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
// Build trigger Fri Jun  5 07:37:59 UTC 2026
