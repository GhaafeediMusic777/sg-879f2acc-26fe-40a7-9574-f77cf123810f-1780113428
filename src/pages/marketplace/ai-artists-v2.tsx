import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'
import { LuxuryInput } from '@/components/LuxuryInput'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function AIArtistsMarketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  const genres = [
    'All Genres',
    'Electronic',
    'Hip-Hop',
    'Pop',
    'Rock',
    'Jazz',
    'Classical',
    'Ambient',
  ]

  const styles = [
    'All Styles',
    'Vocal',
    'Instrumental',
    'Experimental',
    'Cinematic',
    'Lo-Fi',
    'Orchestral',
  ]

  const aiArtists = [
    {
      id: 1,
      name: 'Luna Synth',
      genre: 'Electronic',
      style: 'Instrumental',
      rating: 4.9,
      reviews: 342,
      followers: 12500,
      tracks: 156,
      avatar: '🎵',
      description: 'Specializing in ambient electronic and cinematic soundscapes',
      price: '$15/track',
      featured: true,
    },
    {
      id: 2,
      name: 'Rhythm Echo',
      genre: 'Hip-Hop',
      style: 'Vocal',
      rating: 4.8,
      reviews: 298,
      followers: 9800,
      tracks: 203,
      avatar: '🎤',
      description: 'Creating innovative hip-hop beats and vocal collaborations',
      price: '$20/track',
      featured: true,
    },
    {
      id: 3,
      name: 'Harmony AI',
      genre: 'Pop',
      style: 'Vocal',
      rating: 4.7,
      reviews: 215,
      followers: 8200,
      tracks: 89,
      avatar: '🎸',
      description: 'Pop production with catchy melodies and modern production',
      price: '$18/track',
      featured: false,
    },
    {
      id: 4,
      name: 'Sonic Waves',
      genre: 'Ambient',
      style: 'Instrumental',
      rating: 4.9,
      reviews: 156,
      followers: 6500,
      tracks: 234,
      avatar: '🌊',
      description: 'Ambient and experimental soundscapes for relaxation',
      price: '$12/track',
      featured: false,
    },
    {
      id: 5,
      name: 'Jazz Fusion',
      genre: 'Jazz',
      style: 'Instrumental',
      rating: 4.6,
      reviews: 189,
      followers: 5400,
      tracks: 167,
      avatar: '🎷',
      description: 'Modern jazz fusion with AI-generated improvisations',
      price: '$22/track',
      featured: false,
    },
    {
      id: 6,
      name: 'Cinematic Dreams',
      genre: 'Classical',
      style: 'Orchestral',
      rating: 4.8,
      reviews: 267,
      followers: 11200,
      tracks: 145,
      avatar: '🎻',
      description: 'Orchestral and cinematic compositions for films and games',
      price: '$25/track',
      featured: true,
    },
  ]

  const filteredArtists = aiArtists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || artist.genre === selectedGenre
    const matchesStyle = selectedStyle === 'all' || artist.style === selectedStyle
    return matchesSearch && matchesGenre && matchesStyle
  })

  const sortedArtists = [...filteredArtists].sort((a, b) => {
    if (sortBy === 'popular') return b.followers - a.followers
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'newest') return b.id - a.id
    return 0
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-luxury-pearl mb-6">
            AI Artist <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-premium bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-xl text-luxury-gray-light max-w-2xl mx-auto">
            Discover and collaborate with AI artists. Find the perfect sound for your project.
          </p>
        </motion.div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 py-12 bg-luxury-dark-secondary">
        <div className="max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <LuxuryInput
              placeholder="Search AI artists by name or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Genre Filter */}
            <div>
              <label className="block text-sm text-luxury-gray-light mb-2">Genre</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 text-luxury-pearl focus:border-luxury-gold focus:border-opacity-100 transition-all"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre.toLowerCase().replace(' ', '-')}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Filter */}
            <div>
              <label className="block text-sm text-luxury-gray-light mb-2">Style</label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 text-luxury-pearl focus:border-luxury-gold focus:border-opacity-100 transition-all"
              >
                {styles.map((style) => (
                  <option key={style} value={style.toLowerCase().replace(' ', '-')}>
                    {style}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm text-luxury-gray-light mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 text-luxury-pearl focus:border-luxury-gold focus:border-opacity-100 transition-all"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-luxury-gray-medium"
          >
            Found {sortedArtists.length} AI artist{sortedArtists.length !== 1 ? 's' : ''}
          </motion.p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {sortedArtists.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sortedArtists.map((artist) => (
                <motion.div
                  key={artist.id}
                  variants={itemVariants}
                >
                  <Link href={`/marketplace/ai-artist/${artist.id}`}>
                    <LuxuryCard variant="elevated" padding="lg" hover className="cursor-pointer h-full flex flex-col relative overflow-hidden">
                      {artist.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-luxury-gold text-luxury-dark text-xs font-bold rounded-full">
                          Featured
                        </div>
                      )}

                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center text-4xl mb-4">
                        {artist.avatar}
                      </div>

                      {/* Info */}
                      <h3 className="text-2xl font-bold text-luxury-pearl mb-1">
                        {artist.name}
                      </h3>
                      <p className="text-sm text-luxury-gray-medium mb-3">
                        {artist.genre} • {artist.style}
                      </p>

                      {/* Description */}
                      <p className="text-luxury-gray-light text-sm mb-4 flex-grow">
                        {artist.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-luxury-gold border-opacity-20">
                        <div className="text-center">
                          <p className="text-lg font-bold text-luxury-gold">{artist.rating}</p>
                          <p className="text-xs text-luxury-gray-medium">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-luxury-gold">{(artist.followers / 1000).toFixed(1)}K</p>
                          <p className="text-xs text-luxury-gray-medium">Followers</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-bold text-luxury-gold">{artist.tracks}</p>
                          <p className="text-xs text-luxury-gray-medium">Tracks</p>
                        </div>
                      </div>

                      {/* Price and Button */}
                      <div className="flex items-center justify-between">
                        <span className="text-luxury-gold font-semibold">{artist.price}</span>
                        <LuxuryButton variant="primary" size="sm">
                          Collaborate
                        </LuxuryButton>
                      </div>
                    </LuxuryCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <p className="text-luxury-gray-light text-lg mb-6">
                No AI artists found matching your criteria
              </p>
              <LuxuryButton
                variant="secondary"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedGenre('all')
                  setSelectedStyle('all')
                }}
              >
                Clear Filters
              </LuxuryButton>
            </motion.div>
          )}
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
              Become an AI Artist
            </h2>
            <p className="text-xl text-luxury-gray-light mb-8">
              Showcase your AI creations and earn from collaborations
            </p>
            <Link href="/marketplace/become-artist">
              <LuxuryButton variant="primary" size="lg">
                Apply Now
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  )
}
