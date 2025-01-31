import { defineCollection, reference, z } from 'astro:content'
import { vegetablesSchema } from './vegetableSchema'
import { file, glob } from 'astro/loaders'
import { plantSchema } from './plantSchema'
import { parse as parseYaml } from 'yaml'

const supplierSchema = z.object({
  name: z.string(),
  url: z.string(),
})

export const collections = {
  plants: defineCollection({
    loader: glob({
      pattern: '*.yaml',
      base: './content/plants',
    }),
    schema: plantSchema,
  }),
  suppliers: defineCollection({
    loader: glob({
      pattern: '**/*.yaml',
      base: './content/suppliers',
    }),
    schema: supplierSchema,
  }),
  plantDescriptions: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './content/plantDescriptions',
    }),
    schema: z.object({
      plant: reference('plants'),
    }),
  }),
  beds: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './content/beds',
    }),
    schema: z.object({
      plants: z.array(reference('plants')),
      name: z.string(),
    }),
  }),
  vegetables: defineCollection({
    loader: glob({
      pattern: '**/*.yaml',
      base: './content/vegetables',
    }),
    schema: vegetablesSchema,
  }),
  vegetableStock: defineCollection({
    schema: z.object({
      vegetable: reference('vegetables'),
      inStock: z.boolean(),
    }),
    loader: file('./content/vegetableStock.yaml', {
      parser: (text) =>
        Object.entries(parseYaml(text)).map(([vegetable, inStock], id) => ({
          vegetable,
          inStock,
          id,
        })),
    }),
  }),
}
