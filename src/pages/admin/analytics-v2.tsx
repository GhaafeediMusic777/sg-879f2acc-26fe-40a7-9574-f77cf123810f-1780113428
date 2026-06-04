import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LuxuryHeader } from '@/components/LuxuryHeader'
import { LuxuryFooter } from '@/components/LuxuryFooter'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryCard } from '@/components/LuxuryCard'

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('month')

  const metrics = [
    { label: 'Total Transactions', value: '4,250', change: '+12%', icon: '💳' },
    { label: 'Avg Transaction Value', value: '$87.50', change: '+5%', icon: '💰' },
    { label: 'User Retention', value: '78%', change: '+3%', icon: '📈' },
    { label: 'Churn Rate', value: '2.1%', change: '-0.5%', icon: '📉' },
  ]

  const revenueByProduct = [
    { product: 'AI Music Producer', revenue: '$62,000', percentage: 28 },
    { product: 'AI Music Video', revenue: '$58,500', percentage: 26 },
    { product: 'AI Voice Clone', revenue: '$48,900', percentage: 22 },
    { product: 'AI Podcast Producer', revenue: '$26,000', percentage: 12 },
    { product: 'AI Artist Label', revenue: '$24,600', percentage: 12 },
  ]

  const userSegments = [
    { segment: 'Free Users', count: 8420, percentage: 68 },
    { segment: 'Starter Plan', count: 2100, percentage: 17 },
    { segment: 'Pro Plan', count: 1250, percentage: 10 },
    { segment: 'Enterprise', count: 680, percentage: 5 },
  ]

  const conversionFunnel = [
    { stage: 'Visitors', count: 45000, rate: '100%' },
    { stage: 'Sign-ups', count: 12450, rate: '27.7%' },
    { stage: 'Trial Users', count: 8900, rate: '71.4%' },
    { stage: 'Paid Customers', count: 4030, rate: '45.3%' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark">
      <LuxuryHeader />

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex justify-between items-center"
        >
          <div>
            <h1 className="text-5xl font-bold text-luxury-pearl mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-luxury-gray-light">
              Comprehensive platform metrics and insights
            </p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 rounded-lg bg-luxury-dark-secondary border border-luxury-gold border-opacity-20 text-luxury-pearl focus:border-luxury-gold focus:border-opacity-100 transition-all"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="quarter">Last Quarter</option>
            <option value="year">Last Year</option>
          </select>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metrics.map((metric, index) => (
            <LuxuryCard key={index} variant="elevated" padding="lg">
              <div className="text-3xl mb-3">{metric.icon}</div>
              <p className="text-luxury-gray-light text-sm mb-1">{metric.label}</p>
              <p className="text-3xl font-bold text-luxury-gold mb-2">{metric.value}</p>
              <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change} vs last period
              </p>
            </LuxuryCard>
          ))}
        </motion.div>

        {/* Charts Row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        >
          {/* Revenue by Product */}
          <LuxuryCard variant="glass" padding="lg">
            <h3 className="text-2xl font-bold text-luxury-pearl mb-6">
              Revenue by Product
            </h3>
            <div className="space-y-4">
              {revenueByProduct.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-luxury-pearl">{item.product}</p>
                    <p className="text-sm font-bold text-luxury-gold">{item.revenue}</p>
                  </div>
                  <div className="w-full h-2 bg-luxury-dark-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-premium"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </LuxuryCard>

          {/* User Segments */}
          <LuxuryCard variant="glass" padding="lg">
            <h3 className="text-2xl font-bold text-luxury-pearl mb-6">
              User Segments
            </h3>
            <div className="space-y-4">
              {userSegments.map((segment, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-luxury-pearl">{segment.segment}</p>
                    <p className="text-sm font-bold text-luxury-gold">{segment.count.toLocaleString()}</p>
                  </div>
                  <div className="w-full h-2 bg-luxury-dark-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-premium"
                      initial={{ width: 0 }}
                      animate={{ width: `${segment.percentage}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </LuxuryCard>
        </motion.div>

        {/* Conversion Funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <LuxuryCard variant="glass" padding="lg">
            <h3 className="text-2xl font-bold text-luxury-pearl mb-6">
              Conversion Funnel
            </h3>
            <div className="space-y-4">
              {conversionFunnel.map((stage, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-luxury-pearl">{stage.stage}</p>
                    <div className="text-right">
                      <p className="text-sm font-bold text-luxury-gold">{stage.count.toLocaleString()}</p>
                      <p className="text-xs text-luxury-gray-medium">{stage.rate}</p>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-luxury-dark-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold-premium"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </LuxuryCard>
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <LuxuryButton variant="secondary">
            Export as PDF
          </LuxuryButton>
          <LuxuryButton variant="secondary">
            Export as CSV
          </LuxuryButton>
          <LuxuryButton variant="secondary">
            Schedule Report
          </LuxuryButton>
        </motion.div>
      </div>

      <LuxuryFooter />
    </div>
  )
}
