import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5] font-bold">
          Skills
        </p>
        <h2 className="text-xl tracking-widest uppercase py-4">
          My Skill sets
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>MONGO</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
