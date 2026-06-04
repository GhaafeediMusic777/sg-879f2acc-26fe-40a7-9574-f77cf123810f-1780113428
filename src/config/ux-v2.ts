// User Experience Features Configuration

// Project Management
export interface Project {
  id: string
  userId: string
  name: string
  description: string
  type: 'voice_clone' | 'music_producer' | 'music_video' | 'podcast' | 'label'
  status: 'draft' | 'in_progress' | 'completed' | 'archived'
  visibility: 'private' | 'shared' | 'public'
  createdAt: Date
  updatedAt: Date
  lastAccessedAt: Date
  collaborators?: string[]
  tags?: string[]
  thumbnail?: string
  metadata?: Record<string, any>
}

export interface ProjectVersion {
  id: string
  projectId: string
  versionNumber: number
  name: string
  createdAt: Date
  createdBy: string
  changes: string
  isAutoSave: boolean
  data: Record<string, any>
}

export interface SavedProject extends Project {
  versions: ProjectVersion[]
  currentVersion: number
  autoSaveEnabled: boolean
  autoSaveInterval: number // milliseconds
}

// Draft Autosave
export interface DraftAutosave {
  id: string
  userId: string
  projectId: string
  content: Record<string, any>
  lastSavedAt: Date
  autoSaveInterval: number
  isEnabled: boolean
  conflictResolution: 'local' | 'server' | 'manual'
}

export const AUTOSAVE_CONFIG = {
  enabled: true,
  interval: 30000, // 30 seconds
  maxVersions: 20,
  storageLimit: 100 * 1024 * 1024, // 100MB
  conflictResolution: 'manual' as const,
}

// Progress Tracking
export interface ProgressTracker {
  id: string
  userId: string
  projectId: string
  stage: 'setup' | 'creation' | 'editing' | 'export' | 'distribution'
  progress: number // 0-100
  estimatedTimeRemaining: number // seconds
  currentStep: string
  completedSteps: string[]
  startedAt: Date
  lastUpdatedAt: Date
}

export const PROJECT_STAGES = {
  setup: { label: 'Setup', order: 1, estimatedDuration: 300 },
  creation: { label: 'Creation', order: 2, estimatedDuration: 1800 },
  editing: { label: 'Editing', order: 3, estimatedDuration: 900 },
  export: { label: 'Export', order: 4, estimatedDuration: 600 },
  distribution: { label: 'Distribution', order: 5, estimatedDuration: 300 },
}

// Upload Manager
export interface Upload {
  id: string
  userId: string
  projectId?: string
  fileName: string
  fileSize: number
  fileType: string
  status: 'pending' | 'uploading' | 'processing' | 'completed' | 'failed'
  progress: number // 0-100
  uploadedAt: Date
  completedAt?: Date
  url?: string
  error?: string
  retryCount: number
  metadata?: Record<string, any>
}

export const UPLOAD_CONFIG = {
  maxFileSize: 500 * 1024 * 1024, // 500MB
  allowedFormats: [
    'audio/mpeg', 'audio/wav', 'audio/ogg',
    'video/mp4', 'video/webm',
    'image/jpeg', 'image/png', 'image/webp',
  ],
  maxConcurrentUploads: 3,
  chunkSize: 5 * 1024 * 1024, // 5MB chunks
  retryAttempts: 3,
  timeout: 300000, // 5 minutes
}

// Notification Center
export interface Notification {
  id: string
  userId: string
  type: 'info' | 'success' | 'warning' | 'error' | 'system'
  title: string
  message: string
  action?: {
    label: string
    url: string
  }
  read: boolean
  readAt?: Date
  createdAt: Date
  expiresAt?: Date
  priority: 'low' | 'medium' | 'high' | 'urgent'
  channels: ('in_app' | 'email' | 'sms' | 'push')[]
}

export interface NotificationPreference {
  userId: string
  type: string
  channels: {
    inApp: boolean
    email: boolean
    sms: boolean
    push: boolean
  }
  frequency: 'instant' | 'daily' | 'weekly' | 'never'
  enabled: boolean
}

export const NOTIFICATION_TYPES = {
  project_created: { label: 'Project Created', category: 'projects' },
  project_completed: { label: 'Project Completed', category: 'projects' },
  project_failed: { label: 'Project Failed', category: 'projects' },
  payment_received: { label: 'Payment Received', category: 'payments' },
  payment_failed: { label: 'Payment Failed', category: 'payments' },
  refund_processed: { label: 'Refund Processed', category: 'payments' },
  collaboration_invited: { label: 'Collaboration Invited', category: 'collaboration' },
  collaboration_accepted: { label: 'Collaboration Accepted', category: 'collaboration' },
  message_received: { label: 'Message Received', category: 'messages' },
  system_update: { label: 'System Update', category: 'system' },
  security_alert: { label: 'Security Alert', category: 'security' },
}

// Help Center
export interface HelpArticle {
  id: string
  title: string
  slug: string
  category: string
  content: string
  author: string
  createdAt: Date
  updatedAt: Date
  views: number
  helpful: number
  notHelpful: number
  relatedArticles: string[]
  tags: string[]
  isPublished: boolean
}

export interface HelpCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  articles: string[]
  order: number
}

export const HELP_CATEGORIES = [
  { id: 'getting-started', name: 'Getting Started', slug: 'getting-started' },
  { id: 'products', name: 'Products', slug: 'products' },
  { id: 'account', name: 'Account & Settings', slug: 'account' },
  { id: 'billing', name: 'Billing & Payments', slug: 'billing' },
  { id: 'projects', name: 'Projects', slug: 'projects' },
  { id: 'collaboration', name: 'Collaboration', slug: 'collaboration' },
  { id: 'troubleshooting', name: 'Troubleshooting', slug: 'troubleshooting' },
]

// Live Chat Integration
export interface ChatSession {
  id: string
  userId: string
  agentId?: string
  status: 'waiting' | 'active' | 'closed'
  messages: ChatMessage[]
  createdAt: Date
  closedAt?: Date
  rating?: number
  feedback?: string
  tags?: string[]
}

export interface ChatMessage {
  id: string
  sessionId: string
  senderId: string
  senderType: 'user' | 'agent' | 'system'
  message: string
  attachments?: string[]
  timestamp: Date
  isRead: boolean
  readAt?: Date
}

export const CHAT_CONFIG = {
  enabled: true,
  provider: 'intercom', // or 'zendesk', 'drift', 'freshchat'
  availability: {
    monday: { start: '09:00', end: '18:00' },
    tuesday: { start: '09:00', end: '18:00' },
    wednesday: { start: '09:00', end: '18:00' },
    thursday: { start: '09:00', end: '18:00' },
    friday: { start: '09:00', end: '18:00' },
    saturday: { start: '10:00', end: '16:00' },
    sunday: null,
  },
  timezone: 'UTC',
  avgResponseTime: 120, // seconds
  maxQueueSize: 50,
}

// User Preferences
export interface UserPreferences {
  userId: string
  theme: 'light' | 'dark' | 'auto'
  language: string
  timezone: string
  emailNotifications: boolean
  pushNotifications: boolean
  smsNotifications: boolean
  dataCollection: boolean
  marketingEmails: boolean
  twoFactorEnabled: boolean
  sessionTimeout: number
  autoSave: boolean
  autoSaveInterval: number
}

// Activity Timeline
export interface ActivityLog {
  id: string
  userId: string
  action: string
  resource: string
  resourceId: string
  details: Record<string, any>
  timestamp: Date
  ipAddress: string
  userAgent: string
}
