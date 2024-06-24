import Image from "next/image";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="mt-20 container mx-auto">
      <h3 className="text-5xl text-center font-bold bg-gradient-to-r from-yellow-500 h-14  to-orange-500 bg-clip-text text-transparent ">
        Project{"'"}s
      </h3>

      {/* project 1 */}
      <div className="flex flex-col mt-10 md:flex-row items-center gap-5 ">
        <div className="md:w-1/2 flex relative items-center justify-between group">
          <div className="p-5 relative">
            <Image
              className="lg:w-2/3 w-full z-10 duration-300 group-hover:scale-105 ease-in-out"
              src={project1}
              alt="Project 1"
            />
            {/* Hidden Card */}
            <div className="md:absolute w-full -z-10 group-hover:z-0 lg:w-2/3 mx-auto md:top-44 md:left-0  group-hover:-top-5 duration-500 ease-in-out">
              <div className="transform md:scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out">
                <div className="text-yellow-500  text-lg font-semibold flex items-left gap-5 justify-center h-full">
                  <Link
                    href={"https://solounitx.web.app"}
                    target="_blank"
                    className="hover:text-white hover:underline"
                  >
                    Live Link
                  </Link>
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <Link
                      href={"https://github.com/md-jihad-khan/SoloUnitX-client"}
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Client
                    </Link>
                    <Link
                      href={"https://github.com/md-jihad-khan/SoloUnitX-server"}
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Server
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] hidden md:flex  right-0 border-2 absolute gradient-border -z-10"></div>
          <span className="p-2 border-4 bg-black border-orange-500 z-10 hidden md:flex  rounded-full"></span>
        </div>
        {/* info */}
        <div className="md:w-1/2 p-4">
          <h3 className="bg-gradient-to-r from-yellow-500  to-orange-700 bg-clip-text text-transparent flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <span>Solo UnitX </span>
            <span className="text-xs md:text-xl text-white font-normal">
              {"(Building management system)"}
            </span>
          </h3>
          <div>
            <div className="space-y-2 text-sm text-gray-400">
              <h4 className="text-lg font-semibold text-white">
                Key Features:
              </h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <p>
                    Users can easily find and apply for available apartments
                    with real-time updates.
                  </p>
                </li>
                <li>
                  <p>
                    User and Member Dashboards: Personalized interfaces for
                    announcements, profile management, secure Stripe payments,
                    and searchable payment history.
                  </p>
                </li>
                <li>
                  <p>
                    Admin Control Panel: Manage users, post announcements,
                    handle room requests, and oversee coupon codes and website
                    stats efficiently.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* project 2 */}
      <div className="flex mt-10 flex-col-reverse md:flex-row items-center gap-5 ">
        <div className="md:w-1/2 p-4">
          <h3 className="bg-gradient-to-r from-yellow-500  to-orange-700 bg-clip-text text-transparent flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <span>Volunize Hub</span>
            <span className="text-xs md:text-xl text-white font-normal">
              {"(Volunteer Management)"}
            </span>
          </h3>
          <div>
            <div className="space-y-2 text-sm text-gray-400">
              <h4 className="text-lg font-semibold text-white">
                Key Features:
              </h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <p>
                    Organizations and individuals can effortlessly create posts
                    seeking volunteers for various events or causes.
                  </p>
                </li>
                <li>
                  <p>
                    Volunteers can explore a diverse range of posted
                    opportunities, allowing them to find and select events or
                    causes that resonate with their interests and availability.
                  </p>
                </li>
                <li>
                  <p>
                    Users have the flexibility to update or remove their posts,
                    ensuring that the information remains current and relevant.
                    volunteers can easily retract their volunteer requests if
                    their availability change over time.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex relative items-center justify-between group">
          <div className="w-[70%] hidden md:flex  left-0 border-2 absolute gradient-border -z-10"></div>
          <span className="p-2 border-4 bg-black border-orange-500 z-10 hidden md:flex  rounded-full"></span>

          <div className="p-5 relative lg:w-2/3 w-full">
            <Image
              className=" w-full z-10 duration-300 group-hover:scale-105 ease-in-out"
              src={project2}
              alt="Project 1"
            />
            {/* Hidden Card */}
            <div className="md:absolute w-full -z-10 group-hover:z-0  mx-auto md:top-44 md:left-0  group-hover:-top-5 duration-500 ease-in-out">
              <div className="transform md:scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out">
                <div className="text-yellow-500  text-lg font-semibold flex items-left gap-5 justify-center h-full">
                  <Link
                    href={"https://volunizehub.web.app"}
                    target="_blank"
                    className="hover:text-white hover:underline"
                  >
                    Live Link
                  </Link>
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <Link
                      href={
                        "https://github.com/md-jihad-khan/volunizehub-client"
                      }
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Client
                    </Link>
                    <Link
                      href={
                        "https://github.com/md-jihad-khan/volunizehub-server"
                      }
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Server
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* project 3 */}
      <div className="flex flex-col mt-10 md:flex-row items-center gap-5 ">
        <div className="md:w-1/2 flex relative items-center justify-between group">
          <div className="p-5 relative">
            <Image
              className="lg:w-2/3 w-full z-10 duration-300 group-hover:scale-105 ease-in-out"
              src={project3}
              alt="Project 1"
            />
            {/* Hidden Card */}
            <div className="md:absolute w-full -z-10 group-hover:z-0 lg:w-2/3 mx-auto md:top-44 md:left-0  group-hover:-top-5 duration-500 ease-in-out">
              <div className="transform md:scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out">
                <div className="text-yellow-500  text-lg font-semibold flex items-left gap-5 justify-center h-full">
                  <Link
                    href={"https://crafty-gallery.web.app"}
                    target="_blank"
                    className="hover:text-white hover:underline"
                  >
                    Live Link
                  </Link>
                  <div className="flex items-center gap-2">
                    <FaGithub />
                    <Link
                      href={
                        "https://github.com/md-jihad-khan/crafty-gallery-client"
                      }
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Client
                    </Link>
                    <Link
                      href={
                        "https://github.com/md-jihad-khan/crafty-gallery-server"
                      }
                      target="_blank"
                      className="hover:text-white hover:underline"
                    >
                      Server
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[70%] hidden md:flex  right-0 border-2 absolute gradient-border -z-10"></div>
          <span className="p-2 border-4 bg-black border-orange-500 z-10 hidden md:flex  rounded-full"></span>
        </div>
        {/* info */}
        <div className="md:w-1/2 p-4">
          <h3 className="bg-gradient-to-r from-yellow-500  to-orange-700 bg-clip-text text-transparent flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <span>CRAFTY GALLERY </span>
            <span className="text-xs md:text-xl text-white font-normal">
              {"(Pottery Store)"}
            </span>
          </h3>
          <div>
            <div className="space-y-2 text-sm text-gray-400">
              <h4 className="text-lg font-semibold text-white">
                Key Features:
              </h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <p>
                    Users are invited to contribute to our curated collection by
                    adding their one-of-a-kind craft pieces, enriching our
                    diverse inventory with their unique creations.
                  </p>
                </li>
                <li>
                  <p>
                    Users have the ability to update and delete craft data,
                    ensuring the database stays current and relevant.
                  </p>
                </li>
                <li>
                  <p>
                    Tailored Browsing Experience: Easily explore our extensive
                    craft collection by filtering crafts based on specific
                    categories of interest, allowing for a personalized browsing
                    journey tailored to your preferences.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
