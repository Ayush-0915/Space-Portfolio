import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 md:py-20"
    >
      <h1 className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-10 text-3xl font-semibold text-transparent sm:py-14 sm:text-4xl">
        My Projects
      </h1>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-10 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
