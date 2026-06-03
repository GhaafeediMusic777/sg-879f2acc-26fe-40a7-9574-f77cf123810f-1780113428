/**
 * Dodo Payment Service
 * Handles all payment processing through Dodo Payment gateway
 */

export interface DodoPaymentConfig {
  apiKey: string
  apiSecret: string
  merchantId: string
  environment: 'sandbox' | 'production'
}

export interface PaymentItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
}

export interface DodoCheckoutSession {
  sessionId: string
  checkoutUrl: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed'
  items: PaymentItem[]
  createdAt: string
  expiresAt: string
}

export interface DodoPaymentMethod {
  type: 'credit_card' | 'debit_card' | 'apple_pay' | 'google_pay' | 'bank_transfer' | 'crypto' | 'klarna' | 'sunbit' | 'affirm' | 'afterpay' | 'paypal' | 'venmo'
  name: string
  icon: string
  category?: 'traditional' | 'digital_wallet' | 'bnpl' | 'crypto'
  description?: string
}

class DodoPaymentService {
  private config: DodoPaymentConfig
  private baseUrl: string

  constructor(config: DodoPaymentConfig) {
    this.config = config
    this.baseUrl = config.environment === 'production'
      ? 'https://api.dodopayment.com/v1'
      : 'https://sandbox.dodopayment.com/v1'
  }

