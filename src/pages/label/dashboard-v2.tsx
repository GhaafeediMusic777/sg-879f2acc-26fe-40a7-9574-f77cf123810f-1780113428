import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function LabelDashboard() {
  const router = useRouter()
  const { user, userProfile } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  React.useEffect(() => {
    if (!user) {
      router.push('/auth/signin')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const stats = [
    { label: 'Total Releases', value: '24', icon: '📀', change: '+3 this month' },
    { label: 'Monthly Revenue', value: '$4,250', icon: '💰', change: '+12% vs last month' },
    { label: 'Total Streams', value: '125K', icon: '▶️', change: '+8K this week' },
    { label: 'Followers', value: '3.2K', icon: '👥', change: '+250 this month' },
  ]

  const recentReleases = [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Synth', date: '2 days ago', streams: 12500, revenue: '$125' },
    { id: 2, title: 'Digital Horizons', artist: 'Rhythm Echo', date: '5 days ago', streams: 8900, revenue: '$89' },
    { id: 3, title: 'Cosmic Journey', artist: 'Luna Synth', date: '1 week ago', streams: 15600, revenue: '$156' },
  ]

  const upcomingReleases = [
    { id: 1, title: 'Ethereal Waves', artist: 'Luna Synth', releaseDate: 'June 15, 2026', status: 'In Review' },
    { id: 2, title: 'Synthetic Dreams', artist: 'Harmony AI', releaseDate: 'June 20, 2026', status: 'Approved' },
    { id: 3, title: 'Quantum Sounds', artist: 'Sonic Waves', releaseDate: 'June 25, 2026', status: 'Pending' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-luxury-pearl mb-2">
            Label Dashboard
          </h1>
          <p className="text-luxury-gray-light">
            Manage your releases, artists, and earnings
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'New Release', href: '/label/release/new', icon: '📀' },
            { label: 'Add Artist', href: '/label/artist/add', icon: '👤' },
            { label: 'View Analytics', href: '/label/analytics', icon: '📊' },
            { label: 'Settings', href: '/label/settings', icon: '⚙️' },
          ].map((action) => (
            <Link key={action.label} href={action.href}>
              <LuxuryCard variant="glass" padding="md" hover className="cursor-pointer text-center">
                <div className="text-3xl mb-2">{action.icon}</div>
                <p className="text-luxury-pearl font-medium text-sm">{action.label}</p>
              </LuxuryCard>
            </Link>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <LuxuryCard key={index} variant="elevated" padding="lg">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-luxury-gray-light text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-luxury-gold mb-2">{stat.value}</p>
              <p className="text-xs text-luxury-gray-medium">{stat.change}</p>
            </LuxuryCard>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex gap-4 mb-6 border-b border-luxury-gold border-opacity-20">
            {['overview', 'releases', 'artists', 'analytics'].map((tab) => (
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

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Recent Releases */}
              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Recent Releases
                </h3>
                <div className="space-y-3">
                  {recentReleases.map((release) => (
                    <div
                      key={release.id}
                      className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10 hover:border-opacity-30 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-luxury-pearl">{release.title}</p>
                        <p className="text-sm text-luxury-gray-medium">
                          {release.artist} • {release.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-luxury-gold">{release.streams.toLocaleString()} streams</p>
                        <p className="text-sm text-luxury-gray-medium">{release.revenue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </LuxuryCard>

              {/* Upcoming Releases */}
              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Upcoming Releases
                </h3>
                <div className="space-y-3">
                  {upcomingReleases.map((release) => (
                    <div
                      key={release.id}
                      className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10"
                    >
                      <div>
                        <p className="font-medium text-luxury-pearl">{release.title}</p>
                        <p className="text-sm text-luxury-gray-medium">
                          {release.artist} • {release.releaseDate}
                        </p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        release.status === 'Approved'
                          ? 'bg-green-500 bg-opacity-20 text-green-400'
                          : release.status === 'In Review'
                          ? 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                          : 'bg-blue-500 bg-opacity-20 text-blue-400'
                      }`}>
                        {release.status}
                      </span>
                    </div>
                  ))}
                </div>
              </LuxuryCard>
            </div>
          )}

          {/* Releases Tab */}
          {activeTab === 'releases' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                All Releases
              </h3>
              <div className="text-center py-12">
                <p className="text-luxury-gray-light mb-6">
                  You have {recentReleases.length + upcomingReleases.length} total releases
                </p>
                <LuxuryButton variant="primary">
                  Create New Release
                </LuxuryButton>
              </div>
            </LuxuryCard>
          )}

          {/* Artists Tab */}
          {activeTab === 'artists' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Your Artists
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Luna Synth', tracks: 24, followers: 12500 },
                  { name: 'Rhythm Echo', tracks: 18, followers: 9800 },
                  { name: 'Harmony AI', tracks: 12, followers: 8200 },
                ].map((artist) => (
                  <LuxuryCard key={artist.name} variant="elevated" padding="md">
                    <div className="text-4xl mb-3">🎵</div>
                    <h4 className="text-lg font-bold text-luxury-pearl mb-2">
                      {artist.name}
                    </h4>
                    <div className="space-y-1 text-sm text-luxury-gray-light">
                      <p>{artist.tracks} tracks</p>
                      <p>{artist.followers.toLocaleString()} followers</p>
                    </div>
                    <LuxuryButton variant="ghost" size="sm" fullWidth className="mt-4">
                      View Profile
                    </LuxuryButton>
                  </LuxuryCard>
                ))}
              </div>
            </LuxuryCard>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Analytics
              </h3>
              <div className="text-center py-12">
                <p className="text-luxury-gray-light mb-6">
                  Detailed analytics coming soon
                </p>
                <LuxuryButton variant="secondary">
                  View Full Analytics
                </LuxuryButton>
              </div>
            </LuxuryCard>
          )}
        </motion.div>
      </div>

      <LuxuryFooter />
    </div>
  )
}
