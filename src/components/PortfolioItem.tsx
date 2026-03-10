import type { PortfolioItem } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function PortfolioItem({
	item,
	className,
	...props
}: { item: PortfolioItem } & React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'relative aspect-16/10 max-h-full',
				item.title === 'Branch menu interaction' && 'max-w-2xl',
				item.title === 'Animated sidebar icon' && 'max-w-2xl',
				className,
			)}
			{...props}
		>
			<div
				className={cn('relative h-fit w-fit', item.title === 'Animated sidebar icon' && 'md:p-px')}
			>
				<div
					className={cn(
						'absolute inset-0 rounded-xs ring-[0.5px] ring-black/8 ring-inset',
						'md:ring-1 md:ring-black/5',
					)}
				/>
				<video autoPlay loop muted playsInline src={item.src} className={'rounded-xs'} />
			</div>
		</div>
	);
}
