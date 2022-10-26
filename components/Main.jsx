import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs"

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm text-gray-600 tracking-widest test-gray-600">
            Delivering Value through People, Passionate Learning and Innovation
          </p>
          <h1 className="py-4 sm:text-lg text-3xl font-bold text-gray-800">
            Hi, I'm <span className='text-[#5651e5]'>N</span>aza <span className='text-[#5651e5]'>A</span>dimoha <br />{" "}
            A MERN Stack Engineer
          </h1>
          <p className="py-4 m-auto max-w-[70%] text-gray-600 text-sm mt-4">
            I am a MERN stack engineer with a passion for building scalable and robust web applications. I relish the Art of Solving Problems. I am a  <span className='text-[#5651e5]'>Design Thinker</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
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
  );
};

export default Main;
