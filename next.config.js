/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Export as static HTML for Netlify deployment
  output: 'export',
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  
  // Ignore ESLint warnings during build to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization - disable for static export
  images: {
    unoptimized: true,
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
