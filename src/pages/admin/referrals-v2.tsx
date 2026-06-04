import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function ReferralProgram() {
  const [activeTab, setActiveTab] = useState('overview')

  const referralStats = [
    { label: 'Total Referrals', value: '3,450', icon: '🔗', change: '+520 this month' },
    { label: 'Conversion Rate', value: '24.5%', icon: '📈', change: '+2.3% vs last month' },
    { label: 'Rewards Distributed', value: '$18,900', icon: '🎁', change: '+$3,200 this month' },
    { label: 'Active Referrers', value: '1,240', icon: '👥', change: '+180 this month' },
  ]

  const referralTiers = [
    {
      tier: 'Bronze',
      referrals: '1-5',
      reward: '$10 credit',
      bonus: 'None',
      description: 'Get started with referrals'
    },
    {
      tier: 'Silver',
      referrals: '6-20',
      reward: '$15 credit',
      bonus: '+$50 bonus at 10 referrals',
      description: 'Growing referrer'
    },
    {
      tier: 'Gold',
      referrals: '21-50',
      reward: '$20 credit',
      bonus: '+$200 bonus at 25 referrals',
      description: 'Established referrer'
    },
    {
      tier: 'Platinum',
      referrals: '50+',
      reward: '$25 credit',
      bonus: '+$500 bonus + 5% lifetime',
      description: 'VIP referrer'
    },
  ]

  const topReferrers = [
    { name: 'Alex Johnson', referrals: 87, rewards: '$1,305', status: 'Platinum' },
    { name: 'Sarah Creative', referrals: 64, rewards: '$960', status: 'Gold' },
    { name: 'Mike Producer', referrals: 52, rewards: '$780', status: 'Gold' },
    { name: 'Emma Designer', referrals: 38, rewards: '$570', status: 'Silver' },
  ]

  const recentReferrals = [
    { referrer: 'Alex Johnson', referred: 'John Doe', date: '2 hours ago', status: 'Converted', reward: '$10' },
    { referrer: 'Sarah Creative', referred: 'Jane Smith', date: '4 hours ago', status: 'Converted', reward: '$15' },
    { referrer: 'Mike Producer', referred: 'Bob Wilson', date: '1 day ago', status: 'Pending', reward: 'Pending' },
    { referrer: 'Emma Designer', referred: 'Lisa Anderson', date: '1 day ago', status: 'Converted', reward: '$15' },
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
            Referral Program
          </h1>
          <p className="text-luxury-gray-light">
            Manage user referrals and rewards
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {referralStats.map((stat, index) => (
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
          transition={{ delay: 0.2 }}
        >
          <div className="flex gap-4 mb-6 border-b border-luxury-gold border-opacity-20">
            {['overview', 'tiers', 'referrers', 'activity'].map((tab) => (
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
                  Program Overview
                </h3>
                <div className="space-y-4 text-luxury-gray-light">
                  <p>
                    The Ghaafeedi Music Referral Program rewards users for inviting friends to join the platform. Each successful referral earns credits and bonuses based on tier level.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">🎁 Earn Rewards</p>
                      <p className="text-sm">$10-$25 per successful referral</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">📈 Tier Bonuses</p>
                      <p className="text-sm">Extra bonuses at milestone referrals</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">💰 Lifetime Rewards</p>
                      <p className="text-sm">Platinum members get 5% lifetime</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">🔗 Easy Sharing</p>
                      <p className="text-sm">Unique referral links and codes</p>
                    </div>
                  </div>
                </div>
              </LuxuryCard>

              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Program Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-luxury-dark-secondary rounded-lg">
                    <span className="text-luxury-pearl">Referral Reward Amount</span>
                    <span className="text-luxury-gold font-bold">$10 - $25</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-luxury-dark-secondary rounded-lg">
                    <span className="text-luxury-pearl">Conversion Requirement</span>
                    <span className="text-luxury-gold font-bold">First Purchase</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-luxury-dark-secondary rounded-lg">
                    <span className="text-luxury-pearl">Reward Validity</span>
                    <span className="text-luxury-gold font-bold">Lifetime</span>
                  </div>
                </div>
              </LuxuryCard>
            </div>
          )}

          {/* Tiers Tab */}
          {activeTab === 'tiers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {referralTiers.map((tier, idx) => (
                <LuxuryCard key={idx} variant="elevated" padding="lg">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-2">
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-luxury-gray-medium mb-4">{tier.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-luxury-gray-light mb-1">Referrals Required</p>
                      <p className="text-lg font-bold text-luxury-pearl">{tier.referrals}</p>
                    </div>
                    <div>
                      <p className="text-xs text-luxury-gray-light mb-1">Per Referral Reward</p>
                      <p className="text-lg font-bold text-luxury-gold">{tier.reward}</p>
                    </div>
                    <div>
                      <p className="text-xs text-luxury-gray-light mb-1">Milestone Bonus</p>
                      <p className="text-luxury-pearl">{tier.bonus}</p>
                    </div>
                  </div>
                </LuxuryCard>
              ))}
            </div>
          )}

          {/* Referrers Tab */}
          {activeTab === 'referrers' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Top Referrers
              </h3>
              <div className="space-y-3">
                {topReferrers.map((referrer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10 hover:border-opacity-30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-luxury-pearl">{referrer.name}</p>
                      <p className="text-sm text-luxury-gray-medium">
                        {referrer.referrals} referrals
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-luxury-gold">{referrer.rewards}</p>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        referrer.status === 'Platinum'
                          ? 'bg-purple-500 bg-opacity-20 text-purple-400'
                          : referrer.status === 'Gold'
                          ? 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                          : 'bg-gray-500 bg-opacity-20 text-gray-400'
                      }`}>
                        {referrer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Recent Referral Activity
              </h3>
              <div className="space-y-3">
                {recentReferrals.map((referral, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10"
                  >
                    <div>
                      <p className="font-medium text-luxury-pearl">{referral.referrer}</p>
                      <p className="text-sm text-luxury-gray-medium">
                        Referred {referral.referred} • {referral.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full mb-2 block ${
                        referral.status === 'Converted'
                          ? 'bg-green-500 bg-opacity-20 text-green-400'
                          : 'bg-yellow-500 bg-opacity-20 text-yellow-400'
                      }`}>
                        {referral.status}
                      </span>
                      <p className="text-luxury-gold font-bold">{referral.reward}</p>
                    </div>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          )}
        </motion.div>
      </div>

      <LuxuryFooter />
    </div>
  )
}
