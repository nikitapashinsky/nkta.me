import { cn } from '../lib/utils';
import { ArenaIcon, EmailIcon, FigmaIcon, GithubIcon, TwitterIcon } from './Icons';

interface Link {
	icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
	label: string;
	url: string;
}

const LinksData: Link[] = [
	{ icon: EmailIcon, label: 'Email', url: 'mailto:n@nkta.me' },
	{ icon: TwitterIcon, label: 'Twitter', url: 'https://twitter.com/nikitapashinsky' },
	{ icon: GithubIcon, label: 'Github', url: 'https://github.com/nikitapashinsky' },
	{ icon: FigmaIcon, label: 'Figma', url: 'https://figma.com/@nkta' },
	{ icon: ArenaIcon, label: 'Are.na', url: 'https://www.are.na/nikita-pashinsky' },
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
						'before:pointer-events-none before:absolute before:inset-x-3 before:inset-y-0 before:-z-1 before:rounded-md before:bg-neutral-100 lg:before:inset-y-0.5',
						'before:opacity-0 before:will-change-transform',
						'before:transition-opacity before:duration-125',
						'hover:before:opacity-100 hover:before:duration-75 active:before:opacity-100 active:before:duration-75',
						'transition-transform will-change-transform active:scale-99',
					)}
				>
					<Icon
						className={
							'transition-colors duration-125 group-hover:fill-black group-hover:duration-75 group-active:fill-black group-active:duration-75'
						}
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
