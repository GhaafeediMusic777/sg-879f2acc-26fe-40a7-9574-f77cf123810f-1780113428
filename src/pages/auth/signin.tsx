import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { LuxuryButton } from '@/components/LuxuryButton'
import { LuxuryInput } from '@/components/LuxuryInput'
import { LuxuryCard } from '@/components/LuxuryCard'
import toast from 'react-hot-toast'

export default function SignIn() {
  const router = useRouter()
  const { signIn, signInGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    try {
      await signIn(formData.email, formData.password)
      toast.success('Signed in successfully!')
      router.push('/consumer/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Sign in failed')
      setErrors({ submit: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true)
    try {
      await signInGoogle('consumer')
      toast.success('Signed in with Google!')
      router.push('/consumer/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Google sign in failed')
    } finally {
      setGoogleLoading(false)
    }
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
            Welcome Back
          </h1>
          <p className="text-luxury-gray-light">
            Sign in to your Ghaafeedi Music account
          </p>
        </motion.div>

        <LuxuryCard variant="glass" padding="lg">
          <form onSubmit={handleSignIn} className="space-y-6">
            <LuxuryInput
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <div>
              <LuxuryInput
                label="Password"
                type="password"
                placeholder="Your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                error={errors.password}
                required
              />
              <Link href="/auth/forgot-password">
                <a className="text-sm text-luxury-gold hover:text-luxury-gold-premium mt-2 inline-block">
                  Forgot password?
                </a>
              </Link>
            </div>

            {errors.submit && (
              <div className="p-3 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg text-red-400 text-sm">
                {errors.submit}
              </div>
            )}

            <LuxuryButton
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
            >
              Sign In
            </LuxuryButton>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-luxury-gold border-opacity-20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-luxury-dark-secondary text-luxury-gray-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <LuxuryButton
              type="button"
              variant="outline"
              fullWidth
              onClick={handleGoogleSignIn}
              loading={googleLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </LuxuryButton>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-luxury-gray-medium text-sm mt-6">
            Don't have an account?{' '}
            <Link href="/auth/signup">
              <a className="text-luxury-gold hover:text-luxury-gold-premium font-medium">
                Sign up
              </a>
            </Link>
          </p>
        </LuxuryCard>
      </div>
    </div>
  )
}
