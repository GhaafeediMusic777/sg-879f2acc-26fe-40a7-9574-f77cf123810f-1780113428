# Dodo Payment Integration Setup Guide

## Overview
This guide explains how to set up and configure Dodo Payment for the Ghaafeedi Music platform.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
# Dodo Payment Configuration
DODO_API_KEY=your_dodo_api_key_here
DODO_MERCHANT_ID=your_dodo_merchant_id_here
DODO_ENVIRONMENT=sandbox  # Change to 'production' for live payments

# Application URL (for payment redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000  # Update for production
```

## Getting Dodo Payment Credentials

### 1. Create a Dodo Account
- Visit [Dodo Payment](https://dodopayment.com)
- Sign up for a merchant account
- Complete identity verification

### 2. Get API Credentials
- Log in to your Dodo dashboard
- Navigate to **Settings** → **API Keys**
- Copy your:
  - **API Key** (for `DODO_API_KEY`)
  - **Merchant ID** (for `DODO_MERCHANT_ID`)

### 3. Configure Webhook URLs
In your Dodo dashboard:
- Go to **Settings** → **Webhooks**
- Add the following webhook URL:
  ```
  https://yourdomain.com/api/payments/dodo-webhook
  ```

## Payment Methods Supported

Dodo Payment supports multiple payment methods:

### Traditional Payment Methods
- 💳 **Credit Card** (Visa, Mastercard, American Express)
- 🏦 **Debit Card** (Visa, Mastercard)
- 🏧 **Bank Transfer** (ACH, Wire)

### Digital Wallets
- 🍎 **Apple Pay**
- 🔵 **Google Pay**
- 🅿️ **PayPal**
- 📱 **Venmo**

### Buy Now Pay Later (BNPL)
- 🛍️ **Klarna** - Pay in 4 interest-free installments
- ☀️ **Sunbit** - Flexible payment plans up to 12 months
- ✓ **Affirm** - Pay in 3 or more interest-free installments
- 📅 **Afterpay** - Split into 4 equal interest-free payments

### Cryptocurrency
- ₿ **Bitcoin**
- Ξ **Ethereum**
- USDC **Stablecoin**

## Implementation

### Using DodoCheckout Component

```tsx
import DodoCheckout from '@/components/DodoCheckout'

export default function ProductPage() {
  const items = [
    {
      id: 'emotional-soundtrack',
      name: 'Emotional Soundtrack',
      price: 49.99,
      quantity: 1,
      description: 'Personal cinematic soundtrack'
    }
  ]

  return (
    <DodoCheckout
      items={items}
      onSuccess={(sessionId) => {
        console.log('Payment successful:', sessionId)
      }}
      onError={(error) => {
        console.error('Payment error:', error)
      }}
    />
  )
}
```

### Using DodoPaymentService

```tsx
import { initializeDodoPayment, getDodoPaymentService } from '@/services/dodo-payment'

// Initialize (do this once at app startup)
initializeDodoPayment({
  apiKey: process.env.DODO_API_KEY!,
  apiSecret: process.env.DODO_API_SECRET!,
  merchantId: process.env.DODO_MERCHANT_ID!,
  environment: (process.env.DODO_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox'
})

// Use in your code
const paymentService = getDodoPaymentService()

const items = [
  {
    id: 'product-1',
    name: 'Product Name',
    price: 99.99,
    quantity: 1
  }
]

const session = await paymentService.createCheckoutSession(items)
console.log('Checkout URL:', session.checkoutUrl)
```

## Testing

### Sandbox Mode
Use these test card numbers for testing:

| Card Type | Number | Expiry | CVC |
|-----------|--------|--------|-----|
| Visa | 4242 4242 4242 4242 | 12/25 | 123 |
| Mastercard | 5555 5555 5555 4444 | 12/25 | 123 |
| Amex | 3782 822463 10005 | 12/25 | 1234 |

### Test Payment Flow
1. Add items to cart
2. Click "Proceed to Payment"
3. Enter test card details
4. Complete payment
5. Verify success page

## Webhook Handling

Create an API route to handle Dodo webhooks:

```tsx
// pages/api/payments/dodo-webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDodoPaymentService } from '@/services/dodo-payment'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const signature = req.headers['x-dodo-signature'] as string
  const payload = JSON.stringify(req.body)

  const paymentService = getDodoPaymentService()
  
  if (!paymentService.verifyWebhookSignature(payload, signature)) {
    return res.status(401).json({ error: 'Invalid signature' })
  }

  const event = req.body

  switch (event.type) {
    case 'payment.completed':
      // Handle successful payment
      console.log('Payment completed:', event.data)
      break
    case 'payment.failed':
      // Handle failed payment
      console.log('Payment failed:', event.data)
      break
    case 'payment.refunded':
      // Handle refund
      console.log('Payment refunded:', event.data)
      break
  }

  res.status(200).json({ received: true })
}
```

## Deployment to Production

### 1. Switch to Production
Update `.env.local`:
```env
DODO_ENVIRONMENT=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### 2. Update Webhook URL
In Dodo dashboard, update webhook URL to production domain

