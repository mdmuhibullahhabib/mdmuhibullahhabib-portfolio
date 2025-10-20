"use client";

export default function AboutIntro() {
  return (
    <section className="py-10 flex flex-col justify-center items-center px-4 sm:px-10 md:px-16 lg:px-24">
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        {/* Text Section */}
        <div className="w-full space-y-4 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold py-4 leading-tight text-balance">
            I&apos;m a software engineer passionate about creating{" "}
            <span className="text-[#7C3AED]">interactive, impactful</span>{" "}
            digital experiences
          </h1>

          <div className="text-left sm:text-right">
            <p className="sm:text-xl text-base text-gray-900 mb-10 max-sm:text-start sm:ml-20 md:ml-40 leading-relaxed">
              I&apos;m{" "}
              <span className="text-[#7C3AED] font-semibold">
                Md. Muhib Ullah Habib
              </span>
              , a creative problem-solver dedicated to building scalable,
              user-friendly, and visually engaging applications. I strive to
              blend thoughtful design with robust functionality, ensuring
              seamless experiences across web platforms.
            </p>

            <a
              href="/Documents/Resume_Sabbir Bin Abdul Latif.pdf"
              download="Sabbir Bin Abdul Latif's Resume"
            >
              <button className="border border-black dark:border-white px-6 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 ease-in-out text-sm sm:text-base">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
