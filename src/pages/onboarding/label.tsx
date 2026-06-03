import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface OnboardingStep {
  id: string
  title: string
  description: string
  icon: string
}

const LABEL_STEPS: OnboardingStep[] = [
  {
    id: 'label-info',
    title: 'Label Information',
    description: 'Tell us about your label or artist project',
    icon: '🏷️'
  },
  {
    id: 'artists',
    title: 'Add Artists',
    description: 'Register the artists and projects you manage',
    icon: '🎤'
  },
  {
    id: 'releases',
    title: 'Release Strategy',
    description: 'Set up your release calendar and distribution',
    icon: '📅'
  },
  {
    id: 'tools',
    title: 'Explore Tools',
    description: 'Discover production and analytics tools',
    icon: '⚙️'
  },
  {
    id: 'welcome',
    title: 'Welcome!',
    description: 'Ready to scale your music business',
    icon: '👑'
  }
]

const AVAILABLE_TOOLS = [
  { id: 'unlimited-production', name: 'Unlimited Production', description: 'Generate unlimited cinematic videos', price: 999, emoji: '🎬' },
  { id: 'artist-dashboard', name: 'Artist Dashboard', description: 'Manage all your artists in one place', price: 'included', emoji: '📊' },
  { id: 'analytics', name: 'Advanced Analytics', description: 'Track performance and audience insights', price: 'included', emoji: '📈' },
  { id: 'collaboration', name: 'Collaboration Tools', description: 'Work with producers and engineers', price: 'included', emoji: '🤝' },
  { id: 'distribution', name: 'Distribution Network', description: 'Reach all major streaming platforms', price: 'included', emoji: '🌐' },
  { id: 'ai-mastering', name: 'AI Mastering', description: 'Professional audio mastering with AI', price: 'included', emoji: '🎚️' }
]

