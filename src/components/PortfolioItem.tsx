import type { PortfolioItem } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function PortfolioItem({ item }: { item: PortfolioItem }) {
	return (
		<div
			className={cn(
				'flex items-center justify-center rounded-[3px] bg-neutral-100 p-6 md:aspect-video',
				'lg:p-12',
			)}
		>
			<div
				className={cn(
					'relative',
					item.isSmall ? 'max-w-180' : 'max-w-5xl',
					item.id === 'piano-tutor-sidebar-icon' && 'p-[0.5px] lg:p-px',
				)}
			>
				<div
					className={cn(
						'absolute inset-0 rounded-xs ring-[0.5px] ring-black/8 ring-inset',
						'lg:ring-1 lg:ring-black/5',
					)}
				/>
				<video autoPlay loop muted playsInline src={item.src} className={'rounded-xs'} />
			</div>
		</div>
	);
}
