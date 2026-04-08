import { twJoin } from 'tailwind-merge';

import { Link } from './Link';

const navLinkStyles = twJoin(
  // 'before:absolute before:inset-y-full before:-left-3 before:w-0.5 before:rounded-full before:bg-neutral-950',
  // 'current:before:inset-y-0.75',
  'no-underline',
  'before:absolute before:-inset-x-1.5 before:-inset-y-0.5 before:-z-1 before:rounded-md before:bg-black/6 before:opacity-0',
  'hover:not-aria-disabled:before:opacity-50 current:before:opacity-100',
  'ease-ionic before:transition-all before:duration-400 hover:before:duration-75',
);

export function Nav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className={twJoin('flex flex-col gap-3 font-medium text-secondary')}>
        <li className={'flex items-center gap-1'}>
          <Link to="/" activeOptions={{ exact: true }} className={navLinkStyles}>
            Home
          </Link>
        </li>
        <li className={'flex items-center gap-1'}>
          <Link to="/projects" className={navLinkStyles}>
            Projects
          </Link>
        </li>
        <li className={'flex items-center gap-1'}>
          <Link to="/notes" className={navLinkStyles} disabled>
            Notes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
