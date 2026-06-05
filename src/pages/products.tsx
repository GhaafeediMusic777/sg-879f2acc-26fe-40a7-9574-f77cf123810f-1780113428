import React from 'react'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { CinematicProductCard } from '@/components/CinematicProductCard'
import { PRODUCTS, COLLECTIONS } from '@/data/products'

export default function ProductsPage() {
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

        {/* Collections */}
        {Object.entries(COLLECTIONS).map(([key, collection]) => {
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
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {collectionProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                    >
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
                        deliverables={product.deliverables}
                        featured={false}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Collection Divider */}
              <div className="max-w-7xl mx-auto mt-24">
                <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold via-50% to-transparent" />
              </div>
            </motion.section>
          )
        })}

        {/* CTA Section */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Atmospheric Glow */}
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
