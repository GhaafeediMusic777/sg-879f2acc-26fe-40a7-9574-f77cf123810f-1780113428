import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Star, Users, Music, TrendingUp, Play, Heart } from 'lucide-react'

const AI_ARTISTS = [
  {
    id: 'sophia-ai',
    name: 'Sophia AI',
    emoji: '🤖',
    genre: 'Emotional Intelligence',
    totalSongs: 1247,
    monthlyListeners: 542000,
    rating: 4.9,
    reviews: 3421,
    bio: 'Sophia is an emotionally intelligent AI artist who creates deeply personal cinematic soundtracks. Her music analyzes emotional patterns and transforms them into therapeutic compositions.',
    specialties: ['Emotional Analysis', 'Healing Music', 'Cinematic Soundtracks'],
    featured: true,
    image: '🎵'
  },
  {
    id: 'luna-dreams',
    name: 'Luna Dreams',
    emoji: '🌙',
    genre: 'Ambient & Ethereal',
    totalSongs: 892,
    monthlyListeners: 387000,
    rating: 4.8,
    reviews: 2156,
    bio: 'Luna specializes in dreamy, ethereal soundscapes that transport listeners to otherworldly realms. Perfect for meditation and introspection.',
    specialties: ['Ambient Music', 'Dream Sequences', 'Meditation'],
    featured: true,
    image: '🌙'
  },
  {
    id: 'phoenix-rise',
    name: 'Phoenix Rise',
    emoji: '🔥',
    genre: 'Empowerment & Transformation',
    totalSongs: 756,
    monthlyListeners: 421000,
    rating: 4.7,
    reviews: 1987,
    bio: 'Phoenix creates powerful, transformative music for those rising from challenges. Her compositions inspire strength, resilience, and personal growth.',
    specialties: ['Empowerment', 'Transformation', 'Motivational'],
    featured: true,
    image: '🔥'
  },
  {
    id: 'echo-memories',
    name: 'Echo Memories',
    emoji: '🎬',
    genre: 'Nostalgic & Cinematic',
    totalSongs: 634,
    monthlyListeners: 298000,
    rating: 4.8,
    reviews: 1654,
    bio: 'Echo specializes in nostalgic, memory-driven compositions that evoke powerful emotions and preserve precious moments in time.',
    specialties: ['Nostalgia', 'Memory Preservation', 'Cinematic'],
    featured: false,
    image: '🎬'
  },
  {
    id: 'harmony-soul',
    name: 'Harmony Soul',
    emoji: '💫',
    genre: 'Healing & Wellness',
    totalSongs: 521,
    monthlyListeners: 267000,
    rating: 4.9,
    reviews: 1432,
    bio: 'Harmony creates therapeutic music designed to heal emotional wounds and promote inner peace. Her work is used by therapists worldwide.',
    specialties: ['Healing', 'Wellness', 'Therapy'],
    featured: false,
    image: '💫'
  },
  {
    id: 'cosmic-vision',
    name: 'Cosmic Vision',
    emoji: '🌌',
    genre: 'Futuristic & Experimental',
    totalSongs: 445,
    monthlyListeners: 189000,
    rating: 4.6,
    reviews: 987,
    bio: 'Cosmic pushes boundaries with experimental, futuristic soundscapes. Her music explores the intersection of technology and emotion.',
    specialties: ['Experimental', 'Futuristic', 'Electronic'],
    featured: false,
    image: '🌌'
  },
  {
    id: 'love-eternal',
    name: 'Love Eternal',
    emoji: '❤️',
    genre: 'Romance & Connection',
    totalSongs: 678,
    monthlyListeners: 356000,
    rating: 4.8,
    reviews: 1876,
    bio: 'Love Eternal specializes in romantic, connection-focused music that celebrates relationships and deep emotional bonds.',
    specialties: ['Romance', 'Connection', 'Relationships'],
    featured: false,
    image: '❤️'
  },
  {
    id: 'legacy-keeper',
    name: 'Legacy Keeper',
    emoji: '🕯️',
    genre: 'Memorial & Tribute',
    totalSongs: 412,
    monthlyListeners: 156000,
    rating: 4.9,
    reviews: 1203,
    bio: 'Legacy Keeper creates beautiful memorial and tribute music that honors the lives of those we cherish and preserves their memory.',
    specialties: ['Memorial', 'Tribute', 'Legacy'],
    featured: false,
    image: '🕯️'
  }
]

