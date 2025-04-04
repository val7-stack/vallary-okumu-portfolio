
import React from "react";
import { CalendarClock, GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title text-gray-900 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p>
              I am an Electrical and Electronic Engineering student at Moi University, passionate 
              about applying engineering principles to solve real-world problems. My education has 
              provided me with a strong foundation in electrical systems, circuit design, automation, 
              and programming.
            </p>
            <p>
              Alongside my core engineering skills, I have developed expertise in software 
              development, including website design with WordPress, HTML, CSS, and database 
              management with MySQL. I believe that this combination of electrical engineering 
              knowledge and software skills gives me a unique perspective in approaching technical 
              challenges.
            </p>
            <p>
              Through my internships at Kenya Airports Authority and Ketraco, I have gained valuable 
              industry experience that has enhanced my practical understanding of engineering 
              concepts. I am eager to apply my skills in a professional setting and continue growing 
              as an engineer.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <GraduationCap className="w-10 h-10 text-engineer-600 dark:text-engineer-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                BSc. Electrical & Electronic Engineering, Moi University
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Graduating Dec 2025
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <CalendarClock className="w-10 h-10 text-engineer-600 dark:text-engineer-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Internships at Kenya Airports Authority & Ketraco
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                2023 - 2024
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 text-engineer-600 dark:text-engineer-400 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Eldoret, Uasin Gishu County
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
