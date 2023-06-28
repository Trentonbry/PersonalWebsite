import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Components/navigation-bar';
import './Home.css';

function Home() {

  var linkedIn = <a
  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
  href="https://www.linkedin.com/in/trenton-m-bryant-csce/"
  target="_blank"
  rel="noopener noreferrer"
>
   LinkedIn.
</a>
  return (
    <div className="Home bg-gray-800">
      <Navbar/>
      <div className="p-9 rounded-xl bg-[#8a7cb4] ">
        <div className="flex justify-center text-xl">About Me</div>
        <p className=" flex mt-2 text-gray-800">My name is Trenton Bryant I am current a SoftWare engineer at JB Hunt.
          I am a full stack developer currently using Java, Springboot, javaScript, mySql, and etc.
        </p>
      </div>
      <div className="p-9 rounded-xl bg-[#5c9693]">
        <div className="flex justify-center text-xl">Projects</div>
      </div>
      <div className="p-9 rounded-xl bg-[#dbc76c]">
      <div className="flex justify-center text-xl">Contact Me</div>
      <p>If you would like to get into contact with me you can email me at Trentonb182@gmail.com or message me on {linkedIn}
      
        </p>
      </div>
    </div>
  );
}

export default Home;
