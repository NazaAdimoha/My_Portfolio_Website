import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import useDownloader from "react-use-downloader";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import Image from "next/image";
import Profile from "../public/assets/brand/naza.jpg";

const Main = () => {
  const { download } = useDownloader();
  const fileUrl = "/adimohachinaza.pdf";
  const fileName = "adimohachinaza.pdf";

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 2.3 },
    });
  }, [controls]);

  const socialIconVariants = {
    rest: { scale: 0.5 },
    hover: { scale: 2 },
  };

  return (
    <motion.div
      id="main"
      className="container px-6 py-20 mx-auto"
      initial={{ opacity: 0, x: -100 }}
      animate={controls}
    >
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="lg:max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5 }}
          >
            <h1 className="py-4 sm:text-lg text-3xl lg:text-6xl font-bold text-gray-800">
              Hi{" "}
              <motion.span
                className="text-3xl lg:text-6xl"
                animate={{
                  rotate: [0, -50, 50, 0],
                  transition: { repeat: Infinity, duration: 3 },
                }}
              >
                👋🏾
              </motion.span>
              , I am <span className="text-[#5651e5]">Chi</span>naza{" "}
              <span className="text-[#5651e5]">A</span>dimoha <br /> A Frontend
              | Mobile Engineer
            </h1>

            <p className="uppercase text-sm text-gray-600 tracking-widest test-gray-600">
              Delivering Value through People, Passionate Learning and
              Innovation
            </p>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              I am a Frontend engineer with a passion for building scalable and
              robust web applications. I relish the Art of Solving Problems. I
              am a <span className="text-[#5651e5]">Design Thinker</span>
            </p>

            <div className="flex justify-between max-w-[330px] py-4 mt-8 ">
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/chinazaadimoha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <a
                  href="https://github.com/NazaAdimoha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <a
                  href="https://twitter.com/NazaAdimoha"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <a
                  href="mailto:adimohanaza@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoMailOutline />
                </a>
              </motion.div>
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                onClick={() => download(fileUrl, fileName)}
                className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
              >
                <BsFillPersonLinesFill />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0.2, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
        >
          <Image
            className="w-full h-full lg:max-w-3xl"
            src="https://merakiui.com/images/components/Catalogue-pana.svg"
            width={600}
            height={600}
            alt="Catalogue-pana.svg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Main;
