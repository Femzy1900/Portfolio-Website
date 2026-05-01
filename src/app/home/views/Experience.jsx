// src/components/sections/ExperienceSection.jsx
'use client';

import { Briefcase } from 'lucide-react';
import { experience } from '../../../../data';
import { motion } from 'framer-motion';

export function ExperienceSection() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } };

  return (
    <section id="experience" className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {experience.map((exp, idx) => (
            <motion.div 
              variants={item}
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 dark:from-purple-900/30 dark:to-slate-900/30 dark:border-purple-500/20 dark:hover:border-purple-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-200 dark:bg-purple-600/20">
                  <Briefcase className="text-purple-400" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold dark:text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

