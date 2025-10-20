"use client";

// Replaced external import with an inline SVG for stability
const GraduationCapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v4c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3v-4"/>
    <path d="M2 10c0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3"/>
    <path d="M12 10l-2-2m-2 2l-2-2"/>
    <path d="M12 10l2-2m2 2l2-2"/>
    <path d="M12 17v-7"/>
    <path d="M10 17h4"/>
  </svg>
);

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Daffodil International University",
      year: "2023 - Present",
      description: "Focusing on algorithms, data structures, and full-stack web development. Maintaining a strong academic record.",
    },

    {
      degree: "Web Development Bootcamp",
      institution: "Programming Hero Course",
      year: "July 2024 – December 2024",
      description: "Intensive 6-month training covering JavaScript, React, Node.js, and MongoDB, with a focus on real-world projects and problem-solving.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shahid Ramiz Uddin Cantonment College",
      year: "2020 - 2022",
      description: "Science major, building a strong foundational knowledge in Physics, Chemistry, and Mathematics.",
    },
  ];

  return (
    <section id="education" className="w-full my-16 px-4 py-16 bg-gray-50 text-gray-900 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg mb-2 text-purple-600 flex items-center justify-center gap-3 font-semibold uppercase tracking-widest">
            <GraduationCapIcon className="text-2xl" />
            Academic Background
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            My Educational Journey
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A foundation built on formal study in Computer Science, supplemented by intensive modern web development training.
          </p>
        </div>

        {/* Education Timeline (Right Section styled as a clean timeline) */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`mb-10 flex flex-col md:flex-row items-start md:items-stretch w-full ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Entry Card */}
              <div
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 w-full md:w-[45%] border border-gray-100 ${
                    index % 2 === 0 ? 'md:mr-[5%] md:text-right' : 'md:ml-[5%] md:text-left'
                }`}
              >
                {/* Year Badge (Floating Circle in the middle on desktop) */}
                <div className={`
                    absolute top-0 right-0 -mr-2 w-16 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold text-sm shadow-xl
                    md:relative md:top-auto md:right-auto md:w-auto md:h-auto md:bg-transparent md:text-purple-600 md:font-extrabold md:text-lg md:shadow-none mb-3
                    ${index % 2 === 0 ? 'md:float-right md:-mr-[5.5rem] md:text-left' : 'md:float-left md:-ml-[5.5rem] md:text-right'}
                    hidden md:block
                `}>
                    <div className='bg-purple-600 text-white w-20 h-8 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition duration-300'>
                        {edu.year}
                    </div>
                </div>

                <div className='block md:hidden text-sm font-semibold text-purple-600 mb-2'>{edu.year}</div>

                <h4 className="text-gray-900 font-extrabold text-xl sm:text-2xl mb-1">
                  {edu.degree}
                </h4>
                <p className="text-purple-700 font-medium text-base sm:text-lg mb-3">
                  {edu.institution}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                    {edu.description}
                </p>

              </div>
              
              {/* Timeline Dot (Visible on desktop) */}
              <div className="absolute left-6 md:left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 ring-4 ring-white shadow-md hidden md:block"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
