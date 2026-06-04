import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function ConsumerDashboard() {
  const router = useRouter()
  const { user, userProfile, loading } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  // Redirect to sign in if not authenticated
  React.useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-luxury-gray-light">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    { label: 'Credits Used', value: '250 / 1000', icon: '💳' },
    { label: 'Projects Created', value: '12', icon: '📁' },
    { label: 'Total Downloads', value: '1,234', icon: '⬇️' },
    { label: 'Account Status', value: 'Premium', icon: '⭐' },
  ]

  const recentProjects = [
    { id: 1, name: 'Summer Vibes', type: 'AI Music', status: 'Completed', date: '2 days ago' },
    { id: 2, name: 'Podcast Intro', type: 'AI Voice', status: 'Processing', date: '1 hour ago' },
    { id: 3, name: 'Music Video', type: 'AI Video', status: 'Completed', date: '5 days ago' },
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
            Welcome back, {userProfile?.displayName || user.email}!
          </h1>
          <p className="text-luxury-gray-light">
            Manage your projects and create new content
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
            { label: 'Create Music', href: '/products/ai-music-producer', icon: '🎵' },
            { label: 'Clone Voice', href: '/products/ai-voice-clone', icon: '🎤' },
            { label: 'Make Video', href: '/products/ai-music-video', icon: '🎬' },
            { label: 'Create Podcast', href: '/products/ai-podcast-producer', icon: '🎙️' },
          ].map((action) => (
            <Link key={action.label} href={action.href}>
              <LuxuryCard variant="glass" padding="md" hover className="cursor-pointer text-center">
                <div className="text-4xl mb-3">{action.icon}</div>
                <p className="text-luxury-pearl font-medium">{action.label}</p>
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
              <p className="text-2xl font-bold text-luxury-gold">{stat.value}</p>
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
            {['overview', 'projects', 'settings'].map((tab) => (
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
              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Recent Projects
                </h3>
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10 hover:border-opacity-30 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-luxury-pearl">{project.name}</p>
                        <p className="text-sm text-luxury-gray-medium">
                          {project.type} • {project.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-green-500 bg-opacity-20 text-green-400'
                            : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                        }`}>
                          {project.status}
                        </span>
                        <button className="text-luxury-gold hover:text-luxury-gold-premium">
                          →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </LuxuryCard>

              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Upgrade to Premium
                </h3>
                <p className="text-luxury-gray-light mb-6">
                  Get unlimited credits, priority support, and exclusive features
                </p>
                <LuxuryButton variant="primary">
                  View Plans
                </LuxuryButton>
              </LuxuryCard>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                All Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentProjects.map((project) => (
                  <LuxuryCard key={project.id} variant="elevated" padding="md">
                    <h4 className="text-lg font-bold text-luxury-pearl mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm text-luxury-gray-light mb-4">
                      {project.type}
                    </p>
                    <div className="flex gap-2">
                      <LuxuryButton variant="ghost" size="sm" fullWidth>
                        View
                      </LuxuryButton>
                      <LuxuryButton variant="ghost" size="sm" fullWidth>
                        Download
                      </LuxuryButton>
                    </div>
                  </LuxuryCard>
                ))}
              </div>
            </LuxuryCard>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-6">
                Account Settings
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10">
                  <p className="text-sm text-luxury-gray-medium mb-1">Email</p>
                  <p className="text-luxury-pearl font-medium">{user.email}</p>
                </div>
                <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10">
                  <p className="text-sm text-luxury-gray-medium mb-1">Account Type</p>
                  <p className="text-luxury-pearl font-medium">
                    {userProfile?.role === 'consumer' ? 'Consumer' : userProfile?.role}
                  </p>
                </div>
                <LuxuryButton variant="secondary" fullWidth>
                  Change Password
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
