"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-700 dark:text-gray-300 mb-6"
        >
          I&apos;m a Full Stack Developer with experience in building modern web applications using Next.js, Node.js, React, and MongoDB. I love crafting scalable, responsive, and beautiful user interfaces with Tailwind CSS and interactive animations with Framer Motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start gap-3"
        >
          {["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
            <span key={i} className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium shadow hover:scale-105 transition">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
