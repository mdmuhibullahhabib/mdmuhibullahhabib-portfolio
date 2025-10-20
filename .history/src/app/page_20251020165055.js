"use client"
import React from 'react';
import AboutSection from "../components/home/AboutSection";
import ContactCTA from "../components/home/ContactCTA";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/FeaturedWork";
import Marquee from '@/components/home/Marquee';
import FeaturedWork from '../components/home/FeaturedWork';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <FeaturedWork />
      <ContactCTA />
    </div>

  );
}
