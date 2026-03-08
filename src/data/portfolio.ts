import { z as zod } from 'zod';

const portfolioItemSchema = zod.object({
	title: zod.string(),
	company: zod.string(),
	year: zod.string(),
	src: zod.string(),
});

export const portfolio = {
	audienceEstimate: {
		title: 'Audience estimate interaction',
		company: 'Piano',
		year: '2025',
		src: '/videos/audience-estimate.mp4',
	},
	branchMenu: {
		title: 'Branch menu interaction',
		company: 'Piano',
		year: '2026',
		src: '/videos/branch-menu.mp4',
	},
	selectTouchpoint: {
		title: 'Select touchpoint',
		company: 'Piano',
		year: '2025',
		src: '/videos/select-touchpoint.mp4',
	},
	sidebarIcon: {
		title: 'Animated sidebar icon',
		company: 'Piano',
		year: '2025',
		src: '/videos/sidebar-icon.mp4',
	},
} as const satisfies Record<string, zod.infer<typeof portfolioItemSchema>>;

export type PortfolioKey = keyof typeof portfolio;
export type PortfolioItem = (typeof portfolio)[PortfolioKey];
