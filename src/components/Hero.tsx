import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              selamawit Tsige
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Frontend Developer | UI/UX Enthusiast | Problem Solver
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <a
              href="/assets/resume.pdf"
              download="My-resume.pdf"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition-colors"
            >
              Download CV
              <Download className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-xl">
            <img
              src="/assets/profile.jpg"
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
