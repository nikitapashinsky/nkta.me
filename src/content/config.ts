// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date(),
	}),
});

const appsCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		description: z.string(),
		url: z.string(),
		displayUrl: z.string(),
		icon: z.object({
			src: z.string(),
			alt: z.string(),
		}),
	}),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	blog: blogCollection,
	apps: appsCollection,
};
