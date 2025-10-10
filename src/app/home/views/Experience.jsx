// src/components/sections/ExperienceSection.jsx
'use client';

import { Briefcase } from 'lucide-react';
import { experience } from '../../../../data';

export function ExperienceSection({ isDark }) {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20 hover:border-purple-500/50'
                  : 'bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-purple-600/20' : 'bg-purple-200'
                }`}>
                  <Briefcase className="text-purple-400" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold dark:text-black mb-2">{exp.role}</h3>
                  <div className={`flex flex-wrap gap-4 mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

