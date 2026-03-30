import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';


const project = [
  {
    imgUrl:
      "https://media-production.procook.io/698cea070f1a189e6409b69fa3131b06.jpg",
    url: "https://procook-recipe-project.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Procook_Recipe_Project",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "ProCook using frontend...! ",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjR_H3YTzK6xafe2dBiVf2gCCVYbC1o3NPA&s",
    url: "https://portfolio-projects-delta-navy.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Portfolio_Projects",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "Presonal portfolio using frontend ...!",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIq5PfSP5WK5-NMq9I0dSSmqp5XnjHrW7Dg&s",
    url: "https://chatspoof-1hk3.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Chatspoof-",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "Chatboot using using MERN Stack...!",
  },
  {
    imgUrl:
      "https://www.themandarin.com.au/wp-content/uploads/sites/5/2017/03/smart-cities-network.jpg",
    url: "https://system-city.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/System_City",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "System City using Frontend...!  ",
  },
  {
    imgUrl:
      "https://phpgurukul.com/wp-content/uploads/2025/08/PHP-Todo-List-Tasks-1024x665.png",
    url: "https://todo-new-project.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Todo_new-_project",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "Todo App using Frontend...! ",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxH3fpUlzwePvIILDad3608EgiX0n1A8nkQ&s",
    url: "https://url-shortener-kappa-three.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Url_Shortener",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "URl Shortner using Mern Stack...!  ",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhWUjojL0jLX4y60JCX3KLtIse-b4FTQUIQ&s",
    url: "https://add-note-project-ebon.vercel.app/",
    sourceCode: "https://github.com/Rambabu7673/Add_Note_Project",
    btnType: "Source Code",
    OpenServer: " Open Browser",
    content: "Add Note  using Frontend ...! ",
  },
];


const App = () => {
  return (
    <>
      <div className="w-full h-screen   ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="/portfolio"
              element={<Portfolio project={project} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
