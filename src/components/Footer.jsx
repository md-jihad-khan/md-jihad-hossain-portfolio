import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 pt-10 pb-5">
      <div className="flex gap-4 items-center justify-center">
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
      <div className="mt-4 text-center text-yellow-400">
        <span className="text-gray-400 mr-2">Contact me by: </span>
        mdjihadkhan9867@gmail.com
      </div>
      <h5 className="text-center mt-2 text-gray-300">
        Md Jihad Hossain © 2024{" "}
      </h5>
    </div>
  );
};

export default Footer;
