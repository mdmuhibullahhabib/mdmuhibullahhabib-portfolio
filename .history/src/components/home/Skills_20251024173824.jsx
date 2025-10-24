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
  <section className="relative w-full overflow-hidden py-10 bg-white text-black">
      <hr className="border-[#E2E8F0] w-full mb-6" />

      {/* Scrolling Container */}
      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap py-6 flex animate-scroll">
          {/* Original set */}
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skills flex items-center gap-2 px-6 py-2 mx-3 shadow-sm bg-white rounded-full border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {skills.map((skill, index) => (
            <div
              key={`dup-${index}`}
              className="skills flex items-center gap-2 px-6 py-2 mx-3 shadow-sm bg-white rounded-full border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        /* Continuous right → left scroll */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: inline-flex;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}
