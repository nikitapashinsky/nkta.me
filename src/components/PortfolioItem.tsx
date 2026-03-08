import type { PortfolioItem } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function PortfolioItem({ item }: { item: PortfolioItem }) {
	return (
		<div
			className={cn(
				'flex items-center justify-center',
				'md:aspect-video md:rounded-[3px] md:bg-neutral-100 md:p-12',
			)}
		>
			<div
				className={cn(
					'relative',
					item.isSmall ? 'max-w-180' : 'max-w-5xl',
					item.id === 'piano-tutor-sidebar-icon' && 'md:p-px',
				)}
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
