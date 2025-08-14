import { useEffect, useRef, useState } from "react";
import Technology from "./Technology";

export default function Projects() {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const projects = [
    {
      title: "DDAS - Duplicate Detection & Avoidance System",
      description:
        "Developed a system-level utility software to detect and prevent duplicate data downloads in organizational networks, optimizing storage and bandwidth.",
      technologies:
        "Python, System-Programming, Command-Line Utility Development",
    },
    {
      title: "ResumeAt - Resume Builder",
      description:
        "A clean, interactive Resume builder , which allows users to create, edit and preview resumes in real-time, providing resume templates and pdf download.",
      technologies: "React js, Tailwind CSS, Express js, MongoDB",
    },
    {
      title: "Academix - AI Powered Academic System",
      description:
        "An AI-powered app that break the courses into structures modules and helps learners complete course in a proficient and sequential way.",
      technologies: "React js, Tailwind CSS, Django, DRF, SQLite",
    },
    {
      title: "Anti-Theft IoT System",
      description:
        "Built a motion-based security system using ESP32 and PIR sensor and integrated Pusbullet API for instant smartphone alerts improving Home Security through real-time intrusion detection and efficient IoT automation",
      technologies: "ESP32, PIR Sensor, Internet of Things",
    },
    {
      title: "Cloud Centralized Development System",
      description:
        "Designed a client-server setup using SSH to centralize development and deployment and enabled team members to contribute without local installations, saving RAM/CPU, improving collaboration, version control, and resource efficiency across the team",
      technologies: "Cloud Computing, SSH Communication",
    },
  ];

  const repeatedProjects = [...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 2;
    let animationFrameId;

    const smoothScroll = () => {
      if (!paused) {
        container.scrollLeft += scrollSpeed;

        // Reset position when half scrolled
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [paused]);

  const scrollByCard = (direction) => {
    if (scrollRef.current) {
      setPaused(true);
      scrollRef.current.scrollBy({
        left: direction * 420, // Card width
        behavior: "smooth",
      });
      setTimeout(() => setPaused(false), 500);
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center py-20 bg-gray-700"
    >
      <h2 className="text-5xl text-white font-bold">Projects</h2>

      <div className="relative w-[87%] ">
        {/* Left Arrow */}
        <button
          className="absolute left-[-33px] top-1/2 -translate-y-1/2 text-white px-2 py-1 bg-gray-600 rounded-full z-10 hover:bg-gray-500"
          onClick={() => scrollByCard(-1)}
        >
          &larr;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-[-33px] top-1/2 -translate-y-1/2 text-white px-2 py-1 bg-gray-600 rounded-full z-10 hover:bg-gray-500"
          onClick={() => scrollByCard(1)}
        >
          &rarr;
        </button>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          ref={scrollRef}
          className="mt-16 flex flex-nowrap overflow-x-hidden space-x-6 px-4 py-10"
          style={{ scrollBehavior: "auto" }}
        >
          {repeatedProjects.map((project, index) => (
            <div
              key={index}
              className="min-w-[420px] max-w-[420px] bg-gray-800 text-white rounded-lg shadow-lg px-6 pt-20 pb-10 hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div>
                <Technology technologies={project.technologies}></Technology>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
