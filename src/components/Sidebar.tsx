import { Links } from './Links';
import { Footer } from './Footer';
import { cn } from '~/lib/utils';

export function Sidebar() {
	return (
		<div className={cn('flex w-full flex-col', 'lg:fixed lg:h-full lg:w-[320px] lg:justify-end')}>
			<div className={cn('flex gap-4 p-6', 'lg:flex-1')}>
				<div className={cn('flex h-6 w-5 shrink-0 items-center justify-center', 'lg:size-5')}>
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
			<Footer breakpoint="desktop" />
		</div>
	);
}
