import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

/**
 * useAuth Hook
 * Provides access to authentication context
 */
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}
