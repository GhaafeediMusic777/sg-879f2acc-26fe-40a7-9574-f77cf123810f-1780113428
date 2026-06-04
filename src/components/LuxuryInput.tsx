import React from 'react'
import clsx from 'clsx'

interface LuxuryInputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  disabled?: boolean
  required?: boolean
  icon?: React.ReactNode
  className?: string
  name?: string
  id?: string
}

export const LuxuryInput: React.FC<LuxuryInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  icon,
  className,
  name,
  id,
}) => {
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={clsx(
            'block text-sm font-medium mb-2 transition-colors duration-200',
            error ? 'text-red-400' : 'text-luxury-gray-light',
            disabled ? 'opacity-50' : ''
          )}
        >
          {label}
          {required && <span className="text-luxury-gold ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={clsx(
            'w-full px-4 py-3 rounded-lg',
            'bg-luxury-dark-secondary border border-luxury-gold border-opacity-20',
            'text-luxury-pearl placeholder-luxury-gray-medium',
            'focus:outline-none focus:border-luxury-gold focus:border-opacity-100',
            'focus:shadow-luxury-md focus:bg-luxury-dark-secondary focus:bg-opacity-60',
            'transition-all duration-300',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-red-500 border-opacity-50 focus:border-red-500' : '',
            icon ? 'pl-12' : '',
            className
          )}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
          <span className="text-lg">⚠</span>
          {error}
        </p>
      )}
    </div>
  )
}
