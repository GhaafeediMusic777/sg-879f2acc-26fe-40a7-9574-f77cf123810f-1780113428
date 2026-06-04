import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'
import { OnboardingFlow } from '@/components/OnboardingFlow'

export default function ConsumerOnboarding() {
  const router = useRouter()
  const { user } = useAuth()
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [showOnboarding, setShowOnboarding] = useState(false)

  React.useEffect(() => {
    if (!user) {
      router.push('/auth/signin')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const products = [
    {
      id: 'ai-voice-clone',
      name: 'AI Voice Clone',
      description: 'Create a digital clone of your voice',
      icon: '🎤',
    },
    {
      id: 'ai-music-producer',
      name: 'AI Music Producer',
      description: 'Generate original music in any genre',
      icon: '🎵',
    },
    {
      id: 'ai-music-video',
      name: 'AI Music Video',
      description: 'Create cinematic music videos',
      icon: '🎬',
    },
    {
      id: 'ai-podcast-producer',
      name: 'AI Podcast Producer',
      description: 'Generate full podcast episodes',
      icon: '🎙️',
    },
    {
      id: 'ai-artist-label',
      name: 'AI Artist Label',
      description: 'Launch your AI music career',
      icon: '🌟',
    },
  ]

  const onboardingSteps = [
    {
      id: 'welcome',
      title: 'Welcome to Ghaafeedi Music',
      description: 'Let\'s set up your account and get you started with creating amazing content.',
      icon: '👋',
      content: (
        <div className="space-y-4">
          <p className="text-luxury-gray-light">
            We're excited to have you on board! In the next few steps, we'll help you:
          </p>
          <ul className="space-y-2 text-luxury-gray-light">
            <li className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Set up your profile
            </li>
            <li className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Choose your first product
            </li>
            <li className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Explore your dashboard
            </li>
            <li className="flex items-center gap-2">
              <span className="text-luxury-gold">✓</span>
              Start creating
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'profile',
      title: 'Complete Your Profile',
      description: 'Help us personalize your experience.',
      icon: '👤',
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-luxury-gray-light mb-2">
              What's your main interest?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Music', 'Podcasting', 'Video', 'Voice'].map((interest) => (
                <button
                  key={interest}
                  className="p-3 rounded-lg border border-luxury-gold border-opacity-20 text-luxury-pearl hover:border-luxury-gold hover:border-opacity-60 transition-all"
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'product',
      title: 'Choose Your First Product',
      description: 'Select a product to get started with.',
      icon: '🎁',
      content: (
        <div className="space-y-3">
          {products.slice(0, 3).map((product) => (
            <button
              key={product.id}
              className="w-full p-4 rounded-lg border border-luxury-gold border-opacity-20 text-left hover:border-luxury-gold hover:border-opacity-60 transition-all flex items-center gap-3"
            >
              <span className="text-2xl">{product.icon}</span>
              <div>
                <p className="font-medium text-luxury-pearl">{product.name}</p>
                <p className="text-sm text-luxury-gray-medium">{product.description}</p>
              </div>
            </button>
          ))}
        </div>
      ),
    },
    {
      id: 'credits',
      title: 'Claim Your Free Credits',
      description: 'Get $50 in free credits to start creating.',
      icon: '🎟️',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-luxury-gold bg-opacity-10 rounded-lg border border-luxury-gold border-opacity-30">
            <p className="text-luxury-gold font-bold text-lg mb-2">$50 Free Credits</p>
            <p className="text-luxury-gray-light text-sm">
              Valid for 30 days. Use them on any product to create amazing content.
            </p>
          </div>
          <p className="text-luxury-gray-light text-sm">
            Credits will be automatically added to your account.
          </p>
        </div>
      ),
    },
    {
      id: 'settings',
      title: 'Notification Preferences',
      description: 'Choose how you want to stay updated.',
      icon: '🔔',
      content: (
        <div className="space-y-3">
          {[
            { label: 'Email updates about new features', checked: true },
            { label: 'Weekly digest of your activity', checked: true },
            { label: 'Promotional offers and discounts', checked: false },
          ].map((pref, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={pref.checked}
                className="w-4 h-4 rounded"
              />
              <span className="text-luxury-pearl">{pref.label}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      id: 'ready',
      title: "You're Ready to Go!",
      description: 'Your account is all set up. Start creating now.',
      icon: '🚀',
      content: (
        <div className="space-y-4">
          <p className="text-luxury-gray-light">
            You now have access to all our products and your free credits are ready to use.
          </p>
          <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
            <p className="text-sm text-luxury-gray-light mb-2">Quick tips:</p>
            <ul className="space-y-1 text-sm text-luxury-gray-light">
              <li>• Start with a free product trial</li>
              <li>• Check out our tutorials in the help center</li>
              <li>• Join our community Discord</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
        <LuxuryHeader />
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
          <OnboardingFlow
            steps={onboardingSteps}
            productName={selectedProduct || 'Ghaafeedi Music'}
            onComplete={() => router.push('/consumer/dashboard')}
          />
        </div>
        <LuxuryFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-luxury-pearl mb-4">
            Welcome, {user.email}!
          </h1>
          <p className="text-xl text-luxury-gray-light">
            Choose a product to get started creating amazing content
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              onClick={() => {
                setSelectedProduct(product.id)
                setShowOnboarding(true)
              }}
            >
              <LuxuryCard variant="elevated" padding="lg" hover className="cursor-pointer h-full flex flex-col">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-luxury-pearl mb-2">
                  {product.name}
                </h3>
                <p className="text-luxury-gray-light flex-grow mb-6">
                  {product.description}
                </p>
                <LuxuryButton variant="primary" fullWidth size="sm">
                  Get Started
                </LuxuryButton>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-luxury-gray-light mb-6">
            Or skip for now and explore your dashboard
          </p>
          <LuxuryButton
            variant="ghost"
            onClick={() => router.push('/consumer/dashboard')}
          >
            Go to Dashboard
          </LuxuryButton>
        </motion.div>
      </div>

      <LuxuryFooter />
    </div>
  )
}
