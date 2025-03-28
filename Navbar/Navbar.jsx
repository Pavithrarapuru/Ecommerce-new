import React, { useContext, useRef, useState } from 'react'; // Importing useState from 'react'
import './Navbar.css';

import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import nivi from '../Assets/nobgnv.png'

import { ShopContext } from '../../context/ShopContext';
import menu_logo from '../Assets/menu.png'
// Unused import can be removed
// import nivi from '../Assets/nivi4.jpg';

// Renaming component to start with uppercase letter
const Navbar = () => {
    const [menu, setMenu] = useState("shop"); // Correct usage of useState
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={nivi} alt="logo" />
                <p>Shopper</p>
            </div>

            <ul ref={menuRef} className="nav-menu">
                <Link style={{ textDecoration: 'none' }} to='/'><li onClick={() => { setMenu("shop") }}>   shop {menu === "shop" ? <hr /> : <></>}</li> </Link>{/* Fixing setMenu function call */}
                <Link style={{ textDecoration: 'none' }} to='/mens'><li onClick={() => { setMenu("mens") }}>men{menu === "mens" ? <hr /> : <></>}</li></Link> {/* Fixing setMenu function call */}
                <Link style={{ textDecoration: 'none' }} to='/womens'><li onClick={() => { setMenu("womens") }}>women{menu === "womens" ? <hr /> : <></>}</li></Link> {/* Fixing setMenu function call */}
                <Link style={{ textDecoration: 'none' }} to='/kids'><li onClick={() => { setMenu("kids") }}>kids{menu === "kids" ? <hr /> : <></>}</li> </Link>{/* Fixing setMenu function call */}
            </ul>

            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> : <Link to='/login'><button>login</button></Link>}
                <img src={menu_logo} className='nav-dropdown' onClick={dropdown_toggle} alt="" />
                <Link to='/cart'><img src={cart} alt="cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
