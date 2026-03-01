import { Links } from './Links';
import { Footer } from './Footer';
import { cn } from '~/lib/utils';

export function Sidebar() {
	return (
		<div className={cn('flex w-full flex-col', 'lg:fixed lg:h-full lg:w-[320px]')}>
			<div className={'flex flex-col lg:flex-1'}>
				<Intro />
			</div>
			<Links />
			<Footer breakpoint="desktop" />
		</div>
	);
}

function Intro() {
	return (
		<div className={'flex gap-4 p-6'}>
			<div className={cn('flex size-5 shrink-0 items-center justify-center')}>
				<div
					style={{ backgroundImage: 'url(/images/me.webp)' }}
					className={'size-6 shrink-0 rounded-full bg-cover'}
				/>
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
						className={
							'underline decoration-black/10 underline-offset-4 transition-colors duration-125 hover:decoration-black hover:duration-75'
						}
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
