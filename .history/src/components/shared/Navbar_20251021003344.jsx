"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <nav className="max-w-3xl mx-auto sticky top-4 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-between px-6 py-3 shadow-sm transition-all">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white hover:text-purple-600 transition"
        >
          Muhib<span className="text-purple-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-purple-600"
                    : "text-gray-700 dark:text-gray-300"
                } transition-colors`}
              >
                {item.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 gap-1"
          >
            <span
              className={`block w-8 h-0.5 bg-gray-900 dark:bg-white transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-900 dark:bg-white transition-all ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-gray-900 dark:bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden">
          <div className="fixed top-16 left-4 right-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  pathname === item.path
                    ? "bg-purple-600 text-white"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
