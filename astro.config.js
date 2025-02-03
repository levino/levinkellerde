import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import mdx from "@astrojs/mdx"
import shipyard from "@levino/shipyard-base"
import shipyardDocs from "@levino/shipyard-docs"
import shipyardBlog from "@levino/shipyard-blog"
import rehypeSlug from "rehype-slug"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

import rehypeAutolinkHeadings from "rehype-autolink-headings"
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      rehypeKatex,
    ],
  },

  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: true,
      strategy: "pathname",
    },
    fallback: {
      en: "de",
    },
  },

  site: "https://www.levinkeller.de",

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.startsWith("https://www.levinkeller.de/private/"),
    }),
    mdx(),
    shipyard({
      navigation: {
        docs: {
          label: "Wissen",
          href: "/docs",
        },
        blog: {
          label: "Blog",
          href: "/blog",
        },
        work: {
          label: "Work",
          href: "/work",
        },
        garden: {
          label: "Gartenplaner",
          subEntry: {
            beds: {
              label: "Beetplaner",
              href: "/garden/beds",
            },
            plants: {
              label: "Pflanzen",
              href: "/garden/plants/1",
            },
            shoppinglist: {
              label: "Einkaufsliste",
              href: "/garden/shopping-list",
            },
            sowingCalendar: {
              label: "Aussaatkalender",
              href: "/garden/sowing-calendar",
            },
          },
        },
        about: {
          label: "About",
          href: "/about",
        },
      },
      title: "Levin Keller",
      tagline: "Levins Homepage",
      brand: "Levin Keller",
    }),
    shipyardDocs(["docs"]),
    shipyardBlog(["blog"]),
  ],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
