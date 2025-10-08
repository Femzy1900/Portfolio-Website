// src/components/sections/HeroSection.jsx
'use client';

import { Mail } from 'lucide-react';
import { personalInfo } from '../../../../data';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero({ isDark, scrollToSection }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute w-96 h-96 rounded-full blur-3xl -top-20 -left-20 animate-pulse ${
          isDark ? 'bg-purple-600/20' : 'bg-purple-400/30'
        }`}></div>
        <div className={`absolute w-96 h-96 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse ${
          isDark ? 'bg-pink-600/20' : 'bg-pink-400/30'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300 text-white">
            {personalInfo.initials}
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">{personalInfo.name}</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 animate-slide-up ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          {personalInfo.title} | {personalInfo.subtitle}
        </p>
        
        <p className={`text-lg mb-12 max-w-2xl mx-auto animate-slide-up ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`} style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          {personalInfo.description}
        </p>
        
        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 text-white"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
          >
            About Me
          </button>
        </div>
        
        <div className="flex gap-6 justify-center mt-12 animate-slide-up" style={{ animationDelay: '0.7s', opacity: 0, animationFillMode: 'forwards' }}>
          <a href={personalInfo.social.github} className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300">
            <FaGithub size={28} />
          </a>
          <a href={personalInfo.social.linkedin} className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300">
            <FaLinkedin size={28} />
          </a>
          <a href={personalInfo.social.email} className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}