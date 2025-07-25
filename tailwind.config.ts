import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleSkew: {
          '0%, 100%': {
            transform: 'rotate(0deg) scale(1) skew(1deg, 0deg)',
          },
          '25%': {
            transform: 'rotate(-13deg) scale(1) skew(1deg, 0deg)',
          },
          '50%': {
            transform: 'rotate(12deg) scale(1) skew(1deg, 0deg)',
          },
          '75%': {
            transform: 'rotate(-8deg) scale(1) skew(1deg, 0deg)',
          },
        },
      },
      animation: {
        wiggleSkew: 'wiggleSkew 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
