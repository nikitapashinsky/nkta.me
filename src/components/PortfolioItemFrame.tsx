import { cn } from '~/lib/utils';

export function PortfolioItemFrame({
	children,
	ringOutside,
}: {
	children: React.ReactNode;
	ringOutside?: boolean;
}) {
	return (
		<div className={cn('rounded-md bg-neutral-100 p-6', 'lg:p-12 xl:p-20')}>
			<div className={cn('relative', ringOutside && 'p-px')}>
				<div
					className={cn(
						'absolute inset-0 rounded-sm ring-[0.5px] ring-black/8 ring-inset',
						'lg:ring lg:ring-black/5',
					)}
				/>
				{children}
			</div>
		</div>
	);
}
