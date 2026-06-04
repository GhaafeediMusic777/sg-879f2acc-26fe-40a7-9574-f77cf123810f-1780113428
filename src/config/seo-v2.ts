// SEO Configuration for Ghaafeedi Music Platform v2

export const SEO_CONFIG = {
  siteName: 'Ghaafeedi Music',
  siteUrl: 'https://ghaafeedimusic.com',
  description: 'Create, produce, and monetize AI-generated music, voice, and video content',
  keywords: [
    'AI music generator',
    'AI voice clone',
    'music production',
    'AI artist marketplace',
    'music video generator',
    'podcast producer',
    'music distribution',
    'royalty-free music',
  ],
  author: 'Ghaafeedi Music',
  locale: 'en_US',
  twitterHandle: '@ghaafeedimusic',
  facebookPage: 'ghaafeedimusic',
}

export const PAGE_SEO = {
  '/': {
    title: 'Ghaafeedi Music - AI Music Creation & Distribution Platform',
    description: 'Create, produce, and monetize AI-generated music, voice, and video content. Join thousands of creators earning from AI.',
    keywords: ['AI music', 'music creation', 'AI generator', 'music platform'],
    ogType: 'website',
  },
  '/products': {
    title: 'Our Products - Ghaafeedi Music',
    description: 'Explore our five powerful AI tools: Voice Clone, Music Producer, Music Video, Podcast Producer, and Artist Label.',
    keywords: ['AI products', 'music tools', 'voice clone', 'music generator'],
  },
  '/products/ai-voice-clone': {
    title: 'AI Voice Clone - Create Your Digital Voice | Ghaafeedi Music',
    description: 'Clone your voice in seconds. Create professional voiceovers, narration, and more with studio-quality output.',
    keywords: ['voice clone', 'voice generator', 'voiceover', 'text to speech'],
  },
  '/products/ai-music-producer': {
    title: 'AI Music Producer - Generate Original Music | Ghaafeedi Music',
    description: 'Generate original, royalty-free music in any genre. From lo-fi beats to orchestral symphonies.',
    keywords: ['music generator', 'AI music', 'royalty-free music', 'music production'],
  },
  '/products/ai-music-video': {
    title: 'AI Music Video - Create Cinematic Videos | Ghaafeedi Music',
    description: 'Create stunning 4K music videos with AI-generated visuals. Perfect for music releases and social media.',
    keywords: ['music video generator', 'AI video', 'video creation', 'cinematic video'],
  },
  '/products/ai-podcast-producer': {
    title: 'AI Podcast Producer - Generate Podcast Episodes | Ghaafeedi Music',
    description: 'Generate full podcast episodes with AI hosts. Auto-editing, mastering, and distribution included.',
    keywords: ['podcast generator', 'AI podcast', 'podcast production', 'audio generation'],
  },
  '/marketplace/ai-artists': {
    title: 'AI Artist Marketplace - Discover & Collaborate | Ghaafeedi Music',
    description: 'Browse and collaborate with AI artists. Find the perfect sound for your project.',
    keywords: ['AI artists', 'music marketplace', 'collaboration', 'music production'],
  },
  '/label/dashboard': {
    title: 'Artist Label Dashboard - Manage Your Music | Ghaafeedi Music',
    description: 'Distribute, monetize, and grow your AI-generated music catalog with our label system.',
    keywords: ['music distribution', 'artist label', 'music publishing', 'royalty tracking'],
  },
  '/admin/dashboard': {
    title: 'Admin Dashboard - Platform Management | Ghaafeedi Music',
    description: 'Comprehensive platform management and analytics dashboard.',
    keywords: ['admin panel', 'analytics', 'platform management'],
  },
}

export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ghaafeedi Music',
    url: 'https://ghaafeedimusic.com',
    logo: 'https://ghaafeedimusic.com/logo.png',
    description: 'AI music creation and distribution platform',
    sameAs: [
      'https://twitter.com/ghaafeedimusic',
      'https://facebook.com/ghaafeedimusic',
      'https://instagram.com/ghaafeedimusic',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@ghaafeedimusic.com',
    },
  },

  product: (productName: string, description: string, price: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'Ghaafeedi Music',
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }),

  service: (serviceName: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Ghaafeedi Music',
    },
  }),
}

// Performance optimization settings
export const PERFORMANCE_CONFIG = {
  imageOptimization: {
    formats: ['webp', 'avif'],
    sizes: [320, 640, 960, 1280, 1920],
    quality: 85,
  },
  caching: {
    staticAssets: 31536000, // 1 year
    dynamicPages: 3600, // 1 hour
    apiResponses: 300, // 5 minutes
  },
  compression: {
    gzip: true,
    brotli: true,
    minifyCSS: true,
    minifyJS: true,
  },
}

// Security headers
export const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
}

// Mobile optimization
export const MOBILE_CONFIG = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  touchIcons: {
    '180x180': '/apple-touch-icon.png',
    '192x192': '/android-chrome-192x192.png',
    '512x512': '/android-chrome-512x512.png',
  },
  themeColor: '#0a0e27',
  mobileMenuBreakpoint: 768,
}

// Sitemap configuration
export const SITEMAP_ROUTES = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/products', priority: 0.9, changefreq: 'weekly' },
  { path: '/products/ai-voice-clone', priority: 0.8, changefreq: 'monthly' },
  { path: '/products/ai-music-producer', priority: 0.8, changefreq: 'monthly' },
  { path: '/products/ai-music-video', priority: 0.8, changefreq: 'monthly' },
  { path: '/products/ai-podcast-producer', priority: 0.8, changefreq: 'monthly' },
  { path: '/marketplace/ai-artists', priority: 0.8, changefreq: 'weekly' },
  { path: '/label/dashboard', priority: 0.7, changefreq: 'monthly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.6, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.5, changefreq: 'yearly' },
]

// Robots.txt configuration
export const ROBOTS_CONFIG = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: https://ghaafeedimusic.com/sitemap.xml
`

// Analytics tracking
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
  hotjarId: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
  mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
}

// Core Web Vitals targets
export const WEB_VITALS_TARGETS = {
  LCP: 2.5, // Largest Contentful Paint (seconds)
  FID: 100, // First Input Delay (milliseconds)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1.8, // First Contentful Paint (seconds)
  TTFB: 0.6, // Time to First Byte (seconds)
}
