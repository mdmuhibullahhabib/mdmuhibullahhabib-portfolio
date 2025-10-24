"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceHighlights() {
  return (
    <section className="bg-white text-gray-900 py-6 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="lg:w-full">
        {/* Title Section */}
        <div className="flex flex-wrap justify-between mb-12 gap-10 items-start">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase text-gray-900">
            My Service
            <br />
            <span className="text-purple-600">Expertise</span>
          </h2>

          <div className="flex justify-end">
            <div className="max-w-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                As a software engineer, I blend technical precision with
                user-focused design — delivering solutions that are functional,
                scalable, and visually engaging. My approach combines strong
                engineering principles with seamless user experience.
              </p>

              {/* Right Side Button */}
              <Link href="/contact">
                <button className="border border-purple-600 text-purple-600 px-5 py-3 text-sm rounded-full font-medium cursor-pointer hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
                  Let&apos;s Discuss
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* UI/UX Implementation */}
          <div className="border-t-2 border-gray-200 pt-6 hover:bg-gray-50 rounded-xl p-4 transition-all duration-300">
            <h3 className="text-lg text-gray-500">(01)</h3>
            <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">
              UI/UX Implementation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Building intuitive, accessible interfaces guided by research and
              modern design systems. Prioritizing responsiveness, clarity, and
              accessibility for all users.
            </p>
          </div>

          {/* Animations & Performance */}
          <div className="border-t-2 border-gray-200 pt-6 hover:bg-gray-50 rounded-xl p-4 transition-all duration-300">
            <h3 className="text-lg text-gray-500">(02)</h3>
            <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">
              Animations & Performance Optimization
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Adding motion that enhances—not distracts—from usability, with
              GSAP-powered animations and performance tuning for smooth,
              high-FPS experiences.
            </p>
          </div>

          {/* Full-Stack Development */}
          <div className="border-t-2 border-gray-200 pt-6 hover:bg-gray-50 rounded-xl p-4 transition-all duration-300">
            <h3 className="text-lg text-gray-500">(03)</h3>
            <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">
              Full-Stack Development
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Developing scalable applications with React/Next.js, Node/Express,
              and modern databases—integrating secure APIs, optimized queries,
              and modular architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
