import React from "react";
import Navbar from "./navigation-bar";

function Contact(){
    return( 
      <div className='flex flex-col gap-3 text-[#2A2539]'>
          <Navbar/>
          <a
            className="GitHub-link"
            href="https://github.com/Trentonbry"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        <a
          className="LinkedIn-link"
          href="https://www.linkedin.com/in/trenton-m-bryant-csce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My LinkedIn
        </a>
      </div>
  )
}

export default Contact;