'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Code
} from 'lucide-react';
import { projects } from '../../../../data';

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 mb-8 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
            }`}>
              {project.status}
            </span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          
          {/* Project Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-purple-400" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-purple-400" />
              <span>Team of {project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={16} className="text-purple-400" />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 text-white"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
            >
              <Github size={20} />
              <span>View Code</span>
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden mb-4 border border-purple-500/20">
            <img
              src={project.images[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {project.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeImage === idx
                    ? 'border-purple-500 scale-105'
                    : 'border-transparent hover:border-purple-500/50'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-32 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-900/20 to-slate-900/10 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="dark:text-gray-300 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Challenges */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertCircle className="text-orange-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Challenges
              </span>
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-br from-orange-900/20 to-slate-900/30 border border-orange-500/20"
                >
                  <p className="dark:text-gray-300 text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="text-yellow-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <div className="space-y-4">
              {project.solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-br from-yellow-900/20 to-slate-900/30 border border-yellow-500/20"
                >
                  <p className="dark:text-gray-300 text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TrendingUp className="text-green-400" />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project Outcome
            </span>
          </h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-slate-900/30 border border-green-500/20">
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Role */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-slate-900/10 border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-800 mb-2">My Role</h3>
          <p className="dark:text-gray-300 text-gray-700">{project.role}</p>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-16 pt-8 border-t border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6 text-center">View More Projects</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push('/#projects')}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white"
            >
              All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}