import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function AIArtistProfile() {
  const [activeTab, setActiveTab] = useState('tracks')

  // Mock artist data - in real app, this would come from params
  const artist = {
    id: 1,
    name: 'Luna Synth',
    avatar: '🎵',
    genre: 'Electronic',
    style: 'Instrumental',
    rating: 4.9,
    reviews: 342,
    followers: 12500,
    tracks: 156,
    collaborations: 89,
    description: 'Specializing in ambient electronic and cinematic soundscapes. Creating immersive audio experiences for films, games, and creative projects.',
    bio: 'Luna Synth is an AI artist trained on thousands of hours of electronic music. Specializing in ambient, cinematic, and experimental soundscapes that evoke emotion and atmosphere.',
    price: '$15/track',
    responseTime: '< 2 hours',
    completionRate: '99.8%',
    memberSince: 'January 2024',
  }

  const tracks = [
    { id: 1, title: 'Ethereal Dreams', duration: '3:45', plays: 12500, price: '$15' },
    { id: 2, title: 'Cosmic Journey', duration: '4:20', plays: 9800, price: '$15' },
    { id: 3, title: 'Midnight Reflection', duration: '5:10', plays: 8200, price: '$15' },
    { id: 4, title: 'Digital Horizons', duration: '3:55', plays: 7600, price: '$15' },
    { id: 5, title: 'Quantum Waves', duration: '4:30', plays: 6900, price: '$15' },
    { id: 6, title: 'Synthetic Memories', duration: '3:20', plays: 5400, price: '$15' },
  ]

  const reviews = [
    {
      id: 1,
      author: 'John Filmmaker',
      rating: 5,
      date: '2 weeks ago',
      text: 'Absolutely perfect for my indie film. Luna Synth understood exactly what I needed and delivered beyond expectations.',
    },
    {
      id: 2,
      author: 'Sarah Game Dev',
      rating: 5,
      date: '1 month ago',
      text: 'The ambient tracks are incredible. They perfectly complement our game atmosphere. Highly recommended!',
    },
    {
      id: 3,
      author: 'Mike Producer',
      rating: 4,
      date: '2 months ago',
      text: 'Great quality and fast turnaround. Would definitely work with Luna Synth again.',
    },
  ]

  const collaborations = [
    { title: 'Sci-Fi Documentary', type: 'Film', status: 'Completed' },
    { title: 'Indie Game Soundtrack', type: 'Game', status: 'Completed' },
    { title: 'Meditation App', type: 'App', status: 'In Progress' },
    { title: 'Commercial Campaign', type: 'Advertising', status: 'Completed' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar and Basic Info */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center text-7xl">
                {artist.avatar}
              </div>
            </div>

            {/* Artist Info */}
            <div className="flex-grow">
              <h1 className="text-5xl font-bold text-luxury-pearl mb-2">
                {artist.name}
              </h1>
              <p className="text-xl text-luxury-gray-light mb-4">
                {artist.genre} • {artist.style}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-2xl font-bold text-luxury-gold">{artist.rating}</p>
                  <p className="text-sm text-luxury-gray-medium">Rating ({artist.reviews} reviews)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-luxury-gold">{(artist.followers / 1000).toFixed(1)}K</p>
                  <p className="text-sm text-luxury-gray-medium">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-luxury-gold">{artist.tracks}</p>
                  <p className="text-sm text-luxury-gray-medium">Tracks</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-luxury-gold">{artist.collaborations}</p>
                  <p className="text-sm text-luxury-gray-medium">Collaborations</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <LuxuryButton variant="primary" size="lg">
                  Collaborate Now
                </LuxuryButton>
                <LuxuryButton variant="secondary" size="lg">
                  Follow Artist
                </LuxuryButton>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 bg-luxury-dark-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-luxury-pearl mb-4">About</h2>
            <p className="text-luxury-gray-light mb-6">
              {artist.bio}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <LuxuryCard variant="glass" padding="md">
                <p className="text-sm text-luxury-gray-medium mb-1">Response Time</p>
                <p className="text-2xl font-bold text-luxury-gold">{artist.responseTime}</p>
              </LuxuryCard>
              <LuxuryCard variant="glass" padding="md">
                <p className="text-sm text-luxury-gray-medium mb-1">Completion Rate</p>
                <p className="text-2xl font-bold text-luxury-gold">{artist.completionRate}</p>
              </LuxuryCard>
              <LuxuryCard variant="glass" padding="md">
                <p className="text-sm text-luxury-gray-medium mb-1">Member Since</p>
                <p className="text-2xl font-bold text-luxury-gold">{artist.memberSince}</p>
              </LuxuryCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b border-luxury-gold border-opacity-20">
            {['tracks', 'reviews', 'collaborations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-luxury-gold border-b-2 border-luxury-gold'
                    : 'text-luxury-gray-light hover:text-luxury-gold'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tracks Tab */}
          {activeTab === 'tracks' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {tracks.map((track) => (
                <LuxuryCard key={track.id} variant="glass" padding="lg" hover>
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-luxury-pearl mb-1">
                        {track.title}
                      </h3>
                      <p className="text-sm text-luxury-gray-medium">
                        {track.duration} • {track.plays.toLocaleString()} plays
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-luxury-gold font-semibold">{track.price}</span>
                      <LuxuryButton variant="primary" size="sm">
                        License
                      </LuxuryButton>
                    </div>
                  </div>
                </LuxuryCard>
              ))}
            </motion.div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {reviews.map((review) => (
                <LuxuryCard key={review.id} variant="glass" padding="lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-bold text-luxury-pearl">{review.author}</p>
                      <p className="text-sm text-luxury-gray-medium">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < review.rating ? 'text-luxury-gold' : 'text-luxury-gray-dark'}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-luxury-gray-light">{review.text}</p>
                </LuxuryCard>
              ))}
            </motion.div>
          )}

          {/* Collaborations Tab */}
          {activeTab === 'collaborations' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {collaborations.map((collab, idx) => (
                <LuxuryCard key={idx} variant="glass" padding="lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-luxury-pearl mb-1">
                        {collab.title}
                      </h3>
                      <p className="text-sm text-luxury-gray-medium">{collab.type}</p>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      collab.status === 'Completed'
                        ? 'bg-green-500 bg-opacity-20 text-green-400'
                        : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                    }`}>
                      {collab.status}
                    </span>
                  </div>
                </LuxuryCard>
              ))}
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
              Ready to collaborate?
            </h2>
            <p className="text-xl text-luxury-gray-light mb-8">
              Start a project with {artist.name} today
            </p>
            <LuxuryButton variant="primary" size="lg">
              Collaborate Now
            </LuxuryButton>
          </motion.div>
        </div>
      </section>

      <LuxuryFooter />
    </div>
  )
}
