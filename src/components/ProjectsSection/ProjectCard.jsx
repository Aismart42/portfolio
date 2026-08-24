const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border dark:border-gray-700">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        {/* Top-Right Project Type Label */}
        <span className="absolute top-2 right-2 text-xs font-semibold text-blue-600 dark:text-white px-2 py-1 rounded-full shadow bg-blue-100 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-600">
          {project.type}
        </span>
      </div>
      <div className="p-4 text-left">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
          {project.title}
        </h4>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
