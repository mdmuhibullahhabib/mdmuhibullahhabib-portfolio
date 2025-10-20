"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const techStack = ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-5xl px-6 text-center md:text-left md:flex md:flex-col md:items-start">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Hi, I&apos;m <span className="text-yellow-300">Muhibullah Habib</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl mb-6"
        >
          Full Stack Developer | Building modern web applications with Next.js & Node.js
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Link
            href="/projects"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Me
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center md:justify-start gap-3 mt-6"
        >
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-white/20 hover:bg-white/40 px-3 py-1 rounded-full text-sm md:text-base transition"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
