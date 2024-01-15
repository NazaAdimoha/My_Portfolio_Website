import React from "react";
import Image from "next/image";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";
import SuperAdmin from ".././public/assets/projects/superadmin.png";

const traderaxpress = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={SuperAdmin}
          alt="/"
        />
        <div className="absolute top-[80%] md:top-[30%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] -translate-y-[52%] text-white py-2 px-2 z-10">
          <h2 className="py-2">MSIA Super Admin</h2>
          <h3>React Js | Typescript | React-hook-form | Tanstack Query | Redux-toolkit | Styled-Components </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-3">Project</p>
          <h2>Overview</h2>
          <p className="mt-3">
            MSIA Super-Admin portal is a web application that allows admins to manage third-party APIs, <br /> configure client setup, and show global data, with the use of graphs
          </p>
          <a href="https://superadmin.essolo.com" target="_blank" rel="noreferrer">
            <button cla ssName="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="/traderaxpress" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4">
          <div className="p-2">
            <p>Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                React Js
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Typescript
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                React-hook-form
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Tanstack Query
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Redux-toolkit
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Styled-Components
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                i18n
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Custom Hooks
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">
            <a className="text-[#5651e5]">Back to Projects</a>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default traderaxpress;
