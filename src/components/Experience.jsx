import Technology from "./Technology";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 py-20 px-4 md:px-20">
      <h2 className="text-5xl text-center text-white font-bold mb-8">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 transform -translate-x-1/2"></div>

        <div className="space-y-32 relative z-10">
          {/* First Experience */}
          <div className="flex md:justify-start justify-center">
            <div className="bg-gray-700 text-white p-6 border-2 border-black rounded-lg shadow-lg w-full md:w-[45%]">
              <h3 className="text-xl font-bold">Backend Developer</h3>
              <p className="italic">Digital India Corporation</p>
              <p className="text-sm text-gray-400">Aug 2023 - Oct 2023</p>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                <li>
                  Developed a Django-based replica of the Digilocker
                  Signup-OTP-Aadhaar Verification flow Pages.
                </li>
                <li>
                  Containerized the application using Docker and pushed it to
                  OpenForge.
                </li>
                <li>
                  Fixed validation bugs, contributed to folder creation features
                  in Drive API.
                </li>
                <li>
                  Did API documentation using Swagger and tested endpoints using
                  Postman.
                </li>
                <li>
                  Worked remotely with a distributed team under Agile-based task
                  management.
                </li>
              </ul>
              <div>
                <Technology technologies="HTML, CSS, JavaScript, Python, Django, Git, Docker"></Technology>
              </div>
            </div>
          </div>

          {/* Second Experience */}
          <div className="flex md:justify-end justify-center relative">
            {/* Dot for second card */}
            <div className="absolute left-1/2 -top-20 w-5 h-5 bg-white border-4 border-gray-400 rounded-full transform -translate-x-1/2"></div>

            <div className="p-6 border-2 border-black bg-gray-700 text-white rounded-lg shadow-lg w-full md:w-[45%]">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <p className="italic">Graphix Media</p>
              <p className="text-sm text-gray-400">June 2022 - July 2022</p>
              <ul className="list-disc ml-5 mt-3 space-y-2">
                <li>
                  Developed responsive industrial website UI using HTML, CSS,
                  JavaScript.
                </li>
                <li>
                  Adhered to design specifications, ensuring consistent styling
                  and layout.
                </li>
              </ul>
              <div>
                <Technology technologies="HTML, CSS, JavaScript"></Technology>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
