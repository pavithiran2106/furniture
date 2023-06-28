import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import BlogImg1 from "../image/Blog.jpg"
import Footer from '../Components/footer'
import Blogcom from '../Components/blogcom'

function Blog() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero 
                cName="hero-mid"
                heroImg={BlogImg1}
                title="Blog"
                btnClass="hide"
            />
            <Blogcom></Blogcom>
            <Footer/>
        </div>
    )
}

export default Blog