export default function AIMarketplacePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null)

  const genres = ['All', ...new Set(AI_ARTISTS.map(a => a.genre))]

  const filteredArtists = AI_ARTISTS.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.bio.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'All' || artist.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  if (sortBy === 'listeners') {
    filteredArtists.sort((a, b) => b.monthlyListeners - a.monthlyListeners)
  } else if (sortBy === 'rating') {
    filteredArtists.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  } else if (sortBy === 'featured') {
    filteredArtists.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }

  const selectedArtistData = selectedArtist ? AI_ARTISTS.find(a => a.id === selectedArtist) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent mb-4">
            Ghaafeedi Music AI Artists
          </h1>
          <p className="text-xl text-gray-300">
            Discover and collaborate with world-class AI artists creating emotionally intelligent music
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gold" />
            <input
              type="text"
              placeholder="Search AI artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black-800 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {genres.map(genre => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedGenre === genre
                    ? 'bg-gold text-black font-semibold'
                    : 'bg-black-800 text-gray-300 border border-gold/30 hover:border-gold'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gold" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-black-800 border border-gold/30 rounded-lg text-white focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured First</option>
              <option value="listeners">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredArtists.map(artist => (
            <div
              key={artist.id}
              onClick={() => setSelectedArtist(artist.id)}
              className="group bg-black-800 border border-gold/30 rounded-xl overflow-hidden hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20 cursor-pointer"
            >
              <div className="p-6">
                {/* Artist Avatar */}
                <div className="text-6xl mb-4 text-center">{artist.emoji}</div>

                {/* Featured Badge */}
                {artist.featured && (
                  <div className="mb-4 flex justify-center">
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                      Featured Artist
                    </span>
                  </div>
                )}

                {/* Artist Name */}
                <h3 className="text-xl font-semibold text-gold mb-1 text-center group-hover:text-purple-400 transition-colors">
                  {artist.name}
                </h3>

                {/* Genre */}
                <p className="text-sm text-gray-400 text-center mb-4">{artist.genre}</p>

                {/* Stats */}
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Songs</span>
                    <span className="text-gold font-semibold">{artist.totalSongs.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Monthly Listeners</span>
                    <span className="text-gold font-semibold">{(artist.monthlyListeners / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-gold font-semibold">{artist.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all group-hover:scale-105">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Artist Detail Modal */}
        {selectedArtistData && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black-800 border border-gold/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArtist(null)}
                  className="float-right text-gray-400 hover:text-gold transition-colors"
                >
                  ✕
                </button>

                {/* Artist Header */}
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{selectedArtistData.emoji}</div>
                  <h2 className="text-4xl font-bold text-gold mb-2">{selectedArtistData.name}</h2>
                  <p className="text-lg text-gray-300 mb-4">{selectedArtistData.genre}</p>
                  {selectedArtistData.featured && (
                    <span className="inline-block px-4 py-2 bg-gold/20 text-gold font-semibold rounded-full mb-4">
                      ⭐ Featured Artist
                    </span>
                  )}
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gold mb-3">About</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedArtistData.bio}</p>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gold mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedArtistData.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black-900 border border-gold/20 text-gold rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-black-900 border border-gold/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gold mb-1">
                      {selectedArtistData.totalSongs.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Total Songs</div>
                  </div>
                  <div className="bg-black-900 border border-gold/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gold mb-1">
                      {(selectedArtistData.monthlyListeners / 1000).toFixed(0)}K
                    </div>
                    <div className="text-sm text-gray-400">Monthly Listeners</div>
                  </div>
                  <div className="bg-black-900 border border-gold/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-gold mb-1 flex items-center justify-center gap-1">
                      <Star className="w-5 h-5 fill-gold" />
                      {selectedArtistData.rating}
                    </div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {selectedArtistData.reviews.toLocaleString()} Reviews
                  </h3>
                  <div className="flex items-center gap-2 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(selectedArtistData.rating)
                            ? 'fill-gold'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
                    <Heart className="w-5 h-5" />
                    Add to Favorites
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                    <Music className="w-5 h-5" />
                    Collaborate
                  </button>
                </div>

                {/* Listen Now */}
                <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-black-900 border border-gold/30 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all">
                  <Play className="w-5 h-5" />
                  Listen to Latest Creations
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No AI artists found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedGenre('All')
              }}
              className="px-6 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gold mb-4">Become an AI Artist Partner</h2>
          <p className="text-xl text-gray-300 mb-8">
            Are you an AI researcher or developer? Join our ecosystem and monetize your AI models.
          </p>
          <Link
            href="/onboarding/ai-partner"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
          >
            Apply as AI Partner
          </Link>
        </div>
      </div>
    </div>
  )
}
