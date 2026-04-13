import { createFileRoute } from '@tanstack/react-router';
import { twJoin, twMerge } from 'tailwind-merge';

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
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2 md:gap-y-3'}>
            {tech.map(({ name, icon, brandColor, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                brandColor={brandColor}
                url={url}
                className="col-span-full md:col-span-4"
                iconClassName="p-2.5"
              />
            ))}
          </ul>
        </div>

        {/*Typography*/}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-4')}>
          <h3 className={'col-span-full font-medium text-secondary'}>Typography</h3>
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2'}>
            {typography.map(({ name, description, icon, url }) => (
              <Credit
                key={name}
                name={name}
                description={description}
                icon={icon}
                url={url}
                className="col-span-full md:col-span-4"
                iconClassName="p-2.5"
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
  brandColor,
  name,
  description,
  url,
  className,
  iconClassName,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  description?: string;
  url: string;
  className?: string;
  iconClassName?: string;
}) {
  return (
    <li
      style={{ '--brand-color': brandColor ?? 'var(--color-neutral-100)' } as React.CSSProperties}
      className={className}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          'group relative -ml-1 flex items-center gap-3 p-1 pr-5 md:gap-4',
          'rounded-[20px] corner-smooth not-supports-corner-shape:rounded-2xl',
          // 'hover:bg-neutral-100 active:bg-neutral-100',
          'outline-offset-0 outline-neutral-300 focus-visible:outline',
          'before:absolute before:inset-0 before:-z-1 before:scale-95 before:opacity-0 before:blur-xs',
          'before:bg-neutral-100',
          // 'before:bg-linear-to-r before:from-(--brand-color)/40 before:via-(--brand-color)/10 before:via-20% before:to-neutral-100 before:to-30%',
          'hover:before:scale-100 hover:before:opacity-100 hover:before:blur-none active:before:scale-100 active:before:opacity-100 active:before:blur-none',
          'before:rounded-[20px] before:corner-smooth before:not-supports-corner-shape:rounded-2xl',
          'before:transition-all before:duration-200 hover:before:duration-100 active:before:duration-0',
          // 'after:absolute after:inset-0 after:-z-10 after:scale-95 after:bg-neutral-100 after:opacity-0 after:blur-md',
          // 'hover:after:scale-100 hover:after:opacity-100 hover:after:blur-none active:after:scale-100 active:after:opacity-100 active:after:blur-none',
          // 'after:rounded-[20px] after:corner-smooth after:not-supports-corner-shape:rounded-2xl',
          // 'after:transition-all after:duration-400 hover:after:duration-0 active:after:duration-0',
          'transition-all duration-300 active:scale-98 sm:duration-150',
        )}
      >
        <div
          className={twMerge(
            'flex size-12 shrink-0 items-center justify-center md:size-13',
            'bg-white shadow-icon outline-[0.5px] outline-black/6',
            'rounded-2xl corner-smooth not-supports-corner-shape:rounded-xl',
            'group-hover:shadow-black/8 group-hover:outline-black/10',
            'group-active:shadow-black/8 group-active:outline-black/10',
            'transition-all duration-200 group-hover:duration-100',
            'md:scale-97 md:group-hover:scale-100',
            iconClassName,
          )}
        >
          <Icon className={'size-full shrink-0'} />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <h4
            className={twJoin(
              'font-medium will-change-transform',
              'underline decoration-black/12 [text-decoration-thickness:var(--link-decoration-thickness)] underline-offset-(--link-decoration-offset)',
              'transition-all duration-300 group-hover:duration-100 sm:duration-200',
              'group-hover:decoration-transparent group-active:decoration-transparent',
            )}
          >
            {name}
          </h4>
          {description && <p className="text-sm text-secondary">{description}</p>}
        </div>

        <span
          className={twJoin(
            `font-features-['case'] text-[16px] font-medium text-secondary`,
            'transition-all duration-300 sm:duration-150',
            '-translate-x-1 scale-90 opacity-0',
            'group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100',
            'group-active:translate-x-0 group-active:scale-100 group-active:opacity-100',
          )}
        >
          &#8599;
        </span>
      </a>
    </li>
  );
}
