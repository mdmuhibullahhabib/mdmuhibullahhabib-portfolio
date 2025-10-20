"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [currmode, setCurrmode] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (currmode === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    }
  }, [currmode]);

  const handleToggleTheme = () => {
    setCurrmode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* 🌙 Desktop & Tablet Navbar */}
      <nav className="max-w-7xl mx-auto sticky top-4 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-between px-6 py-3 shadow-sm transition-all">
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
        <div className="md:hidden flex items-center gap-2">
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

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition active:scale-90"
          >
            {currmode === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Drawer */}
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
