
import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10 dark:opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Vallary <span className="text-engineer-600">Okumu</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Electrical & Electronic Engineer
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Graduating from Moi University in December 2025 with expertise in electrical systems, 
            automation, and software engineering.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-engineer-600 hover:bg-engineer-700 text-white px-8 py-6 rounded-md text-lg"
          >
            Contact Me
          </Button>
          <Button 
            onClick={() => scrollToSection("skills")} 
            variant="outline"
            className="border-engineer-600 text-engineer-600 hover:bg-engineer-50 dark:border-engineer-500 dark:text-engineer-400 dark:hover:bg-gray-800 px-8 py-6 rounded-md text-lg"
          >
            View My Skills
          </Button>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-500 hover:text-engineer-600 dark:text-gray-400 dark:hover:text-engineer-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
