import React from 'react'
import '../hero/Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div id='hand'>
                    <div className="hand-hand-icon">
                        <p>NEW</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero_latest-btn">
                    <div>latest collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />

            </div>
        </div>
    )
}

export default Hero
