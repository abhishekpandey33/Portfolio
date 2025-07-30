const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-x-hidden "
    >
      <h1 className="text-5xl md:text-7xl lg:8xl font-bold max-w-full">
        FullStack Developer
      </h1>
      <p className="text-lg md:text-2xl mt-4 ">
        Crafting Web Solutions with cutting-edge technologies
      </p>
      <div className="mt-10 ">
        <a
          href="#contact"
          className="mx-4 px-6 py-3 bg-black text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          <buttton>Get in Touch</buttton>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 px-8 py-3 bg-black text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          <buttton>Resume</buttton>
        </a>
      </div>
    </section>
  );
};

export default Hero;
