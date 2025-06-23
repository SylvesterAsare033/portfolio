import React from "react";

const skills = [
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
];

const Skills = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-[#0F0F1E] text-white py-16 px-6"
      id="skills"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Professional <span className="text-purple-500">Skillset</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 bg-transparent border border-purple-500 rounded-lg hover:scale-105 transform transition duration-300 shadow-md hover:shadow-purple-500/50"
          >
            <i className={`${skill.icon} text-6xl`}></i>
            <p className="mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

