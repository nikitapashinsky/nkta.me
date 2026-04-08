import { createFileRoute } from '@tanstack/react-router';
import { twJoin, twMerge } from 'tailwind-merge';

import { Link, type LinkProps } from '@/components/Link';
import { credits } from '@/data/credits';

export const Route = createFileRoute('/credits')({
  head: () => ({
    meta: [{ title: 'About this site · Nikita Pashinsky' }],
  }),
  component: RouteComponent,
});

const tech = credits.TECH;
const tools = credits.TOOLS;
const typography = credits.TYPOGRAPHY;

function RouteComponent() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid content-start gap-x-4 gap-y-16',
      )}
    >
      <div className={'col-span-full flex flex-col gap-4 lg:gap-6'}>
        <h1 className={'text-2xl font-medium text-balance lg:text-3xl'}>Credits</h1>
        <p className={'max-w-prose text-lg text-balance text-secondary lg:text-xl'}>
          This website was made possible thanks to many incredible open source projects and the
          amazing people who contributed to them:
        </p>
      </div>

      <div
        className={
          'col-span-full grid grid-cols-subgrid gap-8 md:grid-rows-2 md:content-start md:items-start md:gap-4'
        }
      >
        {/* Tech stack */}
        <div
          className={twJoin(
            'flex flex-col gap-2',
            'col-span-full md:col-span-4 md:row-span-2 lg:col-span-3',
          )}
        >
          <h2 className={'text-secondary'}>Tech stack</h2>
          <ul className={'flex flex-col'}>
            {tech.map(({ name, icon, brandColor, hoverIcon, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                brandColor={brandColor}
                hoverIcon={hoverIcon}
                url={url}
              />
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className={twJoin('flex flex-col gap-2', 'col-span-full md:col-span-4 lg:col-span-3')}>
          <h2 className={'text-secondary'}>Tools</h2>
          <ul className={'flex flex-col'}>
            {tools.map(({ name, icon, brandColor, hoverIcon, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                brandColor={brandColor}
                hoverIcon={hoverIcon}
                url={url}
              />
            ))}
          </ul>
        </div>

        {/* Typography */}
        <div className={twJoin('flex flex-col gap-2', 'col-span-full md:col-span-4 lg:col-span-3')}>
          <h2 className={'text-secondary'}>Typography</h2>
          <ul className={'flex flex-col'}>
            {typography.map(({ name, icon, brandColor, hoverIcon, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                brandColor={brandColor}
                hoverIcon={hoverIcon}
                url={url}
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
  url,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | string;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  url: LinkProps['to'];
}) {
  return (
    <li>
      <Link to={url} className="group flex items-center gap-2 py-1.5">
        <div className="flex size-6 items-center justify-center">
          {typeof Icon === 'string' ? (
            <img src={Icon} alt={name} className="size-full" />
          ) : (
            <Icon
              style={
                {
                  '--credit-color': brandColor ?? 'var(--color-neutral-950)',
                } as React.CSSProperties
              }
              className={twMerge(
                'size-full fill-neutral-400 group-hover:fill-(--credit-color) group-active:fill-(--credit-color)',
                HoverIcon && 'group-hover:hidden group-active:hidden',
              )}
            />
          )}

          {HoverIcon && (
            <HoverIcon className="hidden size-full group-hover:block group-active:block" />
          )}
        </div>
        {name}
      </Link>
    </li>
  );
}
