import React from "react";
import Image from 'next/image'
import Link from 'next/link';

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110 ease-in duration-300">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt=""
        />
        {/* How to center absolute elmemnts in tailwind */}
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="text-white pb-4 pt-2 text-center">
            React| Typescript | NodeJS | MongoDB
          </p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-800 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
