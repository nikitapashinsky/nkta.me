import { createFileRoute } from '@tanstack/react-router';
import { twJoin, twMerge } from 'tailwind-merge';

import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import ClaudeLogo from '@/assets/images/logos/claude.svg?react';
import IBMPlexLogo from '@/assets/images/logos/ibm-plex.svg?react';
import InterLogo from '@/assets/images/logos/inter.svg?react';
import NetlifyColorLogo from '@/assets/images/logos/netlify-color.svg?react';
import NetlifyLogo from '@/assets/images/logos/netlify.svg?react';
import NpmLogo from '@/assets/images/logos/npm.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import VitePlusColorLogo from '@/assets/images/logos/viteplus-color.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus.svg?react';
import WarpLogo from '@/assets/images/logos/warp.svg?react';
import ZedAppLogo from '@/assets/images/logos/zed-app.svg?react';
import { Link, type LinkProps } from '@/components/Link';

export const Route = createFileRoute('/credits')({
  head: () => ({
    meta: [{ title: 'About this site · Nikita Pashinsky' }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid content-start gap-x-4 gap-y-12',
      )}
    >
      <div className={'col-span-full flex flex-col gap-2'}>
        <h1 className={'text-xl text-balance md:text-2xl'}>Credits</h1>
        <p className={'max-w-prose text-balance text-secondary'}>
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
            <Credit
              name="Base UI"
              url="https://base-ui.com"
              icon={BaseUILogo}
              brandColor="#03060D"
            />
            <Credit
              name="Netlify"
              url="https://netlify.app"
              icon={NetlifyLogo}
              hoverIcon={NetlifyColorLogo}
            />
            <Credit name="React" url="https://react.dev" icon={ReactLogo} brandColor="#087ea4" />
            <Credit
              name="Tailwind CSS"
              url="https://tailwindcss.com"
              icon={TailwindCSSLogo}
              brandColor="#38BDF8"
            />
            <Credit
              name="tailwind-merge"
              icon={NpmLogo}
              brandColor="#cb3837"
              url="https://www.npmjs.com/package/tailwind-merge"
            />
            <Credit
              name="Tanstack Router"
              icon={TanstackLogo}
              url="https://tanstack.com/router/latest"
            />
            <Credit
              name="Vite Plus"
              icon={VitePlusLogo}
              hoverIcon={VitePlusColorLogo}
              url="https://viteplus.dev"
            />
          </ul>
        </div>

        {/* Tools */}
        <div className={twJoin('flex flex-col gap-2', 'col-span-full md:col-span-4 lg:col-span-3')}>
          <h2 className={'text-secondary'}>Tools</h2>
          <ul className={'flex flex-col'}>
            <Credit
              name="Claude Code"
              url="https://claude.com/product/claude-code"
              icon={ClaudeLogo}
              brandColor="#D97757"
            />
            <Credit name="Warp" url="https://www.warp.dev/" icon={WarpLogo} />
            <Credit name="Zed" url="https://zed.dev" icon={ZedAppLogo} brandColor="#1348DC" />
          </ul>
        </div>

        {/* Typography */}
        <div className={twJoin('flex flex-col gap-2', 'col-span-full md:col-span-4 lg:col-span-3')}>
          <h2 className={'text-secondary'}>Typography</h2>
          <ul className={'flex flex-col'}>
            <Credit
              name="IBM Plex Mono"
              url="https://www.ibm.com/plex/"
              icon={IBMPlexLogo}
              brandColor="#054ada"
            />
            <Credit
              name="Inter"
              url="https://rsms.me/inter"
              icon={InterLogo}
              brandColor="color(display-p3 1.0 0.36 0.0)"
            />
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
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  hoverIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  brandColor?: string;
  name: string;
  url: LinkProps['to'];
}) {
  return (
    <li>
      <Link to={url} className="group flex items-center gap-2 py-1.5">
        <div className="flex size-5 items-center justify-center">
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
          {HoverIcon && (
            <HoverIcon className="hidden size-full group-hover:block group-active:block" />
          )}
        </div>
        {name}
      </Link>
    </li>
  );
}
