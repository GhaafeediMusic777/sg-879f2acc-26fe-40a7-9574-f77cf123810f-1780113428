import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function AdminDashboard() {
  const router = useRouter()
  const { user } = useAuth()
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
    { label: 'Total Users', value: '12,450', icon: '👥', change: '+850 this month' },
    { label: 'Total Revenue', value: '$245,680', icon: '💰', change: '+$45,200 this month' },
    { label: 'Active Projects', value: '3,240', icon: '📁', change: '+420 this week' },
    { label: 'Platform Health', value: '99.8%', icon: '🟢', change: '0 incidents' },
  ]

  const recentUsers = [
    { id: 1, name: 'John Filmmaker', email: 'john@example.com', joined: '2 hours ago', status: 'Active' },
    { id: 2, name: 'Sarah Producer', email: 'sarah@example.com', joined: '5 hours ago', status: 'Active' },
    { id: 3, name: 'Mike Artist', email: 'mike@example.com', joined: '1 day ago', status: 'Inactive' },
  ]

  const topProducts = [
    { name: 'AI Music Producer', sales: 1240, revenue: '$62,000' },
    { name: 'AI Voice Clone', sales: 980, revenue: '$48,900' },
    { name: 'AI Music Video', sales: 650, revenue: '$58,500' },
    { name: 'AI Podcast Producer', sales: 520, revenue: '$26,000' },
  ]

  const adminActions = [
    { label: 'Manage Users', href: '/admin/users', icon: '👥' },
    { label: 'View Analytics', href: '/admin/analytics', icon: '📊' },
    { label: 'Manage Products', href: '/admin/products', icon: '📦' },
    { label: 'Support Tickets', href: '/admin/support', icon: '🎫' },
    { label: 'Affiliate Program', href: '/admin/affiliates', icon: '🤝' },
    { label: 'Referral System', href: '/admin/referrals', icon: '🔗' },
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
            Admin Dashboard
          </h1>
          <p className="text-luxury-gray-light">
            Platform management and analytics
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {adminActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <LuxuryCard variant="glass" padding="md" hover className="cursor-pointer text-center">
                <div className="text-3xl mb-2">{action.icon}</div>
                <p className="text-luxury-pearl font-medium text-xs">{action.label}</p>
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
            {['overview', 'users', 'products', 'analytics'].map((tab) => (
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
              {/* Recent Users */}
              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Recent Users
                </h3>
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10 hover:border-opacity-30 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-luxury-pearl">{user.name}</p>
                        <p className="text-sm text-luxury-gray-medium">
                          {user.email} • {user.joined}
                        </p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        user.status === 'Active'
                          ? 'bg-green-500 bg-opacity-20 text-green-400'
                          : 'bg-gray-500 bg-opacity-20 text-gray-400'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  ))}
                </div>
              </LuxuryCard>

              {/* Top Products */}
              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Top Products
                </h3>
                <div className="space-y-3">
                  {topProducts.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10"
                    >
                      <div>
                        <p className="font-medium text-luxury-pearl">{product.name}</p>
                        <p className="text-sm text-luxury-gray-medium">{product.sales} sales</p>
                      </div>
                      <p className="text-lg font-bold text-luxury-gold">{product.revenue}</p>
                    </div>
                  ))}
                </div>
              </LuxuryCard>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                User Management
              </h3>
              <div className="text-center py-12">
                <p className="text-luxury-gray-light mb-6">
                  Advanced user management tools
                </p>
                <LuxuryButton variant="primary">
                  Manage Users
                </LuxuryButton>
              </div>
            </LuxuryCard>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Product Management
              </h3>
              <div className="text-center py-12">
                <p className="text-luxury-gray-light mb-6">
                  Manage products, pricing, and features
                </p>
                <LuxuryButton variant="primary">
                  Manage Products
                </LuxuryButton>
              </div>
            </LuxuryCard>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Advanced Analytics
              </h3>
              <div className="text-center py-12">
                <p className="text-luxury-gray-light mb-6">
                  Detailed analytics and reporting
                </p>
                <LuxuryButton variant="primary">
                  View Analytics
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