export default function LabelOnboarding() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [labelData, setLabelData] = useState({
    labelName: '',
    labelType: 'independent',
    website: '',
    bio: ''
  })
  const [artists, setArtists] = useState<Array<{ name: string; genre: string }>>([
    { name: '', genre: '' }
  ])
  const [releaseStrategy, setReleaseStrategy] = useState({
    frequency: 'monthly',
    distribution: ['spotify', 'apple-music', 'youtube'],
    marketing: true
  })
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  const handleLabelChange = (field: string, value: string) => {
    setLabelData(prev => ({ ...prev, [field]: value }))
  }

  const handleArtistChange = (idx: number, field: string, value: string) => {
    const newArtists = [...artists]
    newArtists[idx] = { ...newArtists[idx], [field]: value }
    setArtists(newArtists)
  }

  const addArtist = () => {
    setArtists([...artists, { name: '', genre: '' }])
  }

  const removeArtist = (idx: number) => {
    setArtists(artists.filter((_, i) => i !== idx))
  }

  const handleToolToggle = (toolId: string) => {
    setSelectedTools(prev =>
      prev.includes(toolId) ? prev.filter(t => t !== toolId) : [...prev, toolId]
    )
  }

  const handleNext = () => {
    if (currentStep < LABEL_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/label/dashboard')
    }
  }

  const handleSkip = () => {
    router.push('/label/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {LABEL_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className={`flex-1 h-1 mx-1 rounded-full transition-all ${
                  idx <= currentStep ? 'bg-gold' : 'bg-gold/20'
                }`}
              />
            ))}
          </div>
          <p className="text-center text-gold text-sm">
            Step {currentStep + 1} of {LABEL_STEPS.length}
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">{LABEL_STEPS[currentStep].icon}</div>
          <h1 className="text-4xl font-serif font-bold text-white mb-2">
            {LABEL_STEPS[currentStep].title}
          </h1>
          <p className="text-gray-400">{LABEL_STEPS[currentStep].description}</p>
        </div>

        {/* Step Content */}
        <div className="glass p-8 rounded-lg mb-8">
          {/* Step 1: Label Information */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Label Name</label>
                <input
                  type="text"
                  value={labelData.labelName}
                  onChange={(e) => handleLabelChange('labelName', e.target.value)}
                  placeholder="Your label name"
                  className="input-gold w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Label Type</label>
                <select
                  value={labelData.labelType}
                  onChange={(e) => handleLabelChange('labelType', e.target.value)}
                  className="input-gold w-full"
                >
                  <option value="independent">Independent Label</option>
                  <option value="major">Major Label</option>
                  <option value="collective">Artist Collective</option>
                  <option value="production">Production Company</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Website</label>
                <input
                  type="url"
                  value={labelData.website}
                  onChange={(e) => handleLabelChange('website', e.target.value)}
                  placeholder="https://yourlabel.com"
                  className="input-gold w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-2">About Your Label</label>
                <textarea
                  value={labelData.bio}
                  onChange={(e) => handleLabelChange('bio', e.target.value)}
                  placeholder="Tell us about your label's mission and vision..."
                  className="input-gold w-full h-24"
                />
              </div>
            </div>
          )}

          {/* Step 2: Add Artists */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">Register the artists and projects you manage</p>
              {artists.map((artist, idx) => (
                <div key={idx} className="border border-gold/30 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-gold font-semibold">Artist {idx + 1}</h3>
                    {artists.length > 1 && (
                      <button
                        onClick={() => removeArtist(idx)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={artist.name}
                    onChange={(e) => handleArtistChange(idx, 'name', e.target.value)}
                    placeholder="Artist name"
                    className="input-gold w-full"
                  />
                  <select
                    value={artist.genre}
                    onChange={(e) => handleArtistChange(idx, 'genre', e.target.value)}
                    className="input-gold w-full"
                  >
                    <option value="">Select genre</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="pop">Pop</option>
                    <option value="electronic">Electronic</option>
                    <option value="indie">Indie</option>
                    <option value="r-and-b">R&B</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Classical</option>
                  </select>
                </div>
              ))}
              <button
                onClick={addArtist}
                className="btn-luxury-secondary w-full"
              >
                + Add Another Artist
              </button>
            </div>
          )}

          {/* Step 3: Release Strategy */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gold mb-2">Release Frequency</label>
                <select
                  value={releaseStrategy.frequency}
                  onChange={(e) => setReleaseStrategy({ ...releaseStrategy, frequency: e.target.value })}
                  className="input-gold w-full"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gold mb-3">Distribution Platforms</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Spotify', 'Apple Music', 'YouTube', 'Amazon Music', 'Tidal', 'SoundCloud'].map(platform => (
                    <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={releaseStrategy.distribution.includes(platform.toLowerCase().replace(' ', '-'))}
                        onChange={(e) => {
                          const key = platform.toLowerCase().replace(' ', '-')
                          setReleaseStrategy({
                            ...releaseStrategy,
                            distribution: e.target.checked
                              ? [...releaseStrategy.distribution, key]
                              : releaseStrategy.distribution.filter(p => p !== key)
                          })
                        }}
                        className="w-4 h-4 accent-gold"
                      />
                      <span className="text-gray-300 text-sm">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={releaseStrategy.marketing}
                  onChange={(e) => setReleaseStrategy({ ...releaseStrategy, marketing: e.target.checked })}
                  className="w-4 h-4 accent-gold"
                />
                <span className="text-gray-300">Include marketing support for releases</span>
              </label>
            </div>
          )}

          {/* Step 4: Explore Tools */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <p className="text-gray-300 mb-4">Explore the tools included in your Label Partnership</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {AVAILABLE_TOOLS.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => handleToolToggle(tool.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedTools.includes(tool.id)
                        ? 'border-gold bg-gold/10'
                        : 'border-gold/30 bg-transparent hover:border-gold'
                    }`}
                  >
                    <div className="text-2xl mb-2">{tool.emoji}</div>
                    <h3 className="font-semibold text-white">{tool.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{tool.description}</p>
                    <p className="text-gold text-sm font-semibold mt-2">
                      {typeof tool.price === 'number' ? `$${tool.price}/mo` : tool.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Welcome */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center">
              <div className="text-6xl mb-4">👑</div>
              <h2 className="text-2xl font-serif font-bold text-white">Welcome to Ghaafeedi Label!</h2>
              <p className="text-gray-300">
                Your label account is ready. Start managing artists, releasing music, and scaling your business.
              </p>
              <div className="bg-gold/10 border border-gold/30 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-gold mb-3">Your Label Includes:</h3>
                <ul className="text-left space-y-2 text-sm text-gray-300">
                  <li>✅ Unlimited cinematic video production</li>
                  <li>✅ Artist management dashboard</li>
                  <li>✅ Advanced analytics & insights</li>
                  <li>✅ Multi-platform distribution</li>
                  <li>✅ Collaboration tools</li>
                  <li>✅ $999/month subscription</li>
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
            {currentStep === LABEL_STEPS.length - 1 ? 'Get Started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
