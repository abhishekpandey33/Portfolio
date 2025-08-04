import { useState, useEffect } from "react";

const Hero = () => {
  const text = "Crafting Web Solutions with cutting-edge technologies";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-500 to-gray-700 text-white overflow-x-hidden "
    >
      <h1 className="text-5xl md:text-7xl lg:8xl font-bold max-w-full">
        FullStack Developer
      </h1>
      <p className="text-lg md:text-2xl mt-4 ">{displayedText}</p>
      <div className="mt-10 ">
        <a
          href="#contact"
          className="mx-4 px-6 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          <buttton>Get in Touch</buttton>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 px-8 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-gray-800 transition"
        >
          <buttton>Resume</buttton>
        </a>
      </div>
    </section>
  );
};

export default Hero;
