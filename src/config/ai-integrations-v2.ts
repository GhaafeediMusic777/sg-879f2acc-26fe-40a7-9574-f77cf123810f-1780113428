// Future-Proof AI Integration Architecture

export interface AIProvider {
  id: string
  name: string
  category: 'text' | 'voice' | 'image' | 'video' | 'music' | 'payment'
  status: 'connected' | 'configured' | 'available' | 'coming-soon'
  apiKey?: string
  baseUrl?: string
  rateLimit: {
    requestsPerMinute: number
    tokensPerMinute?: number
  }
  features: string[]
  pricing: {
    model: 'per-request' | 'per-token' | 'subscription' | 'hybrid'
    costPerUnit: number
    currency: string
  }
  documentation: string
  webhookSupport: boolean
  asyncSupport: boolean
}

export interface IntegrationConfig {
  providers: Record<string, AIProvider>
  fallbacks: Record<string, string[]>
  retryPolicy: {
    maxRetries: number
    initialDelayMs: number
    maxDelayMs: number
    backoffMultiplier: number
  }
  monitoring: {
    enabled: boolean
    trackUsage: boolean
    trackErrors: boolean
    trackLatency: boolean
  }
}

// AI Providers Configuration

export const AI_PROVIDERS: Record<string, AIProvider> = {
  // Text & Language Models
  'openai': {
    id: 'openai',
    name: 'OpenAI',
    category: 'text',
    status: 'available',
    rateLimit: {
      requestsPerMinute: 3500,
      tokensPerMinute: 90000,
    },
    features: [
      'GPT-4 Turbo',
      'GPT-4',
      'GPT-3.5 Turbo',
      'Text Completion',
      'Chat Completion',
      'Embeddings',
      'Fine-tuning',
    ],
    pricing: {
      model: 'per-token',
      costPerUnit: 0.00003, // Per 1K tokens
      currency: 'USD',
    },
    documentation: 'https://platform.openai.com/docs',
    webhookSupport: false,
    asyncSupport: true,
  },

  // Voice & Audio
  'elevenlabs': {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'voice',
    status: 'available',
    rateLimit: {
      requestsPerMinute: 100,
    },
    features: [
      'Text-to-Speech',
      'Voice Cloning',
      'Voice Library',
      'Multilingual',
      'Real-time Voice',
      'Audio Native',
    ],
    pricing: {
      model: 'per-request',
      costPerUnit: 0.30, // Per 1000 characters
      currency: 'USD',
    },
    documentation: 'https://elevenlabs.io/docs',
    webhookSupport: true,
    asyncSupport: true,
  },

  'suno': {
    id: 'suno',
    name: 'Suno',
    category: 'music',
    status: 'coming-soon',
    rateLimit: {
      requestsPerMinute: 50,
    },
    features: [
      'AI Music Generation',
      'Lyrics Generation',
      'Style Control',
      'Vocal Synthesis',
      'Instrumental Generation',
    ],
    pricing: {
      model: 'subscription',
      costPerUnit: 10, // Per month
      currency: 'USD',
    },
    documentation: 'https://suno.com/api',
    webhookSupport: true,
    asyncSupport: true,
  },

  'udio': {
    id: 'udio',
    name: 'Udio',
    category: 'music',
    status: 'coming-soon',
    rateLimit: {
      requestsPerMinute: 50,
    },
    features: [
      'AI Music Generation',
      'Prompt-based Creation',
      'Style Transfer',
      'Remix Generation',
      'Vocal Synthesis',
    ],
    pricing: {
      model: 'subscription',
      costPerUnit: 15, // Per month
      currency: 'USD',
    },
    documentation: 'https://udio.com/api',
    webhookSupport: true,
    asyncSupport: true,
  },

  // Video Generation
  'heygen': {
    id: 'heygen',
    name: 'HeyGen',
    category: 'video',
    status: 'available',
    rateLimit: {
      requestsPerMinute: 100,
    },
    features: [
      'AI Avatar Video',
      'Talking Head',
      'Video Synthesis',
      'Lip Sync',
      'Multi-language',
      'Custom Avatars',
    ],
    pricing: {
      model: 'per-request',
      costPerUnit: 0.50, // Per minute
      currency: 'USD',
    },
    documentation: 'https://docs.heygen.com',
    webhookSupport: true,
    asyncSupport: true,
  },

  'runway': {
    id: 'runway',
    name: 'Runway',
    category: 'video',
    status: 'coming-soon',
    rateLimit: {
      requestsPerMinute: 50,
    },
    features: [
      'Video Generation',
      'Video Editing',
      'Motion Tracking',
      'Green Screen',
      'Style Transfer',
      'Object Removal',
    ],
    pricing: {
      model: 'subscription',
      costPerUnit: 35, // Per month
      currency: 'USD',
    },
    documentation: 'https://runwayml.com/api',
    webhookSupport: true,
    asyncSupport: true,
  },

  'kling': {
    id: 'kling',
    name: 'Kling',
    category: 'video',
    status: 'coming-soon',
    rateLimit: {
      requestsPerMinute: 30,
    },
    features: [
      'Text-to-Video',
      'Image-to-Video',
      'Video Extension',
      'High Resolution',
      'Realistic Motion',
    ],
    pricing: {
      model: 'per-request',
      costPerUnit: 1.0, // Per video
      currency: 'USD',
    },
    documentation: 'https://kling.kuaishou.com/api',
    webhookSupport: true,
    asyncSupport: true,
  },

  // Image Generation
  'midjourney': {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    status: 'coming-soon',
    rateLimit: {
      requestsPerMinute: 100,
    },
    features: [
      'Image Generation',
      'Style Transfer',
      'Upscaling',
      'Variation Generation',
      'Inpainting',
      'Outpainting',
    ],
    pricing: {
      model: 'subscription',
      costPerUnit: 30, // Per month
      currency: 'USD',
    },
    documentation: 'https://midjourney.com/api',
    webhookSupport: false,
    asyncSupport: true,
  },

  'dall-e': {
    id: 'dall-e',
    name: 'DALL-E (OpenAI)',
    category: 'image',
    status: 'available',
    rateLimit: {
      requestsPerMinute: 500,
    },
    features: [
      'Image Generation',
      'Image Editing',
      'Image Variation',
      'High Resolution',
      'Multiple Styles',
    ],
    pricing: {
      model: 'per-request',
      costPerUnit: 0.02, // Per image (1024x1024)
      currency: 'USD',
    },
    documentation: 'https://platform.openai.com/docs/guides/images',
    webhookSupport: false,
    asyncSupport: true,
  },

  // Payment Processors
  'stripe': {
    id: 'stripe',
    name: 'Stripe',
    category: 'payment',
    status: 'available',
    rateLimit: {
      requestsPerMinute: 1000,
    },
    features: [
      'Payment Processing',
      'Subscription Management',
      'Invoicing',
      'Refunds',
      'Dispute Management',
      'Webhook Events',
      'PCI Compliance',
    ],
    pricing: {
      model: 'hybrid',
      costPerUnit: 0.029, // 2.9% + $0.30 per transaction
      currency: 'USD',
    },
    documentation: 'https://stripe.com/docs',
    webhookSupport: true,
    asyncSupport: true,
  },

  'dodo-payments': {
    id: 'dodo-payments',
    name: 'Dodo Payments',
    category: 'payment',
    status: 'connected',
    rateLimit: {
      requestsPerMinute: 500,
    },
    features: [
      'Payment Processing',
      'Checkout',
      'Webhooks',
      'Transaction Tracking',
      'Refund Processing',
    ],
    pricing: {
      model: 'hybrid',
      costPerUnit: 0.025, // 2.5% + $0.25 per transaction
      currency: 'USD',
    },
    documentation: 'https://dodo.payments/docs',
    webhookSupport: true,
    asyncSupport: true,
  },
}

