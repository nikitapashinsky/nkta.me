import { Popover } from "@base-ui/react";
import { twJoin } from "tailwind-merge";

export function CarouselPopover({ children }: { children: React.ReactNode }) {
  return (
    <Popover.Root>
      <Popover.Trigger className={"group cursor-help outline-none"}>
        <span
          className={twJoin(
            "relative",
            "underline decoration-black/30 decoration-dotted decoration-1 underline-offset-[3px]",
            "group-hover:text-black group-focus-visible:text-black group-data-popup-open:text-black",
            "transition-colors duration-125 group-hover:duration-75",
            "before:absolute before:-inset-y-0.5 before:-inset-s-0.75 before:-inset-e-1.5 before:-z-1 before:rounded-[3px] before:bg-black/8 before:opacity-0",
            "before:transition-opacity before:duration-150 before:ease-out",
            "group-data-popup-open:decoration-transparent group-data-popup-open:before:opacity-100",
          )}
        >
          Scheveningen
        </span>
        .
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={8} positionMethod="fixed">
          <Popover.Popup
            className={twJoin(
              "flex max-w-72 flex-col will-change-transform outline-none",
              "rounded-md bg-white shadow-2xl ring-[0.5px] ring-black/8",
              "origin-(--transform-origin) transition-all duration-spring ease-spring",
              "data-starting-style:scale-90 data-starting-style:opacity-0",
              "data-ending-style:scale-90 data-ending-style:opacity-0",
            )}
          >
            {children}
            <Popover.Description className={"p-3 text-sm"}>
              A seaside district in The Hague, Netherlands.
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
