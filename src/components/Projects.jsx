import { useEffect, useRef } from "react";

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "DDAS - Duplicate Detection & Avoidance System",
      description:
        "Developed a system to detect and prevent duplicate data downloads in organizational networks, optimizing storage and bandwidth.",
    },
    {
      title: "Career Guidance Chatbot",
      description:
        "An AI-powered chatbot providing personalized career guidance, degree recommendations, and interview preparation assistance.",
    },
    {
      title: "E-Learning Platform",
      description:
        "Built a responsive e-learning website with video lectures, quizzes, and student performance tracking features.",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Implemented a smart home automation system using IoT devices, allowing remote control of appliances via a mobile app.",
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

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const cardWidth = 320; // ~min-w-[300px] + gap

    const autoScroll = setInterval(() => {
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
        scrollAmount = 0; // reset to start
      } else {
        scrollAmount += cardWidth;
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 3000); // every 3 sec

    return () => clearInterval(autoScroll);
  }, []);

  return (
    // <section
    //   id="projects"
    //   className="min-h-screen flex flex-col items-center py-20 bg-yellow-100"
    // >
    //   <h2 className=" text-5xl font-bold">Projects</h2>
    //   <div id="cards" className=" py-40 flex items-center ">
    //     <div className="w-100 h-100 border-2 p-20">

    //     </div>
    //     <div className="w-100 h-100 border-2">Card 2</div>
    //     <div className="w-100 h-100 border-2">Card 3</div>
    //     <div className="w-100 h-100 border-2">Card 4</div>
    //     <div className="w-100 h-100 border-2">Card 5</div>
    //     <div className="w-100 h-100 border-2">Card 6</div>
    //   </div>
    // </section>
    // <section
    //   id="projects"
    //   className="min-h-screen flex flex-col items-center py-20 bg-yellow-100"
    // >
    //   <h2 className="text-5xl font-bold">Projects</h2>

    //   {/* Scrollable container */}
    //   <div
    //     id="cards"
    //     className="mt-16 flex overflow-x-auto space-x-6 px-6 snap-x snap-mandatory scrollbar-hide"
    //   >
    //     {/* Project Card 1 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 1</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>

    //     {/* Project Card 2 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 2</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>

    //     {/* Project Card 3 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 3</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>

    //     {/* Project Card 4 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 4</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>

    //     {/* Project Card 5 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 5</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>

    //     {/* Project Card 6 */}
    //     <div className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300">
    //       <h3 className="text-2xl font-semibold mb-3">Project 6</h3>
    //       <p className="text-gray-600">
    //         A short 3-4 line description about your amazing project. Explain
    //         what it does, how it works, and the tech used.
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 bg-yellow-100"
    >
      <h2 className="text-5xl font-bold">Projects</h2>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="mt-16 flex overflow-x-auto space-x-6 px-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 snap-center hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
