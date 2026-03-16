import { createFileRoute } from '@tanstack/react-router';

import { Link, type LinkProps } from '@/components/Link';
import BaseUILogo from '@/assets/images/logos/base-ui.svg?react';
import ClaudeLogo from '@/assets/images/logos/claude.svg?react';
import CloudflareLogo from '@/assets/images/logos/cloudflare.svg?react';
import IBMPlexLogo from '@/assets/images/logos/ibm-plex.svg?react';
import InterLogo from '@/assets/images/logos/inter.svg?react';
import NpmLogo from '@/assets/images/logos/npm.svg?react';
import ReactLogo from '@/assets/images/logos/react.svg?react';
import TailwindCSSLogo from '@/assets/images/logos/tailwindcss.svg?react';
import TanstackLogo from '@/assets/images/logos/tanstack.svg?react';
import TypeScriptLogo from '@/assets/images/logos/typescript.svg?react';
import VitePlusLogo from '@/assets/images/logos/viteplus.svg?react';
import VitePlusColorLogo from '@/assets/images/logos/viteplus-color.svg?react';
import WarpLogo from '@/assets/images/logos/warp.svg?react';
import ZedLogo from '@/assets/images/logos/zed.svg?react';
import { twMerge } from 'tailwind-merge';

export const Route = createFileRoute('/credits')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className={'col-span-full pt-16 md:pt-0'}>
        <div className={'flex max-w-prose flex-col gap-6'}>
          <div className={'mb-10 flex flex-col gap-4'}>
            <h1 className={'text-xl font-normal text-balance lg:text-2xl'}>Credits</h1>
            {/*<p className={'text-secondary'}>
              This website was made possible thanks to all the generous people who contributed to
              these open-source projects:
            </p>*/}
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Typography</h2>
            <ul className={'flex flex-col'}>
              <Credit
                name="Inter"
                url="https://rsms.me/inter"
                icon={InterLogo}
                brandColor="color(display-p3 1.0 0.36 0.0)"
              />
              <Credit
                name="IBM Plex Mono"
                url="https://www.ibm.com/plex/"
                icon={IBMPlexLogo}
                brandColor="#054ada"
              />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Front-end tooling</h2>
            <ul className={'flex flex-col'}>
              <Credit
                name="Base UI"
                url="https://base-ui.com"
                icon={BaseUILogo}
                brandColor="#03060D"
              />
              <Credit name="React" url="https://react.dev" icon={ReactLogo} brandColor="#087ea4" />
              <Credit
                name="Tailwind CSS"
                url="https://tailwindcss.com"
                icon={TailwindCSSLogo}
                brandColor="#38BDF8"
              />
              <Credit
                name="Tailwind Merge"
                icon={NpmLogo}
                brandColor="#cb3837"
                url="https://www.npmjs.com/package/tailwind-merge"
              />
              <Credit
                name="Tanstack Start"
                icon={TanstackLogo}
                url="https://tanstack.com/start/latest"
              />
              <Credit
                name="TypeScript"
                url="https://www.typescriptlang.org/"
                icon={TypeScriptLogo}
                brandColor="#3178C6"
              />
              <Credit
                name="Vite Plus"
                icon={VitePlusLogo}
                hoverIcon={VitePlusColorLogo}
                url="https://viteplus.dev"
              />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Hosting</h2>
            <ul className={'flex flex-col'}>
              <Credit
                name="Cloudflare Workers"
                url="https://workers.cloudflare.com/product/workers/"
                icon={CloudflareLogo}
                brandColor="#FF4801"
              />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Development</h2>
            <ul className={'flex flex-col'}>
              <Credit
                name="Claude Code"
                url="https://claude.com/product/claude-code"
                icon={ClaudeLogo}
                brandColor="#D97757"
              />
              <Credit name="Warp" url="https://www.warp.dev/" icon={WarpLogo} />
              <Credit name="Zed" url="https://zed.dev" icon={ZedLogo} brandColor="#1348DC" />
            </ul>
          </div>
        </div>
      </div>
    </>
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
    <li className={'-ml-0.5 md:-ml-8'}>
      <Link to={url} className="group flex items-center gap-2 py-1.5">
        <div className="flex size-6 items-center justify-center">
          <Icon
            style={
              { '--credit-color': brandColor ?? 'var(--color-neutral-950)' } as React.CSSProperties
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
