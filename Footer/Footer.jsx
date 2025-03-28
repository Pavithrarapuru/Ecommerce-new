import React from 'react'
import './Footer.css'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
// import footer-logo  from '../Assets/logo_big.png'
import logo from '../Assets/logo_big.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img className='shopper' src={logo} alt="" />
                <p>shopper</p>
                <ul className='footer-links'>
                    <li>company</li>
                    <li>products</li>
                    <li>offices</li>
                    <li>contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <img src={insta} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={whatsapp} alt="" />
                    </div>
                    <div className="footer-icons-container">
                        <img src={pinterest} alt="" />
                    </div>

                </div>

            </div>

            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
