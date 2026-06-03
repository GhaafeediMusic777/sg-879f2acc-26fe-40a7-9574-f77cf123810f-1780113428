import { useState } from 'react'
import { Calculator, Zap } from 'lucide-react'

interface BNPLOption {
  provider: 'klarna' | 'sunbit' | 'affirm' | 'afterpay'
  name: string
  icon: string
  color: string
  installments: number
  interestRate: number
  description: string
}

const BNPL_OPTIONS: BNPLOption[] = [
  {
    provider: 'klarna',
    name: 'Klarna',
    icon: '🛍️',
    color: 'purple',
    installments: 4,
    interestRate: 0,
    description: 'Pay in 4 equal interest-free installments'
  },
  {
    provider: 'sunbit',
    name: 'Sunbit',
    icon: '☀️',
    color: 'yellow',
    installments: 12,
    interestRate: 0,
    description: 'Flexible payment plans up to 12 months'
  },
  {
    provider: 'affirm',
    name: 'Affirm',
    icon: '✓',
    color: 'blue',
    installments: 3,
    interestRate: 0,
    description: 'Pay in 3 or more interest-free installments'
  },
  {
    provider: 'afterpay',
    name: 'Afterpay',
    icon: '📅',
    color: 'pink',
    installments: 4,
    interestRate: 0,
    description: 'Split into 4 equal interest-free payments'
  }
]

interface BNPLCalculatorProps {
  amount: number
  onSelect?: (provider: string, monthlyPayment: number) => void
  className?: string
}

export default function BNPLCalculator({
  amount,
  onSelect,
  className = ''
}: BNPLCalculatorProps) {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null)

  const calculatePayment = (installments: number) => {
    return Math.round((amount / installments) * 100) / 100
  }

  const colorClasses: Record<string, string> = {
    purple: 'bg-purple-900/30 border-purple-500/30 hover:border-purple-500/60 text-purple-300',
    yellow: 'bg-yellow-900/30 border-yellow-500/30 hover:border-yellow-500/60 text-yellow-300',
    blue: 'bg-blue-900/30 border-blue-500/30 hover:border-blue-500/60 text-blue-300',
    pink: 'bg-pink-900/30 border-pink-500/30 hover:border-pink-500/60 text-pink-300'
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-gold" />
        <h3 className="text-xl font-bold text-gold">Buy Now Pay Later Options</h3>
      </div>

      {/* BNPL Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BNPL_OPTIONS.map(option => {
          const monthlyPayment = calculatePayment(option.installments)
          const isSelected = selectedProvider === option.provider
          const colorClass = colorClasses[option.color]

          return (
            <button
              key={option.provider}
              onClick={() => {
                setSelectedProvider(option.provider)
                onSelect?.(option.provider, monthlyPayment)
              }}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                isSelected
                  ? `${colorClass} border-2 border-${option.color}-500 shadow-lg shadow-${option.color}-500/20`
                  : `${colorClass} border-2 border-${option.color}-500/30`
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{option.icon}</span>
                  <h4 className="font-bold text-lg">{option.name}</h4>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-current flex items-center justify-center">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                )}
              </div>

              <p className="text-sm mb-3 opacity-90">{option.description}</p>

              <div className="space-y-1 text-sm">
                <div className="flex items-center justify-between">
                  <span className="opacity-75">Installments:</span>
                  <span className="font-semibold">{option.installments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-75">Monthly Payment:</span>
                  <span className="font-bold text-lg">${monthlyPayment.toFixed(2)}</span>
                </div>
                {option.interestRate === 0 && (
                  <div className="flex items-center justify-between pt-1 border-t border-current/20">
                    <span className="opacity-75">Interest Rate:</span>
                    <span className="font-semibold text-green-400">0% APR</span>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Summary */}
      {selectedProvider && (
        <div className="bg-black-900 border border-gold/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gold mb-1">
                You selected {BNPL_OPTIONS.find(o => o.provider === selectedProvider)?.name}
              </p>
              <p className="text-sm text-gray-400">
                Total amount: <span className="text-gold font-semibold">${amount.toFixed(2)}</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                ✓ Interest-free • ✓ No hidden fees • ✓ Flexible terms
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-black-900 border border-gold/20 rounded-lg p-4">
        <h4 className="font-semibold text-gold mb-2">Why Choose BNPL?</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>✓ Spread payments over time</li>
          <li>✓ Interest-free installments</li>
          <li>✓ No hidden fees</li>
          <li>✓ Instant approval</li>
          <li>✓ Flexible payment schedules</li>
        </ul>
      </div>
    </div>
  )
}
