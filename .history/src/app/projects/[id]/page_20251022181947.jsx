"use client";

import { FaGithub, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Fake fallback data
const fallbackProject = {
  _id: "1",
  title: "Portfolio Website",
  description:
    "A personal portfolio website showcasing projects and skills with Next.js and TailwindCSS.",
  image: "https://via.placeholder.com/1200x600.png?text=Portfolio+Website",
  liveLink: "https://example.com/portfolio",
  codeLink: "https://github.com/username/portfolio",
  techStack: ["Next.js", "React", "TailwindCSS", "TypeScript", "Vercel"],
  challenges: [
    "Learning Next.js and SSR concepts",
    "Designing responsive UI with TailwindCSS",
  ],
  improvements: ["Add dark mode toggle", "Integrate CMS for dynamic content"],
  year: "2024",
};

export default function ProjectDetailsPage({ params }) {

    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error("Error fetching projects:", err));
    }, []);
  const currentProject = project || fallbackProject; // Safe fallback

  return (
    <div className="py-16 px-4 md:px-12 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="space-y-3">
          <Link
            href="/projects"
            className="text-purple-600 hover:underline"
          >
            ← Back to Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">{currentProject.title}</h1>
          <p className="text-gray-600 text-lg">{currentProject.description}</p>
        </div>

        {/* Project Image */}
        <div className="w-full">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={currentProject.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            Live Project <FaArrowRight className="w-4 h-4 rotate-315" />
          </a>

          {currentProject.codeLink && (
            <a
              href={currentProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-700 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              Source Code <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Tech Stack */}
        {currentProject.techStack && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {currentProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-purple-200 text-purple-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Challenges */}
        {currentProject.challenges && currentProject.challenges.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {currentProject.challenges.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Improvements */}
        {currentProject.improvements && currentProject.improvements.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Future Improvements</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {currentProject.improvements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Year */}
        {currentProject.year && (
          <div className="text-gray-500 text-sm">
            <p>Year: {currentProject.year}</p>
          </div>
        )}
      </div>
    </div>
  );
}
