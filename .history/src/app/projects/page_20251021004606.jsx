"use client";

import { FaGithub, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

// Fake project data
const projects = [
  {
    _id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills with Next.js and TailwindCSS.",
    techStack: ["Next.js", "TailwindCSS", "React", "TypeScript", "Vercel"],
    liveLink: "https://example.com/portfolio",
    codeLink: "https://github.com/username/portfolio",
    image: "https://via.placeholder.com/600x400.png?text=Portfolio+Website",
  },
  {
    _id: "2",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce web app with shopping cart, payment integration, and admin panel.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveLink: "https://example.com/ecommerce",
    codeLink: "https://github.com/username/ecommerce",
    image: "https://via.placeholder.com/600x400.png?text=E-commerce+Platform",
  },
  {
    _id: "3",
    title: "Blog CMS",
    description: "A blogging platform with markdown editor, user authentication, and dynamic content management.",
    techStack: ["Next.js", "React", "MongoDB", "NextAuth", "TailwindCSS"],
    liveLink: "https://example.com/blog",
    codeLink: "https://github.com/username/blog-cms",
    image: "https://via.placeholder.com/600x400.png?text=Blog+CMS",
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16 px-4 md:px-12 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-5">
          ALL PROJECTS
        </h1>
        <p className="text-gray-500 max-w-xl mb-10">
          Explore my projects showcasing full-stack development, UI/UX design, and problem-solving skills.
        </p>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300 pb-8"
            >
              {/* Text */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-medium mb-2">
                  {project.title}{" "}
                  <span className="text-gray-400 text-sm">(0{index + 1})</span>
                </h3>
                <p className="text-gray-500 mb-3">{project.description}</p>

                {/* Tech Stack */}
                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-purple-200 text-purple-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="mt-3 flex gap-3 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 flex items-center gap-1"
                  >
                    Live Project <GoArrowUpRight className="w-3 h-3 rotate-45" />
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-600 hover:text-white hover:bg-purple-600 transition duration-300 flex items-center gap-1"
                  >
                    Source Code <FaGithub className="w-4 h-4" />
                  </a>

                  <Link
                    href={`/projects/${project._id}`}
                    className="text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:border-purple-600 hover:text-white hover:bg-purple-600 transition duration-300 flex items-center gap-1"
                  >
                    View Details <GoArrowUpRight className="w-3 h-3 rotate-45" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full flex justify-center mt-6 md:mt-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
