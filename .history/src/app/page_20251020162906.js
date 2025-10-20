"use client"
import React from 'react';
import AboutSection from "../components/home/AboutSection";
import ContactCTA from "../components/home/ContactCTA";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      Marquee
      <AboutSection />
      <ProjectsSection />
      <ContactCTA />
    </div>

  );
}
