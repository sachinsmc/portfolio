import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Cloud, Database, Code, Wrench, Globe, Server } from 'lucide-react';

const SkillSection = ({ title, skills, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-primary-500 mr-2" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillSection title="Cloud Services" skills={skills.cloud} icon={Cloud} />
            <SkillSection title="Google Cloud" skills={skills.gcp} icon={Globe} />
            <SkillSection title="Golang" skills={skills.golang} icon={Code} />
            <SkillSection title="Databases" skills={skills.databases} icon={Database} />
            <SkillSection title="Backend" skills={skills.backend} icon={Server} />
            <SkillSection title="DevOps" skills={skills.devops} icon={Wrench} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;