import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    period: "Jan 2024 - Present",
    description:
      "Developed responsive user interfaces with React and Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    company: "Startup Hub",
    period: "Jun 2023 - Dec 2023",
    description:
      "Built REST APIs with Node.js and Express, integrated with MySQL databases.",
  },
  {
    title: "Intern Developer",
    company: "Learning Center",
    period: "Jan 2023 - May 2023",
    description:
      "Worked on small web apps and improved my problem-solving skills.",
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
          My Experience
        </h2>
        <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform"></div>
              <h3 className="text-2xl font-semibold group-hover:text-blue-700 transition-colors">
                {exp.title}
              </h3>
              <p className="text-blue-600 font-medium">
                {exp.company} | {exp.period}
              </p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
