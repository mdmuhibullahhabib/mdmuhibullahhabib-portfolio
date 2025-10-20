"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const expertiseItems = [
  "React & Next.js",
  "Node.js & Express",
  "Flask & Python",
  "MySQL & NoSQL Databases",
  "UI/UX Implementation",
  "Accessibility (WCAG)",
  "Performance Optimization",
  "API Design & Integration",
  "Version Control (Git, GitHub)",
  "Full-Stack Development",
  "Research & Design Systems",
];

export default function Marquee() {
  // Animation variants for seamless horizontal scroll
  const scroll = {
    animate: {
      x: ["0%", "-50%"], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const renderItems = (prefix = "") =>
    expertiseItems.map((item, idx) => (
      <div key={`${prefix}-${idx}`} className="flex items-center gap-3 whitespace-nowrap">
        <Star className="text-purple-500" size={16} />
        <span>{item}</span>
      </div>
    ));

  return (
    <div className="w-full py-8 bg-white text-black">
      <hr className="border-gray-700 w-full mb-6" />
      <motion.div
        className="flex gap-10"
        variants={scroll}
        animate="animate"
      >
        {renderItems("primary")}
        {renderItems("dup")}
      </motion.div>
      <hr className="border-gray-700 w-full mt-6" />
    </div>
  );
}
