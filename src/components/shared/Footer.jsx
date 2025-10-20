"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* Optional: replace or import your real menu/social data */
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
    <footer className="py-12 px-4 md:px-14 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col items-center">
      {/* Call to Action Box */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl py-16 px-6 sm:px-10 flex flex-col items-center justify-center text-center w-full max-w-5xl transition-all hover:shadow-2xl duration-300">
        <p className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 rounded-full text-sm mb-4 relative">
          <span className="inline-flex mr-2 relative">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping absolute"></span>
            <span className="w-2 h-2 bg-purple-500 rounded-full relative"></span>
          </span>
          Available for work
        </p>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-snug">
          Let&apos;s build something <br className="hidden sm:block" /> amazing together.
        </h2>

        <Link href="/contact" className="mt-6">
          <button className="mt-3 px-8 py-3 bg-[#18181B] text-white rounded-full text-sm sm:text-base font-medium transition-transform hover:-translate-y-1 hover:bg-gray-800">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-600 dark:text-gray-300">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="transition-colors hover:text-purple-600 dark:hover:text-purple-400"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Links & Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mt-10 w-full max-w-5xl border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        <div className="flex gap-5 text-gray-700 dark:text-gray-300">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socials.email}
            className="hover:text-purple-600 transition text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
