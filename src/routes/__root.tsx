import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { TailwindBreakpoint } from '@/components/TailwindBreakpoint';
import appCss from '@/styles/style.css?url';
import { twJoin } from 'tailwind-merge';
import { Link } from '@/components/Link';
import { SocialLinks } from '@/components/SocialLinks';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import interFont from '@/assets/fonts/InterVariable.woff2?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'Nikita Pashinsky' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'preload',
        href: interFont,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: () => (
    <>
      <div className="mx-auto grid h-full max-w-container grid-cols-2 grid-rows-[auto_1fr_auto] gap-x-4 p-4 md:h-auto md:grid-cols-12 md:p-6">
        {/* Sidebar */}
        <div
          className={twJoin(
            'col-span-full flex flex-col gap-6',
            'md:sticky md:top-6 md:col-span-4 md:h-[calc(100svh-3rem)] md:justify-between',
          )}
        >
          <div className={'flex flex-col'}>
            <h1 className="font-medium will-change-transform animation-delay-100">
              <Link to="/" className={'no-underline'}>
                Nikita Pashinsky
              </Link>
            </h1>
            <p className={'text-secondary will-change-transform animation-delay-150'}>
              Interface designer
            </p>
          </div>

          <Nav className={'hidden md:block'} />

          <div className={'flex flex-col gap-6 max-md:hidden'}>
            <SocialLinks />
            <Footer />
          </div>
        </div>

        {/* Main content */}
        <div
          className={twJoin(
            'grid grid-cols-subgrid',
            'col-span-full col-start-1 gap-4',
            'md:col-start-6',
            'lg:col-start-5',
            'xl:col-start-5',
          )}
        >
          <Outlet />
        </div>

        {/* Mobile footer */}
        <Footer className={'pt-12 pb-6 md:hidden'} />
      </div>

      <TailwindBreakpoint />
    </>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className={'h-screen bg-white font-sans text-base font-450 text-primary antialiased'}
        suppressHydrationWarning
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
