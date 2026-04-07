import { createFileRoute } from '@tanstack/react-router';
import { twJoin } from 'tailwind-merge';

import { Link } from '@/components/Link';
import { ProjectItem } from '@/components/ProjectItem';
import { SocialLinks } from '@/components/SocialLinks';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div
      className={twJoin(
        'col-span-full row-start-2',
        'grid grid-cols-subgrid gap-y-20 md:gap-y-[calc(var(--top-offset)+1.5rem)]',
      )}
    >
      <div className={'col-span-full flex flex-col gap-6'}>
        <p className={twJoin('text-xl font-medium text-balance md:text-2xl')}>
          I’m a designer focused on crafting high-quality software. Currently leading product design
          on Composer at <Link to="https://piano.io">Piano</Link>.
        </p>
        <SocialLinks className={'md:hidden'} />
      </div>
      <div className={'col-span-full flex flex-col gap-4 md:gap-6'}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
