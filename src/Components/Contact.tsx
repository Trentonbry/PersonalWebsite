import React from "react";
import Navbar from "./navigation-bar";

function Contact(){

  var linkedIn = <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.linkedin.com/in/trenton-m-bryant-csce/" target="_blank" rel="noopener noreferrer">
       LinkedIn.</a>

    return( 
      <div className='flex flex-col gap-3 text-[#2A2539] bg-gray-800 h-screen'>
          <Navbar/>
          <div className="p-9 rounded-xl bg-[#dbc76c] h-96">
            <div className="flex justify-center text-xl">Contact Me</div>
            <p>If you would like to get into contact with me you can email me at Trentonb182@gmail.com or message me on {linkedIn}</p>
          </div>
      </div>
  )
}

export default Contact;