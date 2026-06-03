import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: string
}

const AI_PARTNER_STEPS: OnboardingStep[] = [
  {
    id: 'partner-profile',
    title: 'Partner Profile',
    description: 'Tell us about your AI project or research',
    icon: '🤖'
  },
  {
    id: 'collaboration',
    title: 'Collaboration Model',
    description: 'Choose how you want to collaborate with us',
    icon: '🤝'
  },
  {
    id: 'integration',
    title: 'API Integration',
    description: 'Get your API keys and integration guide',
    icon: '⚙️'
  },
  {
    id: 'marketplace',
    title: 'AI Marketplace',
    description: 'List your AI models and services',
    icon: '🎨'
  },
  {
    id: 'earnings',
    title: 'Earnings Setup',
    description: 'Configure your revenue sharing',
    icon: '💰'
  },
  {
    id: 'welcome',
    title: 'Welcome!',
    description: 'Ready to shape the future of music',
    icon: '✨'
  }
]

const COLLABORATION_MODELS = [
  {
    id: 'revenue-share',
    name: 'Revenue Share',
    description: 'Earn 30-50% of revenue from your AI models',
    emoji: '📊'
  },
  {
    id: 'licensing',
    name: 'Licensing',
    description: 'License your models for fixed fees',
    emoji: '📜'
  },
  {
    id: 'partnership',
    name: 'Strategic Partnership',
    description: 'Co-develop features with our team',
    emoji: '🤝'
  },
  {
    id: 'research',
    name: 'Research Collaboration',
    description: 'Collaborate on AI research projects',
    emoji: '🔬'
  }
]

const AI_SERVICES = [
  { id: 'music-generation', name: 'Music Generation', description: 'AI-powered music composition', emoji: '🎵' },
  { id: 'voice-synthesis', name: 'Voice Synthesis', description: 'Advanced voice cloning & synthesis', emoji: '🎙️' },
  { id: 'video-generation', name: 'Video Generation', description: 'AI cinematic video creation', emoji: '🎬' },
  { id: 'emotion-detection', name: 'Emotion Detection', description: 'Analyze emotional content', emoji: '❤️' },
  { id: 'lyrics-generation', name: 'Lyrics Generation', description: 'AI songwriting assistance', emoji: '✍️' },
  { id: 'audio-enhancement', name: 'Audio Enhancement', description: 'AI audio mastering & enhancement', emoji: '🎚️' },
  { id: 'style-transfer', name: 'Style Transfer', description: 'Transfer musical styles', emoji: '🎨' },
  { id: 'recommendation', name: 'Recommendation Engine', description: 'Personalized recommendations', emoji: '🎯' }
]

