import React from "react";
import assets from "../assets/Home.jpg";
const About = () => {
  return (
    <div
      className="lg:h-[90%]  w-full  z-50 flex justify-start items-center   about    text-white"
    >
      <div className="container_about lg:w-1/2     mt-10  md:text-start p-10  leading-7 text-start">
        <h1 className="text-5xl font-bold text-white -tracking-tighter border-b-3 border-amber-300 w-45">
          ABOUT
        </h1>
        <p className="text-2xl text-gray-500 leading-6 tracking-widest mt-3 ">
          techram@gmail.com
        </p>
        <p className="mt-10 text-[22px] tracking-normal leading-10   w-full max-w-[650px] ">
          I’m a MERN Stack Developer with 6 months of internship experience,
          skilled in building full-stack web applications using MongoDB,
          Express.js, React, and Node.js. I have a strong understanding of both
          frontend and backend development, creating responsive user interfaces
          and efficient server-side logic. I’m passionate about problem-solving,
          writing clean code, and continuously learning new technologies. I aim
          to contribute to innovative projects and grow as a professional
          developer.
        </p>

        <div className="location mt-10 relative text-left flex justify-center items-center flex-col  leading-loose ">
          <span className="text-[22px]">Rajendar Nagar</span>
          <h2
            className=" 
            text-md 
            
             tracking-normal
             w-70
            border-b-3
            border-amber-400
              text-[22px]"
          >
            800020 Ziromile Patna
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
