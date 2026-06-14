import { Popover } from '@base-ui/react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

import { Clock } from '@/components/Clock';

import { Link } from './Link';

const popoverImages = [
  {
    src: '/images/scheveningen_2.webp',
    alt: 'A rocky shoreline in the foreground with a seaside pier, large Ferris wheel, and bungee tower extending over the sea under a clear blue sky.',
  },
  {
    src: '/images/scheveningen_1.webp',
    alt: 'A wide sandy beach with dark, algae-covered rocks in the foreground and gentle waves rolling in under a clear blue sky.',
    className: 'object-[center_calc(50%-10px)]',
  },
  {
    src: '/images/scheveningen_3.webp',
    alt: 'An empty sandy beach with tire tracks in the foreground and a seaside pier with a Ferris wheel and bungee tower silhouetted against a soft pink sunset sky.',
  },
];

export function Footer({ className, ...rest }: React.ComponentProps<'div'>) {
  // Preload carousel images
  useEffect(() => {
    popoverImages.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className={twMerge('flex h-fit min-h-0 flex-col gap-3 text-sm', className)} {...rest}>
      {import.meta.env.DEV && (
        <div className={'flex items-center gap-3 text-tertiary'}>
          <Link to="/credits" className="shrink-0">
            Credits
          </Link>
        </div>
      )}
      <div className={twJoin('flex items-center gap-1 text-tertiary')}>
        <Clock />
        <span className={'shrink-0'}>here in</span>
        <Popover.Root>
          <Popover.Trigger className={'group cursor-help outline-none'}>
            <span
              className={twJoin(
                'relative',
                'underline decoration-black/16 decoration-dotted decoration-[1.5px] underline-offset-[3px]',
                'group-hover:text-black group-focus-visible:text-black group-data-popup-open:text-black',
                'transition-colors duration-125 group-hover:duration-75',
                'before:absolute before:-inset-y-0.5 before:-inset-s-0.75 before:-inset-e-1.5 before:-z-1 before:rounded-[3px] before:bg-black/8 before:opacity-0',
                'before:transition-opacity before:duration-150 before:ease-out',
                'group-data-popup-open:decoration-transparent group-data-popup-open:before:opacity-100',
              )}
            >
              Scheveningen
            </span>
            .
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner side="top" sideOffset={8} positionMethod="fixed">
              <Popover.Popup
                className={twJoin(
                  'flex max-w-72 flex-col will-change-transform outline-none',
                  'rounded-md bg-white shadow-2xl ring-[0.5px] ring-black/8',
                  'origin-(--transform-origin) transition-all duration-spring ease-spring',
                  'data-starting-style:scale-90 data-starting-style:opacity-0',
                  'data-ending-style:scale-90 data-ending-style:opacity-0',
                )}
              >
                <ImageCarousel />
                <Popover.Description className={'p-3 text-sm'}>
                  A seaside district in The Hague, Netherlands.
                </Popover.Description>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
}

function ImageCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div ref={emblaRef} className={'w-full overflow-hidden px-1 pt-1'}>
      <div className={'flex [touch-action:pan-y_pinch-zoom]'}>
        {popoverImages.map(({ src, alt, className }) => (
          <div key={src} className={'min-w-0 flex-[0_0_95.7142857%] pr-1'}>
            <img
              src={src}
              alt={alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className={twMerge(
                'aspect-4/3 w-full rounded-xs object-cover select-none',
                className,
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
