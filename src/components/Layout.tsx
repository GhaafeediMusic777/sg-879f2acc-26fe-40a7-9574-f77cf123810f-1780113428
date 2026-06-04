import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Ghaafeedi
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link href="/ai-marketplace" className="hover:text-yellow-400 transition-colors">AI Marketplace</Link></li>
                <li><Link href="/watch-demo" className="hover:text-yellow-400 transition-colors">Watch Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@ghaafeedimusic.com" className="hover:text-yellow-400 transition-colors">Email Support</a></li>
                <li><Link href="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
                <li><Link href="/refund-policy" className="hover:text-yellow-400 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ghaafeedi Music. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
