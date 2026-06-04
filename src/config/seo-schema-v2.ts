// SEO Schema Generation for WCAG Compliance and Search Engine Optimization

export interface SchemaMarkup {
  '@context': string
  '@type': string
  [key: string]: any
}

// Organization Schema
export function generateOrganizationSchema(): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ghaafeedi Music',
    url: 'https://www.ghaafeedimusic.com',
    logo: 'https://www.ghaafeedimusic.com/logo.png',
    description: 'AI-powered music creation platform for creators worldwide',
    sameAs: [
      'https://twitter.com/ghaafeedimusic',
      'https://instagram.com/ghaafeedimusic',
      'https://youtube.com/ghaafeedimusic',
      'https://spotify.com/ghaafeedimusic',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      telephone: '+1-XXX-XXX-XXXX',
      email: 'support@ghaafeedimusic.com',
    },
    founder: {
      '@type': 'Person',
      name: 'Ghaafeedi Team',
    },
    foundingDate: '2024-01-01',
    areaServed: 'Worldwide',
    knowsAbout: [
      'Music Production',
      'AI Technology',
      'Content Creation',
      'Voice Cloning',
      'Music Video Generation',
    ],
  }
}

// Product Schema
export function generateProductSchema(product: {
  id: string
  name: string
  description: string
  price: number
  currency: string
  rating: number
  reviewCount: number
  image: string
  url: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Ghaafeedi Music',
    },
    offers: {
      '@type': 'Offer',
      url: product.url,
      priceCurrency: product.currency,
      price: product.price.toString(),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Ghaafeedi Music',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
    },
  }
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Article Schema
export function generateArticleSchema(article: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
  wordCount: number
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ghaafeedi Music',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ghaafeedimusic.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    wordCount: article.wordCount,
  }
}

// Review Schema
export function generateReviewSchema(review: {
  productName: string
  author: string
  rating: number
  reviewText: string
  datePublished: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewText,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'Product',
      name: review.productName,
    },
  }
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: (index + 1).toString(),
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Video Schema
export function generateVideoSchema(video: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  url: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.url,
  }
}

// Event Schema
export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  image: string
  url: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    image: event.image,
    url: event.url,
    organizer: {
      '@type': 'Organization',
      name: 'Ghaafeedi Music',
    },
  }
}

// Aggregate Rating Schema
export function generateAggregateRatingSchema(rating: {
  productName: string
  ratingValue: number
  reviewCount: number
  bestRating: number
  worstRating: number
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Product',
      name: rating.productName,
    },
    ratingValue: rating.ratingValue.toString(),
    reviewCount: rating.reviewCount.toString(),
    bestRating: rating.bestRating.toString(),
    worstRating: rating.worstRating.toString(),
  }
}

// Pre-built Schemas for Common Pages

export const PRODUCT_SCHEMAS = {
  'ai-voice-clone': generateProductSchema({
    id: 'ai-voice-clone',
    name: 'AI Voice Clone',
    description: 'Create unlimited voiceovers in your own voice using advanced AI technology',
    price: 29.99,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 1250,
    image: 'https://www.ghaafeedimusic.com/products/ai-voice-clone.jpg',
    url: 'https://www.ghaafeedimusic.com/products/ai-voice-clone',
  }),
  'ai-music-producer': generateProductSchema({
    id: 'ai-music-producer',
    name: 'AI Music Producer',
    description: 'Generate unlimited original music in any genre, style, or mood',
    price: 39.99,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 980,
    image: 'https://www.ghaafeedimusic.com/products/ai-music-producer.jpg',
    url: 'https://www.ghaafeedimusic.com/products/ai-music-producer',
  }),
  'ai-music-video': generateProductSchema({
    id: 'ai-music-video',
    name: 'AI Music Video',
    description: 'Create stunning 4K music videos with cinematic visuals',
    price: 49.99,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 750,
    image: 'https://www.ghaafeedimusic.com/products/ai-music-video.jpg',
    url: 'https://www.ghaafeedimusic.com/products/ai-music-video',
  }),
  'ai-podcast-producer': generateProductSchema({
    id: 'ai-podcast-producer',
    name: 'AI Podcast Producer',
    description: 'Generate, edit, and distribute podcast episodes automatically',
    price: 34.99,
    currency: 'USD',
    rating: 4.6,
    reviewCount: 620,
    image: 'https://www.ghaafeedimusic.com/products/ai-podcast-producer.jpg',
    url: 'https://www.ghaafeedimusic.com/products/ai-podcast-producer',
  }),
  'ai-artist-label': generateProductSchema({
    id: 'ai-artist-label',
    name: 'AI Artist Label',
    description: 'Your independent music label. Distribute, monetize, and grow your catalog',
    price: 59.99,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 890,
    image: 'https://www.ghaafeedimusic.com/products/ai-artist-label.jpg',
    url: 'https://www.ghaafeedimusic.com/products/ai-artist-label',
  }),
}

