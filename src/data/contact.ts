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
		link: 'https://posts.cv/nkta',
		title: 'Posts',
		subtitle: 'Social media that feels good',
	},
	{
		link: 'https://layers.to/nkta',
		title: 'Layers',
		subtitle: 'Design community',
	},
	{
		link: 'https://twitter.com/nikitapashinsky',
		title: 'Twitter',
		subtitle: 'Sometimes referred to as X',
	},
	{
		link: 'https://github.com/nikitapashinsky',
		title: 'Github',
		subtitle: 'Learning to code in public',
	},
];
