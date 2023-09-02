import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string(),
    heroImage: z.string(),
    svg: z.string(),
  }),
})

export const collections = { blog }
