"use client"
import React from 'react';
import AboutSection from "./home/AboutSection";
import ContactCTA from "./home/ContactCTA";
import HeroSection from "./home/HeroSection";
import ProjectsSection from "./home/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactCTA />
    </div>

  );
}
