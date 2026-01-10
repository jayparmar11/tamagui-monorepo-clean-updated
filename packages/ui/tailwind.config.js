/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [require('nativewind/preset')],
  important: 'html',
  theme: {},
  plugins: [require('tailwindcss-animate')],
}
