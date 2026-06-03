import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: string
}

const CONSUMER_STEPS: OnboardingStep[] = [
  {
    id: 'preferences',
    title: 'Music Preferences',
    description: 'Tell us what kind of music experiences you love',
    icon: '🎵'
  },
  {
    id: 'discovery',
    title: 'Discover Products',
    description: 'Explore all 14 premium cinematic music products',
    icon: '🎬'
  },
  {
    id: 'account',
    title: 'Complete Profile',
    description: 'Set up your account and payment method',
    icon: '👤'
  },
  {
    id: 'welcome',
    title: 'Welcome!',
    description: 'Ready to transform your stories into cinema',
    icon: '✨'
  }
]

const ALL_PRODUCTS = [
  { id: 'future-self', name: 'Future Self Vision', price: 125, emoji: '✨', category: 'Vision' },
  { id: 'emotional-soundtrack', name: 'Emotional Soundtrack', price: 49, emoji: '🎵', category: 'Music' },
  { id: 'cinematic-story', name: 'Cinematic Story Film', price: 149, emoji: '🎬', category: 'Video' },
  { id: 'dream-visualization', name: 'Dream AI Visualization', price: 79, emoji: '🌙', category: 'Vision' },
  { id: 'relationship-healing', name: 'Relationship Healing', price: 119, emoji: '💔', category: 'Healing' },
  { id: 'memorial-legacy', name: 'Memorial Legacy Film', price: 299, emoji: '🕯️', category: 'Legacy' },
  { id: 'cinematic-life-story', name: 'Cinematic Life Story', price: 249, emoji: '🎥', category: 'Biography' },
  { id: 'couples-journey', name: 'Couples Journey Film', price: 199, emoji: '❤️', category: 'Relationships' },
  { id: 'signature-masterpiece', name: 'Signature Masterpiece', price: 499, emoji: '👑', category: 'Premium' },
  { id: 'sophia-ai', name: 'Sophia AI Membership', price: 19, emoji: '🤖', category: 'AI Companion' },
  { id: 'voice-cloning', name: 'Voice Cloning Studio', price: 99, emoji: '🎙️', category: 'Audio' },
  { id: 'social-ready', name: 'Social-Ready Clips', price: 39, emoji: '📱', category: 'Social' },
  { id: 'family-vault', name: 'Family Vault', price: 149, emoji: '👨‍👩‍👧‍👦', category: 'Family' },
  { id: 'nft-collection', name: 'NFT Collection', price: 199, emoji: '🖼️', category: 'Web3' }
]

export default function ConsumerOnboarding() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [preferences, setPreferences] = useState<string[]>([])
  const [savedProducts, setSavedProducts] = useState<string[]>([])
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    bio: ''
  })

  const handlePreferenceToggle = (pref: string) => {
    setPreferences(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    )
  }

  const handleProductToggle = (productId: string) => {
    setSavedProducts(prev =>
      prev.includes(productId) ? prev.filter(p => p !== productId) : [...prev, productId]
    )
  }

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < CONSUMER_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      router.push('/consumer/dashboard')
    }
  }

  const handleSkip = () => {
    router.push('/consumer/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {CONSUMER_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className={`flex-1 h-1 mx-1 rounded-full transition-all ${
                  idx <= currentStep ? 'bg-gold' : 'bg-gold/20'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-gold text-sm">
            Step {currentStep + 1} of {CONSUMER_STEPS.length}
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">{CONSUMER_STEPS[currentStep].icon}</div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            {CONSUMER_STEPS[currentStep].title}
          </h1>
          <p className="text-gray-400">{CONSUMER_STEPS[currentStep].description}</p>
        </div>

        {/* Step Content */}
        <div className="glass p-8 rounded-lg mb-8">
          {/* Step 1: Preferences */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">What kind of music experiences interest you?</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Cinematic', 'Emotional', 'Healing', 'Storytelling', 'AI-Generated', 'Voice Cloning', 'Social Media', 'Premium', 'Legacy'].map(pref => (
                  <button
                    key={pref}
                    onClick={() => handlePreferenceToggle(pref)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      preferences.includes(pref)
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-gold/30 bg-transparent text-gray-300 hover:border-gold'
                    }`}
                  >
                    {pref}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Product Discovery */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">Explore all 14 premium products. Save your favorites!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {ALL_PRODUCTS.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductToggle(product.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      savedProducts.includes(product.id)
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-transparent hover:border-gold'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-2xl mb-2">{product.emoji}</div>
                        <h3 className="font-semibold text-white">{product.name}</h3>
                        <p className="text-xs text-gray-400">{product.category}</p>
                      </div>
                      <div className="text-gold font-bold">${product.price}</div>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-gold text-sm">Saved: {savedProducts.length} products</p>
            </div>
          )}

          {/* Step 3: Account Setup */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-6">Complete your profile to get started</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">First Name</label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    onChange={(e) => handleProfileChange('firstName', e.target.value)}
                    placeholder="Your first name"
                    className="input-gold w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Last Name</label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    onChange={(e) => handleProfileChange('lastName', e.target.value)}
                    placeholder="Your last name"
                    className="input-gold w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Birth Date</label>
                <input
                  type="date"
                  value={profileData.birthDate}
                  onChange={(e) => handleProfileChange('birthDate', e.target.value)}
                  className="input-gold w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Bio</label>
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleProfileChange('bio', e.target.value)}
                  placeholder="Tell us about yourself..."
                  className="input-gold w-full h-24"
                />
              </div>
              <div className="bg-gold/10 border border-gold/30 p-4 rounded-lg">
                <p className="text-sm text-gold">💳 Payment Method</p>
                <p className="text-xs text-gray-400 mt-2">You'll add your payment method at checkout</p>
              </div>
            </div>
          )}

          {/* Step 4: Welcome */}
          {currentStep === 3 && (
            <div className="space-y-6 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-serif font-bold text-white">Welcome to Ghaafeedi!</h2>
              <p className="text-gray-300">
                Your account is ready. You can now explore products, create cinematic experiences, and join our community.
              </p>
              <div className="bg-gold/10 border border-gold/30 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-gold mb-3">What's Next?</h3>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ Browse all {ALL_PRODUCTS.length} premium products</li>
                  <li>✅ Start your first cinematic experience</li>
                  <li>✅ Connect with other creators</li>
                  <li>✅ Access exclusive community features</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-gold hover:text-gold/80 text-sm font-medium"
          >
            Skip for now
          </button>
          <button
            onClick={handleNext}
            className="btn-luxury-primary px-8"
          >
            {currentStep === CONSUMER_STEPS.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
