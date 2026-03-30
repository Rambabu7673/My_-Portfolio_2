import React from 'react'

const Portfolio = ({project}) => {
  console.log(project);
 if (!project) return <h1 className='text-xl font-bold text-red-800'>Loading...</h1>;
  return (
    <div className="min-h-screen w-full bg-[#2b1704] p-10">
      <div className="relative">
        <h1
          className="text-2xl font-bold text-white tracking-wide
       after:content-[''] 
  after:absolute 
  after:left-0 
  after:top-10
  after:h-0.5 
  after:w-52 
  after:bg-amber-400
        
        "
        >
          OUR PROJECT
        </h1>
      </div>

      <section className="   text-white   p-5">
        <div className=" flex justify-center flex-wrap gap-13  p-5">
          {project.map((data, idx) => (
            <div
              className="h-95 w-80 bg-[#572e07] shadow-md shadow-green-800  rounded cursor-not-allowed p-1"
              key={idx}
            >
              <div className="flex justify-center items-center   h-67 w-78  ">
                <img src={data.imgUrl} className="h-65 w-75  rounded " />
              </div>
              <p className="text-center text-yellow-600 text-lg font-sans">
                {data.content}
              </p>
              <div className="flex justify-center gap-3   mt-3">
                <a href={data.url}>
                  <button className="px-4 py-2  cursor-pointer rounded bg-green-500 font-mono text-lg active:bg-red-500">
                    {data.OpenServer}
                  </button>
                </a>

                <a href={data.sourceCode}>
                  <button className="px-4 py-2 font-mono cursor-pointer text-black rounded bg-amber-500  text-lg active:bg-blue-500">
                    {data.btnType}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
