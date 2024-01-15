import Image from "next/image";
import React from "react";
import DropBox from ".././public/assets/projects/dropboxlight.png";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";

const DropboxCloned = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DropBox}
          alt="/"
        />
        <div className="absolute top-[80%] md:top-[30%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] -translate-y-[52%] text-white py-2 px-2 z-10">
          <h2 className="py-2">Dropbox Cloned</h2>
          <h3>Next JS 14 | TypeScript |Tailwind CSS | Firebase | Firestore | clerk</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="mb-3">Project</p>
          <h2>Overview</h2>
          <p className="mt-3">
            Dropbox clone is a web application that allows users to create, edit, delete and share files and folders.
            This web app allows you to bascially upload and store almost any file type utilizing firebase storage.
            Zustand was used to manage the state of the application. Clerk was used for authentication and authorization.
            And of course Next Js 14 with the lovely App Router feature was used to handle the routing of the application.
          </p>
          <a href="https://github.com/NazaAdimoha/Dropbox-cloned" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          
          <a href="https://dropbox-cloned.vercel.app/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="p-2">
                <p>Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Next Js 14 App Router
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Typescript
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Tailwind CSS
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        clerk
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        ShadCn
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Zustand
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        React-Hook-Form
                    </p>
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer"> 
                <a className="text-[#5651e5]">Back to Projects</a>
            </p>
        </Link>
      </div>
    </div>
  );
};

export default DropboxCloned;
