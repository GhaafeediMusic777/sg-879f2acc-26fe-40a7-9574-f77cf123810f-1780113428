/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Design System Colors
        'luxury-dark': '#05060A',
        'luxury-dark-secondary': '#0A0B0F',
        'luxury-deep-space': '#090D15',
        'luxury-gold': '#D4A574',
        'luxury-gold-premium': '#E6C78A',
        'luxury-purple': '#8B5CF6',
        'luxury-purple-royal': '#A855F7',
        'luxury-pearl': '#FAFAFA',
        'luxury-gray-light': '#E5E7EB',
        'luxury-gray-medium': '#9CA3AF',
        'luxury-gray-dark': '#374151',
        
        // Legacy colors (for compatibility)
        gold: '#D4A574',
        'dark-gold': '#B8860B',
        purple: '#9D4EDD',
        'dark-purple': '#5A189A',
        black: '#0A0E27',
        'dark-gray': '#1A1F3A',
        'light-gray': '#F5F5F5',
        
        // CSS variables for theming
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        input: 'hsl(var(--input))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
      },
      borderColor: {
        border: 'hsl(var(--border))',
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        garamond: ['Cormorant Garamond', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Headlines
        'h1': ['72px', { lineHeight: '1.1', letterSpacing: '-2px', fontWeight: '700' }],
        'h2': ['56px', { lineHeight: '1.2', letterSpacing: '-1.5px', fontWeight: '700' }],
        'h3': ['44px', { lineHeight: '1.2', letterSpacing: '-1px', fontWeight: '600' }],
        'h4': ['32px', { lineHeight: '1.3', letterSpacing: '-0.5px', fontWeight: '600' }],
        
        // Subtitles
        'subtitle-lg': ['28px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '400' }],
        'subtitle-md': ['20px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '400' }],
        'subtitle-sm': ['16px', { lineHeight: '1.4', letterSpacing: '0.5px', fontWeight: '400' }],
        
        // Body
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A574 0%, #E6C78A 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #05060A 0%, #090D15 100%)',
      },
      boxShadow: {
        'luxury-sm': '0 4px 16px rgba(212, 165, 116, 0.1)',
        'luxury-md': '0 8px 32px rgba(212, 165, 116, 0.15)',
        'luxury-lg': '0 20px 40px rgba(212, 165, 116, 0.3)',
        'luxury-glow': '0 0 40px rgba(212, 165, 116, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 165, 116, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}
