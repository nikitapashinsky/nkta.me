import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const products = defineCollection({
	loader: file('src/content/products.json'),
	schema: z.object({
		name: z.string(),
		company: z.string(),
		description: z.string(),
	}),
});

const projects = defineCollection({
	loader: file('src/content/projects.json'),
	schema: z.object({
		title: z.string(),
		company: z.string(),
		product: reference('products'),
		year: z.string(),
		src: z.string(),
	}),
});

export const collections = { products, projects };
