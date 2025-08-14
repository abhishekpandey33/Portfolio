const Technology = (props) => {
  const techArray = props.technologies.split(",").map((tech) => tech.trim());
  return (
    <div className=" flex flex-wrap pt-5">
      {techArray.map((tech, index) => (
        <button
          key={index}
          disabled
          className="mr-2 mb-2 px-3 py-1 rounded-full cursor-not-allowed bg-gray-900 text-gray-300"
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default Technology;
