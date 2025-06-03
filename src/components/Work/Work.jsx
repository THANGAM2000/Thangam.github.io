import React, { useState } from "react";
import { projects } from "../../Constants";
import { FiX } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[18vw] font-sans relative bg-skills-gradient clip-path-custom-4"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-5 text-lg font-medium max-w-2xl mx-auto">
          A curated collection of my work—demonstrating skills in development,
          design, and problem-solving using modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-gray-900 rounded-2xl shadow-xl border border-white/10 hover:border-purple-600 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/30 group overflow-hidden"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-3 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-900/40 text-purple-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative bg-[#121212] rounded-2xl max-w-4xl w-full overflow-hidden border border-purple-500/30 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-400"
            >
              <FiX />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 w-full p-4 lg:p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <div className="lg:w-1/2 w-full p-6 lg:p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-800/50 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-700 text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white transition-colors px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
