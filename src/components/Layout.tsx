import { twJoin } from 'tailwind-merge';
import { Link } from '@/components/Link';
import { Footer } from '@/components/Footer';
import { Outlet } from '@tanstack/react-router';
import { SocialLinks } from './SocialLinks';

const navLinkStyles = twJoin(
  'before:absolute before:inset-y-full before:-left-3 before:w-0.5 before:rounded-full before:bg-neutral-950',
  'current:before:inset-y-0.75',
  'ease-ionic before:transition-all before:duration-400',
);

export function Layout() {
  return (
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
            Interface Designer
          </p>
        </div>
        {/*<Intro />*/}
        <nav className={'hidden md:block'}>
          <ul className={twJoin('flex flex-col gap-3 text-secondary')}>
            <li>
              <Link to="/" activeOptions={{ exact: true }} className={navLinkStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className={navLinkStyles} disabled>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/notes" className={navLinkStyles} disabled>
                Notes
              </Link>
            </li>
            <li>
              <Link to="/lists" className={navLinkStyles} disabled>
                Lists
              </Link>
            </li>
          </ul>
        </nav>
        <div className={'flex flex-col gap-6 max-md:hidden'}>
          <SocialLinks />
          <Footer />
        </div>
      </div>

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
      <Footer className={'pt-12 pb-6 md:hidden'} />
    </div>
  );
}
