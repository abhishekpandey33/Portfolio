import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "JavaScript", color: "bg-yellow" },
    { name: "React", color: "bg-blue" },
    { name: "Node.js", color: "bg-green" },
    { name: "TailwindCSS", color: "bg-teal" },
    { name: "Python", color: "bg-purple" },
    { name: "MongoDB", color: "bg-green" },
    { name: "Django", color: "bg-yellow" },
    { name: "MYSQL", color: "bg-blue" },
    { name: "REST APIs", color: "bg-green" },
    { name: "GITHUB", color: "bg-teal" },
    { name: "HTML", color: "bg-purple" },
    { name: "CSS", color: "bg-green" },
  ];

  const [paused, setPaused] = useState(false);

  return (
    <section
      id="about"
      className="h-auto min-h-screen bg-black text-white py-20 px-4 md:px-20 flex flex-col md:flex-row items-center gap-10 overflow-x-hidden"
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src="/my_img.jpg"
          alt="AP"
          className="w-80 h-100 object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        className="flex-1 w-full min-w-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 mb-6">
            I am a Full Stack Developer with a strong foundation in frontend and
            backend development.
          </p>
          <p className="text-gray-400 mb-6">
            I was a Finalist at Smart India Hackathon 2024, where we developed
            the
            <strong> Duplicate Detection and Avoidance System (DDAS)</strong> —
            a cross-platform utility that detects duplicate downloads at the
            system level using metadata analysis. This project involved system
            programming, file monitoring, and multi-OS compatibility.
          </p>
          <p className="text-gray-400 mb-6">
            I enjoy working across the stack — from creating clean and
            responsive user interfaces to building robust APIs and backend
            systems. I’ve worked with technologies like{" "}
            <strong>
              Python, Django, React, JavaScript, Express, Node, Flask, MongoDB,
              MySQL, Docker
            </strong>{" "}
            and have a good grasp of{" "}
            <strong>REST APIs, Git, and Agile workflows</strong>.
          </p>
        </div>

        <div
          className="overflow-hidden whitespace-nowrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className={`inline-block ${paused ? "" : "animate-slide"}`}
            style={{
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {skills.concat(skills).map((skill, index) => (
              <span
                key={index}
                className={`${skill.color} text-white px-3 py-1 rounded-full mx-2 inline-block`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
