import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'consumer' | 'label' | 'partner'
  redirectTo?: string
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  redirectTo = '/'
}) => {
  const router = useRouter()
  const { user, userProfile, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      // Not authenticated
      if (!user) {
        router.push(redirectTo)
        return
      }

      // Check role if required
      if (requiredRole && userProfile?.role !== requiredRole) {
        router.push('/unauthorized')
        return
      }
    }
  }, [user, userProfile, loading, requiredRole, redirectTo, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto mb-4"></div>
          <p className="text-gold">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole && userProfile?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
