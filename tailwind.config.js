/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'bg': '#1f1f38',
      'bg-variant': '#2c2c6c',
      'primary': '#4db5ff',
      'primary-variant': 'rgba(77, 181, 255, 0.4)',
      'white': '#fff',
      'light': 'rgba(255, 255, 255, 0.6)',
      'black': 'rgba(0, 0, 0, 0.3)',
      'black-variant': 'rgba(0, 0, 0, 0.2)',
    },
  },
  
  plugins: [],
}
