import { createFileRoute } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

import ZedLogo from '@/assets/images/logos/zed.svg?react';
import zoegiDarkScreenshot from '@/assets/images/projects/zoegi-dark-base-ui.webp';
import { GithubIcon } from '@/components/icons';
import { Link } from '@/components/Link';

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [{ title: 'Projects · Nikita Pashinsky' }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid content-start gap-x-4 gap-y-16',
      )}
    >
      <div className={'col-span-full flex flex-col gap-2'}>
        <h1 className={'text-xl font-medium md:text-2xl lg:text-3xl'}>Projects</h1>
      </div>

      <div className={'col-span-full flex flex-col gap-6 md:col-span-5'}>
        <img
          src={zoegiDarkScreenshot}
          width={2940}
          height={1846}
          alt="Zoegi Dark theme for Zed code editor"
          className={'col-span-full rounded-xs shadow-lg'}
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Zoegi theme</h3>
            <p className="text-balance text-secondary">
              A visually pleasing and polished theme for Zed based on the beautiful Moegi theme for
              VS Code.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="zed://extension/zoegi-theme" className="group flex items-center gap-1.5">
              <ZedLogo className="size-5 fill-neutral-450 group-hover:fill-[#1348DC] group-active:fill-[#1348DC]" />
              Install in Zed
            </Link>
            <Link
              to="https://github.com/nikitapashinsky/zoegi-theme"
              className="group flex items-center gap-1.5"
            >
              <GithubIcon className="size-5 fill-neutral-450 group-hover:fill-neutral-950 group-active:fill-neutral-950" />
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
