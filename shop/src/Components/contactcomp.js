import React from 'react';
import '../Components/contaactcomp.css';
import { useState } from 'react';
import Axios from 'axios';

function Contactcomp() {

    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [phone,setNumber]=useState("0")
    const [message,setMessage]=useState("")

    const addMessage = ( ) =>{
    Axios.post("http://localhost:3001/create", {
      name: name,
      mail: mail,
      phone: phone,
      message:message
    })
    .then(() =>{
        console.log("success")
    })
      
    }
   


    return (
        <div className="contact">
            <div className="contactcol1">
                <h1>CONTACT US</h1>
                <div className='f-Underline'></div>


                <div className="address-">
                    <div className="address-1">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="address-2">
                        <p>Address:-</p>
                        <p>No 32 /1 , Wijerama Lane Gangodavila, Nugegoda, Colombo, Sri Lanka</p>
                    </div>   
                </div>


                <div className="mail-">
                    <div className="mail-1">
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    <div className="mail-2">
                        <p>E-Mail:-</p>
                        <p>futurexxdesign@gmail.com</p>
                    </div>
                </div>


                <div className="phone-">
                    <div className="phone-1">
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="phone-2">
                        <p>Phone:-</p>
                        <p>+94 11 280 4554</p>
                    </div>
                </div>
                    
                    
                <div className="web-">
                    <div className="web-1">
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className="web-2">
                        <p>Web:-</p>
                        <p>www.futurexxdesign.lk</p>
                    </div>                   
                </div>


                <div className="facebook-">
                    <div className="facebook-1">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="facebook-2">
                        <p>Facebook:-</p>
                        <p>https://www.facebook.com/futurexxdesign2023</p>
                    </div>
                    
                    
                </div>


            </div>
            <div className="contactcol2">
                <h1>WRITE US</h1>
                <div className='f-Underline'></div>
                <div className="form">
                    <form>

                        <input 
                        placeholder="Your Name"
                        onChange={( event )=>{
                            setName=(event.target.value)
                        }}>
                        </input>

                        <input 
                        placeholder="Your Mail"
                        onChange={( event )=>{
                            setMail=(event.target.value)
                        }}>           
                        </input>

                        <input 
                        placeholder="Your contact Number"
                        onChange={( event )=>{
                            setNumber=(event.target.value)
                        }}>  
                        </input>

                        <textarea 
                        placeholder="Your message"
                        rows="6"
                        onChange={(event)=>{
                            setMessage=(event.target.value)
                        }}>                             
                         </textarea>
                        <button onClick={addMessage}>Submit</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Contactcomp
