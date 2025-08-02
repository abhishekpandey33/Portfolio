import { useEffect, useRef } from "react";

export default function Projects() {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "DDAS - Duplicate Detection & Avoidance System",
      description:
        "Developed a system to detect and prevent duplicate data downloads in organizational networks, optimizing storage and bandwidth.",
    },
    {
      title: "ResumeAt - Resume Builder",
      description:
        "An AI-powered chatbot providing personalized career guidance, degree recommendations, and interview preparation assistance.",
    },
    {
      title: "Academix - AI Powered Academic System",
      description:
        "Built a responsive e-learning website with video lectures, quizzes, and student performance tracking features.",
    },
    {
      title: "Anti-Theft IoT System",
      description:
        "Implemented a smart home automation system using IoT devices, allowing remote control of appliances via a mobile app.",
    },
    {
      title: "Cloud Centralized Development System",
      description:
        "Centralized Development Environment using Client-Server Architecture(Cloud Computing)",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using React and Tailwind CSS to showcase projects and skills.",
    },
    {
      title: "Industrial Website UI",
      description:
        "Developed a responsive UI for an industrial website using HTML, CSS, and JavaScript, ensuring cross-device compatibility.",
    },
  ];

  // Duplicate array for seamless looping
  const repeatedProjects = [...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollSpeed = 3; // pixels per frame
    let animationFrameId;

    const smoothScroll = () => {
      container.scrollLeft += scrollSpeed;

      // Reset position when half scrolled
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center py-20 bg-gray-700"
    >
      <h2 className="text-5xl text-white font-bold">Projects</h2>

      <div
        ref={scrollRef}
        className="mt-16 flex flex-nowrap overflow-x-hidden space-x-6 px-4 w-[87%] py-10"
        style={{ scrollBehavior: "auto" }} // disable smooth snap fighting
      >
        {repeatedProjects.map((project, index) => (
          <div
            key={index}
            className="min-w-[420px] max-w-[420px] bg-gray-800 text-white rounded-lg shadow-lg px-6 py-20 hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
