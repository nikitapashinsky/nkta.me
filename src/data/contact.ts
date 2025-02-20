interface SocialLink {
	link: string;
	title: string;
	subtitle: string;
}

export const socials: SocialLink[] = [
	{
		link: `mailto:nikitapashinsky@gmail.com`,
		title: 'Email',
		subtitle: 'Send me an email',
	},
	{
		link: 'https://bsky.app/profile/nkta.me',
		title: 'Bluesky',
		subtitle: 'My only social media',
	},
	{
		link: 'https://read.cv/nkta',
		title: 'CV',
		subtitle: 'My work experience',
	},
	{
		link: 'https://www.figma.com/@nkta',
		title: 'Figma',
		subtitle: 'Sharing free resources',
	},
	{
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		subtitle: 'Learning to code in public',
	},
];
