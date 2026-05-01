// src/components/sections/HeroSection.jsx
"use client";

import { Mail, Download } from "lucide-react";
import { personalInfo } from "../../../../data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -top-20 -left-20 animate-pulse bg-purple-400/30 dark:bg-purple-600/20"
        ></div>
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse bg-pink-400/30 dark:bg-pink-600/20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold shadow-2xl shadow-purple-500/40 transform hover:scale-110 transition-transform duration-300 text-white border-4 border-white dark:border-slate-800">
            {personalInfo.initials}
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl mb-8 dark:text-gray-300 text-gray-700"
        >
          {personalInfo.title} | {personalInfo.subtitle}
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg mb-12 max-w-2xl mx-auto dark:text-white text-gray-600"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 text-white"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
          >
            About Me
          </button>
          <a
            href="/resume.pdf" download
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 text-white flex items-center gap-2"
          >
            <Download size={20} />
            Download My Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-6 justify-center mt-10"
        >
          <a
            href={personalInfo.social.github}
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href={personalInfo.social.email}
            className="hover:text-purple-400 transform hover:scale-125 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
