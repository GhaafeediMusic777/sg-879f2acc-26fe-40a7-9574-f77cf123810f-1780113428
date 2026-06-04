// Role-Based Access Control (RBAC) Configuration

export type UserRole = 'admin' | 'moderator' | 'label_owner' | 'artist' | 'consumer' | 'affiliate'

export type Permission = 
  | 'view_dashboard'
  | 'manage_users'
  | 'manage_products'
  | 'view_analytics'
  | 'manage_content'
  | 'manage_payments'
  | 'manage_affiliates'
  | 'manage_referrals'
  | 'create_projects'
  | 'publish_content'
  | 'manage_team'
  | 'view_reports'
  | 'manage_support'
  | 'manage_coupons'
  | 'manage_invoices'
  | 'view_audit_logs'
  | 'manage_mfa'
  | 'manage_sessions'

export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'view_dashboard',
    'manage_users',
    'manage_products',
    'view_analytics',
    'manage_content',
    'manage_payments',
    'manage_affiliates',
    'manage_referrals',
    'create_projects',
    'publish_content',
    'manage_team',
    'view_reports',
    'manage_support',
    'manage_coupons',
    'manage_invoices',
    'view_audit_logs',
    'manage_mfa',
    'manage_sessions',
  ],
  moderator: [
    'view_dashboard',
    'manage_content',
    'manage_support',
    'view_reports',
    'view_audit_logs',
  ],
  label_owner: [
    'view_dashboard',
    'create_projects',
    'publish_content',
    'manage_team',
    'view_reports',
    'manage_payments',
  ],
  artist: [
    'view_dashboard',
    'create_projects',
    'publish_content',
    'view_reports',
  ],
  consumer: [
    'view_dashboard',
    'create_projects',
  ],
  affiliate: [
    'view_dashboard',
    'view_reports',
  ],
}

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  admin: 5,
  moderator: 4,
  label_owner: 3,
  artist: 2,
  consumer: 1,
  affiliate: 1,
}

export interface User {
  id: string
  email: string
  role: UserRole
  roles?: UserRole[]
  permissions?: Permission[]
  mfaEnabled: boolean
  emailVerified: boolean
  createdAt: Date
  lastLogin?: Date
  isActive: boolean
}

export interface AuditLog {
  id: string
  userId: string
  action: string
  resource: string
  resourceId: string
  changes?: Record<string, any>
  ipAddress: string
  userAgent: string
  timestamp: Date
  status: 'success' | 'failure'
}

export interface Session {
  id: string
  userId: string
  token: string
  expiresAt: Date
  createdAt: Date
  lastActivityAt: Date
  ipAddress: string
  userAgent: string
  isActive: boolean
}

export interface MFAConfig {
  userId: string
  method: 'totp' | 'sms' | 'email'
  enabled: boolean
  verified: boolean
  backupCodes: string[]
  createdAt: Date
}

export const checkPermission = (userRole: UserRole, permission: Permission): boolean => {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) ?? false
}

export const hasAnyPermission = (userRole: UserRole, permissions: Permission[]): boolean => {
  const userPermissions = ROLE_PERMISSIONS[userRole] || []
  return permissions.some(p => userPermissions.includes(p))
}

export const hasAllPermissions = (userRole: UserRole, permissions: Permission[]): boolean => {
  const userPermissions = ROLE_PERMISSIONS[userRole] || []
  return permissions.every(p => userPermissions.includes(p))
}

export const canAccessResource = (userRole: UserRole, requiredRole: UserRole): boolean => {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[requiredRole]
}

// Rate limiting configuration
export const RATE_LIMITS = {
  login: { requests: 5, window: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  signup: { requests: 3, window: 60 * 60 * 1000 }, // 3 requests per hour
  passwordReset: { requests: 3, window: 60 * 60 * 1000 }, // 3 requests per hour
  apiCall: { requests: 100, window: 60 * 1000 }, // 100 requests per minute
  fileUpload: { requests: 10, window: 60 * 60 * 1000 }, // 10 uploads per hour
  emailSend: { requests: 5, window: 60 * 60 * 1000 }, // 5 emails per hour
}

// Bot protection settings
export const BOT_PROTECTION = {
  enableRecaptcha: true,
  recaptchaVersion: 'v3',
  recaptchaThreshold: 0.5,
  enableFingerprinting: true,
  enableBehaviorAnalysis: true,
  suspiciousActivityThreshold: 0.7,
}

// Session configuration
export const SESSION_CONFIG = {
  maxDuration: 24 * 60 * 60 * 1000, // 24 hours
  idleTimeout: 30 * 60 * 1000, // 30 minutes
  warningTime: 5 * 60 * 1000, // 5 minutes before expiry
  maxConcurrentSessions: 3,
  requireMFAForAdmin: true,
  requireMFAForLabelOwner: false,
}

// Email verification settings
export const EMAIL_VERIFICATION = {
  enabled: true,
  expirationTime: 24 * 60 * 60 * 1000, // 24 hours
  resendLimit: 3,
  resendWindow: 60 * 60 * 1000, // 1 hour
}

// MFA settings
export const MFA_CONFIG = {
  enabled: true,
  requiredForRoles: ['admin', 'moderator', 'label_owner'],
  methods: ['totp', 'sms', 'email'],
  backupCodeCount: 10,
  totpWindow: 30, // seconds
}

// Password policy
export const PASSWORD_POLICY = {
  minLength: 12,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  expirationDays: 90,
  historyCount: 5,
  lockoutAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
}

// Data retention policy
export const DATA_RETENTION = {
  auditLogs: 365, // days
  sessions: 30,
  failedLogins: 90,
  userActivity: 180,
  deletedAccounts: 30,
}
