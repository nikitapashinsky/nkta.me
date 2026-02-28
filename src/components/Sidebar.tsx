import { useTime } from '~/hooks/useTime';
import { Links } from './Links';

export function Sidebar() {
	const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div className={'flex w-full flex-col lg:fixed lg:h-full lg:w-[320px] lg:justify-end'}>
			<div className={'flex gap-4 p-6 lg:flex-1'}>
				<div className={'flex h-6 w-5 shrink-0 items-center justify-center lg:size-5'}>
					<div
						style={{ backgroundImage: 'url(/images/me.webp)' }}
						className={'size-6 shrink-0 rounded-full bg-cover'}
					/>
				</div>
				<div className={'flex flex-col gap-2'}>
					<h1 className={'font-medium lg:text-sm'}>Nikita Pashinsky</h1>
					<p className={'text-balance text-neutral-500 lg:text-sm'}>
						I'm a product designer focused on crafting beautiful and intuitive interfaces.
					</p>
				</div>
			</div>
			<Links />
			<div className={'hidden flex-col gap-6 pt-4 pr-6 pb-6 pl-15 lg:flex'}>
				<div className={'h-px w-full bg-neutral-100'} />

				<div className={'flex items-center gap-1 text-sm text-neutral-500 lg:text-xs'}>
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
		</div>
	);
}
