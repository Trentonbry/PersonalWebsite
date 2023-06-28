import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import AboutMe from './Components/AboutMe';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();