// src/components/sections/ProjectsSection.jsx
import { Code, ExternalLink } from 'lucide-react';
import { projects } from '../../../../data';

export function Projects({ isDark }) {
  return (
    <section id="projects" className='py-20 px-4  dark:bg-white/10'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'bg-gradient-to-br from-purple-900/30 to-slate-900/30 border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-purple-400" size={32} />
                  <a href={project.link} className="text-pink-400 hover:text-pink-300 transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 dark:text-black">{project.title}</h3>
                <p className={isDark ? 'text-gray-400 mb-6' : 'text-gray-600 mb-6'}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs ${
                        isDark
                          ? 'bg-purple-600/20 text-purple-300'
                          : 'bg-purple-200 text-purple-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}