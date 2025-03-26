import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code className="w-6 h-6" />, title: 'Development', description: 'Proficient in React, Node.js, and modern web technologies' },
    { icon: <Palette className="w-6 h-6" />, title: 'Design', description: 'Creating beautiful and intuitive user interfaces' },
    { icon: <Brain className="w-6 h-6" />, title: 'Problem Solving', description: 'Analytical approach to solving complex challenges' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with experience in building modern web applications.
            I love creating elegant solutions and learning new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;