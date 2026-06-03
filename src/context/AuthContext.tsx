import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import {
  onAuthChange,
  getUserProfile,
  UserProfile,
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  logOut
} from '@/services/firebase-auth'

interface AuthContextType {
  user: User | null
  userProfile: UserProfile | null
  loading: boolean
  error: string | null
  signUp: (email: string, password: string, role: 'consumer' | 'label' | 'partner', displayName: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signInGoogle: (role: 'consumer' | 'label' | 'partner') => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Listen to auth state changes
  useEffect(() => {
    // Only set up auth listener in browser
    if (typeof window === 'undefined') {
      setLoading(false)
      return
    }

    try {
      const unsubscribe = onAuthChange(async (authUser) => {
        setUser(authUser)

        if (authUser) {
          // Fetch user profile
          try {
            const profile = await getUserProfile(authUser.uid)
            setUserProfile(profile)
          } catch (err) {
            console.error('Error fetching user profile:', err)
            setError('Failed to load user profile')
          }
        } else {
          setUserProfile(null)
        }

        setLoading(false)
      })

      return () => unsubscribe()
    } catch (err) {
      console.error('Error setting up auth listener:', err)
      setLoading(false)
    }
  }, [])

  const handleSignUp = async (
    email: string,
    password: string,
    role: 'consumer' | 'label' | 'partner',
    displayName: string
  ) => {
    try {
      setError(null)
      setLoading(true)
      if (typeof window === 'undefined') {
        throw new Error('Authentication only works in browser')
      }
      await signUpWithEmail(email, password, role, displayName)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async (email: string, password: string) => {
    try {
      setError(null)
      setLoading(true)
      if (typeof window === 'undefined') {
        throw new Error('Authentication only works in browser')
      }
      await signInWithEmail(email, password)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const handleSignInGoogle = async (role: 'consumer' | 'label' | 'partner') => {
    try {
      setError(null)
      setLoading(true)
      if (typeof window === 'undefined') {
        throw new Error('Authentication only works in browser')
      }
      await signInWithGoogle(role)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      setError(null)
      setLoading(true)
      if (typeof window === 'undefined') {
        throw new Error('Authentication only works in browser')
      }
      await logOut()
      setUser(null)
      setUserProfile(null)
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const value: AuthContextType = {
    user,
    userProfile,
    loading,
    error,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signInGoogle: handleSignInGoogle,
    logout: handleLogout,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
