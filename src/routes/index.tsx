import { createFileRoute } from '@tanstack/react-router';
import { Sidebar } from '../components/Sidebar';
import { useTime } from '../hooks/useTime';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<main className={'flex flex-col lg:block lg:flex-1'}>
			<Sidebar />
			<div className={'flex flex-col gap-6 p-6 lg:pl-86'}>
				<video autoPlay loop muted playsInline src="/videos/branch-menu.mp4" />
				<video autoPlay loop muted playsInline src="/videos/audience-estimate.mp4" />
				<video autoPlay loop muted playsInline src="/videos/select-touchpoint.mp4" />
				<video autoPlay loop muted playsInline src="/videos/sidebar-icon.mp4" />
			</div>

			<div className={'flex flex-col gap-6 px-6 pt-8 pb-6 lg:hidden'}>
				<div className={'h-px w-full bg-neutral-100'} />

				<div className={'flex items-center gap-1 text-sm text-neutral-500 lg:text-xs'}>
					<div className={'flex items-center select-none'}>
						<div className={'tabular-nums'} suppressHydrationWarning>
							{hours}
						</div>
						<div className={'animate-blink -translate-y-px'}>:</div>
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
