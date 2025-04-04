
import React from "react";
import { CalendarRange, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Ketraco",
      position: "Engineering Intern",
      period: "May 2024 - July 2024",
      location: "Kenya",
      description: [
        "Assisted in the maintenance and monitoring of high voltage transmission systems",
        "Participated in equipment testing and quality assurance procedures",
        "Collaborated with engineering teams on various technical projects",
        "Gained exposure to power transmission and distribution systems",
      ],
    },
    {
      company: "Kenya Airports Authority",
      position: "Engineering Intern",
      period: "May 2023 - July 2023",
      location: "Kenya",
      description: [
        "Worked with the electrical maintenance team on airport systems",
        "Assisted in troubleshooting and repairing electrical installations",
        "Participated in routine maintenance of airport lighting systems",
        "Learned about aviation industry electrical standards and safety protocols",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="work-card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-engineer-600 dark:bg-engineer-500"></div>
              
              <div className="ml-2">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-medium mb-2 text-engineer-600 dark:text-engineer-400">
                  {exp.company}
                </h4>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <CalendarRange className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-16">
            <div className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 shadow-sm">
              <Briefcase className="w-5 h-5 mr-2 text-engineer-600 dark:text-engineer-400" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">
                Currently open to new opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
