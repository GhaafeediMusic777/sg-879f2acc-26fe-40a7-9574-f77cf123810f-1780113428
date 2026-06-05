import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { PRODUCTS, COLLECTIONS } from '@/data/products'

export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query

  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-dark text-luxury-pearl flex items-center justify-center">
        <p>Product not found</p>
      </div>
    )
  }

  const collection = Object.values(COLLECTIONS).find((c) =>
    c.products.includes(product.id)
  )

  const relatedProducts = PRODUCTS.filter(
    (p) => p.collection === product.collection && p.id !== product.id
  ).slice(0, 3)

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-pearl overflow-hidden">
      {/* Layered Background */}
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
        initial={{ y: 0 }}
        animate={{ y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="text-center"
          style={{
            fontSize: 'clamp(80px, 25vw, 400px)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'rgba(212, 175, 55, 0.04)',
            textShadow: '0 0 100px rgba(212, 175, 55, 0.1)',
            filter: 'blur(3px)',
            whiteSpace: 'nowrap',
            fontFamily: 'Georgia, serif',
          }}
        >
          {product.name}
        </div>
      </motion.div>

      <div className="relative z-10">
        <LuxuryHeader />

        {/* Hero Section */}
        <motion.section
          className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[600px] order-2 lg:order-1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Glow */}
                <div
                  className="absolute -inset-8 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, ${product.accentColor}30 0%, transparent 70%)`,
                    filter: 'blur(40px)',
                    zIndex: -1,
                  }}
                />

                <img
                  src={product.image}
                  alt={product.name}
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
                    boxShadow: `inset 0 0 60px ${product.accentColor}30, 0 0 60px ${product.accentColor}20`,
                  }}
                />
              </motion.div>

              {/* Hero Content */}
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-6">
                  <span
                    className="text-sm font-bold tracking-widest uppercase"
                    style={{ color: product.accentColor }}
                  >
                    {collection?.name}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-luxury-pearl">
                  {product.name}
                </h1>

                <p className="text-xl text-luxury-gray-light mb-8">
                  {product.tagline}
                </p>

                <div className="mb-8 pb-8 border-b border-opacity-20" style={{ borderColor: product.accentColor }}>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-5xl font-bold" style={{ color: product.accentColor }}>
                      {product.price}
                    </span>
                    <span className="text-lg text-luxury-gray-light">
                      {product.rating} / 5 rating
                    </span>
                  </div>
                  <p className="text-luxury-gray-light">
                    {product.productionTimeline} production time
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-luxury-pearl mb-4">What You'll Receive</h3>
                  <ul className="space-y-2">
                    {product.deliverables.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start text-luxury-gray-light">
                        <span className="mr-3 mt-1" style={{ color: product.accentColor }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/signup">
                    <LuxuryButton variant="primary" size="lg">
                      Get Started
                    </LuxuryButton>
                  </Link>
                  <Link href="/products">
                    <LuxuryButton variant="secondary" size="lg">
                      View All Products
                    </LuxuryButton>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* What This Experience Is */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What This Experience Is
            </motion.h2>
            <motion.p
              className="text-xl text-luxury-gray-light leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {product.whatThisExperienceIs}
            </motion.p>
          </div>
        </motion.section>

        {/* Who It Is For */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Who It Is For
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.whoItIsFor.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    background: `${product.accentColor}10`,
                    borderLeft: `3px solid ${product.accentColor}`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <span style={{ color: product.accentColor }} className="text-xl mt-1">✓</span>
                  <span className="text-luxury-gray-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        </div>

        {/* What We Create */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What We Create
            </motion.h2>
            <motion.p
              className="text-xl text-luxury-gray-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {product.whatWeCreate}
            </motion.p>
          </div>
        </motion.section>

        {/* Deliverables */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What You'll Receive
            </motion.h2>
            <div className="space-y-4">
              {product.deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    background: `${product.accentColor}10`,
                    borderLeft: `3px solid ${product.accentColor}`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                >
                  <span style={{ color: product.accentColor }} className="text-xl mt-1">✓</span>
                  <span className="text-luxury-gray-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Premium Features */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Premium Features
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.premiumFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg"
                  style={{
                    background: `${product.accentColor}10`,
                    borderLeft: `3px solid ${product.accentColor}`,
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <span style={{ color: product.accentColor }} className="text-xl mt-1">✓</span>
                  <span className="text-luxury-gray-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Emotional Outcome */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Emotional Outcome
            </motion.h2>
            <motion.p
              className="text-xl text-luxury-gray-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {product.emotionalOutcome}
            </motion.p>
          </div>
        </motion.section>

        {/* Pricing Explanation */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why This Investment
            </motion.h2>
            <motion.p
              className="text-xl text-luxury-gray-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {product.pricingExplanation}
            </motion.p>
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section
          className="relative py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-12 text-luxury-pearl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              {product.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 rounded-lg"
                  style={{
                    background: `${product.accentColor}10`,
                    borderLeft: `3px solid ${product.accentColor}`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-luxury-pearl mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-luxury-gray-light leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            className="relative py-24 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-12 text-luxury-pearl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Explore Related Products
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Link href={`/products/${relatedProduct.id}`}>
                      <div className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)`,
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-bold text-luxury-pearl mb-1">
                            {relatedProduct.name}
                          </h3>
                          <p className="text-sm text-luxury-gold">
                            {relatedProduct.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Final CTA */}
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
                background: `radial-gradient(ellipse at 50% 50%, ${product.accentColor}20 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1,
              }}
            />

            <div
              className="rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${product.accentColor}15 0%, ${product.accentColor}08 100%)`,
                backdropFilter: 'blur(40px)',
                border: `1px solid ${product.accentColor}30`,
              }}
            >
              <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-6 text-luxury-pearl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Ready to Create?
              </motion.h2>
              <motion.p
                className="text-xl text-luxury-gray-light mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Start your {product.name} experience today
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link href="/auth/signup">
                  <LuxuryButton variant="primary" size="lg">
                    Get Started Now
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <LuxuryFooter />
      </div>
    </div>
  )
}
