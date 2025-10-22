"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import Link from "next/link";

// const projects = [
//   {
//     title: "Aloron",
//     number: "01",
//     description:
//       "Educational platform focused on HSC and university admission preparation. Includes interactive MCQ practice, subject-wise progress tracking, leaderboard, and responsive UI for students. Built with Next.js, MongoDB, and Firebase Auth.",
//     liveUrl: "https://aloron.netlify.app/",
//     sourceUrl: "https://github.com/mdmuhibullahhabib/aloron",
//     imageUrl: "https://i.ibb.co/BV8WCDzH/aloron.png",
//   },
//   {
//     title: "Weboria",
//     number: "02",
//     description:
//       "Professional portfolio and project showcase website built with Next.js and Framer Motion. Features modern animations, responsive design, smooth scroll effects, and dynamic project display — optimized for performance and SEO.",
//     liveUrl: "https://weboria-rho.vercel.app/",
//     sourceUrl: "https://github.com/mdmuhibullahhabib/weboria",
//     imageUrl: "https://i.ibb.co/FLBHPsf1/weboria.png",
//   },
// ];


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
              <div className="flex mt-8 flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Info */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}{" "}
                    <span className="text-gray-400 font-normal">
                      ({project.number})
                    </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition"
                    >
                      Live Project
                      <GoArrowUpRight className="text-white text-base" />
                    </a>

                    <a
                      href={project.sourceUrl}
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
                      View Details <FaArrowRight className="w-3 h-3 rotate-315" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <div className="relative h-[300px] border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <Image
                      src={project.imageUrl}
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
