/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {
    extend: {},
  },
  plugins: [],
}
