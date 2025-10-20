"use client";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";


const projects = [
  {
    title: "BUCC Portal",
    number: "01",
    description:
      "Full-stack portal for BRAC University Computer Club (1500+ members, 33+ admins). Streamlined recruitment & events, RFID attendance via student IDs, and role-based dashboards.",
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "/images/bucc-portal.png",
  },
  {
    title: "Udcyog",
    number: "02",
    description:
      "Platform for social development events. SPA with JWT auth + Firebase login, event creation/filtering, reviews & participation tracking, theme toggle, and newsletter support.",
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "/images/udcyog.png",
  },
  {
    title: "Cohabit",
    number: "03",
    description:
      "Roommate-matching SPA by location, budget, and lifestyle. Secure auth (email + Google OAuth), protected routes, theme toggle, Swiper gallery, and mobile-first UI.",
    liveUrl: "#",
    sourceUrl: "#",
    imageUrl: "/images/cohabit.png",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              FEATURED WORK
            </h2>
            <p className="text-gray-600 max-w-xl">
              As a software engineer, I build scalable, accessible, and user-focused digital solutions—from full-stack platforms to open-source libraries.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-purple-600 font-medium border border-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition"
          >
            Let's Discuss <GoArrowUpRight size={16} />
          </a>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Project Info */}
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

                  {/* Buttons */}
                  import {GoArrowUpRight} from "react-icons/go";

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
                      <Fagithub className="text-gray-600 text-base" />
                    </a>

                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-gray-400 rounded-full border border-gray-200 cursor-not-allowed"
                    >
                      View Details
                      <GoArrowUpRight className="text-gray-400 text-base" />
                    </button>
                  </div>

                </div>

                {/* Project Image */}
                <div className="md:w-1/2">
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={700}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
