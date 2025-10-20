"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 mt-20">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Branding */}
        <div className="text-2xl font-bold">
          Muhibullah<span className="text-blue-600">.</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-gray-700 dark:text-gray-300">
          <Link href="https://github.com/mdmuhibullahhabib" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/mdmuhibullahhabib/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Linkedin size={24} />
          </Link>
          <Link href="https://twitter.com/mdmuhibullahhabib" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Twitter size={24} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {year} Muhibullah Habib. All rights reserved.
      </div>
    </footer>
  );
}
