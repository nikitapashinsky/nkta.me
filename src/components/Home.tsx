import { Link } from './Link';
import { IconLinks } from './IconLinks';
import { Carousel } from './Carousel';
import type { ProductKey } from '~/data/portfolio';
import { getItemsByProduct, products } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function Home() {
	// const { hours, minutes } = useTime('Europe/Amsterdam');

	return (
		<div
			className={cn(
				'mx-auto grid max-w-7xl auto-rows-min grid-cols-12 gap-6 px-12 pb-6',
				'max-sm:grid-cols-2',
				'bg-white outline-black/4 xl:my-6 xl:rounded xl:outline',
			)}
		>
			<div className={cn('col-span-full grid h-[85svh] grid-cols-subgrid items-center px-0 pt-0')}>
				<div className={cn('col-span-full flex flex-col gap-6')}>
					<div className={'flex max-w-[480px] flex-col gap-2 text-balance'}>
						<h1 className={cn('font-[550] tracking-tight', 'fade-in-slide delay-100')}>
							Nikita Pashinsky
						</h1>
						<p
							className={cn(
								'font-[450] tracking-tight text-neutral-600',
								'fade-in-slide delay-150',
							)}
						>
							I’m a product designer focused on crafting high-quality software. Currently leading
							product design on Composer at{' '}
							<Link to="https://piano.io" external>
								Piano
							</Link>
							.
						</p>
					</div>
					<IconLinks />
				</div>
			</div>

			{(Object.keys(products) as Array<ProductKey>).map((key) => (
				<Carousel
					key={key}
					product={products[key]}
					items={getItemsByProduct(key)}
					className={cn('col-span-full grid grid-cols-subgrid py-10', 'max-sm:gap-y-6 max-sm:py-6')}
				/>
			))}
		</div>
	);
}
