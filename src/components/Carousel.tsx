import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useId, useEffect, useState } from 'react';
import type { ComponentPropsWithRef } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import type { CollectionEntry } from 'astro:content';
import { PortfolioItem } from '~/components/PortfolioItem';
import { twMerge } from 'tailwind-merge';

type CarouselProps = {
	product: CollectionEntry<'products'>['data'];
	items: Array<CollectionEntry<'projects'>['data']>;
} & React.ComponentProps<'div'>;

export function Carousel({ product, items, ...props }: CarouselProps) {
	const carouselId = useId();
	const [emblaRef, emblaApi, emblaServerApi] = useEmblaCarousel({
		align: 'start',
		loop: true,
		ssr: items.map(() => 90),
	});
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
		usePrevNextButtons(emblaApi);
	const renderSsrStyles = !emblaApi;

	return (
		<>
			{renderSsrStyles && (
				<style>
					{emblaServerApi.ssrStyles(
						`#${carouselId}`,
						'.flex-[0_0_var(--slide-size)] .min-w-0 .pl-(--slide-spacing)',
					)}
				</style>
			)}
			<div data-embla {...props}>
				<div
					className={twMerge(
						'col-span-4 col-start-1 flex h-full flex-col justify-between',
						'max-sm:col-span-full',
					)}
				>
					<div className={'flex max-w-sm flex-col gap-2 text-balance'}>
						<div className={'flex items-baseline gap-2'}>
							<h3 className={twMerge('font-[550] tracking-tight')}>{product.name}</h3>
							<h3 className={twMerge('font-[550] tracking-tight text-neutral-400')}>
								{product.company}
							</h3>
						</div>
						<p className={twMerge('font-[450] tracking-tight text-neutral-600')}>
							{product.description}
						</p>
					</div>
					<div data-embla-buttons className={'hidden items-center gap-2 md:flex'}>
						<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
						<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
					</div>
				</div>

				<div
					data-embla-viewport
					ref={emblaRef}
					className={twMerge(
						'[--slide-size:90%] [--slide-spacing:2.5rem]',
						'col-span-full col-start-5 overflow-hidden p-10',
						'max-sm:col-start-1 max-sm:p-6 max-sm:[--slide-spacing:1.5rem]',
						'cursor-grab rounded bg-neutral-50 active:cursor-grabbing',
					)}
				>
					<div
						data-embla-container
						id={carouselId}
						className={twMerge(
							'ml-[calc(var(--slide-spacing)*-1)] flex h-full touch-pan-y touch-pinch-zoom items-stretch',
						)}
					>
						{items.map((item) => (
							<div
								data-embla-slide
								key={item.title}
								className={twMerge('min-w-0 flex-[0_0_var(--slide-size)] pl-(--slide-spacing)')}
							>
								<div className={twMerge('flex h-full items-center justify-center select-none')}>
									<PortfolioItem item={item} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

type UsePrevNextButtonsType = {
	prevBtnDisabled: boolean;
	nextBtnDisabled: boolean;
	onPrevButtonClick: () => void;
	onNextButtonClick: () => void;
};

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined): UsePrevNextButtonsType => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.goToPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.goToNext();
	}, [emblaApi]);

	const onSelect = useCallback((api: EmblaCarouselType) => {
		setPrevBtnDisabled(!api.canGoToPrev());
		setNextBtnDisabled(!api.canGoToNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reinit', onSelect).on('select', onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

type PropType = ComponentPropsWithRef<'button'>;

const PrevButton = (props: PropType) => {
	const { children, disabled, ...restProps } = props;

	return (
		<button
			type="button"
			className={twMerge(
				'group flex size-10 items-center justify-center pr-0.5',
				'rounded-full hover:bg-neutral-100',
				'transition-transform duration-400 will-change-transform active:scale-95',
			)}
			{...restProps}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				className={'size-5 stroke-neutral-450 group-hover:stroke-black group-active:stroke-black'}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>

			{children}
		</button>
	);
};

const NextButton = (props: PropType) => {
	const { children, disabled, ...restProps } = props;

	return (
		<button
			type="button"
			className={twMerge(
				'group flex size-10 items-center justify-center pl-0.5',
				'rounded-full hover:bg-neutral-100',
				'transition-transform duration-400 will-change-transform active:scale-95',
			)}
			{...restProps}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				className={'size-5 stroke-neutral-450 group-hover:stroke-black group-active:stroke-black'}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
			</svg>

			{children}
		</button>
	);
};
