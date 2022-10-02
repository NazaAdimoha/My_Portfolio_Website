import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* Incorporate lazy loading of Image */}
        <Link href="/">
          <a>
            <Image src="" alt="logo" width="125" height="50" />
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  About
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Skills
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Projects
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Contact
                </li>
              </a>
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {/* Mobile view */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''
        }
      >
        {/* side drawer menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 bg-[#ecf0f3] ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="" alt="logo" width="87" height="35" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something Legendary
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <a>
                  <li className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Home
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    About
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Skills
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Projects
                  </li>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <li className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Contact
                  </li>
                </a>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="pl-3 uppercase tracking-widest text-sm text-[#5651e4]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]  ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <IoMailOutline />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
