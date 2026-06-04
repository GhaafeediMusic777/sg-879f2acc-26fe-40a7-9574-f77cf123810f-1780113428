import { useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeft, ChevronRight, Music, Users, Sparkles } from 'lucide-react'

const AI_ARTISTS = [
  {
    id: 'luna-echo',
    name: 'Luna Echo',
    genre: 'Pop',
    style: 'Dreamy, Ethereal',
    songs: 128,
    listeners: '245K',
    color: 'from-purple-500 to-pink-600',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    featured: false
  },
  {
    id: 'nova-ray',
    name: 'Nova Ray',
    genre: 'Electronic',
    style: 'Futuristic, Energetic',
    songs: 156,
    listeners: '312K',
    color: 'from-yellow-400 to-orange-600',
    glowColor: 'rgba(251, 191, 36, 0.6)',
    featured: true
  },
  {
    id: 'solace-drift',
    name: 'Solace Drift',
    genre: 'Lo-fi',
    style: 'Chill, Melodic',
    songs: 103,
    listeners: '187K',
    color: 'from-purple-600 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    featured: false
  }
]

const BENEFITS = [
  {
    icon: '∞',
    title: 'Unlimited Creativity',
    description: 'AI generates unique music 24/7'
  },
  {
    icon: '💰',
    title: 'Affordable Access',
    description: 'Premium music at accessible prices'
  },
  {
    icon: '👑',
    title: 'Exclusive Content',
    description: 'Early access to new releases'
  }
]

