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
import { RootLayout } from '@/components/layouts/RootLayout';

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
      <RootLayout>
        <Outlet />
      </RootLayout>

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
        className={'bg-white font-sans text-base font-450 text-primary antialiased'}
        suppressHydrationWarning
      >
        {children}
        <Scripts />
      </body>
    </html>
  );
}
