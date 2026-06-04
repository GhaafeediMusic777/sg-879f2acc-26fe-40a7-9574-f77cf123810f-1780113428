import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function AffiliateProgram() {
  const [activeTab, setActiveTab] = useState('overview')

  const affiliateStats = [
    { label: 'Active Affiliates', value: '342', icon: '🤝', change: '+45 this month' },
    { label: 'Total Commissions', value: '$52,340', icon: '💰', change: '+$8,200 this month' },
    { label: 'Referred Customers', value: '1,240', icon: '👥', change: '+180 this month' },
    { label: 'Avg Commission Rate', value: '15%', icon: '📊', change: 'Competitive' },
  ]

  const topAffiliates = [
    { name: 'Tech Influencer Pro', referrals: 245, commission: '$3,675', status: 'Active' },
    { name: 'Music Creator Hub', referrals: 189, commission: '$2,835', status: 'Active' },
    { name: 'Digital Marketing Co', referrals: 156, commission: '$2,340', status: 'Active' },
    { name: 'Content Creator Network', referrals: 142, commission: '$2,130', status: 'Active' },
  ]

  const commissionTiers = [
    { tier: 'Bronze', referrals: '0-50', rate: '10%', benefits: 'Basic support' },
    { tier: 'Silver', referrals: '51-200', rate: '15%', benefits: 'Priority support + marketing materials' },
    { tier: 'Gold', referrals: '201-500', rate: '20%', benefits: 'Dedicated manager + co-marketing' },
    { tier: 'Platinum', referrals: '500+', rate: '25%', benefits: 'VIP support + custom deals' },
  ]

  const pendingPayouts = [
    { affiliate: 'Tech Influencer Pro', amount: '$1,245', dueDate: 'June 10, 2026' },
    { affiliate: 'Music Creator Hub', amount: '$890', dueDate: 'June 10, 2026' },
    { affiliate: 'Digital Marketing Co', amount: '$756', dueDate: 'June 15, 2026' },
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
            Affiliate Program
          </h1>
          <p className="text-luxury-gray-light">
            Manage affiliates, commissions, and payouts
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {affiliateStats.map((stat, index) => (
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
            {['overview', 'affiliates', 'tiers', 'payouts'].map((tab) => (
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
                    The Ghaafeedi Music Affiliate Program allows partners to earn commissions by referring customers to our platform. Affiliates receive a percentage of each customer's first purchase and ongoing subscription revenue.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">💰 Earn Commissions</p>
                      <p className="text-sm">10-25% commission based on tier</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">📈 Recurring Revenue</p>
                      <p className="text-sm">Earn on customer lifetime value</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">🎁 Marketing Support</p>
                      <p className="text-sm">Free promotional materials</p>
                    </div>
                    <div className="p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-20">
                      <p className="font-bold text-luxury-pearl mb-2">👥 Dedicated Support</p>
                      <p className="text-sm">Priority affiliate manager</p>
                    </div>
                  </div>
                </div>
              </LuxuryCard>

              <LuxuryCard variant="glass" padding="lg">
                <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-4">
                  <LuxuryButton variant="primary">
                    Invite New Affiliate
                  </LuxuryButton>
                  <LuxuryButton variant="secondary">
                    View Marketing Materials
                  </LuxuryButton>
                  <LuxuryButton variant="secondary">
                    Download Reports
                  </LuxuryButton>
                </div>
              </LuxuryCard>
            </div>
          )}

          {/* Affiliates Tab */}
          {activeTab === 'affiliates' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Top Affiliates
              </h3>
              <div className="space-y-3">
                {topAffiliates.map((affiliate, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10 hover:border-opacity-30 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-luxury-pearl">{affiliate.name}</p>
                      <p className="text-sm text-luxury-gray-medium">
                        {affiliate.referrals} referrals
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-luxury-gold">{affiliate.commission}</p>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-400">
                        {affiliate.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </LuxuryCard>
          )}

          {/* Tiers Tab */}
          {activeTab === 'tiers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commissionTiers.map((tier, idx) => (
                <LuxuryCard key={idx} variant="elevated" padding="lg">
                  <h3 className="text-2xl font-bold text-luxury-gold mb-4">
                    {tier.tier}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-luxury-gray-light mb-1">Referrals Required</p>
                      <p className="text-lg font-bold text-luxury-pearl">{tier.referrals}</p>
                    </div>
                    <div>
                      <p className="text-sm text-luxury-gray-light mb-1">Commission Rate</p>
                      <p className="text-2xl font-bold text-luxury-gold">{tier.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-luxury-gray-light mb-1">Benefits</p>
                      <p className="text-luxury-pearl">{tier.benefits}</p>
                    </div>
                  </div>
                </LuxuryCard>
              ))}
            </div>
          )}

          {/* Payouts Tab */}
          {activeTab === 'payouts' && (
            <LuxuryCard variant="glass" padding="lg">
              <h3 className="text-2xl font-bold text-luxury-pearl mb-4">
                Pending Payouts
              </h3>
              <div className="space-y-3">
                {pendingPayouts.map((payout, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-luxury-dark-secondary rounded-lg border border-luxury-gold border-opacity-10"
                  >
                    <div>
                      <p className="font-medium text-luxury-pearl">{payout.affiliate}</p>
                      <p className="text-sm text-luxury-gray-medium">
                        Due: {payout.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-luxury-gold">{payout.amount}</p>
                      <LuxuryButton variant="ghost" size="sm" className="mt-2">
                        Process
                      </LuxuryButton>
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
