import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import '../Components/Navbar.css';
import '../css/App.css';


function Navbar() {
    return (
        <div className="navbar">

            <div className="left">
                <h1 className="navbar-logo">FUTUREXX</h1>
            </div>
            

            <div className="right">  
                <div>
                    <Link to="/"  className='Home'>
                         <i class="fa-solid fa-house"></i> HOME </Link> 
                </div>

                <div>
                    <Link to="/Services" className='Services'>  
                        <i class="fa-solid fa-screwdriver-wrench"></i> Services</Link>
                </div>

                <div>
                    <Link to="/portfolio" className='portfolio'> 
                    <i class="fa-solid fa-rocket"></i> Portfolio</Link>
                </div>

                <div>
                    <Link to="/aboutus" className='aboutus'> 
                        <i class="fa-solid fa-address-card"></i> About Us</Link>
                </div>

                <div>
                    <Link to="/Blog" className='Blog'> 
                        <i class="fa-brands fa-blogger-b"></i> Blog</Link>
                </div>

                <div>
                    <Link to="/contactus" className='contactus'> 
                        <i class="fa-solid fa-phone-volume"></i> Contact Us</Link>
                </div>
                </div> 
            </div> 

            
        
    )
}

export default Navbar
