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
		link: 'https://read.cv/nkta',
		title: 'CV',
		subtitle: 'My work experience',
	},
	{
		link: 'https://bsky.app/profile/nkta.me',
		title: 'Bluesky',
		subtitle: 'Social media that feels good',
	},
	{
		link: 'https://layers.to/nkta',
		title: 'Layers',
		subtitle: 'Design community',
	},
	{
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		subtitle: 'Learning to code in public',
	},
];
