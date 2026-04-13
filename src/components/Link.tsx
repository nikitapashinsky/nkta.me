import { Link as RouterLink, type LinkComponentProps } from '@tanstack/react-router';
import { twMerge } from 'tailwind-merge';

import type { FileRouteTypes } from '@/routeTree.gen';

type InternalPath = FileRouteTypes['to'];

type InternalLinkProps = Omit<LinkComponentProps, 'to'> & {
  to: InternalPath;
};

type ExternalLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: `http${string}` | `zed://${string}`;
  children?: React.ReactNode;
};

export type LinkProps = InternalLinkProps | ExternalLinkProps;

export function Link(props: LinkProps) {
  const { to, className, ...rest } = props;
  const classNames = twMerge(linkStyles, className);

  if (to.startsWith('http') || to.startsWith('zed://')) {
    const { children, ...anchorRest } = rest as ExternalLinkProps;
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={classNames} {...anchorRest}>
        {children}
      </a>
    );
  }
  return <RouterLink to={to as InternalPath} className={classNames} {...rest} />;
}

const linkStyles = twMerge(
  'relative inline-block outline-none',
  'transition-colors duration-125 hover:duration-75',
  'text-current hover:text-primary focus-visible:text-primary active:text-primary',
  'underline decoration-black/12 [text-decoration-thickness:var(--link-decoration-thickness)] underline-offset-(--link-decoration-offset)',
  'hover:decoration-black/40',
  'current:pointer-events-none current:cursor-default current:text-primary current:no-underline',
  'aria-disabled:cursor-not-allowed aria-disabled:text-tertiary aria-disabled:no-underline',
  // 'before:pointer-events-none before:absolute before:-z-1',
  // 'before:-inset-x-[0.375em] before:h-[calc(1lh+0.25em)]',
  // 'before:top-1/2 before:-translate-y-1/2',
  // 'before:rounded before:bg-neutral-100 before:opacity-0',
  // 'before:transition-opacity before:duration-200 before:will-change-transform',
  // 'current:before:opacity-100 current:before:duration-125',
);
