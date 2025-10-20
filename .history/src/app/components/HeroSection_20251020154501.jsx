"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import image from "../../../public/assets/"

export default function HeroSection() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* Left Text Column */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-gray-700 text-lg mb-2">Hi, I'm <span className="font-semibold text-gray-900">Sabbir Bin Abdul Latif</span></p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Full Stack <span className="text-purple-600">Software Engineer</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            I connect real-world problems to scalable, accessible software, building with <span className="text-purple-600 font-medium">React/Next.js • TypeScript • Node/Express</span> and modern databases.
          </p>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf" // আপনার resume path দিন
            className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition duration-300 mb-6"
          >
            Download Resume <ArrowDown className="ml-2 w-5 h-5" />
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-gray-700">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">GitHub <GoArrowUpRight /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition">LinkedIn <GoArrowUpRight /></a>
            <a href="mailto:example@email.com" className="hover:text-purple-600 transition">Email <GoArrowUpRight /></a>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-96 md:h-96 relative rounded-t-full overflow-hidden shadow-xl">
            <Image
              src="/about-illustration.png" // replace with uploaded image path
              alt="Profile Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
