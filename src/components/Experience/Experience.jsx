import React from "react";
import { experiences } from "../../Constants";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">EXPERIENCE</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-5 text-lg font-medium max-w-xl mx-auto">
          A timeline of my professional journey and the impactful roles I've taken.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-0"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative mb-20 flex flex-col ${
                isLeft ? "items-start sm:flex-row" : "items-end sm:flex-row-reverse"
              } sm:items-center group`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2  bg-transparent border-4 border-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-white text-lg " />
              </div>

              {/* Card Content */}
              <div
                className={`bg-white/10 border border-white/20 backdrop-blur-xl text-white w-full sm:max-w-md p-6 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 ${
                  isLeft ? "sm:ml-16" : "sm:mr-16"
                }`}
              >
                {/* Header: Logo + Title */}
                <div className="flex items-center gap-4">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-16 h-16 rounded-md object-cover bg-white"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-xs text-purple-300 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mt-4">{exp.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-[#8245ec]/80 border border-gray-400 text-white px-3 py-1 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
