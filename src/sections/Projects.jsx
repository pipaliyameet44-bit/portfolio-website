import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiX } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce Store",
      description: "A comprehensive e-commerce solution featuring product cataloging, cart functionality, and responsive design.",
      problem: "Creating a seamless shopping experience that works across all devices while maintaining high performance and clean UI.",
      solution: "Built a robust frontend using React and JavaScript, utilizing Tailwind CSS for rapid, scalable styling and Node.js for backend logic.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/pipaliyameet44-bit/ecommerce",
      live: "https://github.com/pipaliyameet44-bit/ecommerce",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Intelligent Note-App",
      description: "A streamlined application for capturing ideas, organizing tasks, and managing personal notes efficiently.",
      problem: "Users need a quick, distraction-free environment to jot down thoughts without complex menu structures.",
      solution: "Developed a clean, minimalist interface using semantic HTML and custom CSS, with JavaScript handling real-time data persistence.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/pipaliyameet44-bit/note-app",
      live: "https://github.com/pipaliyameet44-bit/note-app",
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Tailwind CSS Portfolio",
      description: "A showcase of advanced CSS techniques and utility-first design principles for modern web layouts.",
      problem: "Demonstrating the power of utility classes while maintaining a unique, non-generic visual identity.",
      solution: "Leveraged Tailwind CLI to build a high-performance static site with optimized assets and custom theme configurations.",
      tech: ["Tailwind CSS", "HTML5", "PostCSS"],
      github: "https://github.com/pipaliyameet44-bit/tailwind-cli.github.io",
      live: "https://pipaliyameet44-bit.github.io/tailwind-cli.github.io/",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mr-4">
            <span className="text-primary mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <FiFolder className="text-primary text-3xl" />
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 rounded border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 sm:h-80 flex-shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-md"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                
                <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
                    <FiGithub /> Source Code
                  </a>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Problem</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
