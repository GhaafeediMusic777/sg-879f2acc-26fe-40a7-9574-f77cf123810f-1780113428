import type { NextApiRequest, NextApiResponse } from 'next'

interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
  description?: string
}

interface CheckoutRequestBody {
  items: CheckoutItem[]
  customerId?: string
  metadata?: Record<string, any>
}

interface CheckoutResponse {
  success: boolean
  sessionId?: string
  checkoutUrl?: string
  amount?: number
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckoutResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { items, customerId, metadata } = req.body as CheckoutRequestBody

    // Validate items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, error: 'No items provided' })
    }

    // Calculate total
    const amount = items.reduce((total, item) => total + (item.price * item.quantity), 0)

    // Get Dodo API credentials from environment
    const dodoApiKey = process.env.DODO_API_KEY
    const dodoMerchantId = process.env.DODO_MERCHANT_ID
    const dodoEnvironment = process.env.DODO_ENVIRONMENT || 'sandbox'

    if (!dodoApiKey || !dodoMerchantId) {
      console.error('Dodo Payment credentials not configured')
      return res.status(500).json({
        success: false,
        error: 'Payment service not configured'
      })
    }

    // Prepare Dodo API request
    const baseUrl = dodoEnvironment === 'production'
      ? 'https://api.dodopayment.com/v1'
      : 'https://sandbox.dodopayment.com/v1'

    const successUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success`
    const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/cancel`

    // Create checkout session with Dodo
    const dodoResponse = await fetch(`${baseUrl}/checkout/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dodoApiKey}`,
        'X-Merchant-ID': dodoMerchantId
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
        metadata: {
          ...metadata,
          createdAt: new Date().toISOString()
        },
        successUrl,
        cancelUrl,
        paymentMethods: [
          'credit_card',
          'debit_card',
          'apple_pay',
          'google_pay',
          'bank_transfer',
          'crypto'
        ]
      })
    })

    if (!dodoResponse.ok) {
      const error = await dodoResponse.text()
      console.error('Dodo API error:', error)
      return res.status(500).json({
        success: false,
        error: 'Failed to create checkout session'
      })
    }

    const dodoData = await dodoResponse.json()

    // Return checkout session details
    return res.status(200).json({
      success: true,
      sessionId: dodoData.id,
      checkoutUrl: dodoData.checkoutUrl,
      amount
    })
  } catch (error) {
    console.error('Checkout error:', error)
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request'
    })
  }
}
