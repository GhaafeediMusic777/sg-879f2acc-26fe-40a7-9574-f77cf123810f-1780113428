// Business Features Configuration

// Refund Management
export interface RefundPolicy {
  id: string
  name: string
  description: string
  daysAllowed: number
  percentageAllowed: number
  conditions: string[]
  autoApprove: boolean
}

export const REFUND_POLICIES: Record<string, RefundPolicy> = {
  standard: {
    id: 'standard',
    name: 'Standard Refund Policy',
    description: '30-day money-back guarantee',
    daysAllowed: 30,
    percentageAllowed: 100,
    conditions: [
      'Product not used',
      'No downloads or exports',
      'Original purchase within 30 days',
    ],
    autoApprove: true,
  },
  partial: {
    id: 'partial',
    name: 'Partial Refund Policy',
    description: 'Partial refund after 7 days',
    daysAllowed: 30,
    percentageAllowed: 50,
    conditions: [
      'Refund after 7 days is 50%',
      'Must have valid reason',
    ],
    autoApprove: false,
  },
  noRefund: {
    id: 'noRefund',
    name: 'No Refund Policy',
    description: 'Non-refundable purchase',
    daysAllowed: 0,
    percentageAllowed: 0,
    conditions: ['This product is non-refundable'],
    autoApprove: false,
  },
}

export interface Refund {
  id: string
  orderId: string
  userId: string
  amount: number
  reason: string
  status: 'pending' | 'approved' | 'rejected' | 'processed'
  requestedAt: Date
  processedAt?: Date
  notes?: string
}

// Coupon System
export interface Coupon {
  id: string
  code: string
  type: 'percentage' | 'fixed' | 'freeProduct'
  value: number
  currency?: string
  maxUses: number
  currentUses: number
  minPurchaseAmount?: number
  maxDiscountAmount?: number
  validFrom: Date
  validUntil: Date
  applicableProducts?: string[]
  applicableRoles?: string[]
  isActive: boolean
  createdAt: Date
  createdBy: string
}

export const COUPON_TYPES = {
  percentage: { label: 'Percentage Discount', format: '{value}% off' },
  fixed: { label: 'Fixed Amount', format: '${value} off' },
  freeProduct: { label: 'Free Product', format: 'Free {value}' },
}

// Gift Cards
export interface GiftCard {
  id: string
  code: string
  amount: number
  currency: string
  balance: number
  createdBy: string
  createdAt: Date
  expiresAt: Date
  redeemedBy?: string
  redeemedAt?: Date
  isActive: boolean
  transactions: GiftCardTransaction[]
}

export interface GiftCardTransaction {
  id: string
  giftCardId: string
  amount: number
  type: 'purchase' | 'redemption'
  description: string
  timestamp: Date
}

// Tax Handling
export interface TaxRate {
  id: string
  country: string
  region?: string
  rate: number
  type: 'VAT' | 'GST' | 'Sales Tax'
  effectiveFrom: Date
  effectiveUntil?: Date
}

export const TAX_RATES: TaxRate[] = [
  {
    id: 'us-ca',
    country: 'US',
    region: 'CA',
    rate: 0.0725,
    type: 'Sales Tax',
    effectiveFrom: new Date('2024-01-01'),
  },
  {
    id: 'us-ny',
    country: 'US',
    region: 'NY',
    rate: 0.08,
    type: 'Sales Tax',
    effectiveFrom: new Date('2024-01-01'),
  },
  {
    id: 'eu-standard',
    country: 'EU',
    rate: 0.21,
    type: 'VAT',
    effectiveFrom: new Date('2024-01-01'),
  },
  {
    id: 'uk-standard',
    country: 'UK',
    rate: 0.20,
    type: 'VAT',
    effectiveFrom: new Date('2024-01-01'),
  },
]

export interface TaxCalculation {
  subtotal: number
  taxRate: number
  taxAmount: number
  total: number
  country: string
  region?: string
}

// Invoice Generation
export interface Invoice {
  id: string
  invoiceNumber: string
  orderId: string
  userId: string
  items: InvoiceItem[]
  subtotal: number
  tax: number
  discount?: number
  total: number
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
  issueDate: Date
  dueDate: Date
  paidDate?: Date
  notes?: string
  attachments?: string[]
}

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
  taxable: boolean
}

// Subscription Management
export interface Subscription {
  id: string
  userId: string
  planId: string
  status: 'active' | 'paused' | 'cancelled' | 'expired'
  startDate: Date
  renewalDate: Date
  cancelledDate?: Date
  autoRenew: boolean
  paymentMethod: string
  billingCycle: 'monthly' | 'quarterly' | 'annual'
  price: number
  currency: string
}

export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  currency: string
  billingCycle: 'monthly' | 'quarterly' | 'annual'
  features: string[]
  limits: Record<string, number>
  trialDays: number
  isActive: boolean
}

// Affiliate Tracking
export interface AffiliateTracker {
  id: string
  affiliateId: string
  referralCode: string
  referralLink: string
  clicks: number
  conversions: number
  revenue: number
  commission: number
  commissionRate: number
  status: 'active' | 'paused' | 'suspended'
  createdAt: Date
  lastActivityAt: Date
}

export interface AffiliateConversion {
  id: string
  affiliateId: string
  customerId: string
  orderId: string
  amount: number
  commission: number
  status: 'pending' | 'approved' | 'paid' | 'rejected'
  conversionDate: Date
  payoutDate?: Date
}

// Payment Methods
export interface PaymentMethod {
  id: string
  userId: string
  type: 'credit_card' | 'debit_card' | 'bank_transfer' | 'digital_wallet'
  provider: 'stripe' | 'paypal' | 'dodo' | 'square'
  isDefault: boolean
  isActive: boolean
  lastFourDigits?: string
  expiryDate?: string
  createdAt: Date
  updatedAt: Date
}

// Order Management
export interface Order {
  id: string
  orderNumber: string
  userId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  discount?: number
  total: number
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
  paymentMethod: string
  paymentStatus: 'pending' | 'completed' | 'failed'
  createdAt: Date
  completedAt?: Date
  invoiceId?: string
  notes?: string
}

export interface OrderItem {
  id: string
  productId: string
  productName: string
  quantity: number
  unitPrice: number
  total: number
}

// Business Metrics
export interface BusinessMetrics {
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
  conversionRate: number
  refundRate: number
  customerLifetimeValue: number
  churnRate: number
  growthRate: number
}
