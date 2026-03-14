import { Link } from '@/components/Link';
import { ProjectItem } from '@/components/ProjectItem';
import { projects } from '@/data/projects';
import { createFileRoute } from '@tanstack/react-router';

import { twJoin } from 'tailwind-merge';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className={'col-span-full grid grid-cols-subgrid'}>
      <p
        className={twJoin(
          'py-16 md:pt-0',
          'font-normal text-balance',
          'text-xl xl:text-2xl',
          'col-span-full md:col-span-6 lg:col-span-5',
        )}
      >
        I’m a product designer focused on crafting high-quality software. Currently leading product
        design on Composer at <Link to="https://piano.io">Piano</Link>.
      </p>
      <div className={'col-span-full flex flex-col gap-4 md:gap-6'}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
