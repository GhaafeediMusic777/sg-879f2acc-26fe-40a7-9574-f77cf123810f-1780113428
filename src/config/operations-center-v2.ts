// Enterprise Operations Center Configuration

export interface OperationsDashboard {
  id: string
  name: string
  description: string
  icon: string
  color: string
  modules: OperationModule[]
  permissions: string[]
}

export interface OperationModule {
  id: string
  name: string
  description: string
  icon: string
  path: string
  permissions: string[]
  features: string[]
}

export interface DashboardMetric {
  id: string
  label: string
  value: number | string
  change: number
  changeType: 'increase' | 'decrease' | 'neutral'
  icon: string
  color: string
}

export interface OperationAlert {
  id: string
  type: 'critical' | 'warning' | 'info' | 'success'
  title: string
  message: string
  timestamp: string
  action?: {
    label: string
    path: string
  }
}

// Operations Center Modules

export const OPERATIONS_MODULES: Record<string, OperationModule> = {
  'users': {
    id: 'users',
    name: 'User Management',
    description: 'Manage user accounts, roles, and permissions',
    icon: '👥',
    path: '/admin/operations/users',
    permissions: ['admin:users:read', 'admin:users:write', 'admin:users:delete'],
    features: [
      'User directory',
      'Role assignment',
      'Permission management',
      'Activity tracking',
      'Bulk actions',
      'User export',
    ],
  },
  'orders': {
    id: 'orders',
    name: 'Order Management',
    description: 'Track and manage customer orders',
    icon: '📦',
    path: '/admin/operations/orders',
    permissions: ['admin:orders:read', 'admin:orders:write'],
    features: [
      'Order tracking',
      'Status updates',
      'Fulfillment management',
      'Shipping integration',
      'Order history',
      'Bulk export',
    ],
  },
  'products': {
    id: 'products',
    name: 'Product Management',
    description: 'Manage product catalog and inventory',
    icon: '🛍️',
    path: '/admin/operations/products',
    permissions: ['admin:products:read', 'admin:products:write', 'admin:products:delete'],
    features: [
      'Product catalog',
      'Pricing management',
      'Inventory tracking',
      'Product variants',
      'Bulk editing',
      'Category management',
    ],
  },
  'payments': {
    id: 'payments',
    name: 'Payment Processing',
    description: 'Manage transactions and payment processing',
    icon: '💳',
    path: '/admin/operations/payments',
    permissions: ['admin:payments:read', 'admin:payments:write'],
    features: [
      'Transaction history',
      'Payment reconciliation',
      'Dispute management',
      'Payment method management',
      'Revenue reports',
      'Settlement tracking',
    ],
  },
  'refunds': {
    id: 'refunds',
    name: 'Refund Management',
    description: 'Process and track refunds',
    icon: '💰',
    path: '/admin/operations/refunds',
    permissions: ['admin:refunds:read', 'admin:refunds:write', 'admin:refunds:approve'],
    features: [
      'Refund requests',
      'Approval workflow',
      'Refund processing',
      'Return tracking',
      'Refund history',
      'Policy management',
    ],
  },
  'analytics': {
    id: 'analytics',
    name: 'Analytics Dashboard',
    description: 'View business metrics and insights',
    icon: '📊',
    path: '/admin/operations/analytics',
    permissions: ['admin:analytics:read'],
    features: [
      'Revenue analytics',
      'User analytics',
      'Product performance',
      'Conversion tracking',
      'Custom reports',
      'Data export',
    ],
  },
  'support': {
    id: 'support',
    name: 'Support Tickets',
    description: 'Manage customer support requests',
    icon: '🎫',
    path: '/admin/operations/support',
    permissions: ['admin:support:read', 'admin:support:write', 'admin:support:assign'],
    features: [
      'Ticket queue',
      'Assignment management',
      'Response templates',
      'Ticket history',
      'Priority management',
      'SLA tracking',
    ],
  },
  'artists': {
    id: 'artists',
    name: 'Artist Management',
    description: 'Manage AI artists and creator profiles',
    icon: '🎤',
    path: '/admin/operations/artists',
    permissions: ['admin:artists:read', 'admin:artists:write', 'admin:artists:verify'],
    features: [
      'Artist profiles',
      'Verification process',
      'Earnings tracking',
      'Collaboration management',
      'Content moderation',
      'Artist analytics',
    ],
  },
  'marketplace': {
    id: 'marketplace',
    name: 'Marketplace Management',
    description: 'Manage marketplace listings and disputes',
    icon: '🏪',
    path: '/admin/operations/marketplace',
    permissions: ['admin:marketplace:read', 'admin:marketplace:write', 'admin:marketplace:moderate'],
    features: [
      'Listing management',
      'Content moderation',
      'Dispute resolution',
      'Seller management',
      'Category management',
      'Featured listings',
    ],
  },
  'content': {
    id: 'content',
    name: 'Content Management',
    description: 'Manage blog, articles, and media',
    icon: '📝',
    path: '/admin/operations/content',
    permissions: ['admin:content:read', 'admin:content:write', 'admin:content:publish'],
    features: [
      'Blog management',
      'Article editor',
      'Media library',
      'SEO optimization',
      'Publishing workflow',
      'Content scheduling',
    ],
  },
}

