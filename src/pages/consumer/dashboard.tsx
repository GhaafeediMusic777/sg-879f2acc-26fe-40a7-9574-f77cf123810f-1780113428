import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Sparkles, Music, Film, Heart, Settings, LogOut } from 'lucide-react'

export default function ConsumerDashboard() {
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
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'products'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              Products
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
                  Welcome to Your Creative Journey
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Transform your emotional stories into cinematic masterpieces. Start creating your first experience today.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/products/emotional-soundtrack"
                className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <Music className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Create Soundtrack</h3>
                <p className="text-gray-400">Generate an emotional AI soundtrack for your story</p>
              </Link>

              <Link
                href="/products/cinematic-story"
                className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <Film className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Create Film</h3>
                <p className="text-gray-400">Transform your story into a cinematic music video</p>
              </Link>

              <Link
                href="/products/memorial-legacy"
                className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <Heart className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Legacy Film</h3>
                <p className="text-gray-400">Preserve memories as a cinematic tribute</p>
              </Link>
            </div>

            {/* Recent Projects */}
            <div className="bg-black-800 border border-gold/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gold mb-6">Your Projects</h2>
              <div className="text-center py-12">
                <p className="text-gray-400 mb-4">You haven't created any projects yet.</p>
                <Link
                  href="/products"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">0</div>
                <p className="text-gray-400">Projects Created</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">14</div>
                <p className="text-gray-400">Products Available</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">∞</div>
                <p className="text-gray-400">Creative Possibilities</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <p className="text-gray-400">AI Support Ready</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              All Products
            </h1>
            <div className="text-center py-12">
              <p className="text-gray-400 mb-6">Browse and explore all available products</p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
              >
                View All Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
