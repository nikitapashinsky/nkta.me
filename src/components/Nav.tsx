"use client";

import { twJoin } from "tailwind-merge";
import { Link } from "./Link";

const navLinkStyles = twJoin(
  "before:absolute before:inset-y-full before:-left-3 before:w-0.5 before:rounded-full before:bg-neutral-950",
  "data-current:before:inset-y-0.75",
  "ease-ionic before:transition-all before:duration-400",
);

export function Nav({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className={twJoin("flex flex-col gap-3 text-secondary")}>
        <li className={"flex items-center gap-1"}>
          <Link href="/" className={navLinkStyles}>
            Home
          </Link>
        </li>
        <li className={"flex items-center gap-1"}>
          <Link href="/projects" className={navLinkStyles}>
            Projects
          </Link>
        </li>
        <li className={"flex items-center gap-1"}>
          <Link href="/notes" className={navLinkStyles} disabled>
            Notes
          </Link>
        </li>
      </ul>
    </nav>
  );
}
