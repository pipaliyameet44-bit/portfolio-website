import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiCalendar } from 'react-icons/fi';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Building Scalable React Applications in 2026",
      excerpt: "Learn the latest patterns and architectures for building large-scale React applications, focusing on performance, maintainability, and team collaboration.",
      date: "April 15, 2026",
      readTime: "8 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS: Beyond the Basics",
      excerpt: "Deep dive into advanced Tailwind CSS features, custom configuration, and creating reusable component systems for complex web designs.",
      date: "March 22, 2026",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Future of Web Animation with Framer Motion",
      excerpt: "Exploring complex, interactive, and performant web animations using the latest features in Framer Motion.",
      date: "February 10, 2026",
      readTime: "5 min read",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mr-4">
            <span className="text-primary mr-2">04.</span> Latest Articles
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full border border-gray-100 dark:border-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3 space-x-4">
                  <div className="flex items-center">
                    <FiCalendar className="mr-1.5" /> {post.date}
                  </div>
                  <div className="flex items-center">
                    <FiClock className="mr-1.5" /> {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <a href="#">{post.title}</a>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a href="#" className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors text-sm">
                    Read Article 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
