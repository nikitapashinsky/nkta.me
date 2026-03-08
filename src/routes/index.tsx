import { createFileRoute } from '@tanstack/react-router';
import { Carousel } from '~/components/Carousel';
import { useDevToolbar } from '~/components/DevToolbar';
import { Footer } from '~/components/Footer';
import { IconLinks } from '~/components/IconLinks';
import { Link } from '~/components/Link';
import { PortfolioItem } from '~/components/PortfolioItem';
import { portfolio } from '~/data/portfolio';
// import { useTime } from '~/hooks/useTime';
import { cn } from '~/utils/cn';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	// const { hours, minutes } = useTime('Europe/Amsterdam');
	const { showGrid } = useDevToolbar();

	return (
		<div
			className={cn(
				'flex h-svh flex-col justify-between pb-4',
				'md:relative md:grid md:h-auto md:auto-rows-min md:grid-cols-12 md:justify-start md:gap-6 md:px-6 md:pb-6',
				showGrid && 'grid-debug',
			)}
		>
			<div
				className={cn(
					'relative flex flex-1 flex-col px-12 pt-12',
					'md:col-span-full md:grid md:h-[85svh] md:grid-cols-subgrid md:items-center md:px-0 md:pt-0',
				)}
			>
				<div className={cn('flex flex-col gap-6', 'md:col-span-5 md:col-start-2')}>
					<div className={'flex max-w-[400px] flex-col gap-2 text-balance'}>
						<h1
							className={cn(
								'font-[550] tracking-tight',
								'animate-slide-in will-change-transform animation-delay-100',
							)}
						>
							Nikita Pashinsky
						</h1>
						<p
							className={cn(
								'font-[450] tracking-tight text-neutral-600',
								'animate-slide-in will-change-transform animation-delay-150',
							)}
						>
							I’m a product designer focused on crafting high-quality software. Currently leading
							product design on Composer at{' '}
							<Link to="https://piano.io" external>
								Piano
							</Link>
							.
						</p>
					</div>
					<IconLinks />
				</div>
			</div>

			<Carousel className={'col-span-full animate-fade-in animation-delay-550 md:-mx-6'} />
		</div>
	);
}
