import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mr-4">
              <span className="text-primary mr-2">01.</span> About Me
            </h2>
            <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3 text-gray-700 dark:text-gray-300 space-y-5 text-lg leading-relaxed font-medium">
              <p>
                I am a passionate Full Stack Developer with a strong interest in building modern, scalable, and user-friendly web applications. I enjoy working across both frontend and backend technologies, allowing me to transform ideas into complete, functional products.
              </p>
              <p>
                On the frontend, I focus on creating responsive and visually appealing interfaces using technologies like React and Tailwind CSS. I aim to deliver smooth user experiences with clean design and efficient performance.
              </p>
              <p>
                On the backend, I work with Node.js and databases to build secure, reliable, and scalable systems. I focus on writing clean, maintainable code and designing efficient APIs that support real-world applications.
              </p>
              <p>
                I am constantly learning and adapting to new technologies to improve my problem-solving skills and stay updated with industry trends. I enjoy taking on new challenges and continuously pushing myself to grow.
              </p>
              <p>
                My goal is to develop impactful digital solutions that provide real value to users while evolving as a skilled and professional developer.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end mt-12 md:mt-0 items-start">
              <motion.div
                className="relative group w-72 md:w-full max-w-xs aspect-[4/5]"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Decorative border offset */}
                <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

                {/* Image Container */}
                <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden z-10 shadow-2xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src="/portfolio-website/meet.png"
                    alt="Meet Pipaliya"
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Floating detail */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                  M
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
