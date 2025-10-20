"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      year: "2020 - 2024",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Example College",
      year: "2018 - 2020",
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Example High School",
      year: "2016 - 2018",
    },
  ];

  return (
    <section className="w-full my-16 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section (Heading) */}
        <div className="md:w-1/2">
          <div className="flex items-center text-[#7C3AED] mb-3">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-2xl mr-2 text-purple-500"
            />
            <h2 className="text-lg font-semibold uppercase tracking-wide">
              Education
            </h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-medium text-white mb-4">
            My Academic Journey
          </h3>

          <p className="text-sm font-medium text-gray-400 pr-4 md:pr-20 mb-4">
            A continuous path of learning and innovation, grounded in computer
            science, creativity, and problem-solving — shaping the foundation of
            my professional growth.
          </p>
        </div>

        {/* Right Section (Education Details) */}
        <div className="md:w-1/2 text-sm sm:text-base">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-gray-700 py-4"
            >
              <div className="flex-1">
                <div className="text-white font-medium text-base sm:text-lg">
                  {edu.degree}
                </div>
                <span className="text-gray-400 text-sm block">
                  {edu.institution}
                </span>
              </div>
              <div className="text-gray-400 text-sm mt-2 sm:mt-0 sm:text-right whitespace-nowrap">
                {edu.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
