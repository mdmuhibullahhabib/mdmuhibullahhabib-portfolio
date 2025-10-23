"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import image from "../../../public/assets/images/mdmuhibullahhabib.jpg";

export default function HeroSection() {
  const links = [
    { name: "GitHub", href: "https://github.com/mdmuhibullahhabib" },
    { name: "LinkedIn", href: "https://linkedin.com/mdmuhibullahhabib" },
    { name: "Email", href: "mailto:mdmuhibullahhabib@gmail.com" },
  ];

  return (
    <section className="bg-white text-gray-900 py-12 md:py-20 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between gap-10">
        {/* ✅ Left Text Column */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <p className="text-gray-700 text-base sm:text-lg mb-2">
            Hi, I'm{" "}
            <span className="font-semibold text-gray-900">
              Md. Muhib Ullah Habib
            </span>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Full Stack{" "}
            <span className="text-purple-600">Software Engineer</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            I connect real-world problems to scalable, accessible software,
            building with{" "}
            <span className="text-purple-600 font-medium">
              React/Next.js • JavaScript • Node/Express
            </span>{" "}
            and modern databases.
          </p>

          {/* 🧾 Download Resume Button */}
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-5 py-2 sm:px-6 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-600 hover:text-white transition duration-300 mb-6"
          >
            Download Resume <ArrowDown className="ml-2 w-5 h-5" />
          </a>

          {/* 🌐 Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-gray-700">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base"
              >
                {link.name} <GoArrowUpRight className="inline-block" />
              </a>
            ))}
          </div>
        </div>

        {/* ✅ Right Image Column */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="h-80 w-64 sm:h-96 sm:w-72 md:h-[500px] md:w-[400px] overflow-hidden rounded-b-full shadow-2xl border border-white/5">
            <Image
              src={image}
              alt="Profile Image"
              width={400}
              height={500}
              className="h-full w-full object-cover object-top rounded-b-full transition-transform duration-300 hover:scale-105 grayscale hover:grayscale-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
