import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { TailwindBreakpoint } from '@/components/TailwindBreakpoint';
import appCss from '@/styles/style.css?url';
import { Layout } from '@/components/Layout';

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
        href: '/fonts/InterVariable.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: () => (
    <>
      <Layout />
      <TailwindBreakpoint />
    </>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className={'h-screen bg-white font-sans text-base font-450 text-primary antialiased'}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
