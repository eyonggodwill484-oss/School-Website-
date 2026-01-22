import React from "react"
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = ()=>{
    return(
        <div className="hero">
            <div className="hero-txt">
<h1>We Ensure Better Education for a Better World</h1>
<p>Our cutting-edge curriculum is designed to empower students
    with the knowledge, skills and experineces needed to excel 
</p>
<button className="btn">Explore <img src={arrow} alt="arrow icon"/></button>
            </div>
        
        </div>
    )
}

export default Hero