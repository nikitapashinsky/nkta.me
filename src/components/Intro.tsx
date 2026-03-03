import { cn } from '~/utils/cn';

export function Intro() {
	return (
		<div className={'flex gap-4 p-6'}>
			<div className={cn('flex size-5 shrink-0 items-center justify-center')}>
				<div className={'size-6 shrink-0 rounded-full bg-[url(/images/me.webp)] bg-cover'} />
			</div>
			<div className={'flex flex-col gap-2 text-sm font-[450] text-balance'}>
				<h1>Hi, I’m Nikita Pashinsky.</h1>
				<p>I’m a product designer focused on crafting high-quality software.</p>
				<p>
					Currently leading product design on Composer at{' '}
					<a
						href="https://piano.io"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							'relative underline decoration-black/10 underline-offset-4 outline-none',
							'transition-colors duration-125 hover:duration-75',
							'before:absolute before:-inset-x-0.5 before:-inset-y-0.5 before:-z-1 before:rounded-[3px] before:bg-acid-lime before:opacity-0',
							'hover:decoration-black focus-visible:decoration-transparent focus-visible:before:opacity-100',
						)}
					>
						Piano
					</a>
					.
				</p>
				<p>Open to new opportunities.</p>
			</div>
		</div>
	);
}
