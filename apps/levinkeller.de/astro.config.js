import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import shipyard from '@shipyard/base'
// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      strategy: 'pathname',
    },
    fallback: {
      en: 'de',
    },
  },
  site: 'https://www.levinkeller.de',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.startsWith('https://www.levinkeller.de/private/'),
    }),
    mdx(),
    shipyard({
      globalNavigation: [
        {
          label: 'Gartenplaner',
          url: '/garden',
        },
        {
          label: 'Docs',
          url: '/docs',
        },
        {
          label: 'Blog',
          url: '/blog',
        },
        {
          label: 'About',
          url: '/about',
        },
      ],
      brand: 'Levin Keller',
    }),
  ],
})
