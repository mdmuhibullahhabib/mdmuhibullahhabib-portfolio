"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, ServerStack, Globe } from "lucide-react";

export default function AboutSection() {
  const features = [
    { icon: <AcademicCap size={20} />, text: "B.Sc. in Software Engineering" },
    { icon: <Code size={20} />, text: "MERN Stack Developer" },
    { icon: <ServerStack size={20} />, text: "Firebase, TailwindCSS, JWT Auth" },
    { icon: <Globe size={20} />, text: "Currently open to freelance & internship" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-20">
      <div className="container mx-auto px-6 md:flex md:items-center md:gap-12">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">About Me</h2>
          <p className="text-gray-700 mb-6">
            I’m a passionate full-stack developer with a focus on crafting clean and user-friendly web experiences. Studying Software Engineering at Daffodil International University, I’ve worked with modern technologies like React, Node.js, MongoDB, and Firebase.
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                {feature.icon} <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {/* Learn More Button */}
          <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <img
              src="/about-illustration.png" // replace with your uploaded illustration or the image file
              alt="Developer Illustration"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
