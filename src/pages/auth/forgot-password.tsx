import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryInput } from '@/components/LuxuryInput'
import { LuxuryCard } from '@/components/LuxuryCard'
import toast from 'react-hot-toast'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }

    setLoading(true)
    try {
      // TODO: Implement password reset email sending
      // For now, just show success message
      toast.success('Password reset link sent to your email!')
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to send reset link')
      toast.error(err.message || 'Failed to send reset link')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark pt-24 pb-12">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-luxury-gold to-luxury-gold-premium flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-luxury-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-luxury-pearl mb-2">
              Check your email
            </h1>
            <p className="text-luxury-gray-light mb-6">
              We've sent a password reset link to <span className="text-luxury-gold">{email}</span>
            </p>

            <LuxuryCard variant="glass" padding="lg" className="mb-6">
              <p className="text-sm text-luxury-gray-medium mb-4">
                The link will expire in 24 hours. If you don't see the email, check your spam folder.
              </p>
            </LuxuryCard>

            <Link href="/auth/signin">
              <LuxuryButton variant="primary" fullWidth>
                Back to Sign In
              </LuxuryButton>
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-dark via-luxury-deep-space to-luxury-dark pt-24 pb-12">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-luxury-pearl mb-2">
            Reset Password
          </h1>
          <p className="text-luxury-gray-light">
            Enter your email to receive a password reset link
          </p>
        </motion.div>

        <LuxuryCard variant="glass" padding="lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <LuxuryInput
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
              required
            />

            <LuxuryButton
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
            >
              Send Reset Link
            </LuxuryButton>

            <div className="text-center">
              <Link href="/auth/signin">
                <a className="text-sm text-luxury-gold hover:text-luxury-gold-premium">
                  Back to Sign In
                </a>
              </Link>
            </div>
          </form>
        </LuxuryCard>
      </div>
    </div>
  )
}
