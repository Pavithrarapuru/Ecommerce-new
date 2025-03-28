import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

// import Item from '../Item/Item';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='productdisplay'>
            <div className="left">
                <div className="img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="img">
                    <img className='main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="prices">
                    <div className="z">
                        <div className="price-old">
                            ${product.old_price}
                        </div>
                        <div className="price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="right-description">
                        A rightfit,light weight ,pullover shirt ,a round neck line and short sleeves,under shirt or outer close fitting,qualified fabric
                    </div>
                    <div className="size">
                        <h1>Select Size</h1>
                        <div className="sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className='right-category'><span>Category:</span>Women,T-Shirt,CropTop</p>
                    <p className='right-category'><span>Tags:</span>Modern,Latest</p>

                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
