import { createFileRoute } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

export const Route = createFileRoute('/now')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid content-start gap-x-4 gap-y-12',
      )}
    >
      <div className={'col-span-full flex flex-col gap-2'}>
        <h1 className={'text-xl font-medium md:text-2xl'}>Now</h1>
      </div>
      <div className={'col-span-full flex flex-col gap-6 md:col-span-5'}>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'text-secondary'}>March 30, 2026</h2>
          <p>
            Spending all of my time with my wife, our newborn son, and our three cats and a dog.
          </p>
        </div>
      </div>
    </div>
  );
}
