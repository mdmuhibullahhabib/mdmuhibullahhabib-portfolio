"use client";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Daffodil International University",
      year: " 2021 - Sep 2025",
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
    <section className="w-full my-16 px-4 py-16 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left Section */}
        <div className="lg:w-2/5">
          <h2 className="text-lg mb-3 text-purple-600 flex items-center gap-2 font-semibold uppercase tracking-wide">
            <span className="text-xl">*</span> 
            Education
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            My Education
          </h3>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed pr-0 lg:pr-10">
            A journey of continuous learning in computer science and problem-solving,
            built on a strong foundation in science and mathematics.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-3/5 space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h4 className="text-gray-900 font-medium text-xl sm:text-2xl mb-1">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 text-base sm:text-lg">{edu.institution}</p>
              </div>
              {edu.year && (
                <div className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0 lg:ml-auto lg:pl-4 whitespace-nowrap">
                  {edu.year}
                </div>
              )}
              {/* Separator line except last item */}
              {index < educationData.length - 1 && (
                <hr className="border-t border-gray-200 mt-6 sm:mt-4" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
