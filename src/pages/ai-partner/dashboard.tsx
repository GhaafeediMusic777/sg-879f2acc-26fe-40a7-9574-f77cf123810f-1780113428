import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Sparkles, Code, Zap, TrendingUp, Settings, LogOut } from 'lucide-react'

export default function AIPartnerDashboard() {
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
              onClick={() => setActiveTab('api')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'api'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              API
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'earnings'
                  ? 'bg-gold text-black font-semibold'
                  : 'text-gray-300 hover:text-gold'
              }`}
            >
              Earnings
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
                  AI Artist Partner Dashboard
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Collaborate with Ghaafeedi's AI ecosystem and shape the future of music creation.
              </p>
              <div className="mt-4 text-gold font-semibold">
                Partnership Status: Active - Revenue Sharing Enabled
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <Code className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">API Integration</h3>
                <p className="text-gray-400 mb-4">Access your API keys and documentation</p>
                <button className="text-gold hover:text-gold/80 font-semibold">View Docs →</button>
              </div>

              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <Zap className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Marketplace</h3>
                <p className="text-gray-400 mb-4">List your AI models and services</p>
                <button className="text-gold hover:text-gold/80 font-semibold">Manage Listings →</button>
              </div>

              <div className="group bg-black-800 border border-gold/30 rounded-xl p-6 hover:border-gold/60 transition-all hover:shadow-lg hover:shadow-gold/20">
                <TrendingUp className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-gold mb-2">Performance</h3>
                <p className="text-gray-400 mb-4">Track usage and revenue metrics</p>
                <button className="text-gold hover:text-gold/80 font-semibold">View Analytics →</button>
              </div>
            </div>

            {/* Partnership Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">0</div>
                <p className="text-gray-400">API Calls</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">$0</div>
                <p className="text-gray-400">Earnings</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">0</div>
                <p className="text-gray-400">Models Listed</p>
              </div>
              <div className="bg-black-800 border border-gold/30 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gold mb-2">Revenue Share</div>
                <p className="text-gray-400">50% of API Revenue</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              API Integration
            </h1>
            <div className="bg-black-800 border border-gold/30 rounded-xl p-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-gold font-semibold mb-2">API Key</label>
                  <div className="bg-black-900 border border-gold/20 rounded-lg p-4 font-mono text-sm text-gray-400">
                    sk_live_xxxxxxxxxxxxxxxxxxxx
                  </div>
                </div>
                <div>
                  <label className="block text-gold font-semibold mb-2">API Endpoint</label>
                  <div className="bg-black-900 border border-gold/20 rounded-lg p-4 font-mono text-sm text-gray-400">
                    https://api.ghaafeedimusic.com/v1
                  </div>
                </div>
                <div>
                  <label className="block text-gold font-semibold mb-2">Documentation</label>
                  <p className="text-gray-400 mb-4">Access comprehensive API documentation and code examples</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="space-y-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-purple-400 bg-clip-text text-transparent">
              Earnings & Payouts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black-800 border border-gold/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gold mb-4">Current Balance</h3>
                <div className="text-4xl font-bold text-gold mb-4">$0.00</div>
                <p className="text-gray-400 mb-6">Revenue from API usage and marketplace sales</p>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
                  Request Payout
                </button>
              </div>

              <div className="bg-black-800 border border-gold/30 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gold mb-4">Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black-900 rounded-lg border border-gold/20">
                    <span className="text-gray-300">Bank Transfer</span>
                    <span className="text-gold">Not Set</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black-900 rounded-lg border border-gold/20">
                    <span className="text-gray-300">PayPal</span>
                    <span className="text-gold">Not Set</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black-900 rounded-lg border border-gold/20">
                    <span className="text-gray-300">Crypto Wallet</span>
                    <span className="text-gold">Not Set</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
