import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-4 flex items-center py-16">
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Meet Me...</h2>
          <p className="py-2 text-gray-600">| Bugs are a Thrill |</p>
          <p className="text-gray-600 py-2">
            I am a MERN-STACK Engineer with a passion for building applications
            that solve real-world problems. I am proficient in an assortment of
            technologies, including React, Node.Js, Typescript, Express, and
            Relational Databases such as MongoDB. I have also led a team of six
            in building a progress tracker application to serve over 1,000 devs
            per month, increasing efficiency and transparency by over 60
            percent. I was awarded the 'Most Outstanding Developer With
            Exemplary Leadership traits'. I can work both in interdisciplinary
            teams and take initiative in a remote team environmen
          </p>
          <p className="text-gray-600 py-2 cursor-pointer underline">
            Checkout out some of my projects...
          </p>
        </div>
        <div className="cursor-pointer shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
