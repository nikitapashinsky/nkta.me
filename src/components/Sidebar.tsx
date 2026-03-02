import { Links } from './Links';
import { Footer } from './Footer';
import { Intro } from './Intro';
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
