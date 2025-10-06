/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
