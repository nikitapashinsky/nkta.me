interface SocialLink {
	icon: string;
	link: string;
	title: string;
	subtitle: string;
}

export const socials: SocialLink[] = [
	{
		icon: 'Email',
		link: `mailto:nikitapashinsky@gmail.com`,
		title: 'nikitapashinsky@gmail.com',
		subtitle: 'Send me an email',
	},
	{
		icon: 'Bluesky',
		link: 'https://bsky.app/profile/nkta.me',
		title: 'Bluesky',
		subtitle: 'My only social media',
	},
	{
		icon: 'CV',
		link: 'https://read.cv/nkta',
		title: 'CV',
		subtitle: 'My work experience',
	},
	{
		icon: 'Figma',
		link: 'https://www.figma.com/@nkta',
		title: 'Figma',
		subtitle: 'Sharing free resources',
	},
	{
		icon: 'Github',
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		subtitle: 'Learning to code in public',
	},
];
