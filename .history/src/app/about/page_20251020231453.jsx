"use client"
import React from 'react'
import Education from './components/Education'
import AboutIntro from './components/AboutIntro'
import Skills from '@/components/home/Skills'
import Steps from './components/Steps'

const AboutPage = () => {
  return (
    <div>
      <AboutIntro />
      <Skills/>
      <Steps/>
      <Education />
    </div>
  )
}

export default AboutPage