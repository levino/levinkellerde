import { defineCollection, reference, z } from 'astro:content'
import { vegetablesSchema } from './_vegetableSchema'
import { collections as plantCollections } from 'astro-collection-plants'
import { glob } from 'astro/loaders'

export const collections = {
  ...plantCollections,
  plantDescriptions: defineCollection({
    type: 'content',
    schema: z.object({
      plant: reference('plants'),
    }),
  }),
  beds: defineCollection({
    type: 'content',
    schema: z.object({
      plants: z.array(reference('plants')),
      name: z.string(),
    }),
  }),
  vegetables: defineCollection({
    loader: glob({
      pattern: '**/*.yaml',
      base: './vegetables',
    }),
    schema: vegetablesSchema,
  }),
}
