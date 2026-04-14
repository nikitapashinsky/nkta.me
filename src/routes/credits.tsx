import { createFileRoute } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

import { credits } from '@/data/credits';

export const Route = createFileRoute('/credits')({
  head: () => ({
    meta: [{ title: 'About this site · Nikita Pashinsky' }],
  }),
  component: RouteComponent,
});

const tech = credits.TECH;
const typography = credits.TYPOGRAPHY;

function RouteComponent() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid content-start gap-x-4 gap-y-16',
        'md:pb-16',
      )}
    >
      <div className={'col-span-full flex flex-col gap-4 lg:gap-6'}>
        <h1 className={'text-2xl font-medium text-balance lg:text-3xl'}>Credits</h1>
        <p className={'max-w-prose text-lg text-balance text-secondary lg:text-xl'}>
          This website was made possible thanks to many incredible open-source projects and the
          amazing people who contributed to them.
        </p>
      </div>

      <div className={'col-span-full grid grid-cols-subgrid gap-16'}>
        {/* Tech stack */}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-4')}>
          <h3 className={'col-span-full font-medium text-secondary'}>Tech stack</h3>
          <ul className={'col-span-full grid grid-cols-subgrid gap-y-2'}>
            {tech.map(({ name, icon, hoverIcon, brandColor, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                hoverIcon={hoverIcon}
                brandColor={brandColor}
                url={url}
                className="col-span-full md:col-span-4"
              />
            ))}
          </ul>
        </div>

        {/*Typography*/}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-4')}>
          <h3 className={'col-span-full font-medium text-secondary'}>Typography</h3>
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2'}>
            {typography.map(({ name, description, icon, brandColor, url }) => (
              <Credit
                key={name}
                name={name}
                description={description}
                icon={icon}
                brandColor={brandColor}
                url={url}
                className="col-span-full md:col-span-4"
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Credit({
  icon: Icon,
  hoverIcon: HoverIcon,
  brandColor,
  name,
  description,
  url,
  className,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  description?: string;
  url: string;
  className?: string;
}) {
  return (
    <li
      style={{ '--brand-color': brandColor ?? '#000' } as React.CSSProperties}
      className={className}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={twJoin(
          'group relative -ml-1 flex items-center gap-3 p-1 pr-5 md:gap-4',
          'rounded-[20px] corner-smooth not-supports-corner-shape:rounded-2xl',
          'outline-offset-0 outline-neutral-300 focus-visible:outline',
          'before:absolute before:inset-0 before:-z-1 before:scale-95 before:opacity-0 before:blur-xs',
          'before:bg-linear-to-r before:from-(--brand-color)/8 before:to-(--brand-color)/6',
          'before:rounded-[20px] before:corner-smooth before:not-supports-corner-shape:rounded-2xl',
          'before:transition-all before:duration-400 hover:before:duration-200 active:before:duration-100 md:before:duration-200 md:hover:before:duration-100',
          'hover:before:scale-100 hover:before:opacity-100 hover:before:blur-none active:before:scale-100 active:before:opacity-100 active:before:blur-none',
          'transition-all duration-150 md:active:scale-98',
        )}
      >
        <div
          className={twJoin(
            'flex size-12 shrink-0 items-center justify-center outline-[0.5px] md:size-13',
            'outline-[oklch(from_var(--brand-color)_20%_c_h)]/0',
            // 'bg-white shadow-icon outline-black/8',
            'bg-neutral-100',
            'rounded-2xl corner-smooth not-supports-corner-shape:rounded-xl',
            'group-hover:bg-white group-hover:outline-[oklch(from_var(--brand-color)_20%_c_h)]/14 group-active:bg-white group-active:outline-[oklch(from_var(--brand-color)_20%_c_h)]/14',
            'group-hover:shadow-icon-hover group-hover:shadow-darken-(--brand-color)/20',
            // 'group-hover:shadow-lg group-hover:shadow-[oklch(from_var(--brand-color)_15%_c_h)]/20 group-hover:outline-[oklch(from_var(--brand-color)_20%_c_h)]/14',
            'group-active:shadow-icon-hover group-active:shadow-[oklch(from_var(--brand-color)_15%_c_h)]/20 group-active:outline-[oklch(from_var(--brand-color)_20%_c_h)]/14',
            'transition duration-200 group-hover:duration-100',
            'md:scale-97 md:group-hover:scale-100',
          )}
        >
          <Icon
            className={twJoin(
              'size-8 shrink-0 fill-neutral-500',
              'transition-colors duration-200 group-hover:duration-100 group-active:duration-100',
              'group-hover:fill-(--brand-color) group-active:fill-(--brand-color)',
            )}
          />
          {HoverIcon && (
            <HoverIcon
              className={
                'absolute size-8 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:duration-100 group-active:opacity-100 group-active:duration-100'
              }
            />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <h4
            className={twJoin(
              'font-medium',
              'underline decoration-black/8 [text-decoration-thickness:var(--link-decoration-thickness)] underline-offset-(--link-decoration-offset)',
              'transition-all duration-300 group-hover:duration-100 group-active:duration-100 md:duration-200',
              'group-hover:decoration-transparent group-active:decoration-transparent',
              'group-hover:text-[oklch(from_var(--brand-color)_30%_c_h)] group-active:text-[oklch(from_var(--brand-color)_30%_c_h)]',
            )}
          >
            {name}
          </h4>
          {description && <p className="text-sm text-secondary">{description}</p>}
        </div>

        <span
          className={twJoin(
            `font-features-['case'] text-lg text-[oklch(from_var(--brand-color)_60%_c_h)]`,
            'transition-all duration-200 group-hover:duration-100 group-active:duration-100',
            '-translate-x-1.5 scale-85 opacity-0',
            'group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:brightness-60',
            'group-active:translate-x-0 group-active:scale-100 group-active:opacity-100 group-active:brightness-60',
          )}
        >
          &#8599;
        </span>
      </a>
    </li>
  );
}