export default function AiPartnerOnboarding() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [partnerData, setPartnerData] = useState({
    organizationName: '',
    focus: 'music-ai',
    website: '',
    bio: ''
  })
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [revenueModel, setRevenueModel] = useState('revenue-share')
  const [paymentInfo, setPaymentInfo] = useState({
    bankAccount: '',
    paypalEmail: '',
    cryptoWallet: ''
  })

  const handlePartnerChange = (field: string, value: string) => {
    setPartnerData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId) ? prev.filter(s => s !== serviceId) : [...prev, serviceId]
    )
  }

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentInfo(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < AI_PARTNER_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/ai-partner/dashboard')
    }
  }

  const handleSkip = () => {
    router.push('/ai-partner/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {AI_PARTNER_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className={`flex-1 h-1 mx-1 rounded-full transition-all ${
                  idx <= currentStep ? 'bg-gold' : 'bg-gold/20'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-gold text-sm">
            Step {currentStep + 1} of {AI_PARTNER_STEPS.length}
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">{AI_PARTNER_STEPS[currentStep].icon}</div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            {AI_PARTNER_STEPS[currentStep].title}
          </h1>
          <p className="text-gray-400">{AI_PARTNER_STEPS[currentStep].description}</p>
        </div>

        {/* Step Content */}
        <div className="glass p-8 rounded-lg mb-8">
          {/* Step 1: Partner Profile */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Organization Name</label>
                <input
                  type="text"
                  value={partnerData.organizationName}
                  onChange={(e) => handlePartnerChange('organizationName', e.target.value)}
                  placeholder="Your organization name"
                  className="input-gold w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Primary Focus</label>
                <select
                  value={partnerData.focus}
                  onChange={(e) => handlePartnerChange('focus', e.target.value)}
                  className="input-gold w-full"
                >
                  <option value="music-ai">Music AI</option>
                  <option value="voice-synthesis">Voice Synthesis</option>
                  <option value="video-generation">Video Generation</option>
                  <option value="emotion-ai">Emotion AI</option>
                  <option value="music-production">Music Production</option>
                  <option value="research">AI Research</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Website</label>
                <input
                  type="url"
                  value={partnerData.website}
                  onChange={(e) => handlePartnerChange('website', e.target.value)}
                  placeholder="https://yourorganization.com"
                  className="input-gold w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">About Your Project</label>
                <textarea
                  value={partnerData.bio}
                  onChange={(e) => handlePartnerChange('bio', e.target.value)}
                  placeholder="Describe your AI project and research..."
                  className="input-gold w-full h-24"
                />
              </div>
            </div>
          )}

          {/* Step 2: Collaboration Model */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">Choose your preferred collaboration model</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COLLABORATION_MODELS.map(model => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedModel === model.id
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-transparent hover:border-gold'
                    }`}
                  >
                    <div className="text-3xl mb-2">{model.emoji}</div>
                    <h3 className="font-semibold text-white">{model.name}</h3>
                    <p className="text-xs text-gray-400 mt-2">{model.description}</p>
                  </button>
                ))}
              </div>
              <div className="bg-gold/10 border border-gold/30 p-4 rounded-lg">
                <p className="text-sm text-gold">💡 Tip</p>
                <p className="text-xs text-gray-400 mt-2">
                  You can combine multiple collaboration models. We'll discuss details after onboarding.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: API Integration */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-gold/10 border border-gold/30 p-6 rounded-lg">
                <h3 className="font-semibold text-gold mb-3">🔑 Your API Credentials</h3>
                <div className="space-y-3 text-sm font-mono">
                  <div>
                    <p className="text-gray-400 mb-1">API Key:</p>
                    <p className="text-gold bg-black-900 p-2 rounded break-all">
                      ghf_partner_sk_live_abc123xyz789...
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">API Secret:</p>
                    <p className="text-gold bg-black-900 p-2 rounded break-all">
                      ghf_partner_secret_def456uvw012...
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  ⚠️ Keep these credentials secure. Never share them publicly.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gold">📚 Integration Resources</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ <a href="#" className="text-gold hover:text-gold/80">API Documentation</a></li>
                  <li>✅ <a href="#" className="text-gold hover:text-gold/80">SDK for Python</a></li>
                  <li>✅ <a href="#" className="text-gold hover:text-gold/80">SDK for JavaScript</a></li>
                  <li>✅ <a href="#" className="text-gold hover:text-gold/80">Integration Examples</a></li>
                  <li>✅ <a href="#" className="text-gold hover:text-gold/80">Webhook Setup Guide</a></li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 4: AI Marketplace */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">Select the AI services you'll provide</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {AI_SERVICES.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedServices.includes(service.id)
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-transparent hover:border-gold'
                    }`}
                  >
                    <div className="text-2xl mb-2">{service.emoji}</div>
                    <h3 className="font-semibold text-white">{service.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{service.description}</p>
                  </button>
                ))}
              </div>
              <p className="text-gold text-sm">Selected: {selectedServices.length} services</p>
            </div>
          )}

          {/* Step 5: Earnings Setup */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">Configure your payment method for earnings</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Bank Account</label>
                  <input
                    type="text"
                    value={paymentInfo.bankAccount}
                    onChange={(e) => handlePaymentChange('bankAccount', e.target.value)}
                    placeholder="IBAN or Account Number"
                    className="input-gold w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">PayPal Email (Optional)</label>
                  <input
                    type="email"
                    value={paymentInfo.paypalEmail}
                    onChange={(e) => handlePaymentChange('paypalEmail', e.target.value)}
                    placeholder="your@paypal.com"
                    className="input-gold w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Crypto Wallet (Optional)</label>
                  <input
                    type="text"
                    value={paymentInfo.cryptoWallet}
                    onChange={(e) => handlePaymentChange('cryptoWallet', e.target.value)}
                    placeholder="0x... (Ethereum address)"
                    className="input-gold w-full"
                  />
                </div>
              </div>
              <div className="bg-gold/10 border border-gold/30 p-4 rounded-lg">
                <p className="text-sm text-gold">💰 Revenue Share Details</p>
                <p className="text-xs text-gray-400 mt-2">
                  Earn 30-50% of revenue from your AI models. Payments processed monthly.
                </p>
              </div>
            </div>
          )}

          {/* Step 6: Welcome */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-2xl font-serif font-bold text-white">Welcome to Ghaafeedi AI Partners!</h2>
              <p className="text-gray-300">
                Your account is ready. Start collaborating, integrate your AI models, and earn revenue.
              </p>
              <div className="bg-gold/10 border border-gold/30 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-gold mb-3">What's Next?</h3>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ Access your API credentials</li>
                  <li>✅ List your AI services on marketplace</li>
                  <li>✅ Start earning from your models</li>
                  <li>✅ Collaborate with our research team</li>
                  <li>✅ Join exclusive partner events</li>
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
            {currentStep === AI_PARTNER_STEPS.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
