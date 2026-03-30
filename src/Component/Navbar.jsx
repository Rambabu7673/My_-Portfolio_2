import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#572e07]    sticky top-0 left-0 z-50 text-white px-5 py-4 flex justify-around items-center   gap-[20%] text-xl    ">
      {/* Desktop Menu (lg screen) */}
      <ul className="hidden lg:flex gap-6 font-mono shadow-blur-sm ">
        <li className="cursor-pointer  text-yellow-400  active:hover:text-blue-500  ">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer  active:hover:text-blue-500">
          <Link to={"about"}>About</Link>
        </li>
        <li className="cursor-pointer  active:hover:text-blue-500">
          <Link to={"resume"}>Resume</Link>
        </li>
        <li className="cursor-pointer  active:hover:text-blue-500">
          <Link to={"portfolio"}>Portfolio</Link>
        </li>
      </ul>
      {/* Logo */}
      <a
        href=""
        className=" px-5 lg:px-10 py-2  rounded text-lg font-mono  text-white lg:text-blue-400 font-semibold lg:bg-transparent lg:border  bg-yellow-500 active:bg-[#574b07]  active:text-white"
      >
        {" "}
        Login
      </a>

      {/* Hamburger Button (mobile) */}
      <div
        className="lg:hidden cursor-pointer text-3xl text-yellow-500 lg:text-orange-600 "
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-14 left-0 z-50 w-full bg-[#572e07]  flex flex-col items-left p-3 gap-5 py-5 lg:hidden  ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"resume"}>Resume</Link>
          </li>
          <li>
            <Link to={"portfolio"}>Portfolio</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
