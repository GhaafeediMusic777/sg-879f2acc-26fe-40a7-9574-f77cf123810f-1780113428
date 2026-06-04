import type { NextApiRequest, NextApiResponse } from 'next'
import * as Sentry from '@sentry/nextjs'

interface ErrorData {
  message: string
  stack?: string
  level: 'info' | 'warning' | 'error' | 'fatal'
  context?: Record<string, any>
  userId?: string
  sessionId?: string
}

interface ErrorResponse {
  success: boolean
  errorId?: string
  message: string
}

// Initialize Sentry
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const errorData: ErrorData = req.body

    // Validate required fields
    if (!errorData.message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required field: message',
      })
    }

    // Set user context if provided
    if (errorData.userId) {
      Sentry.setUser({
        id: errorData.userId,
      })
    }

    // Set session context if provided
    if (errorData.sessionId) {
      Sentry.setContext('session', {
        id: errorData.sessionId,
      })
    }

    // Capture the error
    const eventId = Sentry.captureException(new Error(errorData.message), {
      level: errorData.level,
      contexts: {
        custom: errorData.context,
      },
      tags: {
        source: 'client',
        level: errorData.level,
      },
    })

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', {
        message: errorData.message,
        level: errorData.level,
        context: errorData.context,
        eventId,
      })
    }

    return res.status(200).json({
      success: true,
      errorId: eventId,
      message: 'Error reported successfully',
    })
  } catch (error) {
    console.error('Error reporting failed:', error)
    
    Sentry.captureException(error, {
      tags: {
        source: 'error_handler',
      },
    })

    return res.status(500).json({
      success: false,
      message: 'Failed to report error',
    })
  }
}
