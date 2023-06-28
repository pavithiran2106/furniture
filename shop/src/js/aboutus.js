import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AboutImg1 from "../image/aboutus.jpg"
import Footer from '../Components/footer'
import Aboutcomp from '../Components/aboutcomp'

function aboutus() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={AboutImg1}
                title="About Us"
                btnClass="hide"
            />

            <Aboutcomp></Aboutcomp>
            <Footer/>   
        </div>
    )
}

export default aboutus
