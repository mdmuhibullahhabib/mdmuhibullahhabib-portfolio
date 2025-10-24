"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function FeaturedWork() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        // 🔹 Only take last 2 projects
        const lastTwo = data.slice(-2);
        setProjects(lastTwo);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 🔹 Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              FEATURED WORK
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:max-w-xl">
              As a software engineer, I build scalable, accessible, and
              user-focused digital solutions—from full-stack platforms to
              open-source libraries.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 text-purple-600 font-medium border border-purple-600 px-5 py-2 rounded-full hover:bg-purple-50 transition duration-300 text-sm sm:text-base"
          >
            Let’s Discuss <GoArrowUpRight size={16} />
          </Link>
        </div>

        {/* 🔹 Projects List */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Info Section */}
                <div className="w-full md:w-1/2 text-left space-y-4 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-semibold">
                    {project.title}{" "}
                    <span className="text-gray-400 font-normal text-base">
                      ({project.number})
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* 🔘 Buttons */}
                  <div className="flex flex-wrap justify-start gap-3 mt-4">
                    {/* Live Project */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition"
                    >
                      Live Project
                      <GoArrowUpRight className="text-white text-base" />
                    </a>

                    {/* Source Code */}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base font-medium text-gray-700 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      Source Code
                      <FaGithub className="text-gray-600 text-base" />
                    </a>

                    {/* View Details */}
                    <Link
                      href={`/projects/${project._id}`}
                      className="flex items-center gap-1 px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base border border-gray-400 text-gray-700 rounded-full hover:border-purple-600 hover:bg-purple-600 hover:text-white transition duration-300"
                    >
                      View Details <GoArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative h-56 sm:h-64 md:h-[300px] w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400 text-sm">
                        No image available
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
