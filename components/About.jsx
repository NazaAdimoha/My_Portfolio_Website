import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/brand/react_banner_copy.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-black md:h-screen p-4 flex items-center py-12 md:px-32"
    >
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 max-w-lg">
          <h2 className="py-4 text-[#5651e5]">Meet Me...</h2>
          <p className=" py-2  text-gray-600">| Bugs are a Thrill |</p>
          <p className="text-gray-500 py-2 ">
            Hi there 👋🏾 Adimoha Gospel Chinaza. I am an Agile React Frontend
            developer with 3 years of Frontend Development experience, and one
            who understands the importance of communication and collaboration in
            delivering a working product. My experience working in agile teams
            has developed a growth mindset that prioritizes excellent customer
            relationships and client satisfaction.
          </p>
          <p className="text-gray-500 py-2 ">
            In my current role, I developed a financial payment system that
            allows a program owner to fund users' wallets and or virtual cards.
            This solution was fully localized by integrating the reactI18
            library, to accommodate multiple languages for various types of
            users and equally give respective users, full control over using the
            product in their preferred language as selected by the user. This
            feature raised the engagement with the application by 85% as a
            result, promoting inclusiveness, and also leading to returning
            clients. React, Typescript, React Query, and Redux were used for
            state management on the front end.
          </p>
          <p className="text-gray-600 py-2 cursor-pointer underline">
            Checkout out some of my projects...
          </p>
        </div>
        <div className="cursor-pointer shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-110 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={AboutImg}
            alt="about-image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
