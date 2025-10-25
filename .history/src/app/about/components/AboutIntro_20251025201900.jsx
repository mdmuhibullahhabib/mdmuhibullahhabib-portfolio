"use client";

export default function AboutIntro() {
  return (
    <section className="bg-white text-black py-10 flex flex-col justify-center items-center px-4 sm:px-10 md:px-16 lg:px-24">
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full gap-10">
        {/* Text Section */}
        <div className="w-full space-y-4 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold py-4 leading-tight">
            I&apos;m a software engineer passionate about creating{" "}
            <span className="text-purple-600">interactive, impactful</span>{" "}
            digital experiences
          </h1>

          <div className="text-left sm:text-left">
            <p className="sm:text-lg text-base text-gray-800 mb-10 leading-relaxed max-w-3xl">
              I&apos;m{" "}
              <span className="text-purple-600 font-semibold">
                Md. Muhib Ullah Habib
              </span>
              , a creative problem-solver dedicated to building scalable,
              user-friendly, and visually engaging applications. I strive to
              blend thoughtful design with robust functionality, ensuring
              seamless experiences across web platforms.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1x52SA_2aHWYbSbGxLysPHori5E0lniVO"
              download="Sabbir Bin Abdul Latif's Resume"
            >
              <button className="border border-black px-6 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white transition duration-300 ease-in-out text-sm sm:text-base">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
