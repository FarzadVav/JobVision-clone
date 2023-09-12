/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screen: {
        'sm': '540px'
      },
      container: {
        center: true,
        padding: '0.5rem',
        screens: {
          sm: '540px',
          md: '768px',
          lg: '1024px',
          xl: '1150px'
        }

      },
      colors: {
        white: 'var(--whiteColor)',
        'jv-black': 'var(--blackColor)',
        'jv-primary': 'var(--primaryColor)',
        'jv-light': 'var(--lightColor)',
        'jv-dark': 'var(--darkColor)',
        'jv-danger': 'var(--dangerColor)',
        'jv-success': 'var(--successColor)',
        'jv-warning': 'var(--warningColor)',
        'jv-blue': 'var(--blueColor)'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}

