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
        gold: '#D4AF37',
        'dark-gold': '#B8860B',
        purple: '#9D4EDD',
        'dark-purple': '#5A189A',
        black: '#0A0E27',
        'dark-gray': '#1A1F3A',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
        'gradient-purple': 'linear-gradient(135deg, #9D4EDD 0%, #5A189A 100%)',
      },
    },
  },
  plugins: [],
}
