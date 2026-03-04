import { createFileRoute } from '@tanstack/react-router';
import { Footer } from '~/components/Footer';
import { IconLinks } from '~/components/IconLinks';
import { PortfolioItem } from '~/components/PortfolioItem';
import { Sidebar } from '~/components/Sidebar';
import { portfolioItems } from '~/data/portfolio';
import { useTime } from '~/hooks/useTime';
import { cn } from '~/utils/cn';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div className={'flex flex-col'}>
			<div
				className={cn(
					'flex w-full shrink-0 flex-col gap-8 p-6 pt-8',
					'h-[95svh] md:h-[85svh]',
					'md:grid md:grid-cols-3 md:items-start md:gap-6 lg:grid-cols-8',
				)}
			>
				<h1 className={'text-2xl font-[450] tracking-tight lg:col-span-2 2xl:text-3xl'}>
					Nikita Pashinsky
				</h1>

				<div
					className={cn(
						'flex h-full flex-col justify-between',
						'md:col-span-2 md:col-start-2',
						'lg:col-span-3 lg:col-start-4',
					)}
				>
					<div className={'flex flex-col gap-3 text-balance'}>
						<p className={'text-2xl font-[450] tracking-tight 2xl:text-3xl'}>
							I’m a product designer focused on crafting high-quality software.
						</p>
						<p className={'text-2xl font-[450] tracking-tight 2xl:text-3xl'}>
							Currently leading product design on Composer at{' '}
							<a
								href="https://piano.io"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									'relative underline decoration-black/10 underline-offset-6 outline-none',
									'transition-colors duration-125 hover:duration-75',
									'before:absolute before:-inset-x-0.5 before:-inset-y-0.5 before:-z-1 before:rounded-[3px] before:bg-acid-lime before:opacity-0',
									'hover:decoration-black focus-visible:decoration-transparent focus-visible:before:opacity-100',
								)}
							>
								Piano
							</a>
							.
						</p>
						<p className={'text-2xl font-[450] tracking-tight 2xl:text-3xl'}>
							Open to new opportunities.
						</p>
					</div>
					<IconLinks />
				</div>

				<div className={cn('hidden lg:flex', 'col-start-8 flex-col pt-0.5')}>
					<div className={'flex items-center gap-0.5 font-medium select-none'}>
						<div className={'tabular-nums'} suppressHydrationWarning>
							{hours}
						</div>
						<div className={'animate-blink'}>:</div>
						<div className={'tabular-nums'} suppressHydrationWarning>
							{minutes}
						</div>
					</div>
					<div className={'font-medium'}>Scheveningen</div>
					<div className={'font-medium'}>Netherlands</div>
				</div>
			</div>

			<div className={cn('flex flex-col gap-3 p-3', 'lg:gap-6 lg:p-6')}>
				{portfolioItems.map((item) => (
					<PortfolioItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}
