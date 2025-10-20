"use client";

import { FaGraduationCap, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Daffodil International University",
      year: "2021 - Present",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Science College, Dhaka",
      year: "2018 - 2020",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Motijheel Model School & College",
      year: "2016 - 2018",
    },
  ];

  return (
    <section className="w-full my-16 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section (Heading) */}
        <div className="md:w-1/2">
          <h2 className="text-lg mb-2 text-[#7C3AED] flex items-center gap-2">
            <FaGraduationCap className="text-xl" />
            Education
          </h2>
          <h3 className="text-4xl md:text-5xl mb-4 font-medium text-white">
            My Education
          </h3>
          <p className="text-sm font-medium text-gray-400 pr-28 max-sm:pr-5 mb-4">
            A journey of continuous learning in computer science and
            problem-solving, built on a strong foundation in science and
            mathematics.
          </p>
        </div>

        {/* Right Section (Education Details) */}
        <div className="md:w-1/2 max-sm:text-sm">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b border-gray-600 py-4"
            >
              <div className="text-lg font-medium flex-1">
                <div className="text-white">{edu.degree}</div>
                <span className="text-gray-400 text-sm block">
                  {edu.institution}
                </span>
              </div>
              <div className="text-gray-400 text-right text-sm ml-4 whitespace-nowrap">
                {edu.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center mt-10">
        <a href="mailto:example@email.com" aria-label="Email">
          <FaEnvelope className="text-gray-400 text-2xl hover:text-[#7C3AED] transition" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
          <FaGithub className="text-gray-400 text-2xl hover:text-[#7C3AED] transition" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
          <FaLinkedin className="text-gray-400 text-2xl hover:text-[#7C3AED] transition" />
        </a>
      </div>
    </section>
  );
}
