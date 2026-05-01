// src/app/home/views/Projects.jsx
"use client";

import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "../../../../data";
import { motion } from "framer-motion";

export function Projects() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="projects" className="py-20 px-4  dark:bg-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div variants={item} key={idx}>
              <Link
                href={`/projects/${project.id}`}
              className="group block rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200 dark:from-purple-900/80 dark:to-slate-900/50 dark:border-purple-500/20 dark:hover:border-purple-500/50 dark:hover:shadow-purple-500/20"
            >
              <div className="w-full h-48 overflow-hidden relative border-b border-purple-200 dark:border-purple-500/20">
                <img 
                  src={project.images[0] || '/api/placeholder/800/600'} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-semibold flex items-center gap-2">View Case Study <ExternalLink size={16} /></span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-purple-400" size={32} />
                  <div className="flex gap-2">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/50"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 dark:text-white text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-purple-200 text-purple-700 dark:bg-purple-600/20 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-500/20">
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {project.category}
                  </span>
                  <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
