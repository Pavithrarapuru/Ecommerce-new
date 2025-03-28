import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'


const NewCollections = () => {
    const [new_collections, setnew_collection] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/newcollections')
            .then((response) => response.json())
            .then((data) => setnew_collection(data));
    }, [])

    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
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

export default NewCollections
