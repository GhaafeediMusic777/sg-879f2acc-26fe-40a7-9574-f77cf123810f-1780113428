import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface SafeLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  fallback?: string
  [key: string]: any
}

/**
 * SafeLink Component
 * Handles invalid routes and provides fallback navigation
 */
export default function SafeLink({
  href,
  children,
  className = '',
  onClick,
  fallback = '/',
  ...props
}: SafeLinkProps) {
  const router = useRouter()

  // Validate href
  const validHref = href && typeof href === 'string' && href.length > 0 ? href : fallback

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      if (onClick) {
        onClick()
      }
    } catch (error) {
      console.error('Error in SafeLink click handler:', error)
      e.preventDefault()
      router.push(fallback)
    }
  }

  return (
    <Link
      href={validHref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}

/**
 * Safe navigation helper
 */
export const safeNavigate = (router: any, href: string, fallback: string = '/') => {
  try {
    if (href && typeof href === 'string' && href.length > 0) {
      router.push(href)
    } else {
      router.push(fallback)
    }
  } catch (error) {
    console.error('Navigation error:', error)
    router.push(fallback)
  }
}
