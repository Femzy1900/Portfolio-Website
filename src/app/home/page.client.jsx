import React from 'react'
import Hero from './views/Hero'
import About from './views/About'
import { SkillsSection } from './views/Skills'
import { Projects } from './views/Projects'
import { ExperienceSection } from './views/Experience'
import { TestimonialsSection } from './views/Testimonial'  

const HomeClient = () => {
  return (
    <div className=''>
        
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <ExperienceSection />
        <TestimonialsSection />
    </div>
  )
}

export default HomeClient