/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,md,mdx,astro}',
    'node_modules/@shipyard/**/*.tsx',
  ],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
