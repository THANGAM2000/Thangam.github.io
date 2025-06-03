import React, { useState, useEffect, useRef } from "react";
import { certifications } from "../../Constants";
import { FiX } from "react-icons/fi";
import { GrOverview } from "react-icons/gr";

const Certifications = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const modalRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedProject(null);
      setSelectedCert(null);
    }
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedProject(null);
      setSelectedCert(null);
    }
  };

  useEffect(() => {
    if (selectedProject || selectedCert) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject, selectedCert]);

  return (
    <section
    id="certifications"
    className="py-24 px-[6vw] font-sans  text-white"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold">CERTIFICATIONS</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
          A curated showcase of certifications that reflect my skills and learning journey.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-[#1e1e2f] rounded-xl shadow-md border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02] cursor-pointer overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2 text-sm line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div
            ref={modalRef}
            className="relative bg-[#1c1c24] max-w-5xl w-full rounded-xl overflow-hidden border border-purple-700 shadow-xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-purple-400 text-2xl hover:text-purple-400"
            >
              <FiX />
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain rounded-l-xl"
                />
              </div>
              <div className="p-6 w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedCert(selectedProject)}
                  className="bg-purple-600 text-purple-400 hover:bg-purple-700 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                >
                  <GrOverview />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div
            ref={modalRef}
            className="relative bg-[#1c1c24] max-w-3xl w-full rounded-xl overflow-hidden border border-purple-700 shadow-xl"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-purple-400 text-2xl hover:text-purple-400"
            >
              <FiX />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">
                {selectedCert.title} - Certificate
              </h3>
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                className="w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
