/**
 * Comprehensive Route Configuration
 * Ensures all routes are properly defined and accessible
 */

export const ROUTES = {
  // Main Pages
  HOME: '/',
  ABOUT: '/about',
  PRICING: '/pricing',
  SUPPORT: '/support',
  FAQ: '/faq',

  // Authentication
  LOGIN: '/login',
  SIGNUP: '/signup',
  AUTH: '/auth',

  // Products & Shopping
  PRODUCTS: '/products',
  CHECKOUT: '/checkout',
  CHECKOUT_SUCCESS: '/checkout/success',
  CHECKOUT_CANCEL: '/checkout/cancel',

  // User Dashboards
  CONSUMER_DASHBOARD: '/consumer/dashboard',
  LABEL_DASHBOARD: '/label/dashboard',
  AI_PARTNER_DASHBOARD: '/ai-partner/dashboard',

  // Onboarding
  ONBOARDING: '/onboarding',
  ONBOARDING_CONSUMER: '/onboarding/consumer',
  ONBOARDING_LABEL: '/onboarding/label',
  ONBOARDING_AI_PARTNER: '/onboarding/ai-partner',

  // Experience & Demo
  WATCH_DEMO: '/watch-demo',
  EXPERIENCE: '/experience',
  CINEMATIC_DEMO: '/cinematic-demo',

  // AI Features
  AI_MARKETPLACE: '/ai-marketplace',
  AI_ARTISTS: '/ai-artists',
  COMPANION: '/companion',

  // Content Pages
  MEMORIAL: '/memorial',
  FAMILY_VAULT: '/family-vault',
  DREAMS: '/dreams',
  COUPLES: '/couples',
  DOCUMENTARY: '/documentary',
  FUTURE_SELF: '/future-self',
  CELEBRITY_DROPS: '/celebrity-drops',
  ORIGINALS: '/originals',

  // Settings & Profile
  PROFILE: '/profile',
  SETTINGS_VOICE_PROFILE: '/settings/voice-profile',
  VOICE_CONSENT: '/voice-consent',

  // Legal & Compliance
  TERMS: '/terms',
  PRIVACY: '/privacy',
  REFUNDS: '/refunds',

  // Admin
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_RENDER_QUEUE: '/admin/render-queue',

  // Error Pages
  NOT_FOUND: '/404',
  SERVER_ERROR: '/500',
}

/**
 * Get product page route
 */
export const getProductRoute = (productId: string) => `/products/${productId}`

/**
 * Get AI artist page route
 */
export const getAIArtistRoute = (artistId: string) => `/ai-artists/${artistId}`

/**
 * Get project page route
 */
export const getProjectRoute = (projectId: string) => `/project/${projectId}`

/**
 * Get experience page route
 */
export const getExperienceRoute = (experienceType: string) => `/experience/${experienceType}`

/**
 * Validate route exists
 */
export const isValidRoute = (route: string): boolean => {
  const routeValues = Object.values(ROUTES)
  return routeValues.includes(route)
}

/**
 * Get all available routes
 */
export const getAllRoutes = (): string[] => {
  return Object.values(ROUTES)
}

/**
 * Route categories for navigation
 */
export const ROUTE_CATEGORIES = {
  MAIN: [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PRICING],
  PRODUCTS: [ROUTES.PRODUCTS, ROUTES.CHECKOUT],
  EXPERIENCE: [ROUTES.WATCH_DEMO, ROUTES.EXPERIENCE, ROUTES.AI_MARKETPLACE],
  DASHBOARDS: [ROUTES.CONSUMER_DASHBOARD, ROUTES.LABEL_DASHBOARD, ROUTES.AI_PARTNER_DASHBOARD],
  ONBOARDING: [ROUTES.ONBOARDING_CONSUMER, ROUTES.ONBOARDING_LABEL, ROUTES.ONBOARDING_AI_PARTNER],
  LEGAL: [ROUTES.TERMS, ROUTES.PRIVACY, ROUTES.REFUNDS, ROUTES.FAQ],
  SETTINGS: [ROUTES.PROFILE, ROUTES.SETTINGS_VOICE_PROFILE],
}

/**
 * Navigation items for header/menu
 */
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Products', href: ROUTES.PRODUCTS },
  { label: 'Watch Demo', href: ROUTES.WATCH_DEMO },
  { label: 'AI Marketplace', href: ROUTES.AI_MARKETPLACE },
  { label: 'Pricing', href: ROUTES.PRICING },
  { label: 'FAQ', href: ROUTES.FAQ },
  { label: 'Support', href: ROUTES.SUPPORT },
]

/**
 * Footer links
 */
export const FOOTER_LINKS = {
  PRODUCT: [
    { label: 'Features', href: ROUTES.ABOUT },
    { label: 'Pricing', href: ROUTES.PRICING },
    { label: 'Watch Demo', href: ROUTES.WATCH_DEMO },
  ],
  COMPANY: [
    { label: 'About', href: ROUTES.ABOUT },
    { label: 'Support', href: ROUTES.SUPPORT },
    { label: 'Contact', href: ROUTES.SUPPORT },
  ],
  LEGAL: [
    { label: 'Terms', href: ROUTES.TERMS },
    { label: 'Privacy', href: ROUTES.PRIVACY },
    { label: 'Refunds', href: ROUTES.REFUNDS },
  ],
}

/**
 * Protected routes (require authentication)
 */
export const PROTECTED_ROUTES = [
  ROUTES.CONSUMER_DASHBOARD,
  ROUTES.LABEL_DASHBOARD,
  ROUTES.AI_PARTNER_DASHBOARD,
  ROUTES.PROFILE,
  ROUTES.SETTINGS_VOICE_PROFILE,
]

/**
 * Public routes (no authentication required)
 */
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.PRICING,
  ROUTES.PRODUCTS,
  ROUTES.WATCH_DEMO,
  ROUTES.EXPERIENCE,
  ROUTES.AI_MARKETPLACE,
  ROUTES.FAQ,
  ROUTES.SUPPORT,
  ROUTES.TERMS,
  ROUTES.PRIVACY,
  ROUTES.REFUNDS,
  ROUTES.LOGIN,
  ROUTES.SIGNUP,
]

/**
 * Check if route is protected
 */
export const isProtectedRoute = (route: string): boolean => {
  return PROTECTED_ROUTES.some(protectedRoute => 
    route.startsWith(protectedRoute)
  )
}

/**
 * Check if route is public
 */
export const isPublicRoute = (route: string): boolean => {
  return PUBLIC_ROUTES.some(publicRoute => 
    route === publicRoute || route.startsWith(publicRoute)
  )
}

export default ROUTES
