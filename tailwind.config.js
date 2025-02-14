/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          purple: '#9966FF',
          purple: {
            DEFAULT: '#9966FF',
            dark: '#7B40FF',
            light: '#B088FF'
          },
          pink: '#FF4D8C',
          blue: '#4D94FF',
          green: '#33CC66',
          yellow: '#FFB800',
          red: '#FF3333'
        },
        gray: {
          900: '#121212',
          800: '#1E1E1E',
          700: '#2D2D2D',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#A3A3A3',
          200: '#E5E5E5',
          100: '#F5F5F5',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'loading-bar': 'loading-bar 0.5s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'loading-bar': {
          '0%': { width: '0%' },
          '50%': { width: '70%' },
          '100%': { width: '100%' },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'pastel': '0 4px 14px 0 rgba(153, 102, 255, 0.4)',
        'pastel-lg': '0 10px 25px -3px rgba(153, 102, 255, 0.4)',
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        // Improved focus styles
        '*:focus-visible': {
          outline: 'none',
          boxShadow: `0 0 0 2px ${theme('colors.gray.900')}, 0 0 0 4px ${theme('colors.pastel.purple.DEFAULT')}`,
        },
        // Reduced motion preferences
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      });
    },
  ],
};