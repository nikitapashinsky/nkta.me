import { cn } from '~/lib/utils';
import { useTime } from '~/hooks/useTime';

export function Footer({ breakpoint }: { breakpoint: 'desktop' | 'mobile' }) {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div
			className={cn(
				breakpoint === 'desktop'
					? 'hidden flex-col gap-6 pt-2 pr-6 pb-6 pl-15 lg:flex'
					: 'flex flex-col gap-6 px-3 pt-12 pb-6 lg:hidden',
			)}
		>
			<div className={'hidden h-px w-full bg-neutral-100 lg:block'} />
			<div
				className={cn(
					'flex items-center gap-1 text-sm font-[450] text-neutral-600 lg:text-xs',
					breakpoint === 'mobile' && 'pl-15',
				)}
			>
				<div className={'flex items-center select-none'}>
					<div className={'tabular-nums'} suppressHydrationWarning>
						{hours}
					</div>
					<div className={'animate-blink'}>:</div>
					<div className={'tabular-nums'} suppressHydrationWarning>
						{minutes}
					</div>
				</div>
				here in Scheveningen.
			</div>
		</div>
	);
}
