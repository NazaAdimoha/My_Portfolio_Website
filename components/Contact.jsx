import Image from "next/image";
import React, { useState } from "react";
import ContactImg from "../public/assets/brand/contact.avif";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const showToastMessage = () => {
    toast.success("Message Sent Successfully!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [sender_name, set_sender_name] = React.useState("");
  console.log("---", sender_name )
  const [sender_email, set_sender_email] = React.useState("");
  const [sender_message, set_sender_message] = React.useState("");
  const [sender_subject, set_sender_subject] = React.useState("");
  const [sender_phone, set_sender_phone] = React.useState("");

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_yxf68r4",
      "template_rtx51mr",
      {
        sender_name,
        sender_email,
        sender_message,
        sender_subject,
        sender_phone,
      },
      "9snJF3Q7nL59g5qA8"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_sender_message("");
    set_sender_subject("");
    set_sender_phone("");
    showToastMessage();
  };

  const handleChange = (e) => {
    set_sender_message(e.target.value);
  };

  const handleName = (e) => {
    set_sender_name(e.target.value.trim());
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value.trim());
  };

  const handleSubject = (e) => {
    set_sender_subject(e.target.value);
  };

  const handlePhone = (e) => {
    set_sender_phone(e.target.value.trim());
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
    <section 
      id="contact"
      className="text-black body-font"
      style={{
        background: "linear-gradient(to right, white, #c9c9c9, #87CEFA)",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg p-8 w-full md:w-2/3 lg:w-1/2"
        >
          <h2 className="text-3xl mb-8 font-bold text-center">Get in Touch</h2>
          <form onSubmit={sendMail} className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="sender_name"
                value={sender_name}
                onChange={handleName}
                placeholder="Your Name"
                className="rounded-lg p-3 w-full focus:outline-none"
              />
              <input
                type="text"
                name="sender_phone"
                value={sender_phone}
                onChange={handlePhone}
                placeholder="Phone Number"
                className="rounded-lg p-3 w-full focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="sender_email"
              value={sender_email}
              onChange={handleEmail}
              placeholder="Your Email"
              className="rounded-lg p-3 w-full focus:outline-none"
            />
            <input
              type="text"
              name="sender_subject"
              value={sender_subject}
              onChange={handleSubject}
              placeholder="Subject"
              className="rounded-lg p-3 w-full focus:outline-none"
            />
            <textarea
              rows="5"
              name="sender_message"
              value={sender_message}
              onChange={handleChange}
              placeholder="Your Message"
              className="rounded-lg p-3 w-full focus:outline-none"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full p-4 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              variants={buttonVariants}
              whileHover="hover"
            >
              Buzz Me!
            </motion.button>
          </form>
          <ToastContainer />
        </motion.div>
      </div>
      {/* Scroll-to-top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center py-12"
      >
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </a>
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