export default function AIMarketplacePage() {
  const router = useRouter()
  const [currentArtistIndex, setCurrentArtistIndex] = useState(1)
  const [selectedArtists, setSelectedArtists] = useState<string[]>([])

  const handlePrevArtist = () => {
    setCurrentArtistIndex(Math.max(0, currentArtistIndex - 1))
  }

  const handleNextArtist = () => {
    setCurrentArtistIndex(Math.min(AI_ARTISTS.length - 1, currentArtistIndex + 1))
  }

  const toggleArtist = (artistId: string) => {
    setSelectedArtists(prev =>
      prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    )
  }

  const handleContinue = () => {
    router.push('/checkout/success')
  }

  const handleSkip = () => {
    router.push('/consumer/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
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

          {/* Step Indicator */}
          <div className="flex items-center gap-8">
            {[1, 2, 3].map(step => (
              <div key={step} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold transition-all ${
                  step === 2
                    ? 'border-gold bg-gold/20 text-gold'
                    : step < 2
                    ? 'border-gold/50 text-gold/50'
                    : 'border-purple-500/50 text-purple-400'
                }`}>
                  {step}
                </div>
                <div className="text-sm">
                  <p className={step === 2 ? 'text-gold font-semibold' : 'text-gray-400'}>
                    Step {step}/3
                  </p>
                  <p className="text-xs text-gray-500">
                    {step === 1 && 'Product Selection'}
                    {step === 2 && 'AI Artists Discovery'}
                    {step === 3 && 'Checkout'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-8 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-12 text-center">
              <span className="text-white">Discover Ghaafeedi Music</span>
              <span className="text-gold"> AI Artists</span>
              <span className="text-gold ml-2">✨</span>
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-8">
              {/* Artists Carousel */}
              <div className="col-span-2">
                <div className="relative">
                  {/* Carousel Container */}
                  <div className="relative h-96 flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                      onClick={handlePrevArtist}
                      disabled={currentArtistIndex === 0}
                      className="absolute left-0 z-20 p-3 bg-black/50 border border-gold/30 rounded-full text-gold hover:border-gold hover:bg-black/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Artists Display */}
                    <div className="flex items-center justify-center gap-6 px-20 w-full">
                      {AI_ARTISTS.map((artist, idx) => {
                        const isCenter = idx === currentArtistIndex
                        const isLeft = idx === currentArtistIndex - 1
                        const isRight = idx === currentArtistIndex + 1

                        return (
                          <div
                            key={artist.id}
                            className={`transition-all duration-300 transform ${
                              isCenter ? 'scale-100 opacity-100 z-10' : 'scale-75 opacity-40'
                            }`}
                          >
                            <div
                              className={`bg-gradient-to-br ${artist.color} rounded-2xl p-6 border-2 ${
                                isCenter ? 'border-gold' : 'border-gold/30'
                              } w-64 h-80 flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer hover:border-gold transition-all`}
                            >
                              {/* Glowing Halo */}
                              <div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                  boxShadow: `0 0 60px ${artist.glowColor}, inset 0 0 60px ${artist.glowColor}`
                                }}
                              />

                              {/* Character Portrait */}
                              <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                                <div className="text-8xl mb-4">👩‍🎤</div>

                                {/* Featured Badge */}
                                {artist.featured && (
                                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                                    FEATURED
                                  </div>
                                )}

                                {/* Artist Info */}
                                <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                                <p className="text-sm text-white/80 mb-1">Genre: <span className="text-gold">{artist.genre}</span></p>
                                <p className="text-sm text-white/80 mb-4">Style: <span className="text-gold">{artist.style}</span></p>

                                {/* Stats */}
                                <div className="flex justify-center gap-6 mb-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Music className="w-4 h-4 text-gold" />
                                    <span className="text-gold font-semibold">{artist.songs}</span>
                                    <span className="text-white/60">Songs</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4 text-gold" />
                                    <span className="text-gold font-semibold">{artist.listeners}</span>
                                    <span className="text-white/60">Monthly Listeners</span>
                                  </div>
                                </div>

                                {/* Buttons - Only show for center artist */}
                                {isCenter && (
                                  <div className="flex gap-3 mt-auto">
                                    <button className="px-4 py-2 border border-gold/50 text-gold rounded-lg hover:border-gold hover:bg-gold/10 transition-all flex items-center gap-2 text-sm font-semibold">
                                      ▶ Preview
                                    </button>
                                    <button
                                      onClick={() => toggleArtist(artist.id)}
                                      className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-semibold ${
                                        selectedArtists.includes(artist.id)
                                          ? 'bg-purple-600 text-white border border-purple-500'
                                          : 'bg-gold text-black border border-gold hover:shadow-lg hover:shadow-gold/50'
                                      }`}
                                    >
                                      🛒 {selectedArtists.includes(artist.id) ? 'Added' : 'Add to Cart'}
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={handleNextArtist}
                      disabled={currentArtistIndex === AI_ARTISTS.length - 1}
                      className="absolute right-0 z-20 p-3 bg-black/50 border border-gold/30 rounded-full text-gold hover:border-gold hover:bg-black/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Carousel Dots */}
                  <div className="flex justify-center gap-3 mt-8">
                    {AI_ARTISTS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentArtistIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentArtistIndex
                            ? 'bg-gold w-8'
                            : idx === currentArtistIndex - 1 || idx === currentArtistIndex + 1
                            ? 'bg-gold/50'
                            : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Tagline */}
                  <p className="text-center text-gold text-lg font-semibold mt-8">
                    ✨ Explore, Listen, Love. Your next favorite artist is here.
                  </p>
                </div>
              </div>

              {/* Right Sidebar - Why AI Artists */}
              <div className="col-span-1">
                <div className="bg-gradient-to-br from-black/50 to-purple-900/30 border border-gold/30 rounded-2xl p-6 sticky top-8">
                  <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Why AI Artists?
                  </h3>

                  <div className="space-y-6">
                    {BENEFITS.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 bg-black/50">
                          <span className="text-xl text-gold font-bold">{benefit.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-gold font-bold mb-1">{benefit.title}</h4>
                          <p className="text-sm text-gray-400">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visualizer */}
                  <div className="mt-8 p-4 bg-black/50 rounded-lg border border-gold/20">
                    <div className="flex items-end justify-center gap-1 h-16">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-gold to-purple-500 rounded-t opacity-70 animate-pulse"
                          style={{
                            height: `${20 + Math.random() * 60}%`,
                            animationDelay: `${i * 0.05}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={handleSkip}
                className="px-6 py-3 border border-gold/30 text-gold rounded-lg hover:border-gold hover:bg-gold/10 transition-all flex items-center gap-2 font-semibold"
              >
                Skip <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleContinue}
                className="px-8 py-3 bg-gradient-to-r from-gold to-orange-500 text-black rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all font-bold text-lg flex items-center gap-2"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
