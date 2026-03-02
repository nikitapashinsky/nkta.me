import { Popover } from '@base-ui/react';
import { cn } from '~/lib/utils';
import { useTime } from '~/hooks/useTime';

export function Footer({ breakpoint }: { breakpoint: 'desktop' | 'mobile' }) {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div
			className={cn(
				breakpoint === 'desktop'
					? 'hidden flex-col gap-6 py-6 pr-6 pl-15 lg:flex'
					: 'flex flex-col gap-6 px-3 pt-12 pb-6 lg:hidden',
			)}
		>
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
				here in{' '}
				<Popover.Root>
					<Popover.Trigger className={'group outline-none'}>
						<span
							className={cn(
								'underline decoration-black/30 decoration-dotted decoration-1 underline-offset-[3px]',
								'cursor-help outline-none',
								'group-hover:text-black group-focus-visible:text-black group-data-popup-open:text-black',
							)}
						>
							Scheveningen
						</span>
						.
					</Popover.Trigger>
					<Popover.Portal>
						<Popover.Positioner side="top" sideOffset={8} positionMethod="fixed">
							<Popover.Popup
								className={cn(
									'flex max-w-72 flex-col',
									'rounded-md bg-white shadow-2xl ring-[0.5px] ring-black/8 outline-none',
									'origin-(--transform-origin) transition-all duration-150 ease-out',
									'data-starting-style:scale-95 data-starting-style:opacity-0',
									'data-ending-style:scale-95 data-ending-style:opacity-0',
								)}
							>
								<div
									className={
										'flex w-full snap-x snap-mandatory scroll-px-1 gap-1 overflow-x-auto px-1 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
									}
								>
									<div
										className={
											'aspect-4/3! w-full shrink-0 snap-start snap-always rounded-xs bg-[url(/images/scheveningen.webp)] bg-cover'
										}
									/>
									{/* <div
										className={
											'h-full w-64 shrink-0 snap-center snap-always rounded-xs bg-neutral-200'
										}
									/>
									<div
										className={
											'h-full w-64 shrink-0 snap-end snap-always rounded-xs bg-neutral-300'
										}
									/> */}
								</div>
								<div className={'p-3 text-sm font-[450] lg:text-xs'}>
									A seaside district in The Hague, Netherlands.
								</div>
							</Popover.Popup>
						</Popover.Positioner>
					</Popover.Portal>
				</Popover.Root>
			</div>
		</div>
	);
}
