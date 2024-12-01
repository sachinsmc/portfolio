import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { skills } from '../data/skills';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              {contactInfo.name}
              <span className="block text-3xl sm:text-4xl mt-2 text-gray-900 dark:text-white">
                {contactInfo.title}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Result oriented with more than 8 years experience writing highly scalable, clean, maintainable source code.
              Based in {contactInfo.location}.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <Globe className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -5 }}
                >
                  <Server className="h-8 w-8 text-secondary-500 mb-3" />
                  <h3 className="font-semibold mb-2">Backend Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skills.backend.join(', ')}
                  </p>
                  
                </motion.div>
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -5 }}
                >
                  <Code className="h-8 w-8 text-primary-500 mb-3" />
                  <h3 className="font-semibold mb-2">Frontend Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skills.frontend.join(', ')}
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -5 }}
                >
                  <Database className="h-8 w-8 text-primary-500 mb-3" />
                  <h3 className="font-semibold mb-2">Database & Cloud</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skills.databases.slice(0, 2).join(', ')}...
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {skills.cloud.slice(0, 2).join(', ')}
                  </p>
                </motion.div>
                <motion.div
                  className="card p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-sm mb-1">{contactInfo.email}</p>
                  <p className="text-sm">{contactInfo.phone}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;