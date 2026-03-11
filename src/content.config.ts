import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const projects = defineCollection({
	loader: file('src/content/projects.json'),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		product: z.string(),
		year: z.string(),
		src: z.string(),
	}),
});

export const collections = { projects };
