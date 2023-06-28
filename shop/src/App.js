
import '../src/css/App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import React from 'react';
import Home  from "./js/Home";
import Aboutus from "./js/aboutus";
import Blog from './js/Blog';
import Portfolio from './js/portfolio';
import Contactus from './js/contactus';
import Services from './js/Services';

import ReactDOM from 'react-dom'
import Navbar from './Components/Navbar';
 
function App() {
     
  return (
    <div className="app">
      <Router>{/* All routes are nested inside it */}
   
   <Routes>
     
     <Route path="/" element={<Home />} />
       <Route path="/aboutus" element={<Aboutus />} />
       <Route path="/Blog" element={<Blog />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/contactus" element={<Contactus />} />
       <Route path="/Services" element={<Services />} />

     
       
     </Routes>
     
   </Router>
   
    </div>
   
  );
  
}
export default App;