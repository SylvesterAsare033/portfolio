import React from "react";

const projects = [
  {
    name: "Pseudocode to C",
    description:
      "A web app that translates pseudocode into C code, aiding in the transition from high-level logic to lower-level language.",
    tags: ["React", "Tailwind", "Flask", "SpaCy"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    name: "YouShare",
    description:
      "Full-stack project using Nuxt3, Express, and PostgreSQL for internship requirements.",
    tags: ["Nuxt", "Tailwind", "Express", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section
      className="min-h-screen bg-[#0F0F1E] text-white py-16 px-6"
      id="projects"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-purple-500">Projects</span>
      </h2>

      <div className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1A1A2E] p-6 rounded-lg shadow-lg transform transition duration-300 space-y-4"
          >
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>

            <div className="flex gap-4 pt-4 text-sm">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-500"
              >
                🔗 View Project
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-500"
              >
                💻 View GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
