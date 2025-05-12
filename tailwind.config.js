module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0B0D',
        'dark-secondary': '#141519',
        'accent-purple': '#7C3AED',
        'accent-pink': '#EC4899',
        'accent-blue': '#3B82F6',
        'accent-green': '#10B981',
        'success': '#10B981',
        'error': '#EF4444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 