// Dashboard Metrics
export const DASHBOARD_METRICS: DashboardMetric[] = [
  {
    id: 'total-revenue',
    label: 'Total Revenue',
    value: '$124,500',
    change: 12.5,
    changeType: 'increase',
    icon: '💵',
    color: 'rgba(0, 255, 100, 1)',
  },
  {
    id: 'active-users',
    label: 'Active Users',
    value: '3,240',
    change: 8.2,
    changeType: 'increase',
    icon: '👥',
    color: 'rgba(0, 200, 255, 1)',
  },
  {
    id: 'orders-today',
    label: 'Orders Today',
    value: '127',
    change: -2.1,
    changeType: 'decrease',
    icon: '📦',
    color: 'rgba(255, 165, 0, 1)',
  },
  {
    id: 'support-tickets',
    label: 'Open Tickets',
    value: '23',
    change: 5.3,
    changeType: 'increase',
    icon: '🎫',
    color: 'rgba(255, 107, 107, 1)',
  },
  {
    id: 'conversion-rate',
    label: 'Conversion Rate',
    value: '3.24%',
    change: 0.5,
    changeType: 'increase',
    icon: '📈',
    color: 'rgba(147, 112, 219, 1)',
  },
  {
    id: 'avg-order-value',
    label: 'Avg Order Value',
    value: '$89.50',
    change: 3.8,
    changeType: 'increase',
    icon: '💳',
    color: 'rgba(212, 175, 55, 1)',
  },
]

// System Alerts
export const SYSTEM_ALERTS: OperationAlert[] = [
  {
    id: 'alert-001',
    type: 'critical',
    title: 'Payment Gateway Issue',
    message: 'Dodo Payments API experiencing intermittent failures. 2 failed transactions detected.',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    action: {
      label: 'View Details',
      path: '/admin/operations/payments',
    },
  },
  {
    id: 'alert-002',
    type: 'warning',
    title: 'High Support Queue',
    message: '15 support tickets waiting for assignment. Average wait time: 45 minutes.',
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    action: {
      label: 'View Queue',
      path: '/admin/operations/support',
    },
  },
  {
    id: 'alert-003',
    type: 'info',
    title: 'Daily Report Ready',
    message: 'Your daily operations report is ready for review.',
    timestamp: new Date(Date.now() - 1 * 3600000).toISOString(),
    action: {
      label: 'View Report',
      path: '/admin/operations/analytics',
    },
  },
  {
    id: 'alert-004',
    type: 'success',
    title: 'Milestone Reached',
    message: 'Congratulations! You\'ve reached 10,000 active users.',
    timestamp: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
]

// User Management
export interface AdminUser {
  id: string
  name: string
  email: string
  role: 'super-admin' | 'admin' | 'moderator' | 'analyst'
  permissions: string[]
  status: 'active' | 'inactive' | 'suspended'
  lastLogin: string
  joinDate: string
}

export const ADMIN_ROLES = {
  'super-admin': {
    name: 'Super Administrator',
    description: 'Full system access',
    permissions: ['admin:*'],
  },
  'admin': {
    name: 'Administrator',
    description: 'Full operational access',
    permissions: [
      'admin:users:*',
      'admin:orders:*',
      'admin:products:*',
      'admin:payments:*',
      'admin:refunds:*',
      'admin:analytics:*',
      'admin:support:*',
      'admin:artists:*',
      'admin:marketplace:*',
      'admin:content:*',
    ],
  },
  'moderator': {
    name: 'Moderator',
    description: 'Content and user moderation',
    permissions: [
      'admin:users:read',
      'admin:marketplace:moderate',
      'admin:content:read',
      'admin:artists:verify',
      'admin:support:read',
    ],
  },
  'analyst': {
    name: 'Analyst',
    description: 'Analytics and reporting only',
    permissions: ['admin:analytics:read', 'admin:orders:read', 'admin:products:read'],
  },
}

// Quick Actions
export interface QuickAction {
  id: string
  label: string
  icon: string
  path: string
  color: string
  description: string
}

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'view-orders',
    label: 'View Orders',
    icon: '📦',
    path: '/admin/operations/orders',
    color: 'rgba(255, 165, 0, 1)',
    description: 'Check recent orders and status',
  },
  {
    id: 'manage-products',
    label: 'Manage Products',
    icon: '🛍️',
    path: '/admin/operations/products',
    color: 'rgba(147, 112, 219, 1)',
    description: 'Update product catalog',
  },
  {
    id: 'view-analytics',
    label: 'View Analytics',
    icon: '📊',
    path: '/admin/operations/analytics',
    color: 'rgba(0, 255, 100, 1)',
    description: 'Check business metrics',
  },
  {
    id: 'support-tickets',
    label: 'Support Tickets',
    icon: '🎫',
    path: '/admin/operations/support',
    color: 'rgba(255, 107, 107, 1)',
    description: 'Manage customer support',
  },
  {
    id: 'manage-users',
    label: 'Manage Users',
    icon: '👥',
    path: '/admin/operations/users',
    color: 'rgba(0, 200, 255, 1)',
    description: 'User administration',
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: '💳',
    path: '/admin/operations/payments',
    color: 'rgba(212, 175, 55, 1)',
    description: 'Payment processing',
  },
]

