import React from 'react'
import '../Components/portfoliopic.css';

import portImg1 from "../image/service3.jpg";
import portImg2 from "../image/portfolio.jpg";
import portImg3 from "../image/port1.jpg";
import portImg4 from "../image/port2.jpg";
import portImg5 from "../image/port3.jpg";
import portImg6 from "../image/service2.jpg";
import portImg7 from "../image/port4.jpg";
import portImg8 from "../image/port5.jpg";
import portImg9 from "../image/port6.jpg";
import portImg10 from "../image/port7.jpg";
import portImg11 from "../image/service1.jpg";
import portImg12 from "../image/port8.jpg";
import portImg13 from "../image/port9.jpg";
import portImg14 from "../image/port10.jpg";
import portImg15 from "../image/port11.jpg";



function portfoliopic() {
    return (
        <div className="portfolioset">


            <div className="portcol1">
                <img alt="img" src={portImg1}></img>
                <img alt="img" src={portImg2}></img>
                <img alt="img" src={portImg3}></img>
                <img alt="img" src={portImg4}></img>
                <img alt="img" src={portImg5}></img>
            </div>

            <div className="portcol2">
                <img alt="img" src={portImg6}></img>
                <img alt="img" src={portImg7}></img>
                <img alt="img" src={portImg8}></img>
                <img alt="img" src={portImg9}></img>
                <img alt="img" src={portImg10}></img>
            </div>

            <div className="portcol3">
                <img alt="img" src={portImg11}></img>
                <img alt="img" src={portImg12}></img>
                <img alt="img" src={portImg13}></img>
                <img alt="img" src={portImg14}></img>
                <img alt="img" src={portImg15}></img>
            </div>


        </div>
    )
}

export default portfoliopic
