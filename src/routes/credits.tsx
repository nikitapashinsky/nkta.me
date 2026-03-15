import { Link, type LinkProps } from '@/components/Link';
import { createFileRoute } from '@tanstack/react-router';
import { WarpLogo } from '@/assets/logos/WarpLogo';
import { ZedLogo } from '@/assets/logos/ZedLogo';
import { ClaudeLogo } from '@/assets/logos/ClaudeLogo';
import { CloudflareLogo } from '@/assets/logos/CloudflareLogo';
import { BaseUILogo } from '@/assets/logos/BaseUILogo';
import { TailwindCSSLogo } from '@/assets/logos/TailwindCSSLogo';
import { InterLogo } from '@/assets/logos/InterLogo';
import { ReactLogo } from '@/assets/logos/ReactLogo';
import { VitePlusLogo } from '@/assets/logos/VitePlusLogo';
import { TanstackPlaceholderLogo } from '@/assets/logos/TanstackPlaceholderLogo';
import { TailwindMergePlaceholderLogo } from '@/assets/logos/TailwindMergePlaceholderLogo';

export const Route = createFileRoute('/credits')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className={'col-span-full pt-16 md:pt-0'}>
        <div className={'flex max-w-prose flex-col gap-6'}>
          <div className={'mb-10 flex flex-col gap-4'}>
            <h1 className={'text-xl xl:text-2xl'}>Credits</h1>
            {/*<p className={'text-secondary'}>
              This website was made possible thanks to all the generous people who contributed to
              these open-source projects:
            </p>*/}
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Typography</h2>
            <ul className={'flex flex-col gap-2'}>
              <Credit name="Inter" logo={InterLogo} url="https://rsms.me/inter" />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Front-end tooling</h2>
            <ul className={'flex flex-col gap-2'}>
              <Credit name="Base UI" logo={BaseUILogo} url="https://base-ui.com" />
              <Credit name="React" logo={ReactLogo} url="https://react.dev" />
              <Credit name="Tailwind CSS" logo={TailwindCSSLogo} url="https://tailwindcss.com" />
              <Credit
                name="Tailwind Merge"
                logo={TailwindMergePlaceholderLogo}
                url="https://github.com/gjtorikian/tailwind_merge"
              />
              <Credit
                name="Tanstack Start"
                logo={TanstackPlaceholderLogo}
                url="https://tanstack.com/start/latest"
              />
              <Credit name="Vite Plus" logo={VitePlusLogo} url="https://viteplus.dev" />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Hosting</h2>
            <ul className={'flex flex-col gap-2'}>
              <Credit
                name="Cloudflare Workers"
                logo={CloudflareLogo}
                url="https://workers.cloudflare.com/product/workers/"
              />
            </ul>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-secondary'}>Development</h2>
            <ul className={'flex flex-col gap-2'}>
              <Credit
                name="Claude Code"
                logo={ClaudeLogo}
                url="https://claude.com/product/claude-code"
              />
              <Credit name="Warp" logo={WarpLogo} url="https://www.warp.dev/" />
              <Credit name="Zed" logo={ZedLogo} url="https://zed.dev" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Credit({
  name,
  logo: Logo,
  url,
}: {
  name: string;
  logo: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  url: LinkProps['to'];
}) {
  return (
    <li className={'md:-ml-7'}>
      <Link to={url} className="group flex h-6 items-center gap-2">
        <div className="flex size-5 items-center justify-center">
          <Logo className="size-full fill-neutral-400" />
        </div>
        {name}
      </Link>
    </li>
  );
}
