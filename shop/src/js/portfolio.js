import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import portfolioImg1 from "../image/portfolio.jpg"
import Footer from '../Components/footer'
import Portfoliopic from '../Components/portfoliopic'

function portfolio() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero
                cName="hero-mid"
                heroImg={portfolioImg1}
                title="Portfolio"
                btnClass="hide"
            />
            <Portfoliopic></Portfoliopic>
            <Footer/>
        </div>
    )
}

export default portfolio
