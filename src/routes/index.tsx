import { createFileRoute } from "@tanstack/react-router";
import { Intro } from "../components/Intro";
import { ProjectItem } from "../components/ProjectItem";
import { projects } from "../data/projects";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto grid max-w-container grid-cols-2 gap-4 p-4 md:grid-cols-12 md:p-6">
      {/* Sidebar */}
      <div className="col-span-full flex h-[75svh] flex-col items-center justify-center gap-6 md:sticky md:top-6 md:col-span-4 md:h-[calc(100svh-3rem)] md:items-start md:justify-start">
        <Intro />
      </div>

      {/* Projects */}
      <div className="col-span-full col-start-1 flex flex-col items-center gap-4 md:col-start-6 md:gap-6 lg:col-start-5 xl:col-start-5">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
