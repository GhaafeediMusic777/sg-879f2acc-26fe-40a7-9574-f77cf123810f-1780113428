import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function AIVoiceClonePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState('starter')

  const product = {
    title: 'AI Voice Clone',
    subtitle: 'Create a digital clone of your voice in seconds',
    description: 'Transform your voice into a powerful creative tool. Clone your voice in multiple languages, create voiceovers, narration, and more—all with studio-quality output.',
    image: '🎙️',
  }

  const features = [
    {
      title: 'Instant Voice Cloning',
      description: 'Clone your voice in seconds with just a few audio samples',
    },
    {
      title: 'Multi-Language Support',
      description: 'Speak in 50+ languages while maintaining your voice characteristics',
    },
    {
      title: 'Studio Quality',
      description: 'Professional-grade audio output suitable for commercial use',
    },
    {
      title: 'Unlimited Exports',
      description: 'Export as many voice clones as you need with no limits',
    },
    {
      title: 'Commercial License',
      description: 'Use your voice clones for commercial projects and monetization',
    },
    {
      title: 'Privacy Protected',
      description: 'Your voice data is encrypted and never shared with third parties',
    },
  ]

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for trying out voice cloning',
      features: [
        '5 voice clones',
        '10 minutes of audio per clone',
        'English only',
        'Standard quality',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$29.99',
      period: '/month',
      description: 'For serious creators and professionals',
      features: [
        'Unlimited voice clones',
        '60 minutes of audio per clone',
        '50+ languages',
        'Studio quality',
        'Priority support',
        'Commercial license',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'API access',
        'Custom training',
        'Dedicated support',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
    },
  ]

  const useCases = [
    {
      title: 'Content Creators',
      description: 'Create voiceovers and narration for videos without hiring voice actors',
    },
    {
      title: 'Podcasters',
      description: 'Generate intro/outro voiceovers and background narration',
    },
    {
      title: 'Authors',
      description: 'Turn your audiobooks into multiple language versions instantly',
    },
    {
      title: 'Musicians',
      description: 'Create vocal tracks and harmonies for your music production',
    },
    {
      title: 'Businesses',
      description: 'Generate professional voice for IVR systems and customer service',
    },
    {
      title: 'Accessibility',
      description: 'Help people with speech disabilities communicate in their own voice',
    },
  ]

  const handleGetStarted = () => {
    if (user) {
      router.push('/onboarding/consumer')
    } else {
      router.push('/auth/signup')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-4">
            {product.title}
          </h1>
          <p className="text-2xl text-luxury-gray-light mb-8">
            {product.subtitle}
          </p>
          <p className="text-lg text-luxury-gray-light mb-8 max-w-3xl">
            {product.description}
          </p>
          <LuxuryButton variant="primary" size="lg" onClick={handleGetStarted}>
            Start Free Trial
          </LuxuryButton>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-20 bg-luxury-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Powerful Features
            </h2>
            <p className="text-luxury-gray-light text-lg">
              Everything you need to create professional voice content
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <LuxuryCard key={index} variant="glass" padding="lg">
                <h3 className="text-xl font-bold text-luxury-pearl mb-2">
                  {feature.title}
                </h3>
                <p className="text-luxury-gray-light">
                  {feature.description}
                </p>
              </LuxuryCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Perfect For
            </h2>
            <p className="text-luxury-gray-light text-lg">
              Ideal for creators, professionals, and businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {useCases.map((useCase, index) => (
              <LuxuryCard key={index} variant="elevated" padding="lg">
                <h3 className="text-xl font-bold text-luxury-pearl mb-2">
                  {useCase.title}
                </h3>
                <p className="text-luxury-gray-light">
                  {useCase.description}
                </p>
              </LuxuryCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20 bg-luxury-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Simple Pricing
            </h2>
            <p className="text-luxury-gray-light text-lg">
              Choose the plan that fits your needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan) => (
              <LuxuryCard
                key={plan.id}
                variant={plan.popular ? 'elevated' : 'glass'}
                padding="lg"
                className={plan.popular ? 'ring-2 ring-luxury-gold' : ''}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-luxury-gold text-luxury-dark text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-luxury-pearl mb-2">
                  {plan.name}
                </h3>
                <p className="text-luxury-gray-light text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-luxury-gold">
                    {plan.price}
                  </span>
                  <span className="text-luxury-gray-light ml-2">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-luxury-gray-light">
                      <span className="text-luxury-gold mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <LuxuryButton
                  variant={plan.popular ? 'primary' : 'secondary'}
                  fullWidth
                  onClick={handleGetStarted}
                >
                  {plan.cta}
                </LuxuryButton>
              </LuxuryCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                q: 'How long does it take to clone my voice?',
                a: 'Voice cloning typically takes 5-10 minutes. We analyze your voice samples and create a digital clone that captures your unique characteristics.',
              },
              {
                q: 'Can I use my voice clone commercially?',
                a: 'Yes! All our plans include commercial licensing. You can use your voice clones for any project, including monetized content.',
              },
              {
                q: 'Is my voice data secure?',
                a: 'Absolutely. Your voice data is encrypted with military-grade security and never shared with third parties. You have full control over your data.',
              },
              {
                q: 'What languages are supported?',
                a: 'Our Professional and Enterprise plans support 50+ languages. Your voice clone will maintain its unique characteristics across all languages.',
              },
            ].map((faq, idx) => (
              <LuxuryCard key={idx} variant="glass" padding="lg">
                <h3 className="text-lg font-bold text-luxury-pearl mb-2">
                  {faq.q}
                </h3>
                <p className="text-luxury-gray-light">
                  {faq.a}
                </p>
              </LuxuryCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-luxury-dark-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-luxury-pearl mb-6">
              Ready to clone your voice?
            </h2>
            <p className="text-xl text-luxury-gray-light mb-8">
              Start your free trial today. No credit card required.
            </p>
            <LuxuryButton variant="primary" size="lg" onClick={handleGetStarted}>
              Start Free Trial
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  )
}
