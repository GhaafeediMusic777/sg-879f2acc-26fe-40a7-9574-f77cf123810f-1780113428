// Technical Infrastructure Configuration

// Error Monitoring
export interface ErrorReport {
  id: string
  timestamp: Date
  level: 'info' | 'warning' | 'error' | 'fatal'
  message: string
  stack?: string
  context: ErrorContext
  userId?: string
  sessionId?: string
  url: string
  userAgent: string
  resolved: boolean
  resolvedAt?: Date
  notes?: string
}

export interface ErrorContext {
  component?: string
  action?: string
  state?: Record<string, any>
  request?: {
    method: string
    url: string
    headers?: Record<string, string>
    body?: any
  }
  response?: {
    status: number
    headers?: Record<string, string>
    body?: any
  }
}

export const ERROR_MONITORING = {
  provider: 'sentry', // or 'rollbar', 'bugsnag', 'datadog'
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  captureConsoleWarnings: true,
  captureUnhandledRejections: true,
  attachStacktrace: true,
  maxBreadcrumbs: 100,
  beforeSend: (event: any) => {
    // Filter sensitive data
    if (event.request?.headers?.authorization) {
      delete event.request.headers.authorization
    }
    return event
  },
}

// Database Backups
export interface BackupConfig {
  enabled: boolean
  frequency: 'hourly' | 'daily' | 'weekly' | 'monthly'
  retention: number // days
  compression: boolean
  encryption: boolean
  offsite: boolean
  provider: 'aws' | 'gcp' | 'azure'
}

export const DATABASE_BACKUP = {
  enabled: true,
  frequency: 'daily' as const,
  retention: 30, // days
  compression: true,
  encryption: true,
  offsite: true,
  provider: 'aws' as const,
  s3Bucket: process.env.BACKUP_S3_BUCKET || '',
  schedule: '02:00', // 2 AM UTC
}

export interface BackupJob {
  id: string
  startTime: Date
  endTime?: Date
  status: 'pending' | 'running' | 'completed' | 'failed'
  size: number
  duration: number // seconds
  error?: string
  checksum?: string
}

// CDN Optimization
export const CDN_CONFIG = {
  provider: 'cloudflare', // or 'cloudfront', 'akamai', 'fastly'
  enabled: true,
  caching: {
    staticAssets: 31536000, // 1 year
    html: 3600, // 1 hour
    api: 300, // 5 minutes
  },
  compression: {
    enabled: true,
    minSize: 1024, // bytes
    types: [
      'text/html',
      'text/css',
      'application/javascript',
      'application/json',
      'image/svg+xml',
    ],
  },
  purgeOn: ['deployment', 'contentUpdate'],
  analytics: true,
}

// Image Optimization
export const IMAGE_OPTIMIZATION = {
  enabled: true,
  formats: ['webp', 'avif', 'jpeg'],
  sizes: [320, 640, 960, 1280, 1920, 2560],
  quality: {
    webp: 85,
    avif: 80,
    jpeg: 85,
  },
  responsive: true,
  lazy: true,
  blur: true,
  placeholder: 'blur',
  optimization: {
    stripMetadata: true,
    removeExif: true,
    autoOrient: true,
  },
}

// Structured Data & Schema Markup
export const SCHEMA_MARKUP = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ghaafeedi Music',
    url: 'https://ghaafeedimusic.com',
    logo: 'https://ghaafeedimusic.com/logo.png',
    description: 'AI music creation and distribution platform',
  },
  product: (product: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: 'Ghaafeedi Music' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }),
  breadcrumb: (items: any[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
}

// Sitemap Generation
export interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  images?: Array<{
    loc: string
    title?: string
    caption?: string
  }>
}

export const SITEMAP_CONFIG = {
  enabled: true,
  maxEntriesPerFile: 50000,
  maxFileSize: 52428800, // 50MB
  generateIndex: true,
  updateFrequency: 'daily',
  includeImages: true,
  includeVideos: true,
  includeNews: false,
}

// Robots.txt Configuration
export const ROBOTS_CONFIG = {
  enabled: true,
  rules: [
    {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/admin/', '/api/', '/private/'],
      crawlDelay: 1,
    },
    {
      userAgent: 'AdsBot-Google',
      allow: ['/'],
    },
  ],
  sitemaps: ['https://ghaafeedimusic.com/sitemap.xml'],
}

// Performance Monitoring
export interface PerformanceMetric {
  name: string
  value: number
  unit: string
  timestamp: Date
  context?: Record<string, any>
}

export const PERFORMANCE_TARGETS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100, // First Input Delay (ms)
  CLS: 0.1, // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600, // Time to First Byte (ms)
  FPS: 60, // Frames Per Second
  JSSize: 200, // KB
  CSSSize: 50, // KB
}

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    enabled: true,
    measurementId: process.env.NEXT_PUBLIC_GA_ID || '',
    trackPageViews: true,
    trackEvents: true,
    trackExceptions: true,
  },
  mixpanel: {
    enabled: true,
    token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
    trackPageViews: true,
    trackEvents: true,
  },
  hotjar: {
    enabled: true,
    siteId: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
    trackHeatmaps: true,
    trackRecordings: true,
  },
}

// Logging Configuration
export const LOGGING_CONFIG = {
  level: process.env.LOG_LEVEL || 'info',
  format: 'json',
  outputs: ['console', 'file'],
  fileSize: 10 * 1024 * 1024, // 10MB
  maxFiles: 10,
  retention: 30, // days
  sensitive: {
    redactPatterns: [
      /password/gi,
      /token/gi,
      /secret/gi,
      /api[_-]?key/gi,
      /authorization/gi,
    ],
  },
}

// API Rate Limiting
export const API_RATE_LIMITS = {
  default: { requests: 100, window: 60 }, // 100 requests per minute
  auth: { requests: 5, window: 900 }, // 5 requests per 15 minutes
  upload: { requests: 10, window: 3600 }, // 10 uploads per hour
  export: { requests: 5, window: 3600 }, // 5 exports per hour
  search: { requests: 30, window: 60 }, // 30 searches per minute
}

// Security Headers
export const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
}
