import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Components/navigation-bar';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <p 
        className='Title absolute inset-x-10 top-0'
        >Trenton Bryant's Website</p>
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
        
      </header>
    </div>
  );
}

export default Home;
