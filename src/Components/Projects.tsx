import React from "react";
import Navbar from "./navigation-bar";

function Projects(){
    return( 
    <div className='flex flex-col gap-3 text-[#2A2539] bg-gray-800 h-screen'>
        <Navbar/>
        <div className="p-9 rounded-xl bg-[#5c9693] h-96">
          < div className="flex justify-center text-xl">Projects</div>
        </div>
  </div>
  )
}

export default Projects;