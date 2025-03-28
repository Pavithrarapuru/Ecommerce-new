import React from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import { useContext } from 'react'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItem = () => {
    const { all_product, getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitem'>
            <div className="main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {/* <hr /> */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="main format">
                                <img src={e.image} alt="" className='product-icon' />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" className='remove' />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>

                        </div>
                    </div>
                    <button>CHECKOUT</button>
                </div>
                <div className="promocode">
                    <p>if you have a promo code,enter it here</p>
                    <div className="promo">
                        <input type="text" placeholder='enter promocode' />
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default CartItem
