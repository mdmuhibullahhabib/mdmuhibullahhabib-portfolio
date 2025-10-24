"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const expertiseItems = [
  "React & Next.js",
  "Node.js & Express",
  "MySQL & MongoDB Databases",
  "UI/UX Implementation",
  "Accessibility (WCAG)",
  "Performance Optimization",
  "API Design & Integration",
  "Version Control (Git, GitHub)",
  "Full-Stack Development",
  "Research & Design Systems",
];

export default function Marquee() {
  //  Animation for smooth horizontal scroll
  const scroll = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 3, 
          ease: "linear",
        },
      },
    },
  };

  //  Each item render with proper spacing
  const renderItems = (prefix = "") =>
    expertiseItems.map((item, idx) => (
      <div
        key={`${prefix}-${idx}`}
        className="flex items-center gap-2 sm:gap-3 whitespace-nowrap text-sm sm:text-base md:text-lg"
      >
        <Star className="text-purple-500 shrink-0" size={16} />
        <span>{item}</span>
      </div>
    ));

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 bg-white text-black">
      {/* Decorative Top Border */}
      <hr className="border-gray-300 w-full mb-4 sm:mb-6" />

      {/* Animated scrolling row */}
      <motion.div
        className="flex gap-6 sm:gap-10"
        variants={scroll}
        animate="animate"
      >
        {renderItems("primary")}
        {renderItems("dup")}
      </motion.div>

      {/* Decorative Bottom Border */}
      <hr className="border-gray-300 w-full mt-4 sm:mt-6" />
    </div>
  );
}
