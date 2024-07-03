"use client";

import Lottie from "lottie-react";
import about from "../assets/about.json";

import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center "
    >
      <div className="md:w-1/2 p-10">
        <Lottie animationData={about} loop={true} />
      </div>
      <div className="md:w-1/2 p-10 md:mt-10">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-yellow-500">Me </span>
          </h2>
          <p className="text-gray-400">
            I am skilled in React JS, Node JS, Express, MongoDB, Firebase,
            Tailwind CSS, and more. My ability to collaborate effectively with
            cross-functional teams and troubleshoot complex issues can bring
            significant benefits to you. I am confident that my technical skills
            and dedication will contribute to delivering high-quality projects
            and enhancing user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
