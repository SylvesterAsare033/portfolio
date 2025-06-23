import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/300x200", // Replace with your project image URL
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Task Manager App",
    description: "A full-stack app to manage tasks with user authentication.",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskmanagerapp.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app that shows real-time weather data from an API.",
    image: "https://via.placeholder.com/300x200",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weatherdashboard.com",
  },
];

const Projects = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-white py-16 px-4"
      id="projects"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-600">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-all duration-300 border border-gray-100 hover:shadow-2xl flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-top bg-gray-200"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
