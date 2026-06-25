import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    status: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  work: workCollection,
};
