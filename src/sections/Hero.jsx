import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium tracking-wide mb-2"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Meet Pipaliya. <br />
            <span className="text-gray-500 dark:text-gray-400">I build things for the web.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
          >
            I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl cursor-pointer flex items-center group"
            >
              View Projects
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Image/Visual Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            ></motion.div>

            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative z-10 p-4"
            >
              <div className="w-full h-full rounded-2xl md:rounded-3xl border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl relative bg-gray-200 dark:bg-gray-800">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="/portfolio-website/meet.png"
                  alt="Meet Pipaliya"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Decorative "floating" card or badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl z-20 flex items-center space-x-3 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="w-3 h-3 bg-white rounded-full animate-ping"></span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Available for</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Freelance</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
