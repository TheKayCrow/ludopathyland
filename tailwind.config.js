/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          purple: '#E0B0FF',
          pink: '#FFB0E0',
          blue: '#B0E0FF',
          green: '#B0FFB0',
          yellow: '#FFE0B0',
          red: '#FFB0B0'
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
        'pastel': '0 4px 14px 0 rgba(224, 176, 255, 0.3)',
        'pastel-lg': '0 10px 25px -3px rgba(224, 176, 255, 0.3)',
      },
      backgroundImage: {
        'pastel-gradient': 'linear-gradient(45deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
    },
  },
  plugins: [],
};