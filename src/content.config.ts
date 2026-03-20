import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const work = defineCollection({
  loader: file("./src/data/work.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    product: z.string(),
    year: z.string(),
    src: z.string(),
    width: z.number(),
    height: z.number(),
  }),
});

export const collections = { work };
