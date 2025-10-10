// src/components/sections/SkillsSection.jsx
'use client';

import { skills } from '../../../../data';

export function SkillsSection({ isDark }) {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20 hover:border-purple-500/50'
                  : 'bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillSet.items.map((skill, i) => (
                  <span 
                    key={i}
                    className='px-4 py-2 rounded-full text-sm transition-colors duration-300 cursor-default   dark:hover:bg-purple-600/70 dark:bg-slate-600/70 bg-purple-100 hover:bg-purple-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

