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
//  <section className="relative w-full overflow-hidden py-5 bg-white text-black">
      <>
      <hr className="border-[#E2E8F0] w-full" />
      <div className="overflow-hidden w-full">
        <div className="whitespace-nowrap py-10" id="scrolling-container">
          <div className="flex" id="text-container">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="skills flex items-center gap-2 px-6 py-2 mx-3 shadow-sm bg-white rounded-full"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless infinite effect */}
            {skills.map((skill, index) => (
              <div
                key={`dup-${index}`}
                className="skills flex items-center gap-2 px-6 py-2 mx-3 bg-white rounded-full shadow-sm"
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>


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
