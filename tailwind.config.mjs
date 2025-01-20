import daisyui from 'daisyui'
import path from 'node:path'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ['h1,h2,h3,h4,h5,h6']: {
              a: {
                textDecoration: 'none',
              },
            },
          },
        },
      },
    },
  },
  content: [
    './src/**/*.{ts,tsx,md,mdx,astro}',
    path.join(
      path.dirname(require.resolve('@levino/shipyard-base')),
      '../astro/**/*.astro',
    ),
    path.join(
      path.dirname(require.resolve('@levino/shipyard-docs')),
      '../astro/**/*.astro',
    ),
    path.join(
      path.dirname(require.resolve('@levino/shipyard-blog')),
      '../astro/**/*.astro',
    ),
  ],
  plugins: [typography, daisyui],
}
