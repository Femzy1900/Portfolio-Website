// app/HomeClient.jsx
"use client";

import Hero from "./views/Hero";
import About from "./views/About";
import { SkillsSection } from "./views/Skills";
import { Projects } from "./views/Projects";
import { ExperienceSection } from "./views/Experience";

const HomeClient = () => (
  <main className="pt-20">
    <section id="home"><Hero /></section>
    <section id="about"><About /></section>
    <section id="skills"><SkillsSection /></section>
    <section id="projects"><Projects /></section>
    <section id="experience"><ExperienceSection /></section>
  </main>
);

export default HomeClient;
