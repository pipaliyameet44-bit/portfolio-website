import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiHtml5, SiCss, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit, SiFigma
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 85 },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, level: 98 },
        { name: "CSS3", icon: <SiCss className="text-[#1572B6]" />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 85 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 75 },
        { name: "Express.js", icon: <SiExpress className="text-gray-900 dark:text-white" />, level: 80 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 70 },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: 65 },
        { name: "Git & Github", icon: <SiGit className="text-[#F05032]" />, level: 85 },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mr-4">
            <span className="text-primary mr-2">02.</span> Skills & Expertise
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className={`${idx === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          ease: [0.25, 0.8, 0.25, 1], // Custom smooth easeOut curve
                          delay: 0.2 + (index * 0.1)
                        }}
                        className="bg-primary h-2.5 rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 rounded-full blur-[2px]"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
