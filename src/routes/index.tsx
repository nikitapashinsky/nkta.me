import { createFileRoute } from '@tanstack/react-router';
import { PortfolioItem } from '~/components/PortfolioItem';
import { Sidebar } from '~/components/Sidebar';
import { portfolioItems } from '~/data/portfolio';
import { useTime } from '~/hooks/useTime';
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<main className={'flex flex-col lg:block lg:flex-1'}>
			<Sidebar />
			<div className={cn('flex flex-col gap-3 p-3', 'lg:gap-6 lg:p-6 lg:pl-86')}>
				{portfolioItems.map((item) => (
					<PortfolioItem key={item.id} item={item} />
				))}
			</div>

			<div className={cn('flex flex-col gap-6 px-3 pt-8 pb-6', 'lg:hidden')}>
				<div className={'h-px w-full bg-neutral-100'} />
				<div className={'flex items-center gap-1 px-3 text-sm text-neutral-500 lg:text-xs'}>
					<div className={'flex items-center select-none'}>
						<div className={'tabular-nums'} suppressHydrationWarning>
							{hours}
						</div>
						<div className={'-translate-y-px animate-blink'}>:</div>
						<div className={'tabular-nums'} suppressHydrationWarning>
							{minutes}
						</div>
					</div>
					in Scheveningen
				</div>
			</div>
		</main>
	);
}
