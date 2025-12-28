import React from "react"
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = ()=>{
    return(
        <div className="hero navbar">
            <div className="hero-txt">
<h1>we Ensure better education for a better world</h1>
<p>Our cutting-edge curriculum is designed to empower students
    with the knowledge,<br/> skills and experineces needed to excel 
</p>
<button className="btn">Explore <img src={arrow} alt=""/></button>
            </div>
        
        </div>
    )
}

export default Hero