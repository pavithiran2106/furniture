import React from 'react'
import '../Components/homedescription.css';
import disImg1 from "../image/Blog.jpg"
import disImg2 from "../image/description1.jpg"
import disImg3 from "../image/description2.jpg"

function homedescription() {
    return (
        <div className="description">

            <div className="des1">
                <div className="image1">
                    <img alt="img" src={disImg1}></img>
                </div>
                <div className="set1">
                    <h1>FUTUREXX</h1>
                    <h2>Architects in Sri Lanka</h2>
                    <h3>Augmenting human experience in living spaces</h3>
                    <p>Architecture design in Sri Lanka is not just about creating spaces, but it is more about amplifying human emotions through better experience. We as chartered architects in Sri Lanka and interior      
                    designers in Colombo Sri Lanka look for inspirations from anywhere to create something that will improve the way people live, learn, work, play and heal. It is in our core values that we create something that bring about joy and serenity in the minds of those who experience it.
                    </p>
                </div>
            </div>

            <div className="des2">
                <div className="set2">
                    <h1>FUTUREXX</h1>
                    <h2>Interior Designers in Sri Lanka</h2>
                    <h3>Our interior designs create human feelings from within</h3>
                    <p>We FUTUREXX a interior designers in Sri Lanka, specialize in interior design in Sri Lanka with some of the landmark projects including AIA Head Office in Colombo, CDB and several others. Our service in interior designing is highly personalized and comprehensive involving our customers in the creative process. Our designs stand the test of time incorporating the future concepts in to the same.
                    </p>
                </div>
                <div className="image2">
                    <img alt="img" src={disImg2}></img>
                </div>
            </div>

            <div className="des3">
                <div className="image3">
                    <img alt="img" src={disImg3}></img>
                </div>
                <div className="set3">
                    <h1>FUTUREXX</h1>
                    <h2>Structural Engineering</h2>
                    <p>As one of best architect firms in Sri Lanka we offer consultancy services in structural engineering in Sri Lanka design too for high and medium rise buildings, infrastructures, water retaining structures, submarine structures, bridges and etc. Various types of materials such as concrete, steel, post-tensioned and pre-tensioned concrete and testing assessment of strength, stability and durability of the structures. We help organizations to develop their own product and civil engineering materials.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default homedescription
