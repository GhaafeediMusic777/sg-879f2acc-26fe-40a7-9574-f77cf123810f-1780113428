/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Ignore ESLint warnings during build to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },

  // Redirects for common typos and old URLs
  async redirects() {
    return [
      // Product redirects
      {
        source: '/product/:id',
        destination: '/products/:id',
        permanent: true,
      },
      // Experience redirects
      {
        source: '/demo',
        destination: '/watch-demo',
        permanent: true,
      },
      {
        source: '/video-demo',
        destination: '/watch-demo',
        permanent: true,
      },
      // Dashboard redirects
      {
        source: '/dashboard',
        destination: '/consumer/dashboard',
        permanent: false,
      },
      // Onboarding redirects
      {
        source: '/onboard',
        destination: '/onboarding',
        permanent: true,
      },
      // Legal redirects
      {
        source: '/tos',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/refunds',
        permanent: true,
      },
      // Support redirects
      {
        source: '/help',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/support',
        permanent: true,
      },
      // AI redirects
      {
        source: '/ai',
        destination: '/ai-marketplace',
        permanent: true,
      },
      {
        source: '/artists',
        destination: '/ai-artists',
        permanent: true,
      },
    ]
  },

  // Rewrites for API routes and clean URLs
  async rewrites() {
    return {
      beforeFiles: [
        // API rewrites
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
      ],
      afterFiles: [
        // Fallback rewrites
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ],
      fallback: [
        // Catch-all for 404s
        {
          source: '/:path*',
          destination: '/404',
        },
      ],
    }
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache static assets
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

    ]
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'Ghaafeedi Music',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Webpack configuration - use Next.js defaults
  webpack: (config) => {
    return config
  },



  // Production source maps
  productionBrowserSourceMaps: false,

  // Compression
  compress: true,

  // PoweredBy header
  poweredByHeader: false,

  // Generate ETags
  generateEtags: true,

  // Trailing slash
  trailingSlash: false,

  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },


}

module.exports = nextConfig
