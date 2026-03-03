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
								'relative',
								'underline decoration-black/30 decoration-dotted decoration-1 underline-offset-[3px]',
								'cursor-help outline-none',
								'group-hover:text-black group-focus-visible:text-black group-data-popup-open:text-black',
								'transition-colors duration-125 group-hover:duration-75',
								'before:absolute before:-inset-y-0.5 before:-inset-s-0.75 before:-inset-e-1.5 before:-z-1 before:rounded-[3px] before:bg-black/8 before:opacity-0',
								'before:east-out before:transition-opacity before:duration-150',
								'group-data-popup-open:decoration-transparent group-data-popup-open:before:opacity-100',
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
									'origin-(--transform-origin) transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform lg:ease-[cubic-bezer(0.175,0.885,0.32,1.1)]',
									'data-starting-style:scale-90 data-starting-style:opacity-0',
									'data-ending-style:scale-90 data-ending-style:opacity-0',
								)}
							>
								<div
									className={
										'flex w-full snap-x snap-mandatory scroll-px-1 gap-1 overflow-x-auto px-1 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
									}
								>
									<img
										src="/images/scheveningen_2.webp"
										alt="A rocky shoreline in the foreground with a seaside pier, large Ferris wheel, and bungee tower extending over the sea under a clear blue sky."
										className={
											'aspect-3/4 w-[calc(100%-8px)] shrink-0 snap-center snap-always rounded-xs select-none'
										}
									/>
									<img
										src="/images/scheveningen_1.webp"
										alt="A wide sandy beach with dark, algae-covered rocks in the foreground and gentle waves rolling in under a clear blue sky."
										className={
											'aspect-3/4 w-[calc(100%-8px)] shrink-0 snap-start snap-always rounded-xs select-none'
										}
									/>
									<img
										src="/images/scheveningen_3.webp"
										alt="An empty sandy beach with tire tracks in the foreground and a seaside pier with a Ferris wheel and bungee tower silhouetted against a soft pink sunset sky."
										className={
											'aspect-3/4 w-[calc(100%-8px)] shrink-0 snap-end snap-always rounded-xs select-none'
										}
									/>
								</div>
								<Popover.Description className={'p-3 text-sm font-[450] lg:text-xs'}>
									A seaside district in The Hague, Netherlands.
								</Popover.Description>
							</Popover.Popup>
						</Popover.Positioner>
					</Popover.Portal>
				</Popover.Root>
			</div>
		</div>
	);
}
