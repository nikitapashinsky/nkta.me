import { createFileRoute } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

import { Link } from '@/components/Link';
import { ProjectItem } from '@/components/ProjectItem';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <>
      <div className={'flex flex-col gap-6'}>
        <h1
          className={twJoin(
            'max-w-[calc(100%-1.5rem)] text-2xl font-medium text-balance lg:text-3xl',
          )}
        >
          I’m a designer focused on crafting high-quality software. Currently leading product design
          on Composer at <Link to="https://piano.io">Piano</Link>.
        </h1>
      </div>
      <div className={'flex flex-col gap-4'}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
