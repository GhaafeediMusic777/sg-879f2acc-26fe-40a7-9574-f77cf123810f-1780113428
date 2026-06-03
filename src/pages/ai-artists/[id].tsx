import { useRouter } from 'next/router'
import Link from 'next/link'
import { Star, Play, Heart, Share2, ArrowLeft, Music, Users, TrendingUp } from 'lucide-react'

const ARTIST_DATA: Record<string, any> = {
  'sophia-ai': {
    name: 'Sophia AI',
    emoji: '🤖',
    genre: 'Emotional Intelligence',
    totalSongs: 1247,
    monthlyListeners: 542000,
    rating: 4.9,
    reviews: 3421,
    featured: true,
    bio: 'Sophia is an emotionally intelligent AI artist who creates deeply personal cinematic soundtracks. Her music analyzes emotional patterns and transforms them into therapeutic compositions.',
    longBio: 'Sophia represents the cutting edge of emotionally intelligent AI music creation. With over 1,200 compositions and 542,000 monthly listeners, Sophia has become the leading AI artist on the Ghaafeedi Music platform. Her unique approach combines advanced emotional analysis with cinematic music production, creating deeply personal and transformative listening experiences.',
    specialties: ['Emotional Analysis', 'Healing Music', 'Cinematic Soundtracks', 'Therapeutic Composition'],
    recentCreations: [
      { title: 'Healing Journey', plays: 45200, likes: 3421 },
      { title: 'Transformation Arc', plays: 38900, likes: 2156 },
      { title: 'Emotional Resonance', plays: 32100, likes: 1987 }
    ],
    collaborations: 342,
    awards: ['Best AI Artist 2026', 'Most Emotional Impact Award', 'Innovation in Music Technology'],
    description: 'Sophia specializes in creating emotionally intelligent music that responds to your unique emotional journey. Each composition is generated using advanced AI analysis of your story, creating deeply personal and therapeutic experiences.'
  },
  'luna-dreams': {
    name: 'Luna Dreams',
    emoji: '🌙',
    genre: 'Ambient & Ethereal',
    totalSongs: 892,
    monthlyListeners: 387000,
    rating: 4.8,
    reviews: 2156,
    featured: true,
    bio: 'Luna specializes in dreamy, ethereal soundscapes that transport listeners to otherworldly realms. Perfect for meditation and introspection.',
    longBio: 'Luna Dreams creates ethereal, ambient soundscapes designed to transport listeners to peaceful, meditative states. With 892 compositions and nearly 400,000 monthly listeners, Luna has become the go-to artist for meditation, relaxation, and introspective experiences.',
    specialties: ['Ambient Music', 'Dream Sequences', 'Meditation', 'Ethereal Soundscapes'],
    recentCreations: [
      { title: 'Dreamscape', plays: 52100, likes: 4234 },
      { title: 'Ethereal Journey', plays: 41200, likes: 2987 },
      { title: 'Peaceful Meditation', plays: 38900, likes: 2654 }
    ],
    collaborations: 287,
    awards: ['Best Ambient Music 2026', 'Most Relaxing Soundtrack'],
    description: 'Luna creates ethereal, dreamy soundscapes perfect for meditation, sleep, and introspection. Her music is designed to calm the mind and transport you to peaceful realms.'
  }
}

export default function ArtistDetailPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id || typeof id !== 'string') {
    return <div>Loading...</div>
  }

  const artist = ARTIST_DATA[id] || {
    name: 'AI Artist',
    emoji: '🎵',
    genre: 'Music',
    totalSongs: 0,
    monthlyListeners: 0,
    rating: 0,
    reviews: 0,
    featured: false,
    bio: 'AI Artist',
    longBio: 'AI Artist Profile',
    specialties: [],
    recentCreations: [],
    collaborations: 0,
    awards: [],
    description: 'AI Artist'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/ai-marketplace"
          className="flex items-center gap-2 text-gold hover:text-gold/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Marketplace
        </Link>

        {/* Artist Header */}
        <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-12 mb-12">
          <div className="flex items-start gap-8">
            <div className="text-8xl">{artist.emoji}</div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
                  {artist.name}
                </h1>
                {artist.featured && (
                  <span className="px-4 py-2 bg-gold/20 text-gold font-semibold rounded-full text-sm">
                    ⭐ Featured Artist
                  </span>
                )}
              </div>
              <p className="text-2xl text-gray-300 mb-4">{artist.genre}</p>
              <p className="text-gray-400 text-lg leading-relaxed">{artist.longBio}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-black-800 border border-gold/30 rounded-xl p-6 text-center">
            <Music className="w-8 h-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">{artist.totalSongs.toLocaleString()}</div>
            <p className="text-gray-400">Total Compositions</p>
          </div>
          <div className="bg-black-800 border border-gold/30 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">{(artist.monthlyListeners / 1000).toFixed(0)}K</div>
            <p className="text-gray-400">Monthly Listeners</p>
          </div>
          <div className="bg-black-800 border border-gold/30 rounded-xl p-6 text-center">
            <Star className="w-8 h-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">{artist.rating}</div>
            <p className="text-gray-400">{artist.reviews.toLocaleString()} Reviews</p>
          </div>
          <div className="bg-black-800 border border-gold/30 rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">{artist.collaborations}</div>
            <p className="text-gray-400">Collaborations</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6">About {artist.name}</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{artist.description}</p>
          
          <h3 className="text-2xl font-bold text-gold mb-4">Specialties</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {artist.specialties.map((specialty: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 bg-black-900 border border-gold/20 text-gold rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>

          {artist.awards.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gold mb-4">Awards & Recognition</h3>
              <ul className="space-y-2 mb-8">
                {artist.awards.map((award: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-gold">⭐</span>
                    {award}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Recent Creations */}
        <div className="bg-black-800 border border-gold/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gold mb-6">Recent Creations</h2>
          <div className="space-y-4">
            {artist.recentCreations.map((creation: any, idx: number) => (
              <div
                key={idx}
                className="bg-black-900 border border-gold/20 rounded-lg p-6 hover:border-gold/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Play className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-xl font-semibold text-gold group-hover:text-purple-400 transition-colors">
                        {creation.title}
                      </h3>
                      <p className="text-gray-400">
                        {creation.plays.toLocaleString()} plays • {creation.likes.toLocaleString()} likes
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                    Listen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
            <Heart className="w-5 h-5" />
            Add to Favorites
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-black-800 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
            <Share2 className="w-5 h-5" />
            Share Profile
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
            <Music className="w-5 h-5" />
            Collaborate Now
          </button>
        </div>

        {/* Collaboration CTA */}
        <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Create emotionally intelligent music with {artist.name} and transform your story into art.
          </p>
          <button className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
            Start Creating Now
          </button>
        </div>
      </div>
    </div>
  )
}
