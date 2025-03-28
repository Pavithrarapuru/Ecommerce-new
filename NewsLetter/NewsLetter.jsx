import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>subscribe to our newsletter to stay updated</p>
            <div className='mail'>
                <input className='enter' type="email" placeholder='enter your email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
