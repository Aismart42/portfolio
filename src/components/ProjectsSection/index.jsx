import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

const uniqueTypes = ["All", ...new Set(projects.map((p) => p.type))];

const ProjectsSection = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);
  
  return (
    <section className="scroll-mt-24 min-h-screen py-20 px-4 text-center bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        My Work
      </h2>
      <h3 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
        Featured Projects
      </h3>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full border text-sm font-medium`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;