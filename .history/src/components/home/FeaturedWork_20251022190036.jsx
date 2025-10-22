"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function FeaturedWork() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  console.log(projects)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              FEATURED WORK
            </h2>
            <p className="text-gray-600 max-w-xl">
              As a software engineer, I build scalable, accessible, and user-focused
              digital solutions—from full-stack platforms to open-source libraries.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 text-purple-600 font-medium border border-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition"
          >
            Let's Discuss <GoArrowUpRight size={16} />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
                {/* Info Section */}
                <div className="md:w-1/2 space-y-4 text-center md:text-left flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {project.title}{" "}
                    <span className="text-gray-400 font-normal">
                      ({project.number})
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition"
                    >
                      Live Project
                      <GoArrowUpRight className="text-white text-base" />
                    </a>

                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-700 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      Source Code
                      <FaGithub className="text-gray-600 text-base" />
                    </a>

                    <Link
                      href={`/projects/${project._id}`}
                      className="text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-600 hover:text-white hover:bg-purple-600 transition duration-300 flex items-center gap-1"
                    >
                      View Details <GoArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="relative h-[300px] w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
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
