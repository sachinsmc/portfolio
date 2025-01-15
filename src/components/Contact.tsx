import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </div>
        
      <div className="max-w-3xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <a
      href="mailto:hey@sachinsmc.me"
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">hey@sachinsmc.me</p>
    </a>
    
    <a
      href="https://www.linkedin.com/in/smcsachin"
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">smcsachin</p>
    </a>
    
    <a
      href="https://github.com/sachinsmc"
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Github className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">sachinsmc</p>
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default Contact;