/**
 * Pricing Configuration for Ghaafeedi Music Video Generation
 * Includes all video durations and their corresponding prices
 */

export const VIDEO_DURATIONS = {
  TWO_MIN: {
    id: '2min',
    label: '2 Minutes',
    seconds: 120,
    description: 'Perfect for short clips and social media',
    prices: {
      cogvideox: 19.99,
      ltx_video: 19.99,
      wan_video: 24.99,
      hunyuan_video: 19.99,
      stable_video: 17.99
    },
    avgPrice: 19.99,
    processingTime: '3-5 minutes',
    costToGhaafeedi: 1.94
  },
  FIVE_MIN: {
    id: '5min',
    label: '5 Minutes',
    seconds: 300,
    description: 'Great for music videos and short stories',
    prices: {
      cogvideox: 39.99,
      ltx_video: 39.99,
      wan_video: 49.99,
      hunyuan_video: 39.99,
      stable_video: 34.99
    },
    avgPrice: 39.99,
    processingTime: '8-12 minutes',
    costToGhaafeedi: 4.83
  },
  TEN_MIN: {
    id: '10min',
    label: '10 Minutes',
    seconds: 600,
    description: 'Ideal for documentaries and full stories',
    prices: {
      cogvideox: 79.99,
      ltx_video: 79.99,
      wan_video: 99.99,
      hunyuan_video: 79.99,
      stable_video: 69.99
    },
    avgPrice: 79.99,
    processingTime: '15-25 minutes',
    costToGhaafeedi: 9.65
  },
  TWENTY_MIN: {
    id: '20min',
    label: '20 Minutes',
    seconds: 1200,
    description: 'Perfect for full-length content and series',
    prices: {
      cogvideox: 149.99,
      ltx_video: 149.99,
      wan_video: 199.99,
      hunyuan_video: 149.99,
      stable_video: 129.99
    },
    avgPrice: 149.99,
    processingTime: '30-50 minutes',
    costToGhaafeedi: 19.30
  }
};

export const AI_MODELS_PRICING = {
  cogvideox: {
    name: 'CogVideoX',
    description: 'High-quality cinematic video generation',
    quality: 'High',
    speed: 'Medium',
    icon: '🎬'
  },
  ltx_video: {
    name: 'LTX Video',
    description: 'Fast and efficient video generation',
    quality: 'High',
    speed: 'Fast',
    icon: '⚡',
    badge: 'BEST VALUE'
  },
  wan_video: {
    name: 'Wan Video',
    description: 'Ultra-high quality experimental videos',
    quality: 'Ultra',
    speed: 'Slow',
    icon: '✨',
    badge: 'PREMIUM'
  },
  hunyuan_video: {
    name: 'Hunyuan Video',
    description: 'Unique style with Chinese AI model',
    quality: 'High',
    speed: 'Medium',
    icon: '🌏'
  },
  stable_video: {
    name: 'Stable Video Diffusion',
    description: 'Fast video generation from images',
    quality: 'Medium',
    speed: 'Fast',
    icon: '🎨'
  }
};

export const PRICING_TIERS = [
  VIDEO_DURATIONS.TWO_MIN,
  VIDEO_DURATIONS.FIVE_MIN,
  VIDEO_DURATIONS.TEN_MIN,
  VIDEO_DURATIONS.TWENTY_MIN
];

/**
 * Get price for a specific duration and model
 */
export function getPrice(durationId: string, modelId: string): number {
  const duration = Object.values(VIDEO_DURATIONS).find(d => d.id === durationId);
  if (!duration) return 0;
  return (duration.prices as any)[modelId] || (duration as any).avgPrice;
}

/**
 * Get average price for a duration
 */
export function getAveragePrice(durationId: string): number {
  const duration = Object.values(VIDEO_DURATIONS).find(d => d.id === durationId);
  return (duration as any)?.avgPrice || 0;
}

/**
 * Get all prices for a duration
 */
export function getPricesForDuration(durationId: string) {
  const duration = Object.values(VIDEO_DURATIONS).find(d => d.id === durationId);
  return (duration as any)?.prices || {};
}

/**
 * Calculate profit for a video
 */
export function calculateProfit(durationId: string, modelId: string): number {
  const price = getPrice(durationId, modelId);
  const duration = Object.values(VIDEO_DURATIONS).find(d => d.id === durationId);
  const cost = (duration as any)?.costToGhaafeedi || 0;
  return price - cost;
}

/**
 * Calculate profit margin percentage
 */
export function calculateMargin(durationId: string, modelId: string): number {
  const price = getPrice(durationId, modelId);
  const profit = calculateProfit(durationId, modelId);
  return price > 0 ? Math.round((profit / price) * 100) : 0;
}
