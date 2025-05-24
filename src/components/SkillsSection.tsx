import React, { useEffect, useRef } from 'react';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              const htmlBar = bar as HTMLElement;
              setTimeout(() => {
                htmlBar.style.width = htmlBar.dataset.width || '0%';
                htmlBar.style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { 
        threshold: 0.2 
      }
    );
    
    const sectionNode = sectionRef.current;
    if (sectionNode) {
      observer.observe(sectionNode);
    }
    
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My skill set includes the following technologies:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="skill-progress-bar h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-full transition-all duration-1000 ease-out opacity-0" 
                  style={{ width: '0%' }}
                  data-width={`${skill.level}%`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;