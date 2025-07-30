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
  ];

  const [paused, setPaused] = useState(false);

  return (
    <section
      id="about"
      className="h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img
          src=""
          alt=""
          className="w-64 h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        className="flex-1 min-w-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 break-words">About Me</h2>
        <p className="text-gray-700 mb-6 break-words">
          I am a passionate software engineer with expertise in building modern
          web applications. My focus is on creating clean, scalable, and
          efficient solutions using cutting-edge technologies. I am a passionate
          software engineer with expertise in building modern web applications.
          My focus is on creating clean, scalable, and efficient solutions using
          cutting-edge technologies. I am a passionate software engineer with
          expertise in building modern web applications. My focus is on creating
          clean, scalable, and efficient solutions using cutting-edge
          technologies. I am a passionate software engineer with expertise in
          building modern web applications. My focus is on creating clean,
          scalable, and efficient solutions using cutting-edge technologies. I
          am a passionate software engineer with expertise in building modern
          web applications. My focus is on creating clean, scalable, and
          efficient solutions using cutting-edge technologies. I am a passionate
          software engineer with expertise in building modern web applications.
          My focus is on creating clean, scalable, and efficient solutions using
          cutting-edge technologies. I am a passionate software engineer with
          expertise in building modern web applications. My focus is on creating
          clean, scalable, and efficient solutions using cutting-edge
          technologies. I am a passionate software engineer with expertise in
          building modern web applications. My focus is on creating clean,
          scalable, and efficient solutions using cutting-edge technologies. I
          am a passionate software engineer with expertise in building modern
          web applications. My focus is on creating clean, scalable, and
          efficient solutions using cutting-edge technologies. I am a passionate
          software engineer with expertise in building modern web applications.
          My focus is on creating clean, scalable, and efficient solutions using
          cutting-edge technologies. I am a passionate software engineer with
          expertise in building modern web applications. My focus is on creating
          clean, scalable, and I am a passionate software engineer with
          expertise in building modern web applications. My focus is on creating
          clean, scalable, and efficient solutions using cutting-edge
          technologies. I am a passionate software engineer with expertise in
          building modern web applications. My focus is on creating clean,
          scalable, and efficient solutions using cutting-edge technologies.
          efficient solutions using cutting-edge technologies.
        </p>

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
