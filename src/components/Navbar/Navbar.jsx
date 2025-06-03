import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-[7vw] lg:px-[10vw] ${
        isScrolled
          ? "bg-[#0c0c1b]/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &lt;Thangam / Muthuraj&gt;
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`relative cursor-pointer px-1 transition-all hover:text-purple-400 ${
                activeSection === item.id ? "text-purple-400" : "text-gray-300"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-purple-500 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/THANGAM2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/thangam-m-aa0532198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-[#0d0c20] z-40 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold text-purple-400">
            &lt;Thangam/&gt;
          </div>
          <FiX
            className="text-3xl text-purple-500 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col space-y-6 text-base text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`cursor-pointer hover:text-white transition-colors ${
                activeSection === item.id ? "text-purple-400" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="flex space-x-5 mt-10 pt-4 border-t border-gray-700">
          <a
            href="https://github.com/THANGAM2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/thangam-m-aa0532198/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
