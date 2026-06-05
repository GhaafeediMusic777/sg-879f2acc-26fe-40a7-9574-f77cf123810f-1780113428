/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Export as static HTML for Netlify deployment
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  
  // Ignore ESLint warnings during build to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Swallow warnings
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  // Note: Redirects, rewrites, and headers are not supported with static export
  // Use Netlify's netlify.toml file for redirects and headers

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: 'Ghaafeedi Music',
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },

  // Webpack configuration for performance
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
        },
      }
    }
    return config
  },



  // Production source maps
  productionBrowserSourceMaps: false,

  // Compression
  compress: true,

  // PoweredBy header
  poweredByHeader: false,

  // Minification
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,

  // Generate ETags
  generateEtags: true,

  // SWC minification
  swcMinify: true,

  // Trailing slash
  trailingSlash: false,

  // Preload critical resources
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // TypeScript
  typescript: {
    tsconfigPath: './tsconfig.json',
  },




}

module.exports = nextConfig
