import React from 'react'
import Hero from '../Components/Hero'
import Homedescription from '../Components/homedescription'
import Navbar from '../Components/Navbar'
import HomeImg1 from "../image/Home1.jpg"
import Footer from '../Components/footer'

function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="Hero"
                heroImg={HomeImg1}
                title="Best Leading Chartered Architects in Sri Lanka Based in Colombo and One of Top Interior Designers in Sri Lanka."
                text="choose your design"
                buttonText="design plan"
                url="/"
                btnClass="show"
            />

            <Homedescription/>
            <Footer/>
        </div>
    )
}

export default Home
