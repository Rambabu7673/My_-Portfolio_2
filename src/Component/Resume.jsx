import React from "react";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const Resume = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex  text-white  ">
      <div className="  w-full bg-[#8b4d0e]  justify-evenly gap-10 text-white   flex flex-col lg:flex-row ">
        <div className="     lg:w-1/2  relative   lg:p-10">
          <h1
            className="text-2xl font-semibold   lg:after:top-20 lg:after:left-10
          
  after:content-[''] 
  after:absolute 
  after:left-1
  after:top-10
  after:h-0.5 
  after:w-52 
  after:bg-amber-400 p-1"
          >
            SOFTWARE SKILL
          </h1>
          <div className="target  mt-14  p-1  ">
            <section className=" flex gap-3 justify-around bg-zinc-900 p-3 rounded-lg   items-center  ">
              <FaReact className="text-3xl text-red-600 font-semibold" />
              <h2 className="text-xl font-semibold">React</h2>
              <input
                type="range"
                defaultValue={70}
                className="lg:px-10 px-7 py-3 "
              />
            </section>
            <section className="flex justify-around gap-3 bg-zinc-900 p-3 rounded-lg mt-5 items-center ">
              <FaNodeJs className="text-3xl text-yellow-500 font-semibold" />
              <h2 className="text-xl font-semibold">Node.Js</h2>
              <input
                type="range"
                defaultValue={70}
                className="lg:px-10 px-7 py-1  accent-yellow-500"
              />
            </section>
            <aside className="flex justify-around gap-3 mt-5 items-center bg-zinc-900 p-3 rounded-lg ">
              <SiExpress className="text-3xl text-orange-600 font-semibold" />
              <h2 className="text-xl font-semibold">Express.Js</h2>
              <input
                type="range"
                defaultValue={80}
                className="lg:px-10 px-7 py-1   accent-orange-500"
              />
            </aside>
            <section className="flex justify-around  bg-zinc-900 p-3 rounded-lg    gap-3 mt-5 items-center ">
              <TbBrandMongodb className="text-3xl text-green-800 font-semibold" />
              <h2 className="text-xl font-semibold">MongoDB </h2>
              <input
                type="range"
                defaultValue={90}
                className=" lg:px-10 px-7 py-1  accent-green-500"
              />
            </section>
            {/* Langauge bala section hai  */}
            <div className="relative mt-24">
              <h1
                className='after:content-[""] 
  after:absolute 
  after:left-0
  after:top-10
  after:h-0.5 
  after:w-40 
  after:bg-amber-400
  text-3xl font-semibold
   '
              >
                LANGUAGE
              </h1>

              <section className="mt-15">
                <div className="flex justify-center  bg-zinc-900 p-3 rounded-lg  items-center gap-5">
                  <p className="text-xl font-semibold">English</p>
                  <input
                    type="range"
                    defaultValue={50}
                    className="px-10 py-1 accent-red"
                  />
                </div>

                <div className="flex justify-center items-center bg-zinc-900 p-3 rounded-lg  gap-5 mt-5">
                  <p className="text-xl font-semibold">Hindi</p>
                  <input
                    type="range"
                    defaultValue={90}
                    className="px-10 py-1 accent-green-900"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Right side bala hai  */}
        <div className=" w-full   lg:w-1/2  relative   p-1  lg:p-10  leftSide">
          <div className="">
            <h1
              className="text-2xl font-semibold content=[''] 
             after:absolute  
             ml-0 
             lg:after:top-20
             lg:after:left-10

  after:left-1
  after:top-10
  after:h-0.5 
  after:w-52 
  after:bg-amber-400 "
            >
              WHAT CAN I DO ?
            </h1>
            <p className="ml-10 p-5 text-xl  text-start tracking-wide  leading-8">
              Logo-Stationery -Branding <br />
              Newsletter- Packaging-Catalog <br /> Strategy- Advertisment
            </p>
          </div>

          <div className="relative ml-0   mt-20 ">
            <h1
              className="text-2xl font-bold  
            content=['']
          after:absolute 
  after:left-0
  after:top-10
  after:h-0.5 
  after:w-45 
  after:bg-amber-400 "
            >
              DESIGN SKILLS
            </h1>
            <p className="p-5 ml-0 text-xl tracking-wide leading-8">
              Creaivity-Planing & Strategy <br />
              Signs & typography-Layout
              <br />
              Grid-Color sense-Inspiration
            </p>
          </div>
          <div className="relative ml-2  mt-20  ">
            <h1
              className="content=['']  text-2xl lg:text-2xl font-bold
          after:absolute 
  after:left-0
  after:top-10
  after:h-0.5 
  after:w-62 
  after:bg-amber-400"
            >
              HOBBIES & INTEREST
            </h1>
          </div>
          <div className=" flex flex-wrap  lg:flex-row    bg-zinc-900 rounded-lg p-5  justify-center gap-5 mt-6  lg:ml-5 ">
            <section className="h-16 w-16 border bg-gray-400 rounded-full flex justify-center items-center text-2xl font-bold text-red-600">
              {" "}
              R
            </section>
            <section className="h-16 w-16 border rounded-full  flex justify-center items-center text-2xl font-bold bg-yellow-600 text-green-600">
              L
            </section>
            <section className="h-16 w-16 border bg-green-700 rounded-full flex justify-center items-center text-2xl font-bold  text-yellow-500">
              S
            </section>
            <section className="h-16 w-16 border rounded-full flex justify-center items-center text-2xl font-bold text-blue-700  bg-pink-200 ">
              M
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
