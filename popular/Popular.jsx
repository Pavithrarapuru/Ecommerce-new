import React, { useEffect } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'
import { useState } from 'react'


const Popular = () => {
    const [popularProducts, setPopularProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/popularinwomen')
            .then((response) => response.json())
            .then((data) => setPopularProduct(data));
    }, [])


    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item  mar">
                {popularProducts.map((item, i) => {
                    let image = <img src={item.image} alt="" />
                    // Include the image variable here
                    return (
                        <div className='return'>
                            {image}
                            <Item key={i} id={item.id} name={item.name} new_price={<p><b> Price :₹{item.new_price}</b></p>} old_price={<p>Old price :₹{item.old_price} </p>} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular
