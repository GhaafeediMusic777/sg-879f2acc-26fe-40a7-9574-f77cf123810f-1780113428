import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function AuthPage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<'consumer' | 'label' | 'partner' | null>(null)

  const handleRoleSelect = (role: 'consumer' | 'label' | 'partner') => {
    setSelectedRole(role)
    // Route to role-specific onboarding
    if (role === 'consumer') {
      router.push('/onboarding/consumer')
    } else if (role === 'label') {
      router.push('/onboarding/label')
    } else if (role === 'partner') {
      router.push('/onboarding/ai-partner')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">
            <span className="text-gold">GHAAFEEDI</span>
          </h1>
          <p className="text-purple-400 text-xl md:text-2xl mb-2">MUSIC</p>
          <p className="text-gray-400 text-lg tracking-widest">MUSIC. INNOVATION. LEGACY.</p>
        </div>

        {/* Role Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
            Choose your account type
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Consumer Card */}
            <button
              onClick={() => handleRoleSelect('consumer')}
              className="group p-8 rounded-lg border-2 border-gold/50 bg-black-900/50 hover:border-gold hover:bg-black-900/80 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">♥</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 text-center">
                Consumer
              </h3>
              <p className="text-gray-300 text-center">
                Discover, stream and enjoy exclusive music experiences.
              </p>
            </button>

            {/* Label Card */}
            <button
              onClick={() => handleRoleSelect('label')}
              className="group p-8 rounded-lg border-2 border-gold/50 bg-black-900/50 hover:border-gold hover:bg-black-900/80 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">👑</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 text-center">
                Music Label/Artist
              </h3>
              <p className="text-gray-300 text-center">
                Manage your music, artists and releases. Grow your audience.
              </p>
            </button>

            {/* AI Partner Card */}
            <button
              onClick={() => handleRoleSelect('partner')}
              className="group p-8 rounded-lg border-2 border-gold/50 bg-black-900/50 hover:border-gold hover:bg-black-900/80 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">✨</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 text-center">
                AI Artist Partner
              </h3>
              <p className="text-gray-300 text-center">
                Collaborate with Ghaafeedi's AI ecosystem and shape the future of music.
              </p>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>
            By continuing, you agree to our{' '}
            <a href="/terms-of-service" className="text-gold hover:text-gold/80">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-gold hover:text-gold/80">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
