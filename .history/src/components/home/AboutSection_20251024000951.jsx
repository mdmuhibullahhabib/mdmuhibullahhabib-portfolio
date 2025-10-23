"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Server, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const features = [
    {
      icon: <GraduationCap size={22} className="text-blue-600" />,
      text: "B.Sc. in Software Engineering at Daffodil International University",
    },
    {
      icon: <Code size={22} className="text-blue-600" />,
      text: "Full-Stack Developer: MERN Stack & Next.js",
    },
    {
      icon: <Server size={22} className="text-blue-600" />,
      text: "Backend & Database: Express.js, MySQL, Firebase, JWT Auth",
    },
    {
      icon: <Globe size={22} className="text-blue-600" />,
      text: "Authentication & Security: NextAuth.js & JWT",
    },
    {
      icon: <Code size={22} className="text-blue-600" />,
      text: "UI/UX & Styling: TailwindCSS & Responsive Design",
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Column (Text Section) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            About Me
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I am a passionate{" "}
            <span className="font-semibold text-blue-600">full-stack developer</span> skilled in{" "}
            <span className="font-semibold text-blue-600">Next.js, React, Node.js, and Express.js</span>.
            I specialize in creating{" "}
            <span className="font-semibold text-blue-600">modern, scalable web applications</span> with
            secure authentication using{" "}
            <span className="font-semibold text-blue-600">NextAuth.js and JWT</span>, and data management
            with <span className="font-semibold text-blue-600">MySQL & MongoDB</span>.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            I focus on building clean, responsive, and user-friendly interfaces with{" "}
            <span className="font-semibold text-blue-600">TailwindCSS</span> and modern design principles.
            Currently, I’m open to freelance, internships, and collaborative projects that challenge me to
            create impactful web solutions.
          </p>

          {/* Learn More Button */}
          <Link
            href="/about"
            className="inline-block px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right Column (Video Section) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <video
              className="w-full h-auto rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/animation/md-muhib-ullah-habib.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
