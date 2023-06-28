import React from "react";
import Navbar from "./navigation-bar";

function AboutMe(){

    // var githubLink = <a className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://github.com/Trentonbry" target="_blank" rel="noopener noreferrer">
    //                     GitHub.</a>
    
    return( 
    <div className='flex flex-col gap-3 text-[#2A2539] flex-1 bg-gray-800 h-screen'>
        <Navbar/>
        <div className="p-9 rounded-xl bg-[#8a7cb4] h-96">
            <div className="flex justify-center text-xl">About Me</div>
            <p className="mt-2 text-gray-800">
                My name is Trenton Bryant I am current a SoftWare engineer at JB Hunt.
                <br/>askdfjkasjfjasdl;kfjklasjfklasjdkfljaskdlfjk;lasdjfkasjdfkljasdklfjaksldfkl;asf.
            </p>
      </div>
  </div>
  )
}

export default AboutMe;