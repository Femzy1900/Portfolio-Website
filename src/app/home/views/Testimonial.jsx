// src/components/sections/TestimonialsSection.jsx
import { MessageSquare } from 'lucide-react';
import { testimonials } from '../../../../data';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className='py-20 px-4 dark:bg-white/10'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-white border-purple-300/50 hover:border-purple-400 dark:from-purple-900/30 dark:to-slate-900/30 dark:border-purple-500/20 dark:hover:border-purple-500/50"
            >
              <MessageSquare className="text-purple-400 mb-4" size={32} />
              <p className="mb-6 italic text-gray-700 dark:text-gray-300">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}