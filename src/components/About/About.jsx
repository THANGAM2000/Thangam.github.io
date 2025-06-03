import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/IMG_3455.PNG";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-32 text-white font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-20">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-purple-500">Thangam M</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300">
            I am a{" "}
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "App Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block", color: "#a855f7" }}
            />
          </h3>

          <h4 className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I'm a passionate full-stack developer with a solid foundation in
            React, Python, and SQL. I enjoy building responsive user interfaces,
            writing clean backend logic, and working with databases to solve
            real-world problems. I'm eager to contribute to impactful projects
            and grow in a collaborative development environment.
          </h4>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1JYA1S4V7F9ScTT5cS504DOYbPG1rHXLg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-600/50"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center lg:justify-start mt-10 lg:mt-0">
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={1200}
            scale={1.1}
            transitionSpeed={800}
            gyroscope={true}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-700 via-purple-500 to-fuchsia-600 p-1 shadow-xl hover:shadow-purple-500/40 transition-all duration-500"
          >
            <div className="w-full h-full rounded-full bg-[#1a1a1a] overflow-hidden">
              <img
                src={profileImage}
                alt="Thangam M"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
