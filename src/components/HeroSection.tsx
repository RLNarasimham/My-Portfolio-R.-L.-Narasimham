import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 300);
    }

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "translateY(0)";
        }
      }, 600);
    }

    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.opacity = "1";
        }
      }, 900);
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-shrink-0">
          <img
            src="./Photo.jpg"
            alt="Lakshmi Narasimham Rallabandi"
            className="w-50 h-50 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-lg mt-25"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-lg text-gray-500 dark:text-gray-400 mb-2">
            Hi, I'm
          </h2>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700"
          >
            Lakshmi Narasimham Rallabandi
          </h1>

          <h3 className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            Aspiring MERN Stack Web Developer
          </h3>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 transition-all duration-700"
          >
            I build responsive web apps with clean design and seamless functionality using technologies like React, Node.js, MongoDB, Express and Tailwind CSS.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col items-center space-y-6 transition-opacity duration-700"
          >
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 duration-200"
              >
                Contact Me
              </a>
            </div>

            <a
              href="#projects"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
              aria-label="Scroll down to About"
            >
              <ArrowDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;