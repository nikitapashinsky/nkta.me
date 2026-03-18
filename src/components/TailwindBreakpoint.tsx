"use client";

import { twJoin } from "tailwind-merge";

export function TailwindBreakpoint() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      className={twJoin(
        "hidden sm:flex",
        "fixed right-3 bottom-3 z-100",
        "min-w-fit items-center justify-center rounded-full px-4 py-1 select-none",
        "bg-black/60 shadow-lg shadow-black/4 backdrop-blur-sm corner-smooth",
        "font-mono font-medium text-white",
      )}
    >
      <div className="md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
