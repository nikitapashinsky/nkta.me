import type { PortfolioItem } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function PortfolioItem({
	item,
	className,
	...props
}: { item: PortfolioItem } & React.ComponentProps<'div'>) {
	return (
		<div
			className={cn('relative', item.title === 'Animated sidebar icon' && 'md:p-px', className)}
			{...props}
		>
			<div
				className={cn(
					'absolute inset-0 rounded-xs ring-[0.5px] ring-black/8 ring-inset',
					'md:ring-1 md:ring-black/5',
				)}
			/>
			<video autoPlay loop muted playsInline src={item.src} className={'rounded-xs'} />
		</div>
	);
}
