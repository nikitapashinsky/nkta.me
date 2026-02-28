interface PortfolioItemSchema {
	id: string;
	title: string;
	company: string;
	year: string;
	src: string;
}

export const portfolioItems = [
	{
		id: 'piano-branch-menu',
		title: 'Branch menu interaction',
		company: 'Piano',
		year: '2026',
		src: '/videos/branch-menu.mp4',
	},
	{
		id: 'piano-audience-estimate',
		title: 'Audience estimate interaction',
		company: 'Piano',
		year: '2025',
		src: '/videos/audience-estimate.mp4',
	},
	{
		id: 'piano-select-touchpoint',
		title: 'Select touchpoint',
		company: 'Piano',
		year: '2025',
		src: '/videos/select-touchpoint.mp4',
	},
	{
		id: 'piano-tutor-sidebar-icon',
		title: 'Animated sidebar icon',
		company: 'Piano',
		year: '2025',
		src: '/videos/sidebar-icon.mp4',
	},
] as const satisfies ReadonlyArray<PortfolioItemSchema>;

export type PortfolioItem = (typeof portfolioItems)[number];
