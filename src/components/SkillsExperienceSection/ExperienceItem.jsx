const ExperienceItem = ({ title, company, years }) => {
  return (
    <div className="relative pl-3">
      <div className="absolute -left-3 top-2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
      <div>
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{years}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;