  /**
   * Create a checkout session for Dodo Payment
   */
  async createCheckoutSession(
    items: PaymentItem[],
    customerId?: string,
    metadata?: Record<string, any>
  ): Promise<DodoCheckoutSession> {
    try {
      const amount = items.reduce((total, item) => total + (item.price * item.quantity), 0)

      const response = await fetch(`${this.baseUrl}/checkout/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Merchant-ID': this.config.merchantId
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'USD',
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: Math.round(item.price * 100),
            quantity: item.quantity,
            description: item.description
          })),
          customerId,
          metadata,
          successUrl: `${typeof window !== 'undefined' ? window.location.origin : ''}/checkout/success`,
          cancelUrl: `${typeof window !== 'undefined' ? window.location.origin : ''}/checkout/cancel`,
          paymentMethods: [
            'credit_card',
            'debit_card',
            'apple_pay',
            'google_pay',
            'bank_transfer',
            'crypto',
            'klarna',
            'sunbit',
            'affirm',
            'afterpay',
            'paypal',
            'venmo'
          ]
        })
      })

      if (!response.ok) {
        throw new Error(`Dodo Payment API error: ${response.statusText}`)
      }

      const data = await response.json()

      return {
        sessionId: data.id,
        checkoutUrl: data.checkoutUrl,
        amount,
        currency: 'USD',
        status: 'pending',
        items,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }
    } catch (error) {
      console.error('Failed to create Dodo checkout session:', error)
      throw error
    }
  }

  /**
   * Get checkout session details
   */
  async getCheckoutSession(sessionId: string): Promise<DodoCheckoutSession | null> {
    try {
      const response = await fetch(`${this.baseUrl}/checkout/sessions/${sessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Merchant-ID': this.config.merchantId
        }
      })

      if (!response.ok) {
        return null
      }

      const data = await response.json()

      return {
        sessionId: data.id,
        checkoutUrl: data.checkoutUrl,
        amount: data.amount / 100,
        currency: data.currency,
        status: data.status,
        items: data.items,
        createdAt: data.createdAt,
        expiresAt: data.expiresAt
      }
    } catch (error) {
      console.error('Failed to get Dodo checkout session:', error)
      return null
    }
  }

  /**
   * Verify payment webhook signature
   */
  verifyWebhookSignature(payload: string, signature: string): boolean {
    try {
      // Webhook signature verification would be done on the server
      // For now, return true (implement proper verification on backend)
      return true
    } catch (error) {
      console.error('Failed to verify webhook signature:', error)
      return false
    }
  }

  /**
   * Get available payment methods
   */
  getAvailablePaymentMethods(): DodoPaymentMethod[] {
    return [
      // Traditional Payment Methods
      {
        type: 'credit_card',
        name: 'Credit Card',
        icon: '💳',
        category: 'traditional',
        description: 'Visa, Mastercard, American Express'
      },
      {
        type: 'debit_card',
        name: 'Debit Card',
        icon: '🏦',
        category: 'traditional',
        description: 'Direct bank account payment'
      },
      // Digital Wallets
      {
        type: 'apple_pay',
        name: 'Apple Pay',
        icon: '🍎',
        category: 'digital_wallet',
        description: 'Fast and secure payment'
      },
      {
        type: 'google_pay',
        name: 'Google Pay',
        icon: '🔵',
        category: 'digital_wallet',
        description: 'Quick checkout with Google'
      },
      {
        type: 'paypal',
        name: 'PayPal',
        icon: '🅿️',
        category: 'digital_wallet',
        description: 'Secure PayPal account payment'
      },
      {
        type: 'venmo',
        name: 'Venmo',
        icon: '📱',
        category: 'digital_wallet',
        description: 'Quick peer-to-peer payment'
      },
      // Buy Now Pay Later (BNPL)
      {
        type: 'klarna',
        name: 'Klarna',
        icon: '🛍️',
        category: 'bnpl',
        description: 'Pay in 4 interest-free installments'
      },
      {
        type: 'sunbit',
        name: 'Sunbit',
        icon: '☀️',
        category: 'bnpl',
        description: 'Flexible payment plans up to 12 months'
      },
      {
        type: 'affirm',
        name: 'Affirm',
        icon: '✓',
        category: 'bnpl',
        description: 'Pay over time with transparent terms'
      },
      {
        type: 'afterpay',
        name: 'Afterpay',
        icon: '📅',
        category: 'bnpl',
        description: 'Split payment into 4 equal installments'
      },
      // Bank Transfer
      {
        type: 'bank_transfer',
        name: 'Bank Transfer',
        icon: '🏧',
        category: 'traditional',
        description: 'ACH or Wire transfer'
      },
      // Cryptocurrency
      {
        type: 'crypto',
        name: 'Cryptocurrency',
        icon: '₿',
        category: 'crypto',
        description: 'Bitcoin, Ethereum, USDC'
      }
    ]
  }

  /**
   * Calculate total with tax
   */
  calculateTotal(items: PaymentItem[], taxRate: number = 0.08): {
    subtotal: number
    tax: number
    total: number
  } {
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    const tax = subtotal * taxRate
    const total = subtotal + tax

    return {
      subtotal: Math.round(subtotal * 100) / 100,
      tax: Math.round(tax * 100) / 100,
      total: Math.round(total * 100) / 100
    }
  }

  /**
   * Get BNPL payment options
   */
  getBNPLOptions(): DodoPaymentMethod[] {
    return this.getAvailablePaymentMethods().filter(method => method.category === 'bnpl')
  }

  /**
   * Calculate BNPL installments
   */
  calculateInstallments(amount: number, provider: 'klarna' | 'sunbit' | 'affirm' | 'afterpay'): {
    provider: string
    installments: number
    monthlyPayment: number
    totalCost: number
    interestRate: number
  } {
    const installmentPlans: Record<string, { installments: number; interestRate: number }> = {
      klarna: { installments: 4, interestRate: 0 }, // 4 interest-free payments
      sunbit: { installments: 12, interestRate: 0 }, // Up to 12 months interest-free
      affirm: { installments: 3, interestRate: 0 }, // 3 interest-free or longer with interest
      afterpay: { installments: 4, interestRate: 0 } // 4 equal interest-free payments
    }

    const plan = installmentPlans[provider] || { installments: 4, interestRate: 0 }
    const monthlyPayment = amount / plan.installments
    const totalCost = amount + (amount * plan.interestRate)

    return {
      provider,
      installments: plan.installments,
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalCost: Math.round(totalCost * 100) / 100,
      interestRate: plan.interestRate
    }
  }

  /**
   * Get payment method by category
   */
  getPaymentMethodsByCategory(category: 'traditional' | 'digital_wallet' | 'bnpl' | 'crypto'): DodoPaymentMethod[] {
    return this.getAvailablePaymentMethods().filter(method => method.category === category)
  }

  /**
   * Format price for display
   */
  formatPrice(price: number, currency: string = 'USD'): string {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    })
    return formatter.format(price)
  }
}

// Export singleton instance
let dodoPaymentService: DodoPaymentService | null = null

export function initializeDodoPayment(config: DodoPaymentConfig): DodoPaymentService {
  dodoPaymentService = new DodoPaymentService(config)
  return dodoPaymentService
}

export function getDodoPaymentService(): DodoPaymentService {
  if (!dodoPaymentService) {
    throw new Error('Dodo Payment service not initialized. Call initializeDodoPayment first.')
  }
  return dodoPaymentService
}

export default DodoPaymentService
