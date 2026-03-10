import { z as zod } from 'zod';

const productSchema = zod.object({
	name: zod.string(),
	company: zod.string(),
	description: zod.string(),
});

export const products = {
	composer: {
		name: 'Composer',
		company: 'Piano',
		description:
			'Composer is  a powerful rules engine that enables anyone to set conditions and triggers based on time, visits, user behavior, content, on-site events, and more.',
	},
	tutor: {
		name: 'Tutor',
		company: 'Piano',
		description: `Tutor is a chatbot designed to assist with questions about Piano products and services. Powered by OpenAI.`,
	},
} as const satisfies Record<string, zod.infer<typeof productSchema>>;

export type ProductKey = keyof typeof products;
export type Product = (typeof products)[ProductKey];

const portfolioItemSchema = zod.object({
	title: zod.string(),
	product: zod.enum(['composer', 'tutor'] as const satisfies ReadonlyArray<ProductKey>),
	year: zod.string(),
	src: zod.string(),
});

export const portfolio = {
	audienceEstimate: {
		title: 'Audience estimate interaction',
		product: 'composer',
		year: '2025',
		src: '/videos/audience-estimate.mp4',
	},
	branchMenu: {
		title: 'Branch menu interaction',
		product: 'composer',
		year: '2026',
		src: '/videos/branch-menu.mp4',
	},
	selectTouchpoint: {
		title: 'Select touchpoint',
		product: 'composer',
		year: '2025',
		src: '/videos/select-touchpoint.mp4',
	},
	sidebarIcon: {
		title: 'Animated sidebar icon',
		product: 'tutor',
		year: '2025',
		src: '/videos/sidebar-icon.mp4',
	},
} as const satisfies Record<string, zod.infer<typeof portfolioItemSchema>>;

export type PortfolioKey = keyof typeof portfolio;
export type PortfolioItem = (typeof portfolio)[PortfolioKey];

export function getItemsByProduct(productKey: ProductKey) {
	return Object.entries(portfolio).filter(([, item]) => item.product === productKey);
}
