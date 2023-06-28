import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/footer.css';

function footer() {
    return (
        <div className="footer">
            <div className="fset1">


                <div className="fcol1">
                    <h2>FUTUREXX</h2>
                    <p>Best Leading Chartered Architects in Sri Lanka Based in Colombo and One of Top Interior Designers in Sri Lanka.</p>

                    <div className="social">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div className='fsideline-1'></div>

                </div>


                <div className="fcol2">
                    <h3>Contact Us</h3>
                    <div className="details">
                    <div className="address">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>No 32 /1 , Wijerama Lane Gangodavila, Nugegoda, Colombo, Sri Lanka</p>
                    </div>
                    <div className="phone">
                        <i class="fa-solid fa-phone"></i>
                        <p>+94 11 280 4554</p>
                    </div>
                    <div className="mobile">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        <p>+94777333041</p>
                    </div>
                    <div className="mail">
                        <i class="fa-regular fa-envelope"></i>
                        <p>futurexxdesign@gmail.com</p>
                    </div>
                    <div className="web">
                        <i class="fa-solid fa-globe"></i>
                        <p>www.futurexxdesign.lk</p>
                    </div>
                    </div>
                </div>


                <div className="fcol3">
                    <h2>Quick Links</h2>


                    <div className="links">

                    <div >
                        <Link to="/" className='F-home'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        HOME
                        </Link> 
                    </div>

                    <div >
                        <Link to="/Services" className='F-Services'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        Services
                        </Link> 
                    </div>

                    <div >
                        <Link to="/portfolio" className='F-portfolio'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        Portfolio
                        </Link> 
                    </div>

                    <div >
                        <Link to="/aboutus" className='F-aboutus'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        About Us
                        </Link> 
                    </div>

                    <div >
                        <Link to="/Blog" className='F-Blog'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        Blog
                        </Link> 
                    </div>

                    <div >
                        <Link to="/contactus" className='F-contactus'  onClick={() => {
                        window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",});}}> 
                        Contact Us
                        </Link> 
                    </div>


                    </div>
                </div>

            </div>



            <div  className="fset2">
                <h2>Copyright <i class="fa-solid fa-copyright"></i> 2022 FUTUREXX Design (Pvt) Ltd.. All Rights Reserved.</h2>
                <h>DESIGN BY PAVI</h>
                <div className='f-Underline'></div>
                <p>Privacy Policy | Cookie Policy | Terms of Use</p>
                <div className='f-Underline'></div>
            </div>

        </div>
    )
}

export default footer
