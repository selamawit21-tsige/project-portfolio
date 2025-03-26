import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
             
            </motion.span>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </a>
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleDarkMode}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 hover:text-yellow-600 transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-white dark:bg-gray-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/selamawit21-tsige"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/selamawit-tsige-11067b28b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tsigeselamawit925@gmail.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Selamawit tsige. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
