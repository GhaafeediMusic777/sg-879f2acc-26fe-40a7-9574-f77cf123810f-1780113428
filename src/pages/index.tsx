import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google'
import { Play, LogOut, User } from 'lucide-react'

interface GoogleUser {
  id: string
  name: string
  email: string
  picture: string
}

export default function HomePage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<'consumer' | 'label' | 'partner' | null>(null)
  const [user, setUser] = useState<GoogleUser | null>(null)
  const [showDemoModal, setShowDemoModal] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('googleUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleRoleSelect = (role: 'consumer' | 'label' | 'partner') => {
    setSelectedRole(role)
    if (role === 'consumer') {
      router.push('/onboarding/consumer')
    } else if (role === 'label') {
      router.push('/onboarding/label')
    } else if (role === 'partner') {
      router.push('/onboarding/ai-partner')
    }
  }

  const handleGoogleSuccess = (credentialResponse: any) => {
    try {
      const credential = credentialResponse.credential
      // Decode JWT token to get user info
      const base64Url = credential.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
      const decodedToken = JSON.parse(jsonPayload)

      const userData: GoogleUser = {
        id: decodedToken.sub,
        name: decodedToken.name,
        email: decodedToken.email,
        picture: decodedToken.picture
      }

      setUser(userData)
      localStorage.setItem('googleUser', JSON.stringify(userData))
      localStorage.setItem('googleToken', credential)
    } catch (error) {
      console.error('Failed to decode token:', error)
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('googleUser')
    localStorage.removeItem('googleToken')
  }

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Header with Auth */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-purple-500 flex items-center justify-center">
                <span className="text-lg font-bold text-black">G</span>
              </div>
              <div>
                <p className="text-gold text-sm font-bold">GHAAFEEDI</p>
                <p className="text-gray-400 text-xs">MUSIC</p>
              </div>
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full border border-gold"
                    />
                    <div className="text-sm">
                      <p className="text-gold font-semibold">{user.name}</p>
                      <p className="text-gray-400 text-xs">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-600/40 transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => console.log('Login Failed')}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="px-8 py-12">
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4">
                  <span className="text-gold">GHAAFEEDI</span>
                </h1>
                <p className="text-purple-400 text-xl md:text-2xl mb-2">MUSIC</p>
                <p className="text-gray-400 text-lg tracking-widest">MUSIC. INNOVATION. LEGACY.</p>
              </div>

              {/* Watch Demo Section */}
              <div className="mb-16 bg-gradient-to-br from-black/50 to-purple-900/30 border border-gold/30 rounded-2xl p-8 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Demo Video Preview */}
                  <div className="relative group">
                    <div className="relative bg-black rounded-xl overflow-hidden border border-gold/30">
                      <video
                        src="/vidu-video-3304923238573597.mp4"
                        className="w-full h-auto max-h-80 object-cover"
                        poster="/vidu-video-3304923238573597.mp4"
                      />
                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setShowDemoModal(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all"
                      >
                        <div className="w-20 h-20 bg-gold/20 border-2 border-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-gold fill-gold" />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Demo Info */}
                  <div>
                    <h2 className="text-4xl font-bold mb-4">
                      <span className="text-white">Experience </span>
                      <span className="text-gold">Cinematic</span>
                      <span className="text-white"> Music</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Watch our exclusive demo reel showcasing the power of AI-generated cinematic music. From heartbreak to redemption, experience stories told through stunning visuals and emotionally resonant soundscapes.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="text-gold font-bold">✨</span>
                        <span className="text-gray-300">7 Cinematic Scenes</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gold font-bold">🎬</span>
                        <span className="text-gray-300">Professional Production Quality</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gold font-bold">🎵</span>
                        <span className="text-gray-300">AI-Generated Soundtracks</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowDemoModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-orange-500 text-black rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all font-bold"
                      >
                        <Play className="w-5 h-5" />
                        Watch Full Demo
                      </button>
                      <Link
                        href="/cinematic-demo"
                        className="px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold/10 transition-all font-bold"
                      >
                        View All Scenes
                      </Link>
                    </div>
                  </div>
                </div>
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
                    className="group p-8 rounded-lg border-2 border-gold/50 bg-black/50 hover:border-gold hover:bg-black/80 transition-all duration-300"
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
                    className="group p-8 rounded-lg border-2 border-gold/50 bg-black/50 hover:border-gold hover:bg-black/80 transition-all duration-300"
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
                    className="group p-8 rounded-lg border-2 border-gold/50 bg-black/50 hover:border-gold hover:bg-black/80 transition-all duration-300"
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
        </div>

        {/* Demo Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-black border border-gold/30 rounded-2xl max-w-4xl w-full">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <h3 className="text-2xl font-bold text-gold">Cinematic Demo Reel</h3>
                <button
                  onClick={() => setShowDemoModal(false)}
                  className="text-gray-400 hover:text-gold transition-all text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <video
                  src="/vidu-video-3304923238573597.mp4"
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-gold font-semibold mb-2">Scene 1: Heartbreak</p>
                  <p className="text-gray-300">
                    An emotional journey through loss and reflection. This cinematic piece captures the raw vulnerability of heartbreak.
                  </p>
                  <Link
                    href="/cinematic-demo"
                    className="inline-block mt-4 px-6 py-2 bg-gold text-black rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 transition-all"
                  >
                    View All 7 Scenes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  )
}
