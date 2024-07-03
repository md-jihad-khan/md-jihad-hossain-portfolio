"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed md:backdrop-blur-sm md:bg-white/5 flex md:items-center justify-between md:justify-center   md:h-16">
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl md:hidden relative hover:text-yellow-500 top-1 p-2 z-10"
      >
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </button>

      <ul
        className={`flex items-center md:justify-center absolute md:translate-x-0 backdrop-blur-sm p-10 bg-white/5 w-full flex-col md:flex-row gap-5 md:gap-10 ease-in-out duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <li className="cursor-pointer">
          <Link
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 rounded-none border-yellow-500 cursor-pointer"
                : "font-normal text-yellow-400 cursor-pointer"
            }
            activeClass="isActive"
            to={"home"}
            spy={true}
            offset={-120}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 rounded-none border-yellow-500  cursor-pointer"
                : "font-normal text-yellow-500 cursor-pointer"
            }
            activeClass="isActive"
            to={"skills"}
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 rounded-none border-yellow-500  cursor-pointer"
                : "font-normal text-yellow-500 cursor-pointer"
            }
            activeClass="isActive"
            to={"projects"}
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 rounded-none border-yellow-500  cursor-pointer"
                : "font-normal text-yellow-500 cursor-pointer"
            }
            activeClass="isActive"
            to={"about"}
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 rounded-none border-yellow-500  cursor-pointer"
                : "font-normal text-yellow-500 cursor-pointer"
            }
            activeClass="isActive"
            to={"contact"}
            spy={true}
            offset={-80}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
