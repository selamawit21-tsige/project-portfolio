import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dictionary",
      description:
        "A search tool providing word defination, examples and images",
      image:
        "https://images.unsplash.com/photo-1543165796-5426273eaab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGljdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
      demo: "https://euphonious-salamander-b4a612.netlify.app/",
    },
    {
      title: "About lalibela",
      description:
        " Provide detailed information about the historical site of lalibela  ",
      image:
        "https://images.unsplash.com/flagged/photo-1572644973628-e9be84915d59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFsaWJlbGF8ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/selamawit21-tsige/project1",
      demo: "https://mellifluous-pixie-6ef0d3.netlify.app/",
    },
    {
      title: "World-clock",
      description: "Displays real-time and date for the specific countries",
      image:
        "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvY2t8ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/selamawit21-tsige/worls-clock-project",
      demo: "https://famous-seahorse-a25bd6.netlify.app/",
    },
    {
      title: "Poem-generator",
      description: "Generates creative poems based on user input",
      image:
        "https://images.unsplash.com/photo-1649682303298-24017e5dedb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9lbSUyMGdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/selamawit21-tsige/poem-generate-js",
      demo: "https://amazing-vacherin-6b4ff1.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;