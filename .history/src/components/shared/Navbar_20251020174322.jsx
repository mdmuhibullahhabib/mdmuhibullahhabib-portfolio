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
      {/* 🌙 Desktop Navbar */}
      <nav className="max-w-5xl mx-auto sticky top-4 z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-between px-8 py-3 shadow-sm transition-all">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-2xl tracking-tight text-gray-900 dark:text-white hover:text-purple-600 transition"
        >
          Muhib<span className="text-purple-600">.</span>
        </Link>

        {/* Menu */}
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
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

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
      </nav>

      {/* 📱 Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 md:hidden rounded-t-2xl shadow-lg">
        <ul className="flex justify-around py-2 text-xs font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex flex-col items-center ${
                  pathname === item.path
                    ? "text-purple-600"
                    : "text-gray-700 dark:text-gray-300"
                } transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
