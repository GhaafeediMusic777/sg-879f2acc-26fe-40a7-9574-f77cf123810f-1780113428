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

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<'consumer' | 'label' | 'partner' | null>(null)

  return (
    <>
      <Head>
        <title>Ghaafeedi Music - Premium AI Music Platform</title>
        <meta
          name="description"
          content="Experience premium AI music creation with cinematic animations, emotional storytelling, and luxury design."
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
                  <Link href="/products-v2">
                    <LuxuryButton variant="secondary" size="lg">
                      Explore Products
                    </LuxuryButton>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex justify-center gap-8 text-sm text-luxury-gray-light"
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
                    description: 'Create voiceovers in your own voice with advanced AI',
                  },
                  {
                    icon: '🎬',
                    title: 'Music Videos',
                    description: 'Generate stunning 4K music videos with cinematic visuals',
                  },
                  {
                    icon: '📻',
                    title: 'Podcast Producer',
                    description: 'Generate, edit, and distribute podcast episodes automatically',
                  },
                ].map((feature, i) => (
                  <motion.div key={i} variants={staggerItem}>
                    <LuxuryCard variant="glass">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-luxury-pearl mb-3">{feature.title}</h3>
                      <p className="text-luxury-gray-light">{feature.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    name: 'AI Voice Clone',
                    price: '$29.99',
                    description: 'Create unlimited voiceovers in your own voice',
                    color: 'rgba(255, 215, 0, 1)',
                  },
                  {
                    name: 'AI Music Producer',
                    price: '$39.99',
                    description: 'Generate unlimited original music in any genre',
                    color: 'rgba(147, 112, 219, 1)',
                  },
                  {
                    name: 'AI Music Video',
                    price: '$49.99',
                    description: 'Create stunning 4K music videos with cinematic visuals',
                    color: 'rgba(255, 107, 107, 1)',
                  },
                  {
                    name: 'AI Podcast Producer',
                    price: '$34.99',
                    description: 'Generate, edit, and distribute podcast episodes',
                    color: 'rgba(0, 255, 200, 1)',
                  },
                ].map((product, i) => (
                  <motion.div key={i} variants={staggerItem}>
                    <LuxuryCard variant="elevated">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-luxury-pearl">{product.name}</h3>
                        <span
                          className="text-xl font-bold text-luxury-gold"
                        >
                          {product.price}
                        </span>
                      </div>
                      <p className="text-luxury-gray-light mb-6">{product.description}</p>
                      <Link href="/products-v2">
                        <LuxuryButton variant="primary" size="sm">
                          Learn More
                        </LuxuryButton>
                      </Link>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="text-center"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href="/products-v2">
                  <LuxuryButton variant="secondary" size="lg">
                    View All Products
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* AI Artists Section */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                AI Artist Marketplace
              </motion.h2>

              <motion.p
                className="text-lg text-luxury-gray-light text-center mb-12 max-w-2xl mx-auto"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Discover 6 unique AI artists, each with their own immersive world and creative style. Collaborate, create, and share.
              </motion.p>

              <motion.div
                className="text-center"
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href="/marketplace/ai-artists-v2">
                  <LuxuryButton variant="primary" size="lg">
                    Explore Artists
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Role Selection */}
          <ScrollReveal className="relative z-10 px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.h2
                className="text-5xl font-bold text-luxury-pearl text-center mb-16"
                variants={luxuryFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Choose Your Role
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
                    description: 'Discover, stream and enjoy exclusive music experiences',
                    path: '/auth/signup?role=consumer',
                  },
                  {
                    icon: '👑',
                    title: 'Music Label',
                    description: 'Manage your music, artists and releases. Grow your audience.',
                    path: '/auth/signup?role=label',
                  },
                  {
                    icon: '✨',
                    title: 'AI Partner',
                    description: 'Collaborate with Ghaafeedi and shape the future of music',
                    path: '/auth/signup?role=partner',
                  },
                ].map((role, i) => (
                  <Link key={i} href={role.path}>
                    <motion.div variants={staggerItem}>
                      <LuxuryCard variant="glass">
                        <div className="text-6xl mb-4 text-center">{role.icon}</div>
                        <h3 className="text-2xl font-bold text-luxury-pearl text-center mb-3">
                          {role.title}
                        </h3>
                        <p className="text-luxury-gray-light text-center mb-6">{role.description}</p>
                        <div className="text-center">
                          <LuxuryButton variant="primary" size="sm">
                            Get Started
                          </LuxuryButton>
                        </div>
                      </LuxuryCard>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* CTA Section */}
          <motion.section
            className="relative z-10 px-4 py-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="max-w-4xl mx-auto rounded-2xl p-12 text-center border border-luxury-gold border-opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(147, 112, 219, 0.1))',
              }}
            >
              <motion.h2
                className="text-4xl font-bold text-luxury-pearl mb-4"
                variants={staggerItem}
              >
                Ready to Create?
              </motion.h2>

              <motion.p
                className="text-lg text-luxury-gray-light mb-8"
                variants={staggerItem}
              >
                Join thousands of creators using Ghaafeedi Music to bring their musical vision to life.
              </motion.p>

              <motion.div variants={staggerItem}>
                <Link href="/auth/signup">
                  <LuxuryButton variant="primary" size="lg">
                    Start Your Journey
                  </LuxuryButton>
                </Link>
              </motion.div>
            </div>
          </motion.section>

          <LuxuryFooter />
        </div>
      </PageTransition>
    </>
  )
}
