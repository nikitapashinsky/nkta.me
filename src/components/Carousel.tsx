import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { PortfolioItem } from '~/components/PortfolioItem';
import { portfolioItems } from '~/data/portfolio';
import { cn } from '~/utils/cn';

export function Carousel(props: React.ComponentProps<'div'>) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

	return (
		<div {...props}>
			<div
				className={cn('overflow-hidden pl-4', '[--slide-size:90%] [--slide-spacing:1rem]')}
				ref={emblaRef}
			>
				<div className={cn('ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y touch-pinch-zoom')}>
					{portfolioItems.map((item) => (
						<div
							className={cn('min-w-0 flex-[0_0_var(--slide-size)] pl-(--slide-spacing)')}
							key={item.id}
						>
							<div className={cn('flex items-center justify-center select-none')}>
								<PortfolioItem item={item} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