// Reports
export interface Report {
  id: string
  name: string
  description: string
  frequency: 'daily' | 'weekly' | 'monthly'
  lastGenerated: string
  nextGenerated: string
  format: 'pdf' | 'csv' | 'excel'
}

export const AVAILABLE_REPORTS: Report[] = [
  {
    id: 'daily-summary',
    name: 'Daily Operations Summary',
    description: 'Daily overview of key metrics and alerts',
    frequency: 'daily',
    lastGenerated: new Date(Date.now() - 24 * 3600000).toISOString(),
    nextGenerated: new Date(Date.now() + 24 * 3600000).toISOString(),
    format: 'pdf',
  },
  {
    id: 'weekly-revenue',
    name: 'Weekly Revenue Report',
    description: 'Detailed revenue breakdown by product and channel',
    frequency: 'weekly',
    lastGenerated: new Date(Date.now() - 7 * 24 * 3600000).toISOString(),
    nextGenerated: new Date(Date.now() + 7 * 24 * 3600000).toISOString(),
    format: 'excel',
  },
  {
    id: 'monthly-analytics',
    name: 'Monthly Analytics Report',
    description: 'Comprehensive monthly analytics and insights',
    frequency: 'monthly',
    lastGenerated: new Date(Date.now() - 30 * 24 * 3600000).toISOString(),
    nextGenerated: new Date(Date.now() + 30 * 24 * 3600000).toISOString(),
    format: 'pdf',
  },
  {
    id: 'customer-satisfaction',
    name: 'Customer Satisfaction Report',
    description: 'NPS, reviews, and customer feedback analysis',
    frequency: 'weekly',
    lastGenerated: new Date(Date.now() - 7 * 24 * 3600000).toISOString(),
    nextGenerated: new Date(Date.now() + 7 * 24 * 3600000).toISOString(),
    format: 'csv',
  },
]

// Helper Functions

/**
 * Get module by ID
 */
export function getModuleById(moduleId: string): OperationModule | undefined {
  return OPERATIONS_MODULES[moduleId]
}

/**
 * Get all modules
 */
export function getAllModules(): OperationModule[] {
  return Object.values(OPERATIONS_MODULES)
}

/**
 * Get modules by permission
 */
export function getModulesByPermission(permission: string): OperationModule[] {
  return Object.values(OPERATIONS_MODULES).filter((module) =>
    module.permissions.some((p) => p === permission || p.includes('*'))
  )
}

/**
 * Check if user has permission
 */
export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.some(
    (p) => p === requiredPermission || p === 'admin:*' || p.endsWith(':*')
  )
}

/**
 * Get critical alerts
 */
export function getCriticalAlerts(): OperationAlert[] {
  return SYSTEM_ALERTS.filter((alert) => alert.type === 'critical')
}

/**
 * Get alerts by type
 */
export function getAlertsByType(type: string): OperationAlert[] {
  return SYSTEM_ALERTS.filter((alert) => alert.type === type)
}

/**
 * Format metric value
 */
export function formatMetricValue(value: number | string): string {
  if (typeof value === 'string') return value
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
  if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
  return `$${value.toFixed(2)}`
}