// Integration Configuration
export const INTEGRATION_CONFIG: IntegrationConfig = {
  providers: AI_PROVIDERS,
  fallbacks: {
    'text-generation': ['openai', 'anthropic'],
    'voice-synthesis': ['elevenlabs', 'google-cloud-tts'],
    'music-generation': ['suno', 'udio'],
    'video-generation': ['heygen', 'runway', 'kling'],
    'image-generation': ['dall-e', 'midjourney', 'stable-diffusion'],
    'payment-processing': ['stripe', 'dodo-payments'],
  },
  retryPolicy: {
    maxRetries: 3,
    initialDelayMs: 1000,
    maxDelayMs: 30000,
    backoffMultiplier: 2,
  },
  monitoring: {
    enabled: true,
    trackUsage: true,
    trackErrors: true,
    trackLatency: true,
  },
}

// Provider Abstraction Layer

export interface ProviderRequest {
  provider: string
  action: string
  params: Record<string, any>
  priority?: 'low' | 'normal' | 'high'
  timeout?: number
}

export interface ProviderResponse {
  success: boolean
  provider: string
  data?: any
  error?: string
  latency: number
  timestamp: string
}

export interface JobQueue {
  id: string
  provider: string
  action: string
  params: Record<string, any>
  status: 'pending' | 'processing' | 'completed' | 'failed'
  result?: any
  error?: string
  createdAt: string
  completedAt?: string
  retries: number
}

