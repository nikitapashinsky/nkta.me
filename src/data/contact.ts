interface SocialLink {
	icon: string;
	link: string;
	title: string;
	handle?: string;
}

export const socials: SocialLink[] = [
	{
		icon: 'Email',
		link: `mailto:nikitapashinsky@gmail.com`,
		title: 'Email',
	},
	{
		icon: 'Bluesky',
		link: 'https://bsky.app/profile/nkta.me',
		title: 'Bluesky',
		handle: '@nkta.me',
	},
	{
		icon: 'CV',
		link: 'https://read.cv/nkta',
		title: 'CV',
		handle: '/nkta',
	},
	{
		icon: 'Figma',
		link: 'https://www.figma.com/@nkta',
		title: 'Figma',
		handle: '@nkta',
	},
	{
		icon: 'Github',
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		handle: '/nikitapashinsky',
	},
];
