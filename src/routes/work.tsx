import { createFileRoute } from '@tanstack/react-router';
import { ProjectItem } from '@/components/ProjectItem';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/work')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={'col-span-full flex flex-col gap-4 md:gap-6'}>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}
