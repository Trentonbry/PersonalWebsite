import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Components/navigation-bar';
import './Home.css';

function Home() {

  return (
    <div className=" flex-1 bg-gray-800 h-screen">
      <Navbar/>
    </div>
  );
}

export default Home;
