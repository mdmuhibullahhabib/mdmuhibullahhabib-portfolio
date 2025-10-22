"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Server, Globe } from "lucide-react";
import illustration from "../../../public/assets/animation/md-muhib-ullah-habib.mp4";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    { icon: <GraduationCap size={24} className="text-blue-600" />, text: "B.Sc. in Software Engineering at Daffodil International University" },
    { icon: <Code size={24} className="text-blue-600" />, text: "Full-Stack Developer: MERN Stack & Next.js" },
    { icon: <Server size={24} className="text-blue-600" />, text: "Backend & Database: Express.js, MySQL, Firebase, JWT Auth" },
    { icon: <Globe size={24} className="text-blue-600" />, text: "Authentication & Security: NextAuth.js & JWT" },
    { icon: <Code size={24} className="text-blue-600" />, text: "UI/UX & Styling: TailwindCSS & Responsive Design" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:flex md:items-center md:gap-12">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-12 md:mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            About Me
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I am a passionate <span className="font-semibold text-blue-600">full-stack developer</span> skilled in <span className="font-semibold text-blue-600">Next.js, React, Node.js, and Express.js</span>. I specialize in creating <span className="font-semibold text-blue-600">modern, scalable web applications</span> with secure authentication using <span className="font-semibold text-blue-600">NextAuth.js and JWT</span>, and data management with <span className="font-semibold text-blue-600">MySQL & MongoDB</span>.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            I also focus on building clean, responsive, and user-friendly interfaces with <span className="font-semibold text-blue-600">TailwindCSS</span> and modern design principles. Currently, I am open to freelance, internships, and collaborative projects that challenge me to create impactful web solutions.
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
                {feature.icon} 
                <span className="text-gray-800 font-medium">{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
    <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
            {/* 🔹 CHANGE: Use video from public folder */}
            <video
              className="w-full h-auto rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              {/* 🔹 CHANGE: use /assets path directly */}
              <source src="../../../public//assets/animation/md-muhib-ullah-habib.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
