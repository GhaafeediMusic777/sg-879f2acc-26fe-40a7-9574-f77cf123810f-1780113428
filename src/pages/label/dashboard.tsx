import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Sparkles, Music, Users, BarChart3, Settings, LogOut } from 'lucide-react'

export default function LabelDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gold/20 bg-black-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-gold" />
            <span className="text-xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              GHAAFEEDI
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('artists')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'artists'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              Artists
            </button>
            <button
              onClick={() => setActiveTab('releases')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'releases'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              Releases
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-gold transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-gold/10 to-purple-500/10 border border-gold/30 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
                  Label Partnership Dashboard
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Manage your artists, releases, and unlock unlimited production capabilities with Ghaafeedi Music.
              </p>
              <div className="mt-4 text-gold font-semibold">
                Subscription: $999/month - Unlimited Production
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <Users className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Manage Artists</h3>
                <p className="text-gray-400 mb-4">Add and manage your roster of artists</p>
                <button className="text-gold hover:text-gold/80 font-semibold">Get Started →</button>
              </div>

              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <Music className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Create Release</h3>
                <p className="text-gray-400 mb-4">Produce unlimited cinematic music videos</p>
                <button className="text-gold hover:text-gold/80 font-semibold">Get Started →</button>
              </div>

              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <BarChart3 className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Analytics</h3>
                <p className="text-gray-400 mb-4">Track performance and engagement metrics</p>
                <button className="text-gold hover:text-gold/80 font-semibold">View Stats →</button>
              </div>
            </div>

            {/* Label Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">0</div>
                <p className="text-gray-400">Artists</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">0</div>
                <p className="text-gray-400">Releases</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">∞</div>
                <p className="text-gray-400">Production Capacity</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">$999</div>
                <p className="text-gray-400">Monthly Subscription</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'artists' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              Your Artists
            </h1>
            <div className="bg-black-800 border border-gold/30 rounded-xl p-12 text-center">
              <p className="text-gray-400 mb-6">You haven't added any artists yet.</p>
              <button className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                Add Your First Artist
              </button>
            </div>
          </div>
        )}

        {activeTab === 'releases' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              Releases
            </h1>
            <div className="bg-black-800 border border-gold/30 rounded-xl p-12 text-center">
              <p className="text-gray-400 mb-6">No releases yet. Start creating unlimited content!</p>
              <button className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                Create Your First Release
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
