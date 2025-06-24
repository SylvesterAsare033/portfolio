// src/components/Experience.jsx
import React from "react";

// Education Data
const education = [
  {
    year: "2020 - 2024",
    institution: "Technological University of the Philippines",
    degree: "Bachelor of Science in Computer Science",
    logo: "/logos/tup.png",
  },
  {
    year: "2018 - 2020",
    institution: "STI College",
    degree: "ICT in Mobile App and Web Development",
    logo: "/logos/sti.png",
  },
];

// Experience Data
const experience = [
  {
    period: "Mar 2024 - Jun 2024 (3 Months)",
    company: "Centralized Cloud Computing International, Inc.",
    role: "Full-Stack Developer Intern",
    logo: "/logos/cloud.png",
    tasks: [
      "Completed an extensive training program in full-stack web development.",
      "Actively contributed to the ongoing development of a web application.",
      "Mentored by senior developers on best practices and code optimization.",
    ],
  },
  {
    period: "Nov 2019 - Dec 2019 (1 Month)",
    company: "St. Peter Velle Technical Training Center",
    role: "Work Immersion - Web Developer",
    logo: "/logos/stpeter.png",
    tasks: [
      "Developed Python scripts to automate document score calculations.",
      "Developed a company website as part of an ICT-related work immersion program.",
    ],
  },
];

// Timeline Item Component
const TimelineItem = ({ year, logo, title, subtitle, tasks }) => (
  <div className="flex items-start space-x-4 mb-10">
    {/* Timeline Line */}
    <div className="flex flex-col items-center">
      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
      <div className="flex-1 w-px bg-gray-600 min-h-[80px]"></div>
    </div>

    {/* Content */}
    <div className="flex-1">
      <p className="text-sm text-gray-400 mb-2">{year}</p>
      <div className="flex items-center mb-2">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 mr-4 rounded-full object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>
      </div>
      {tasks && (
        <ul className="list-disc ml-6 text-sm text-gray-300 space-y-1">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// Main Experience Component
const Experience = () => {
  return (
    <section
      className="min-h-screen bg-[#0F0F1E] text-white py-16 px-6"
      id="experience"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-purple-500">Journey</span>
      </h2>

      <div className="grid grid-cols md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            🎓 Education
          </h3>
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              logo={item.logo}
              title={item.institution}
              subtitle={item.degree}
            />
          ))}
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            💼 Experience
          </h3>
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.period}
              logo={item.logo}
              title={item.company}
              subtitle={item.role}
              tasks={item.tasks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
