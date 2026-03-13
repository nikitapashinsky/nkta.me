import type { AnchorHTMLAttributes, ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: ReactNode;
}

const linkStyles = twJoin(
  "relative outline-none",
  "transition-colors duration-125 hover:duration-75",
  "hover:text-black focus-visible:text-black active:text-black",
  "before:absolute before:inset-x-0 before:-bottom-px before:-z-1 before:h-px before:bg-black/12",
  "before:transition-all before:duration-125 hover:before:duration-75 focus-visible:before:duration-75 active:duration-75",
  "hover:before:-inset-s-0.5 hover:before:-inset-e-0.75 hover:before:h-[calc(100%+2px)]",
  "hover:before:rounded hover:before:bg-black/8",
  "focus-visible:before:-inset-s-0.5 focus-visible:before:-inset-e-0.75 focus-visible:before:h-[calc(100%+2px)] focus-visible:before:rounded focus-visible:before:bg-black/8",
  "active:before:-inset-s-0.5 active:before:-inset-e-0.75 active:before:h-[calc(100%+2px)] active:before:rounded active:before:bg-black/8",
);

export function Link({ href, external = false, className, children, ...rest }: LinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={twMerge(linkStyles, className)}
      {...rest}
    >
      {children}
    </a>
  );
}
