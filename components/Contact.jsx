import Image from "next/image";
import React from "react";
import ContactImg from "../public/assets/brand/contact.avif";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
  return (
    // <div classNameName='w-full lg:h-screen'>
    //     <div classNameName='max-w-[1240px] mx-auto px-2 py-20 w-full'>
    //         <p classNameName='text-3xl tracking-widest uppercase text-[#5651e5] font-bold'>Contact</p>
    //         <h2 classNameName='text-xl tracking-widest uppercase py-4'>Get in touch</h2>
    //         <div classNameName='grid grid-cols-1 lg:grid-cols-5 gap-8'>

    //             {/* Contact Form */}
    //             <div classNameName='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4'>
    //                 <div classNameName='lg:p-4 h-full rounded-xl'>
    //                     <div>
    //                         <Image classNameName='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="contactImg" />
    //                     </div>
    //                     <div>
    //                         <h2 classNameName='py-2'>
    //                             <span classNameName='text-[#5651e5]'>N</span>aza <span classNameName='text-[#5651e5]'>A</span>dimoha
    //                         </h2>
    //                         <p classNameName='text-gray-500 py-4'>Frontend Developer</p>
    //                         <p classNameName='text-gray-500 py-4'>
    //                             I am open to new opportunities (Fulltime Offers | Gigs | Freelance | Open Source).<br/> If you have any questions, please feel free to contact me.
    //                         </p>
    //                     </div>
    //             {/* Contact Info */}
    //             <div classNameName=''>
    //                 <p classNameName='uppercase pt-8 '>
    //                     Let's Connect
    //                 </p>
    //                 <div classNameName='flex justify-around m-auto py-4 '>
    //                     <div classNameName="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
    //                     <FaLinkedinIn />
    //                     </div>
    //                     <div classNameName="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
    //                     <FaGithub />
    //                     </div>
    //                     <div classNameName="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
    //                     <FaTwitter />
    //                     </div>
    //                     <div classNameName="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
    //                     <IoMailOutline />
    //                     </div>
    //                     <div classNameName="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
    //                     <BsFillPersonLinesFill />
    //                     </div>
    //                 </div>
    //             </div>
    //                 </div>
    //             </div>
    //             {/* Contact Form */}
    //             <div classNameName='col-span-3 w-full h-auto shadow-xl shadow-gray-600 rounded-xl lg:p-4'>
    //                 <div classNameName='p-4'>
    //                     <form action="">

    //                     </form>
    //                 </div>
    //             </div>

    //         </div>
    //     </div>
    // </div>

    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="1100"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Decagon%20Edo,%20Benin%20city,%20Nigeria+(NazaCodes)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-50 shadow-md">
          <div className="relative mb-2">
            {/* Form starts here */}
            <form
              action=""
              method="POST"
              encType=""
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send Message
              </button>
            </form>
            <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
