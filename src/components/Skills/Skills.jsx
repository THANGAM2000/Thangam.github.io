// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../Constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 md:px-12 lg:px-32 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        My Skillset
      </h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-300 mt-5 text-lg sm:text-xl max-w-2xl mx-auto">
        Tools, languages, and technologies I’ve mastered through building real-world projects.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.02}
          transitionSpeed={800}
          gyroscope={true}
          className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_0_25px_2px_rgba(130,69,236,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_4px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl font-semibold text-gray-200 text-center mb-6">
            {category.title}
          </h3>

          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center bg-gray-800/60 border border-gray-700 rounded-xl py-4 px-2 hover:bg-gray-700/70 transition-all"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <span className="text-sm sm:text-base text-gray-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