### 3. Test Payment Flow
Complete a test transaction to verify everything works

### 4. Monitor Transactions
Check Dodo dashboard for transaction history and analytics

## BNPL Integration Details

### Klarna
- **Payment Schedule**: 4 equal interest-free payments
- **Payment Frequency**: Every 2 weeks
- **Interest Rate**: 0% APR
- **Credit Limit**: Up to $2,500
- **Eligibility**: US residents, 18+

### Sunbit
- **Payment Schedule**: Flexible plans from 3-12 months
- **Payment Frequency**: Monthly
- **Interest Rate**: 0% APR (with approved credit)
- **Credit Limit**: Up to $10,000
- **Eligibility**: US residents, 18+

### Affirm
- **Payment Schedule**: 3, 6, or 12-month plans
- **Payment Frequency**: Monthly
- **Interest Rate**: 0% APR (with approved credit)
- **Credit Limit**: Up to $17,500
- **Eligibility**: US residents, 18+

### Afterpay
- **Payment Schedule**: 4 equal interest-free payments
- **Payment Frequency**: Every 2 weeks
- **Interest Rate**: 0% APR
- **Credit Limit**: Up to $2,000
- **Eligibility**: US residents, 18+

## Using BNPL Calculator

```tsx
import BNPLCalculator from '@/components/BNPLCalculator'

export default function CheckoutPage() {
  return (
    <BNPLCalculator
      amount={99.99}
      onSelect={(provider, monthlyPayment) => {
        console.log(`Selected ${provider}: $${monthlyPayment}/month`)
      }}
    />
  )
}
```

## Pricing

Dodo Payment charges:
- **Standard**: 2.9% + $0.30 per transaction
- **High Volume**: 2.5% + $0.25 per transaction (100+ transactions/month)
- **Enterprise**: Custom pricing
- **BNPL**: Additional 1-3% per transaction (varies by provider)

## BNPL Provider Support

### Klarna Support
- **Website**: https://www.klarna.com
- **Support**: support@klarna.com
- **Documentation**: https://docs.klarna.com

### Sunbit Support
- **Website**: https://www.sunbit.com
- **Support**: support@sunbit.com
- **Documentation**: https://developer.sunbit.com

### Affirm Support
- **Website**: https://www.affirm.com
- **Support**: support@affirm.com
- **Documentation**: https://developer.affirm.com

### Afterpay Support
- **Website**: https://www.afterpay.com
- **Support**: support@afterpay.com
- **Documentation**: https://developer.afterpay.com

## General Support

- **Documentation**: https://docs.dodopayment.com
- **Support Email**: support@dodopayment.com
- **Status Page**: https://status.dodopayment.com

## Security Best Practices

1. ✅ Never commit API keys to version control
2. ✅ Use environment variables for all secrets
3. ✅ Verify webhook signatures
4. ✅ Use HTTPS for all payment pages
5. ✅ Implement rate limiting on payment endpoints
6. ✅ Log all payment transactions
7. ✅ Regularly rotate API keys

## Troubleshooting

### Payment Declined
- Check card details
- Verify sufficient funds
- Try different payment method
- Contact card issuer

### BNPL Application Declined
- Check credit eligibility
- Verify income requirements
- Try different BNPL provider
- Contact BNPL provider support

### Webhook Not Received
- Verify webhook URL in Dodo dashboard
- Check firewall/security settings
- Review Dodo webhook logs
- Test webhook manually

### Session Expired
- Sessions expire after 24 hours
- Create new checkout session
- Verify `expiresAt` timestamp

### BNPL Not Available
- Check customer location (US only)
- Verify customer age (18+)
- Check credit limit for provider
- Try alternative BNPL option

## Additional Resources

- [Dodo Payment API Documentation](https://docs.dodopayment.com/api)
- [Payment Method Integration Guide](https://docs.dodopayment.com/payment-methods)
- [BNPL Integration Guide](https://docs.dodopayment.com/bnpl)
- [Webhook Events Reference](https://docs.dodopayment.com/webhooks)
- [Security & Compliance](https://docs.dodopayment.com/security)
- [Klarna Developer](https://developer.klarna.com)
- [Sunbit Developer](https://developer.sunbit.com)
- [Affirm Developer](https://developer.affirm.com)
- [Afterpay Developer](https://developer.afterpay.com)
