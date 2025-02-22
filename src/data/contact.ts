interface SocialLink {
	icon: string;
	link: string;
	title: string;
	handle?: string;
	subtitle: string;
}

export const socials: SocialLink[] = [
	{
		icon: 'Email',
		link: `mailto:nikitapashinsky@gmail.com`,
		title: 'Email',
		subtitle: 'Send me an email',
	},
	{
		icon: 'Bluesky',
		link: 'https://bsky.app/profile/nkta.me',
		title: 'Bluesky',
		handle: '@nkta.me',
		subtitle: 'My only social media',
	},
	{
		icon: 'CV',
		link: 'https://read.cv/nkta',
		title: 'CV',
		handle: '/nkta',
		subtitle: 'My work experience',
	},
	{
		icon: 'Figma',
		link: 'https://www.figma.com/@nkta',
		title: 'Figma Community',
		handle: '@nkta',
		subtitle: 'Sharing free resources',
	},
	{
		icon: 'Github',
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		handle: '/nikitapashinsky',
		subtitle: 'Code for this site and other stuff',
	},
];
