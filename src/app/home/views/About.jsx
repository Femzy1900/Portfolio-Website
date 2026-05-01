// src/components/sections/AboutSection.jsx
'use client';

import { CheckCircle, Smile, Clock, Layers } from "lucide-react";
import { about } from "../../../../data";

export default function About() {
  const statIcons = [CheckCircle, Smile, Clock, Layers];
  return (
    <section id="about" className='py-20 px-4 dark:bg-white/10 transition-colors duration-500'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className='text-lg leading-relaxed text-gray-600 dark:text-white/60'>
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {about.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
              <div 
                key={idx}
                className={`p-6 rounded-xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-br from-purple-100 to-white border-purple-300/50 hover:border-purple-400 dark:from-purple-900/50 dark:to-slate-900/50 dark:border-purple-500/20 dark:hover:border-purple-500/50'
                    : 'bg-gradient-to-br from-pink-100 to-white border-pink-300/50 hover:border-pink-400 dark:from-pink-900/50 dark:to-slate-900/50 dark:border-pink-500/20 dark:hover:border-pink-500/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <Icon className={idx % 2 === 0 ? 'text-purple-400' : 'text-pink-400'} size={28} />
                  <div className={`text-4xl font-bold ${
                    idx % 2 === 0 ? 'text-purple-400' : 'text-pink-400'
                  }`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}