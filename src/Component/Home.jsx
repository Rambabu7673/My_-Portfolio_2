import React from 'react'
import {Link} from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Home = () => {
  return (
    <div className="h-screen lg:h-[89%]   w-full overflow-x-hidden relative bg-[url('https://i.pinimg.com/1200x/13/f1/51/13f1510b5f9b991a367db6e2d46e2d8f.jpg')] bg-cover bg-center bg-no-repeat  ">
      <div className="max-w-[640px] w-full   text-white absolute top-5 lg:top-10  left-2 right-5 p-6">
        <h1 className=" lg:text-[50px] text-4xl font-bold tracking-wide text-yellow-500">
          It's Me
        </h1>

        <h2 className=" text-5xl lg:text-7xl  font-bold">
          <span className="text-green-600">R</span>AMBABU{" "}
        </h2>
        <p className="text-[22px]   tracking-normal leading-8 mt-5">
          Graphic design and IT software are important fields in today’s digital
          world. Graphic design focuses on creating visual content like logos,
          posters, and websites to communicate ideas. IT software involves
          developing applications and systems that help businesses run
          efficiently, solve problems, and improve productivity through
          technology...!
        </p>
        <p className="text-3xl mt-3 font-semibold">
          <span className="text-red-600">MERN</span> STACK DEVELOPER
        </p>

        <div className="flex gap-3 mt-10 ">
          <button className="px-8 py-2  text-lg font-mono rounded-full bg-green-500 text-black active:bg-blue-500 active:text-white">
            <Link to={"/resume"}>Resume</Link>
          </button>
          <button className="px-8 py-2  text-lg rounded-full bg-amber-500 text-red-600 font-mono active:bg-blue-500 active:text-white">
            <Link to={"/portfolio"}>Portfolio</Link>
          </button>
        </div>
        <div className="flex justify-start items-center  gap-10 lg:gap-5 mt-10 ml-2">
          {" "}
          <FaLinkedinIn className="text-2xl font-semibold text-blue-700" />{" "}
          <FaFacebookF className="text-2xl font-semibold " />{" "}
          <FaPinterestP className="text-2xl font-semibold text-red-500" />{" "}
          <FaTwitter className="text-2xl font-semibold text-yellow-500" />{" "}
          <FaInstagram className="text-2xl font-semibold" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Home
