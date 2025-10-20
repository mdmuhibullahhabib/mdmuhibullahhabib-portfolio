"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const socials = {
  linkedin: "https://www.linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  email: "mailto:youremail@example.com",
};

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 md:px-14 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center">
      {/* Call to Action Box */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-12 px-4 sm:px-8 md:py-16 md:px-10 flex flex-col items-center justify-center text-center w-full max-w-5xl transition-all hover:shadow-2xl duration-300">
        <p className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-sm mb-4 relative">
          <span className="inline-flex mr-2 relative">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping absolute"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full relative"></span>
          </span>
          Available for work
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-snug">
          Let&apos;s build something <br className="hidden sm:block" /> amazing together.
        </h2>

        <Link href="/contact" className="mt-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto mt-3 px-6 sm:px-8 py-3 bg-[#18181B] text-white rounded-full text-sm sm:text-base font-medium transition-transform hover:-translate-y-1 hover:bg-gray-800">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Social Links & Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-10 w-full max-w-5xl border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-5 text-gray-700 dark:text-gray-300 justify-center sm:justify-end text-xl">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socials.email}
            className="hover:text-purple-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
