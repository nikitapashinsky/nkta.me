import { createFileRoute } from '@tanstack/react-router';
import { Footer } from '~/components/Footer';
import { PortfolioItem } from '~/components/PortfolioItem';
import { Sidebar } from '~/components/Sidebar';
import { portfolioItems } from '~/data/portfolio';
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	return (
		<main className={'flex flex-col lg:block lg:flex-1'}>
			<Sidebar />
			<div className={cn('flex flex-col gap-3 p-3', 'lg:gap-6 lg:p-6 lg:pl-86')}>
				{portfolioItems.map((item) => (
					<PortfolioItem key={item.id} item={item} />
				))}
			</div>
			<Footer breakpoint="mobile" />
		</main>
	);
}
