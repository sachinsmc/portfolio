import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Education</h2>
          <div className="inline-block bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary-500 mr-2" />
              <h3 className="text-2xl font-semibold">{education.degree}</h3>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{education.university}</p>
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{education.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;