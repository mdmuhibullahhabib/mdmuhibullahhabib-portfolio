"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Cholo Bangladesh",
    subtitle: "Explore Bangladesh with Ease",
    image: "https://i.ibb.co/Qj3G1z0w/Screenshot-187.png",
    live: "https://cholobangladesh.netlify.app/",
    github: "https://github.com/mdmuhibullahhabib/cholo-bangladesh-client",
  },
  {
    title: "Aloron",
    subtitle: "MCQ-based Educational Platform",
    image: "https://i.ibb.co/xLZ0qgL/aloron-preview.png",
    live: "https://aloron.netlify.app/",
    github: "https://github.com/mdmuhibullahhabib/aloron",
  },
  {
    title: "Weboria",
    subtitle: "Full Stack Portfolio & Project Showcase",
    image: "https://i.ibb.co/Nyj4WJ4/weboria-preview.png",
    live: "https://weboria.netlify.app/",
    github: "https://github.com/mdmuhibullahhabib/weboria",
  },
];

export default function ProjectsSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.subtitle}</p>
              <div className="flex justify-between">
                <Link href={project.live} target="_blank" className="text-blue-500 hover:underline">Live</Link>
                <Link href={project.github} target="_blank" className="text-gray-700 dark:text-gray-200 hover:underline">Code</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
