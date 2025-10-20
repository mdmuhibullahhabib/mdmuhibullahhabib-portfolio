"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
            Let's Discuss <ArrowRight size={16} />
          </a>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Project Info */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title} <span className="text-gray-400">({project.number})</span>
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                  >
                    Live Project
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
