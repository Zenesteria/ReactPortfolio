import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './components/pages/App';
import Navbar from './components/sub-components/Navbar';
import About from './components/pages/About';
import Footer from './components/sub-components/Footer';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


ReactDOM.render(
  <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
  </Router>,
  document.getElementById('root')
);


