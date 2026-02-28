import { createFileRoute } from '@tanstack/react-router';
import { Sidebar } from '~/components/Sidebar';
import { useTime } from '~/hooks/useTime';
import { PortfolioItemFrame } from '~/components/PortfolioItemFrame';
import { cn } from '~/lib/utils';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<main className={'flex flex-col lg:block lg:flex-1'}>
			<Sidebar />
			<div className={cn('flex flex-col gap-3 p-3', 'lg:gap-6 lg:p-6 lg:pl-86')}>
				<PortfolioItemFrame>
					<video
						autoPlay
						loop
						muted
						playsInline
						src="/videos/branch-menu.mp4"
						className={'rounded-sm'}
					/>
				</PortfolioItemFrame>
				<PortfolioItemFrame>
					<video
						autoPlay
						loop
						muted
						playsInline
						src="/videos/audience-estimate.mp4"
						className={'rounded-sm'}
					/>
				</PortfolioItemFrame>
				<PortfolioItemFrame>
					<video
						autoPlay
						loop
						muted
						playsInline
						src="/videos/select-touchpoint.mp4"
						className={'rounded-sm'}
					/>
				</PortfolioItemFrame>
				<PortfolioItemFrame ringOutside>
					<video
						autoPlay
						loop
						muted
						playsInline
						src="/videos/sidebar-icon.mp4"
						className={'rounded-sm'}
					/>
				</PortfolioItemFrame>
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
