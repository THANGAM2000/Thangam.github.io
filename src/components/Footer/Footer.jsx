import React from "react";
import {
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-[10vw]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-purple-500">Thangam M</h2>
          <p className="text-sm text-gray-400 mt-1">
            Crafting clean code & impactful UI.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Certifications", id: "certifications" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative group text-purple-400 hover:text-purple-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
        </nav>



        {/* Social Icons */}
        <div className="flex justify-center space-x-5 text-lg">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/thangam-m-aa0532198/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Thangam M. Built with ❤️ using React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
