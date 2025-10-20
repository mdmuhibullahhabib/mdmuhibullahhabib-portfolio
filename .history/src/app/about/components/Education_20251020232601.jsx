"use client";

// Replaced external import with an inline SVG for stability
const StarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "BRAC University, Dhaka",
      year: "Oct 2021 - Sep 2025",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Uttara High School & College, Dhaka",
      year: "Jul 2018 - Mar 2020",
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Uttara High School & College, Dhaka",
      year: "Jan 2016 - Feb 2018",
    },
  ];

  return (
    <section id="education" className="w-full my-16 px-4 py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left Section (Heading and Description) */}
        <div className="lg:w-2/5">
          <h2 className="text-lg mb-3 text-purple-600 flex items-center gap-3 font-semibold uppercase tracking-wide">
            <StarIcon className="text-xl" /> {/* Changed to StarIcon to match image */}
            Education
          </h2>
          <h3 className="text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            My Education
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed pr-0 lg:pr-10">
            A journey of continuous learning in computer science and problem-solving,
            built on a strong foundation in science and mathematics.
          </p>
        </div>

        {/* Right Section (Education Details) */}
        <div className="lg:w-3/5 space-y-8">
          {educationData.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-6">
                <div>
                  <h4 className="text-gray-900 font-medium text-xl sm:text-2xl mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 text-base sm:text-lg">
                    {edu.institution}
                  </p>
                </div>
                {edu.year && (
                  <div className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0 lg:ml-auto lg:pl-4 whitespace-nowrap">
                    {edu.year}
                  </div>
                )}
              </div>
              {/* Thin gray line separator, except for the last item */}
              {index < educationData.length - 1 && (
                <hr className="border-t border-gray-200 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
