import { twJoin } from 'tailwind-merge';
import type { Project } from '@/data/projects';

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div
      className={twJoin(
        'flex aspect-16/10 w-full flex-1 items-center justify-center',
        'bg-neutral-50',
        'p-0 sm:p-6 lg:p-12',
      )}
    >
      <div
        className={twJoin(
          'relative h-fit w-fit [--small:480px]',
          project.title === 'Animated sidebar icon' && 'md:p-px lg:max-w-(--small)',
          project.title === 'Branch menu interaction' && 'lg:max-w-(--small)',
        )}
      >
        <div
          className={twJoin(
            'absolute inset-0 rounded-xs ring-[0.5px] ring-black/8 ring-inset',
            'md:ring-1 md:ring-black/5',
          )}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          width={project.width}
          height={project.height}
          src={project.src}
          className="rounded-xs"
        />
      </div>
    </div>
  );
}
