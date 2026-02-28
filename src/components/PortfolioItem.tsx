import type { PortfolioItem } from '~/data/portfolio';
import { cn } from '~/lib/utils';

export function PortfolioItem({ item }: { item: PortfolioItem }) {
	return (
		<div className={cn('rounded-md bg-neutral-100 p-6', 'lg:p-12 xl:p-20')}>
			<div
				className={cn('relative', item.id === 'piano-tutor-sidebar-icon' && 'p-[0.5px] lg:p-px')}
			>
				<div
					className={cn(
						'absolute inset-0 rounded-sm ring-[0.5px] ring-black/8 ring-inset',
						'lg:ring-1 lg:ring-black/5',
					)}
				/>
				<video autoPlay loop muted playsInline src={item.src} className={'rounded-sm'} />
			</div>
		</div>
	);
}
