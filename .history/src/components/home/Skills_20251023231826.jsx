"use client";

import Image from "next/image";

export default function Skills() {
  const skills = [
    // Languages
    // { id: 1, name: "Python", image: "/images/Logos/Python.svg" },
    { id: 2, name: "JavaScript", image: "/images/Logos/JavaScript.svg" },
    // { id: 3, name: "TypeScript", image: "/images/Logos/TypeScript.svg" },
    { id: 4, name: "SQL", image: "/images/Logos/PostgreSQL.svg" },

    // Frontend
    { id: 10, name: "React", image: "/images/Logos/React.js.svg" },
    { id: 11, name: "Next.js", image: "/images/Logos/Next.js.svg" },
    // { id: 12, name: "Redux", image: "/images/Logos/Redux.svg" },
    { id: 13, name: "Tailwind CSS", image: "/images/Logos/TailwindCSS.svg" },
    { id: 14, name: "Bootstrap", image: "/images/Logos/Bootstrap.svg" },
    { id: 16, name: "DaisyUI", image: "/images/Logos/DaisyUI.svg" },
    { id: 17, name: "shadcn/ui", image: "/images/Logos/shadcn-ui.svg" },
    { id: 20, name: "HTML", image: "/images/Logos/HTML.svg" },
    { id: 21, name: "CSS", image: "/images/Logos/CSS.svg" },

    // Backend
    { id: 30, name: "Node.js", image: "/images/Logos/Node.js.svg" },
    { id: 31, name: "Express", image: "/images/Logos/Express.svg" },
    // { id: 32, name: "Flask", image: "/images/Logos/Flask.svg" },

    // Databases & ORM
    // { id: 40, name: "PostgreSQL", image: "/images/Logos/PostgreSQL.svg" },
    { id: 41, name: "MySQL", image: "/images/Logos/MySQL.svg" },
    { id: 42, name: "MongoDB", image: "/images/Logos/MongoDB.svg" },
    { id: 44, name: "Mongoose", image: "/images/Logos/Mongoose.svg" },
    // { id: 45, name: "SQLAlchemy", image: "/images/Logos/SQLAlchemy.svg" },

    // Cloud, DevOps & Deployment
    { id: 50, name: "Firebase", image: "/images/Logos/Firebase.svg" },
    { id: 51, name: "Vercel CI/CD", image: "/images/Logos/vercel.svg" },

    // Tools
    { id: 60, name: "Git", image: "/images/Logos/GIT.svg" },
    // { id: 62, name: "Postman", image: "/images/Logos/Postman.svg" },
  ];

  return (
 <section className="relative w-full overflow-hidden py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
          My Skills
        </h2>

        <div className="overflow-hidden w-full">
          <div
            id="scrolling-container"
            className="flex animate-scroll whitespace-nowrap"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 mx-3 rounded-full bg-white border border-gray-200 shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="object-contain w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-sm sm:text-base font-medium text-gray-800 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Scrolling Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
}
