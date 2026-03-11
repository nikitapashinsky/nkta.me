import type { CollectionEntry } from 'astro:content';
import { twMerge } from 'tailwind-merge';

type ProjectData = CollectionEntry<'projects'>['data'];

export function PortfolioItem({
	item,
	className,
	...props
}: { item: ProjectData } & React.ComponentProps<'div'>) {
	return (
		<div
			className={twMerge(
				'relative aspect-16/10 max-h-full',
				item.title === 'Branch menu interaction' && 'max-w-2xl',
				item.title === 'Animated sidebar icon' && 'max-w-2xl',
				className,
			)}
			{...props}
		>
			<div
				className={twMerge(
					'relative h-fit w-fit',
					item.title === 'Animated sidebar icon' && 'md:p-px',
				)}
			>
				<div
					className={twMerge(
						'absolute inset-0 rounded-xs ring-[0.5px] ring-black/8 ring-inset',
						'md:ring-1 md:ring-black/5',
					)}
				/>
				<video autoPlay loop muted playsInline src={item.src} className={'rounded-xs'} />
			</div>
		</div>
	);
}
