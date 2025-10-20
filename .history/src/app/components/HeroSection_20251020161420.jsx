"use client";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import image from "../../../public/assets/images/mdmuhibullahhabib.jpg"

export default function HeroSection() {

      const links = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
    { name: "Email", href: "mailto:example@email.com" },
  ];

  return (
    <section className="bg-white pt-25 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        
        {/* Left Text Column */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <p className="text-gray-700 text-lg mb-2">Hi, I'm <span className="font-semibold text-gray-900">Md. Muhib Ullah Habib</span></p>
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

            <div className="flex flex-wrap items-center gap-6 text-gray-700">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.name !== "Email" ? "_blank" : undefined}
          rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
          className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-300"
        >
          {link.name} <GoArrowUpRight className="inline-block" />
        </a>
      ))}
    </div>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="h-[500px] w-[400px] max-md:h-96 overflow-hidden rounded-b-full shadow-2xl border border-white/5">
            <Image
              src={image}
              alt="Profile Image"
                            width={400}
              height={500}
              className="h-full w-full aspect-[3/4] rounded-b-full object-cover object-top transition duration-300 hover:scale-[1.02] grayscale hover:grayscale-0"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
