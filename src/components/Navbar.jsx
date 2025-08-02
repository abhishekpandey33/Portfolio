import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black text-white p-5 z-50">
      <div className="flex justify-between items-center">
        <a href="#hero" className="md:ml-20">
          Home
        </a>
        <div className="hidden md:flex space-x-6 mr-20">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
        <button
          id="menu-btn"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 right-5 md:hidden bg-black text-white flex flex-col space-y-3 px-8 py-5 rounded-lg shadow-lg z-40">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
