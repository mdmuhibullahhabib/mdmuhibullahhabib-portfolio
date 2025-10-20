"use client";

import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Daffodil International University",
      year: "2021 - Present",
    },
    // {
    //   degree: "Higher Secondary Certificate (HSC)",
    //   institution: "Govt. Science College, Dhaka",
    //   year: "2018 - 2020",
    // },
    // {
    //   degree: "Secondary School Certificate (SSC)",
    //   institution: "Motijheel Model School & College",
    //   year: "2016 - 2018",
    // },
    {
      degree: "Programming Hero Course",
      institution: "July 2024 – December 2024",
      year: "",
    },
  ];

  return (
    <section className="w-full my-16 px-4 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Section (Heading) */}
        <div className="md:w-1/2">
          <h2 className="text-lg mb-3 text-purple-600 flex items-center gap-3 font-semibold uppercase tracking-wide">
            <FaGraduationCap className="text-2xl" />
            Education
          </h2>
          <h3 className="text-4xl md:text-5xl mb-5 font-bold text-gray-900">
            My Academic Journey
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed pr-4 md:pr-20">
            A journey of continuous learning in computer science and problem-solving, 
            built on a strong foundation in science and mathematics. Always striving 
            to expand knowledge and create impactful digital experiences.
          </p>
        </div>

        {/* Right Section (Education Details) */}
        <div className="md:w-1/2 space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-l-4 border-purple-600 pl-4 sm:pl-6 py-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <div>
                <h4 className="text-gray-900 font-semibold text-lg sm:text-xl">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">{edu.institution}</p>
              </div>
              {edu.year && (
                <div className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0">
                  {edu.year}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
