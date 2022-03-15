import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './components/App';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      <Footer/>
  </Router>,
  document.getElementById('root')
);


