import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import ServicesImg1 from "../image/service.jpg"
import Footer from '../Components/footer'
import Services1 from '../Components/service1'

function Services() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={ServicesImg1}
                title="Our services"
                btnClass="hide"
            />

            <Services1></Services1>

            <Footer/>
        </div>
    )
}

export default Services
