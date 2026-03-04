interface PortfolioItemSchema {
	id: string;
	title: string;
	company: string;
	year: string;
	src: string;
	isSmall: boolean;
}

export const portfolioItems = [
	{
		id: 'piano-audience-estimate',
		title: 'Audience estimate interaction',
		company: 'Piano',
		year: '2025',
		src: '/videos/audience-estimate.mp4',
		isSmall: false,
	},
	{
		id: 'piano-branch-menu',
		title: 'Branch menu interaction',
		company: 'Piano',
		year: '2026',
		src: '/videos/branch-menu.mp4',
		isSmall: true,
	},
	{
		id: 'piano-select-touchpoint',
		title: 'Select touchpoint',
		company: 'Piano',
		year: '2025',
		src: '/videos/select-touchpoint.mp4',
		isSmall: false,
	},
	{
		id: 'piano-tutor-sidebar-icon',
		title: 'Animated sidebar icon',
		company: 'Piano',
		year: '2025',
		src: '/videos/sidebar-icon.mp4',
		isSmall: true,
	},
] as const satisfies ReadonlyArray<PortfolioItemSchema>;

export type PortfolioItem = (typeof portfolioItems)[number];
