import { cn } from '../lib/utils';
import { ArenaIcon, EmailIcon, FigmaIcon, GithubIcon, TwitterIcon } from './Icons';

interface Link {
	label: string;
	url: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const LinksData: Link[] = [
	{ label: 'Email', url: 'mailto:n@nkta.me', icon: EmailIcon },
	{ label: 'Twitter', url: 'https://twitter.com/nikitapashinsky', icon: TwitterIcon },
	{ label: 'Github', url: 'https://github.com/nikitapashinsky', icon: GithubIcon },
	{ label: 'Figma', url: 'https://figma.com/@nkta', icon: FigmaIcon },
	{ label: 'Are.na', url: 'https://www.are.na/nikita-pashinsky', icon: ArenaIcon },
];

export function Links() {
	return (
		<div className={'flex flex-col pt-6 pb-4'}>
			{LinksData.map(({ icon: Icon, label, url }) => (
				<a
					key={label}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						'group relative flex items-center gap-4 px-6 py-3',
						'transition-transform will-change-transform active:scale-99',
						'outline-none',

						'before:pointer-events-none before:absolute before:inset-x-3 before:inset-y-0 before:-z-1 before:rounded-md lg:before:inset-y-0.5',
						'before:bg-neutral-100/0 before:will-change-transform',
						'before:transition-colors before:duration-125',
						'hover:before:bg-neutral-100 hover:before:duration-75 active:before:bg-neutral-100 active:before:duration-75',
						'before:outline-neutral-300 focus-visible:before:outline',
					)}
				>
					<Icon
						className={cn('transition-colors duration-125', [
							'group-hover:fill-black group-hover:duration-75',
							'group-active:fill-black group-active:duration-75',
							'group-focus-visible:fill-black group-focus-visible:duration-75',
						])}
					/>
					<span
						className={cn(
							'relative text-sm text-neutral-500 select-none',
							'transition-colors duration-125 group-hover:duration-75 group-active:duration-75',
							'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-neutral-200',
							'after:transition-opacity after:duration-125 group-hover:after:duration-75 group-active:after:duration-75',
							'group-hover:text-black group-active:text-black group-hover:after:opacity-0 group-active:after:opacity-0',
						)}
					>
						{label}
					</span>
				</a>
			))}
		</div>
	);
}
