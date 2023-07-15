import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    readingTime: z.number().optional(),
    pubDate: z.date(),
  }),
});

export const collections = {
  'blog': blogCollection,
};