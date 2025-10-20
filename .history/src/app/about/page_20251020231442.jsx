"use client"
import React from 'react'
import Education from './components/Education'
import AboutIntro from './components/AboutIntro'
import Skills from '@/components/home/Skills'

const AboutPage = () => {
  return (
    <div>
      <AboutIntro />
      <Skills/>
      
      <Education />
    </div>
  )
}

export default AboutPage