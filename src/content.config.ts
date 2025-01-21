// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const learningLogs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/logs" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { learningLogs };
