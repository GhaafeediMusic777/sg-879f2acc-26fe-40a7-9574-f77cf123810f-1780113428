import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthProvider } from '@/context/AuthContext'
import { Toaster } from '@/components/ui/toaster'
import { SophiaChatWidget } from '@/components/SophiaChatWidget'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-black-950 via-black-900 to-black-950 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center space-y-6">
            <h1 className="text-4xl font-bold text-red-400">Something went wrong</h1>
            <p className="text-gray-400">{this.state.error?.message || 'An unexpected error occurred'}</p>
            <button
              onClick={() => window.location.href = '/'}
              className="px-6 py-3 bg-gradient-to-r from-gold to-purple-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Return to Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// App Component with Error Handling and Auth Provider
function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Handle navigation errors
    const handleRouteChangeError = (error: Error) => {
      console.error('Route change error:', error)
    }

    router.events?.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events?.off('routeChangeError', handleRouteChangeError)
    }
  }, [router.events])

  // Handle uncaught errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Uncaught error:', event.error)
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled rejection:', event.reason)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster />
        <SophiaChatWidget />
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
