import { createFileRoute } from '@tanstack/react-router';
import { IconLinks } from '~/components/IconLinks';
import { PortfolioItem } from '~/components/PortfolioItem';
import { portfolioItems } from '~/data/portfolio';
// import { useTime } from '~/hooks/useTime';
import { cn } from '~/utils/cn';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	// const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div className={'flex flex-1 flex-col'}>
			<div className={'flex h-[90svh] shrink-0 flex-col items-center justify-center'}>
				<div className={'flex flex-col gap-6 px-12'}>
					<div className={'flex max-w-prose flex-col gap-2 text-balance'}>
						<h1 className={'font-[550] tracking-tight'}>Nikita Pashinsky</h1>
						<p className={'font-[450] tracking-tight text-neutral-600'}>
							I’m a product designer focused on crafting high-quality software. Currently leading
							product design on Composer at{' '}
							<a
								href="https://piano.io"
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									'relative outline-none',
									'transition-colors duration-125 hover:duration-75',
									'hover:text-black focus-visible:text-black active:text-black',
									'before:absolute before:inset-x-0 before:-bottom-px before:-z-1 before:h-px before:bg-black/12',
									'before:transition-all before:duration-125 hover:before:duration-75 focus-visible:before:duration-75 active:duration-75',
									'hover:before:-inset-s-0.5 hover:before:-inset-e-0.75 hover:before:h-[calc(100%+2px)]',
									'hover:before:rounded hover:before:bg-black/8',
									'focus-visible:before:-inset-s-0.5 focus-visible:before:-inset-e-0.75 focus-visible:before:h-[calc(100%+2px)] focus-visible:before:rounded focus-visible:before:bg-black/8',
									'active:before:-inset-s-0.5 active:before:-inset-e-0.75 active:before:h-[calc(100%+2px)] active:before:rounded active:before:bg-black/8',
								)}
							>
								Piano
							</a>
							.
						</p>
					</div>
					<IconLinks />
				</div>
				{/* <div className={cn('hidden lg:flex', 'col-start-8 flex-col pt-0.5')}>
					<div className={'flex items-center font-[450] tabular-nums select-none'}>
						<div suppressHydrationWarning>{hours}</div>
						<div className={'animate-blink'}>:</div>
						<div suppressHydrationWarning>{minutes}</div>
					</div>
					<div className={'font-[450]'}>Scheveningen</div>
					<div className={'font-[450]'}>Netherlands</div>
				</div> */}
			</div>

			<div className={cn('flex flex-col gap-3 p-3', 'lg:gap-6 lg:p-6')}>
				{portfolioItems.map((item) => (
					<PortfolioItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}
