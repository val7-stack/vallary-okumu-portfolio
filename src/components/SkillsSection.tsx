
import React from "react";
import { 
  Cpu, Database, Gauge, Lightbulb, 
  MonitorSmartphone, ServerCog, Wrench, Code
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    {
      title: "Circuit Design",
      icon: <Cpu className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "Design and analysis of analog and digital electronic circuits",
    },
    {
      title: "Power Systems",
      icon: <Lightbulb className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "Power generation, transmission, distribution and protection systems",
    },
    {
      title: "Control Systems",
      icon: <Gauge className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "PID controllers, automation systems, and feedback control",
    },
    {
      title: "Instrumentation",
      icon: <Wrench className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "Sensor calibration, signal conditioning, and measurement systems",
    },
  ];

  const softwareSkills = [
    {
      title: "Web Development",
      icon: <MonitorSmartphone className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "WordPress, HTML, CSS, and responsive website design",
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "MySQL database design, queries, and management",
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "Basic proficiency in programming languages for engineering applications",
    },
    {
      title: "Technical Tools",
      icon: <ServerCog className="w-8 h-8 text-engineer-600 dark:text-engineer-400" />,
      description: "Experience with engineering software and simulation tools",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title text-gray-900 dark:text-white">My Skills</h2>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Technical Engineering Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card flex flex-col items-center text-center"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
            Software Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-card flex flex-col items-center text-center"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