// Helper Functions

/**
 * Get provider by ID
 */
export function getProvider(providerId: string): AIProvider | undefined {
  return AI_PROVIDERS[providerId]
}

/**
 * Get providers by category
 */
export function getProvidersByCategory(category: string): AIProvider[] {
  return Object.values(AI_PROVIDERS).filter((p) => p.category === category)
}

/**
 * Get connected providers
 */
export function getConnectedProviders(): AIProvider[] {
  return Object.values(AI_PROVIDERS).filter((p) => p.status === 'connected')
}

/**
 * Get available providers
 */
export function getAvailableProviders(): AIProvider[] {
  return Object.values(AI_PROVIDERS).filter((p) => p.status !== 'coming-soon')
}

/**
 * Get coming soon providers
 */
export function getComingSoonProviders(): AIProvider[] {
  return Object.values(AI_PROVIDERS).filter((p) => p.status === 'coming-soon')
}

/**
 * Get fallback providers for action
 */
export function getFallbackProviders(action: string): AIProvider[] {
  const fallbackIds = INTEGRATION_CONFIG.fallbacks[action] || []
  return fallbackIds
    .map((id) => AI_PROVIDERS[id])
    .filter((p) => p && p.status !== 'coming-soon')
}

/**
 * Check rate limit
 */
export function checkRateLimit(provider: AIProvider, requestCount: number): boolean {
  return requestCount < provider.rateLimit.requestsPerMinute
}

/**
 * Calculate cost
 */
export function calculateCost(provider: AIProvider, units: number): number {
  return provider.pricing.costPerUnit * units
}

/**
 * Format provider info
 */
export function getProviderInfo(providerId: string): string {
  const provider = getProvider(providerId)
  if (!provider) return 'Unknown provider'

  return `${provider.name} (${provider.status}) - ${provider.features.join(', ')}`
}

// API Connector Template

export interface APIConnector {
  provider: string
  authenticate(): Promise<boolean>
  request(action: string, params: Record<string, any>): Promise<ProviderResponse>
  webhook(event: string, data: any): Promise<void>
  getStatus(): Promise<{ healthy: boolean; latency: number }>
}

// Async Job Processing

export interface JobProcessor {
  enqueueJob(job: JobQueue): Promise<string>
  processJob(jobId: string): Promise<ProviderResponse>
  getJobStatus(jobId: string): Promise<JobQueue>
  cancelJob(jobId: string): Promise<boolean>
  retryJob(jobId: string): Promise<string>
}

// Error Handling

export interface ProviderError {
  code: string
  message: string
  provider: string
  statusCode?: number
  retryable: boolean
}

export const ERROR_CODES = {
  'RATE_LIMIT_EXCEEDED': 'Rate limit exceeded',
  'INVALID_API_KEY': 'Invalid API key',
  'PROVIDER_UNAVAILABLE': 'Provider temporarily unavailable',
  'INVALID_REQUEST': 'Invalid request parameters',
  'TIMEOUT': 'Request timeout',
  'UNKNOWN_ERROR': 'Unknown error occurred',
}

// Webhook Support

export interface WebhookEvent {
  provider: string
  event: string
  jobId: string
  status: 'completed' | 'failed' | 'processing'
  data?: any
  error?: string
  timestamp: string
}

export interface WebhookHandler {
  onJobCompleted(event: WebhookEvent): Promise<void>
  onJobFailed(event: WebhookEvent): Promise<void>
  onJobProcessing(event: WebhookEvent): Promise<void>
}
