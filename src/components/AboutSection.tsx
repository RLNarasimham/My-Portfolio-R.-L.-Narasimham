import React from 'react';
import { Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I am an aspiring full stack developer specializing in the MERN stack, currently pursuing a B.Tech in Computer Science at SRM University, AP. With hands-on experience from internships and personal projects, I have built web applications focusing on responsive design, secure backend development, and intuitive user interfaces. My journey so far has strengthened my foundation in modern web technologies and ignited a deep passion for creating scalable and user-centric applications.
          </p>
          <div className="pt-4">
            <a
              href="./Resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;