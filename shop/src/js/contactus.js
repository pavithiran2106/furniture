import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import ContactusImg1 from "../image/contactus.jpg"
import Footer from '../Components/footer'
import Contactcomp from '../Components/contactcomp'


function contactus() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={ContactusImg1}
                title="Contact us"
                btnClass="hide"
            />
            <Contactcomp></Contactcomp>
            <Footer/>
        </div>
    )
}

export default contactus
