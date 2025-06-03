import React from "react";
import { education } from "../../Constants";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-10 lg:px-[12vw] font-sans  text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide">EDUCATION</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3 rounded" />
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          A brief journey through my academic path and learning milestones.
        </p>
      </div>

      <div className="relative border-l border-purple-600 pl-6 ml-2">
        {education.map((edu, index) => (
          <div key={edu.id} className="mb-12 relative group">
            {/* Dot Icon */}
            <div className="absolute -left-[1.15rem] top-2 bg-[#0f0f15] z-10">
              <div className="w-8 h-8 flex items-center justify-center border-4 border-purple-600 rounded-full bg-[#1a1a1f] shadow-lg">
                <FaGraduationCap className="text-white text-sm" />
              </div>
            </div>

            {/* Card Content */}
            <div className="bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl p-6 sm:p-7 backdrop-blur-md shadow-lg">
              <div className="flex items-start gap-5">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-16 h-16 rounded-md object-cover border border-white/10"
                />
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-300 text-sm">{edu.school}</p>
                  <p className="text-purple-400 text-xs mt-1">{edu.date}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-purple-300 font-medium">Grade: {edu.grade}</p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
