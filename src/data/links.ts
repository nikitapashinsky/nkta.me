import { ArenaIcon, BlueskyIcon, EmailIcon, GithubIcon, XTwitterIcon } from '~/components/Icons';

export interface Link {
	label: string;
	url: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

export const LinksData: Array<Link> = [
	{ label: 'Email', url: 'mailto:n@nkta.me', icon: EmailIcon },
	{ label: 'Twitter', url: 'https://x.com/nikitapashinsky', icon: XTwitterIcon },
	{ label: 'Bluesky', url: 'https://bsky.app/profile/nkta.me', icon: BlueskyIcon },
	{ label: 'Github', url: 'https://github.com/nikitapashinsky', icon: GithubIcon },
	{ label: 'Are.na', url: 'https://www.are.na/nikita-pashinsky', icon: ArenaIcon },
];
