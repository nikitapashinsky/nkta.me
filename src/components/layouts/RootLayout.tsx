import { twJoin } from 'tailwind-merge';
import { Link } from '@/components/Link';
import { Nav } from '@/components/Nav';
import { SocialLinks } from '@/components/SocialLinks';
import { Footer } from '@/components/Footer';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={twJoin(
        'mx-auto h-full max-w-container',
        'grid grid-cols-2 gap-x-4 p-4',
        'md:h-auto md:grid-cols-12 md:p-6',
        'lg:grid-cols-16',
      )}
    >
      {/* Sidebar */}
      <div
        className={twJoin(
          'col-span-full flex flex-col gap-4',
          'md:sticky md:top-6 md:col-span-4 md:h-[calc(100svh-3rem)]',
        )}
      >
        <div className={'flex h-(--top-offset) shrink-0 flex-col'}>
          <h1 className="font-medium will-change-transform animation-delay-100">
            <Link to="/" className={'no-underline'}>
              Nikita Pashinsky
            </Link>
          </h1>
          <p className={'text-secondary will-change-transform animation-delay-150'}>
            Interface designer
          </p>
        </div>

        <div className={'flex flex-1 flex-col justify-between gap-6 max-md:hidden'}>
          <Nav />

          <div className={'flex flex-col gap-6'}>
            <SocialLinks />
            <Footer />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        className={twJoin(
          'grid grid-cols-subgrid',
          'col-span-full content-start gap-4',
          'col-start-1 md:col-start-5 lg:col-start-6',
          'md:grid-rows-[var(--top-offset)_1fr]',
        )}
      >
        {children}
      </div>

      {/* Mobile footer */}
      <Footer className={'pt-20 pb-6 md:hidden'} />
    </div>
  );
}
