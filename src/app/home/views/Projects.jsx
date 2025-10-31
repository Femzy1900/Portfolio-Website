// src/app/home/views/Projects.jsx
"use client";

import { Code, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects } from "../../../../data";

export function Projects({ isDark }) {
  const router = useRouter();

  const handleProjectClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 px-4  dark:bg-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => handleProjectClick(project.id)}
              className={`rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                isDark
                  ? "bg-gradient-to-br from-purple-900/80 to-slate-900/50 border-purple-500/20 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
                  : "bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200"
              }`}
            >
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

                <h3 className="text-2xl font-bold mb-3 dark:text-gray-900 text-gray-900">
                  {project.title}
                </h3>
                <p
                  className={
                    isDark ? "text-gray-400 mb-6" : "text-gray-600 mb-6"
                  }
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs ${
                        isDark
                          ? "bg-purple-600/20 text-purple-300"
                          : "bg-purple-200 text-purple-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-500/20">
                  <span
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.category}
                  </span>
                  <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
