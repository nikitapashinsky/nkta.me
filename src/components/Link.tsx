"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type InternalLinkProps = Omit<
  React.ComponentProps<typeof NextLink>,
  "href"
> & {
  href: string;
  disabled?: boolean;
};

type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: `http${string}` | `mailto:${string}` | `zed://${string}`;
  disabled?: boolean;
  children?: React.ReactNode;
};

export type LinkProps = InternalLinkProps | ExternalLinkProps;

export function Link(props: LinkProps) {
  const { href, className, disabled, ...rest } = props;
  const pathname = usePathname();

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("zed://");
  const isActive =
    !isExternal &&
    (href === pathname ||
      href === "/" + pathname.match(/[^/]+/g)?.[0]);

  const classNames = twMerge(linkStyles, className);

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        className={classNames}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <NextLink
      href={disabled ? "#" : href}
      className={twMerge(
        classNames,
        isActive &&
          "pointer-events-none cursor-default text-primary no-underline",
        disabled &&
          "cursor-not-allowed text-tertiary no-underline",
      )}
      data-disabled={disabled || undefined}
      data-current={isActive || undefined}
      aria-disabled={disabled || undefined}
      {...(rest as Omit<React.ComponentProps<typeof NextLink>, "href">)}
    />
  );
}

const linkStyles = twMerge(
  "relative inline-block outline-none",
  "transition-colors duration-125 hover:duration-75",
  "text-current hover:text-primary focus-visible:text-primary active:text-primary",
  "underline decoration-black/16 underline-offset-[0.15em]",
  "hover:decoration-black/40",
);
