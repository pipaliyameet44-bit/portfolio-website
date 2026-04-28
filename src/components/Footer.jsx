import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold text-primary mb-2">Meet</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building digital products, brands, and experience.
          </p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/pipaliyameet44-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pipaliya-meet-b149aa2b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/_meet_44_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <FiInstagram size={24} />
          </a>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {currentYear} Meet Pipaliya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
