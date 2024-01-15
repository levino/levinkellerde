import { AstroGlobal } from 'astro'
import { z } from 'astro/zod'

export const blogSchema = z.object({
  date: z.date(),
  title: z.string(),
})

interface BlogData {
  title: string
  description?: string
}

import { getCollection } from 'astro:content'

export const getStaticPaths = async () => {
  const getParams = (slug: string) => {
    const [locale, ...rest] = slug.split('/')
    return {
      slug: rest.join('/'),
      locale,
    }
  }
  const blogPosts = await getCollection<BlogData>('blog')
  return blogPosts.map((entry) => ({
    params: getParams(entry.slug),
    props: { entry },
  }))
}

const getNavigation = async () => ({
  local: await getCollection<BlogData>('blog').then((collection) =>
    collection.reduce(
      (acc, { slug, data: { title } }, key) => ({
        ...acc,
        [key]: {
          href: `/blog/${slug}`,
          label: title,
        },
      }),
      {},
    ),
  ),
})

const getLayoutProps = async (astro: AstroGlobal) => ({
  navigation: await getNavigation(),
  locale: astro.currentLocale,
})
