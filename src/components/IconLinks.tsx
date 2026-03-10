import { LinksData } from '~/data/links';
import { cn } from '~/utils/cn';

export function IconLinks() {
	return (
		<ul className={'-ml-3 flex md:-ml-2.5'}>
			{LinksData.map(({ icon: Icon, label, url }, index) => (
				<li
					key={label}
					style={{ '--delay': `${index * 50 + 250}ms` } as React.CSSProperties}
					className={'fade-in-slide delay-(--delay)'}
				>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							'group relative flex items-center justify-center px-3 py-2 md:px-2.5',
							'transition-transform will-change-transform active:scale-95',
							'outline-none',

							'before:pointer-events-none before:absolute before:inset-x-1 before:inset-y-0 before:-z-1 before:rounded-md md:before:inset-x-0.5',
							'before:bg-neutral-100/0 before:will-change-transform',
							'before:transition-colors before:duration-125',
							'hover:before:bg-neutral-100 hover:before:duration-75 active:before:bg-neutral-100 active:before:duration-75',
							'before:outline-neutral-300 focus-visible:before:outline',
						)}
					>
						<Icon
							className={cn('transition-colors duration-125', 'size-6 fill-neutral-450 md:size-5', [
								'group-hover:fill-black group-hover:duration-75',
								'group-active:fill-black group-active:duration-75',
								'group-focus-visible:fill-black group-focus-visible:duration-75',
							])}
						/>
					</a>
				</li>
			))}
		</ul>
	);
}
