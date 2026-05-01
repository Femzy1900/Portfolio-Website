// src/components/sections/SkillsSection.jsx
'use client';

import { skills } from '../../../../data';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skills.map((skillSet, idx) => (
            <motion.div 
              variants={item}
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 dark:from-purple-900/30 dark:to-slate-900/30 dark:border-purple-500/20 dark:hover:border-purple-500/50"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillSet.items.map((skill, i) => (
                  <span 
                    key={i}
                    className='px-4 py-2 border-3 rounded-full text-sm transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md dark:hover:bg-purple-600/70 dark:bg-slate-600/70 bg-purple-100 hover:bg-purple-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