export const FAQ_SCHEMA = generateFAQSchema([
  {
    question: 'What is Ghaafeedi Music?',
    answer: 'Ghaafeedi Music is an AI-powered platform that enables creators to generate music, videos, voiceovers, and podcasts using advanced artificial intelligence technology.',
  },
  {
    question: 'How does AI Voice Clone work?',
    answer: 'AI Voice Clone analyzes your voice sample and creates a digital replica that can generate unlimited voiceovers in your voice.',
  },
  {
    question: 'Can I use the generated content commercially?',
    answer: 'Yes, all content generated using Ghaafeedi Music can be used for commercial purposes with your subscription.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'We support MP3, WAV, FLAC, MP4, and other common audio and video formats.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with our service.',
  },
])

export const ORGANIZATION_SCHEMA = generateOrganizationSchema()

// Helper function to inject schema into page
export function injectSchemaMarkup(schema: SchemaMarkup): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}

// Helper function to generate multiple schemas
export function generateMultipleSchemas(schemas: SchemaMarkup[]): string {
  return `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas,
  })}</script>`
}

// SEO Meta Tags Configuration
export interface SEOMetaTags {
  title: string
  description: string
  keywords: string[]
  image: string
  url: string
  type: 'website' | 'article' | 'product'
  author?: string
  datePublished?: string
  dateModified?: string
}

export function generateMetaTags(seo: SEOMetaTags): Record<string, string> {
  return {
    'og:title': seo.title,
    'og:description': seo.description,
    'og:image': seo.image,
    'og:url': seo.url,
    'og:type': seo.type,
    'twitter:title': seo.title,
    'twitter:description': seo.description,
    'twitter:image': seo.image,
    'twitter:card': 'summary_large_image',
    'description': seo.description,
    'keywords': seo.keywords.join(', '),
    ...(seo.author && { 'author': seo.author }),
    ...(seo.datePublished && { 'article:published_time': seo.datePublished }),
    ...(seo.dateModified && { 'article:modified_time': seo.dateModified }),
  }
}

// Sitemap Generation
export interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export function generateSitemapXML(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `
  <url>
    <loc>${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>
`
  )
  .join('')}
</urlset>`
  return xml
}

// Robots.txt Generation
export function generateRobotsTxt(options: {
  allowAll?: boolean
  disallowPaths?: string[]
  sitemapUrl?: string
}): string {
  let content = ''

  if (options.allowAll) {
    content += 'User-agent: *\nAllow: /\n\n'
  } else {
    content += 'User-agent: *\n'
    if (options.disallowPaths) {
      options.disallowPaths.forEach((path) => {
        content += `Disallow: ${path}\n`
      })
    }
    content += '\n'
  }

  if (options.sitemapUrl) {
    content += `Sitemap: ${options.sitemapUrl}\n`
  }

  return content
}

// Open Graph Tags
export function generateOpenGraphTags(seo: SEOMetaTags): Record<string, string> {
  return {
    'og:title': seo.title,
    'og:description': seo.description,
    'og:image': seo.image,
    'og:url': seo.url,
    'og:type': seo.type,
    'og:site_name': 'Ghaafeedi Music',
  }
}

// Twitter Card Tags
export function generateTwitterCardTags(seo: SEOMetaTags): Record<string, string> {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': seo.title,
    'twitter:description': seo.description,
    'twitter:image': seo.image,
    'twitter:site': '@ghaafeedimusic',
  }
}
