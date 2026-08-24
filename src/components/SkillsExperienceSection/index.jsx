import experiences from "../../data/experiences";
import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiFlutter, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const SkillsExperienceSection = () => {
  return (
    <section className="min-h-screen py-20">
      <h2 className="text-3xl font-semibold text-center">
        Skills & Experience
      </h2>
      <h3 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
        What I Do & Where I’ve Been
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Skills */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Skills</h4>
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard
                key={idx}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>
        {/* Experience Timeline */}
        <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
          <h4 className="text-2xl font-semibold mb-4">Experience</h4>
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              title={exp.title}
              company={exp.company}
              years={exp.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExperienceSection;
