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
          This website was made possible thanks to many incredible open source projects and the
          amazing people who contributed to them:
        </p>
      </div>

      <div className={'col-span-full grid grid-cols-subgrid gap-8'}>
        {/* Tech stack */}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-4')}>
          <h3 className={'col-span-full font-medium text-primary'}>Tech stack</h3>
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2'}>
            {tech.map(({ name, icon, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                url={url}
                className="col-span-full md:col-span-4"
                iconClassName={twJoin(
                  'bg-white p-2.5 shadow-icon outline-[0.5px] outline-black/6',
                  'rounded-[14px] corner-smooth not-supports-corner-shape:rounded-xl',
                  'group-hover:shadow-black/8 group-hover:outline-black/10',
                  'group-active:shadow-black/8 group-active:outline-black/10',
                  'transition-all duration-125 group-hover:duration-75',
                )}
              />
            ))}
          </ul>
        </div>

        {/* Typography */}
        {/*<div className={twJoin('flex flex-col gap-2', 'col-span-full md:col-span-4 lg:col-span-3')}>
          <h2 className={'text-secondary'}>Typography</h2>
          <ul className={'flex flex-col gap-1'}>
            {typography.map(({ name, description, icon, brandColor, hoverIcon, url }) => (
              <Credit
                key={name}
                name={name}
                description={description}
                icon={icon}
                brandColor={brandColor}
                hoverIcon={hoverIcon}
                url={url}
              />
            ))}
          </ul>
        </div>*/}
      </div>
    </div>
  );
}

function Credit({
  icon: Icon,
  name,
  description,
  url,
  className,
  containerClassName,
  iconClassName,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  description?: string;
  url: string;
  className?: string;
  containerClassName?: string;
  iconClassName?: string;
}) {
  return (
    <li className={className}>
      <a
        href={url}
        className={twMerge(
          'group relative -ml-1 grid items-center gap-3 p-1',
          'grid-cols-[48px_1fr]',
          'before:absolute before:inset-0 before:-z-1 before:scale-95 before:bg-neutral-100 before:opacity-0',
          'hover:before:scale-100 hover:before:opacity-100 active:before:scale-100 active:before:opacity-100',
          'before:rounded-[18px] before:corner-smooth before:not-supports-corner-shape:rounded-2xl',
          'before:transition-all before:duration-250 hover:before:duration-125',
          containerClassName,
        )}
      >
        <div
          className={twMerge(
            'flex size-12 shrink-0 items-center justify-center md:size-12',
            iconClassName,
          )}
        >
          <Icon className={'size-full shrink-0'} />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="font-medium">{name}</h4>
          {description && <p className="text-sm text-secondary">{description}</p>}
        </div>
      </a>
    </li>
  );
}
