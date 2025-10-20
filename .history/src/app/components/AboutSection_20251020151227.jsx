"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Server, Globe } from "lucide-react";

export default function AboutSection() {
  const features = [
    { icon: <GraduationCap size={24} className="text-blue-600" />, text: "B.Sc. in Software Engineering at Daffodil International University" },
    { icon: <Code size={24} className="text-blue-600" />, text: "MERN Stack Developer: React, Node.js, Express & MongoDB" },
    { icon: <Server size={24} className="text-blue-600" />, text: "Backend & Cloud: Firebase, JWT Authentication, REST APIs" },
    { icon: <Globe size={24} className="text-blue-600" />, text: "Open to freelance, internships & collaborative projects" },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-24">
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
            I am a passionate <span className="font-semibold text-blue-600">full-stack developer</span> with a love for crafting beautiful and user-friendly web experiences. With hands-on experience in <span className="font-semibold text-blue-600">React, Node.js, MongoDB, and Firebase</span>, I turn ideas into dynamic web applications that work seamlessly.
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
            <img
              src="/about-illustration.png" // আপনার illustration দিয়ে replace করুন
              alt="Developer Illustration"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
