// src/components/Navigation.jsx
'use client';

import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection, 
  scrollY, 
  isDark, 
  setIsDark 
}) {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Testimonials'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? isDark 
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Femi.A
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-purple-400 transition-colors font-bold duration-100  dark:text-purple-400
                    text-gray-500 text-x ${
                  activeSection === item.toLowerCase() 
                }`}
              >
                {item}
              </button>
            ))}
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button> */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${
          isDark ? 'bg-slate-950/95' : 'bg-white/95'
        } backdrop-blur-md`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}