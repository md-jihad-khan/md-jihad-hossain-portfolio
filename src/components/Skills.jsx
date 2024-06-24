"use client";

import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiDaisyui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import Lottie from "lottie-react";
import skill from "../assets/skill.json";

const Skills = () => {
  const technologies = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: RiJavascriptFill },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Firebase", icon: IoLogoFirebase },
    { name: "React JS", icon: FaReact },
    { name: "Node JS", icon: FaNodeJs },
    { name: "Express JS", icon: SiExpress },
    { name: "Mongo DB", icon: DiMongodb },
    { name: "GitHub", icon: FaGithub },
    { name: "DaisyUI", icon: SiDaisyui },
  ];
  return (
    <div className="container mx-auto mt-24">
      <h3 className="text-5xl text-center font-bold  bg-gradient-to-r from-yellow-500  to-orange-500 bg-clip-text text-transparent ">
        My Skill{"'"}s
      </h3>
      {/* project 1 */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center ">
        <div className="grid grid-cols-4 text-center p-5 md:w-1/2 gap-5">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className="flex flex-col items-center group hover:scale-110 transition ease-in-out duration-300 hover:text-white rounded-lg"
            >
              <button
                target="blank"
                href={"https://www.linkedin.com/in/md-jihadhossain"}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full "
              >
                <span className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
                <span className="relative  transition-all ease-out rounded-full p-2 bg-gray-900 group-hover:bg-opacity-0  duration-400">
                  <tech.icon className="text-4xl relative text-yellow-500 group-hover:text-white" />
                </span>
              </button>

              {tech.name}
            </p>
          ))}
        </div>

        <div className="md:w-1/2">
          <Lottie
            className="lg:w-3/4 w-full mx-auto"
            animationData={skill}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
