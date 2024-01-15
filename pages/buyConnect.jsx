import React from "react";
import Image from "next/image";
import Uburu from ".././public/assets/projects/uburuai.png";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";

const buyConnect = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Uburu}
          alt="/"
        />
        <div className="absolute top-[80%] md:top-[30%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] -translate-y-[52%] text-white py-2 px-2 z-10">
          <h2 className="py-2">Uburu.ai</h2>
          <h3>
            React Js | Typescript | Styled Components | StoryBook | Jest |
            Formik | Role-Based-Auth | Redux-thunk | Middleware
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-3">Project</p>
          <h2>Overview</h2>
          <p className="mt-3">
            Uburu Health is built to support all your research needs. <br/> Seamless
            Connections To EMRs Get access to electronic patient data without
            hassle
          </p>
          <a
            href="https://uburu.ai"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="/buyConnect"
            target="_blank"
            rel="noreferrer"
          >
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
                Styled Components
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Redux-thunk
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Javascript
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Typescript
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Typescript
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Story Book
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Formik
              </p>
              <p className="text-gray-600 flex items-center py-2">
                <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                Role Based Authentication
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

export default buyConnect;
