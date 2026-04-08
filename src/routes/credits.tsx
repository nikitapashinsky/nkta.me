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

      <div className={'col-span-full grid grid-cols-subgrid gap-8'}>
        {/* Tech stack */}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-2')}>
          <h2 className={'col-span-full text-secondary'}>Tech stack</h2>
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2'}>
            {tech.map(({ name, icon, url }) => (
              <Credit
                key={name}
                name={name}
                icon={icon}
                url={url}
                className="col-span-1 md:col-span-4"
                iconClassName={twJoin(
                  'rounded-full bg-white p-2.5 shadow-md shadow-black/4 outline-[0.5px] outline-black/8',
                  'group-hover:shadow-black/8 group-hover:outline-black/10',
                  'transition-all duration-125 group-hover:duration-75',
                )}
              />
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className={twJoin('col-span-full grid grid-cols-subgrid gap-2')}>
          <h2 className={'col-span-full text-secondary'}>Tools</h2>
          <ul className={'col-span-full grid grid-cols-subgrid gap-x-4 gap-y-2'}>
            {tools.map(({ name, description, icon, url }) => (
              <Credit
                key={name}
                name={name}
                description={description}
                icon={icon}
                url={url}
                className="col-span-1 md:col-span-4"
                iconClassName="overflow-clip rounded-xl"
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
    <li className={className}>
      <a
        href={url}
        className={twJoin(
          'group -ml-2 flex items-center gap-3 rounded-xl p-2',
          'transition-colors duration-125 hover:bg-neutral-100 hover:duration-75',
        )}
      >
        <div
          className={twMerge('flex size-12 shrink-0 items-center justify-center', iconClassName)}
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
