"use client";

import Lottie from "lottie-react";
import gradient from "../assets/Animation - 1718190454660.json";
import photo from "../assets/my-photo.png";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    const onMessage = (event) => {
      console.log("Message received:", event);
    };
  });

  return (
    <>
      <div className="flex text-center mt-20 md:text-left md:flex-row flex-col-reverse  container mx-auto items-center justify-center">
        {/* info */}
        <div className="md:w-1/2 ">
          <p className="text-xl">Hi, I am</p>
          <h1 className="text-2xl lg:text-4xl font-bold uppercase bg-gradient-to-r from-[#f4c210] to-[#ff9766] bg-clip-text text-transparent">
            Md Jihad Hossain
          </h1>

          <h2 className="text-xl mt-2 lg:text-3xl w-full font-semibold uppercase text-yellow-500 ">
            <span>{"</>"}</span>{" "}
            <Typewriter
              cursor
              loop={Infinity}
              words={["Front-end developer", "mern-stack developer"]}
            />
          </h2>

          <p className="font-light p-4 md:p-0 mt-4 text-gray-400 text-xs">
            I have developed a strong foundation in web development
            technologies, including React JS, JavaScript, HTML, CSS, and
            Tailwind CSS. Additionally, I have extensive experience with
            back-end technologies such as Node JS, Express JS, and MongoDB. My
            proficiency in Firebase Authentication, TanStack Query, Axios, and
            tools like Git and GitHub has further honed my skills. These
            experiences have enhanced my ability to architect and implement
            responsive, user-friendly interfaces and engineer seamless user
            experiences. I am skilled in troubleshooting, diagnosing issues, and
            collaborating with cross-functional teams to deliver high-quality
            web solutions.
          </p>

          <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8 lg:justify-start">
            <Link
              href={"/resume.pdf"}
              download
              target="blank"
              className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
              <span className="relative px-2 lg:px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative flex items-center gap-5 uppercase text-xs lg:text-sm text-white">
                  {" "}
                  download resume
                  <FiDownload className="text-2xl group-hover:text-white text-yellow-500" />
                </span>
              </span>
            </Link>

            <div className="flex gap-3">
              <Link
                href={"https://www.facebook.com/mdjihad.khan.39"}
                target="blank"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full "
              >
                <span className="w-full h-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
                <span className="relative  transition-all ease-out rounded-full p-2 bg-gray-900 group-hover:bg-opacity-0  duration-400">
                  <FaFacebook className="text-2xl relative text-yellow-500 group-hover:text-white" />
                </span>
              </Link>
              <Link
                target="blank"
                href={"https://github.com/md-jihad-khan"}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full "
              >
                <span className="w-full h-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
                <span className="relative  transition-all ease-out rounded-full p-2 bg-gray-900 group-hover:bg-opacity-0  duration-400">
                  <FaGithub className="text-2xl relative text-yellow-500 group-hover:text-white" />
                </span>
              </Link>
              <Link
                target="blank"
                href={"https://x.com/MdJihad24491979"}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full "
              >
                <span className="w-full h-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
                <span className="relative  transition-all ease-out rounded-full p-2 bg-gray-900 group-hover:bg-opacity-0  duration-400">
                  <FaTwitter className="text-2xl relative text-yellow-500 group-hover:text-white" />
                </span>
              </Link>
              <Link
                target="blank"
                href={"https://www.linkedin.com/in/md-jihadhossain"}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-full "
              >
                <span className="w-full h-full bg-gradient-to-br from-yellow-500  to-yellow-700 group-hover:from-yellow-500 group-hover:via-yellow-500 group-hover:to-yellow-700 absolute"></span>
                <span className="relative  transition-all ease-out rounded-full p-2 bg-gray-900 group-hover:bg-opacity-0  duration-400">
                  <FaLinkedinIn className="text-2xl relative text-yellow-500 group-hover:text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="relative md:w-1/2  flex items-center justify-center">
          <div className="absolute w-2/3 mx-auto inset-0 border-b-4 lg:border-b-8 border-transparent rounded-lg gradient-border"></div>

          <Image
            className="w-2/3 mt-10 rounded-md  "
            src={photo}
            alt="Md Jihad Hossain"
          />
          <Lottie
            className="-z-10 absolute "
            animationData={gradient}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
