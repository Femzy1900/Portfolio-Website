// src/components/Footer.jsx
'use client';

import { Mail } from 'lucide-react';
import { personalInfo } from '../../data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({ isDark }) {
  return (
    <footer className={`py-12 px-4 border-t ${
      isDark ? 'border-purple-500/20' : 'border-purple-300/50'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex gap-6 justify-center mb-6">
          <a 
            href={personalInfo.social.github} 
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href={personalInfo.social.email} 
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 {personalInfo.name}.
        </p>
      </div>
    </footer>
  );
}