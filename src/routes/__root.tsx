import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TailwindBreakpoint } from "@/components/TailwindBreakpoint";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TailwindBreakpoint />
    </>
  ),
});
